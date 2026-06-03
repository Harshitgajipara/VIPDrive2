import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { tripDetails } from '../../data/sotDestinations';
import CarJourneyMeter from '../../components/special-organized-trips/CarJourneyMeter';
import TripJourneyMeter from '../../components/special-organized-trips/trip-details/TripJourneyMeter';
import ItineraryDay from '../../components/special-organized-trips/ItineraryDay';
import ImageModal from '../../components/special-organized-trips/ImageModal';
import TripHeroSection from '../../components/special-organized-trips/trip-details/TripHeroSection';
import '../../styles/special-organized-trips/TripDetailPage.css';

// ─────────────────────────────────────────────────────────────
// TripDetailPage
// Supports: kasol-manali (packages.basic / packages.discovery)
//           and any trip with legacy .itinerary array
//
// Data flow: Backend (Spring Boot API) → tripDetails → props
//   TripHeroSection  handles: hero image, intro text + gallery, package tabs
//   CarJourneyMeter  handles: sticky day progress tracker
//   ItineraryDay     handles: each day card
// ─────────────────────────────────────────────────────────────
const TripDetailPage = () => {
  const { dest, tripId } = useParams();
  const trip = tripDetails[tripId];

  // Does this trip have the new packages structure?
  const hasPackages = !!(trip?.packages);

  // Active package key ('basic' | 'discovery') — default first key
  const [activePkg, setActivePkg] = useState(() => {
    if (trip?.packages) return Object.keys(trip.packages)[0];
    return 'basic';
  });

  // Derived days array (whichever tab is active)
  const currentDays = hasPackages
    ? (trip.packages[activePkg]?.days || [])
    : (trip?.itinerary || []);

  const currentDuration = hasPackages
    ? (trip.packages[activePkg]?.duration || '')
    : (trip?.duration || '');

  // resetKey: increments on tab switch to reset CarJourneyMeter
  const [resetKey, setResetKey] = useState(0);

  // Modal state for intro gallery image lightbox
  const [introModal, setIntroModal] = useState(null);

  // Refs forwarded into TripHeroSection for package tab behaviour
  const itineraryTopRef = useRef(null); // scroll anchor on tab switch
  const tabsRef         = useRef(null); // tablist element for keyboard nav
  const itineraryRef    = useRef(null); // itinerary section for CarJourneyMeter
  const dayRefs         = useRef([]);

  // ── Document title ────────────────────────────────────────
  useEffect(() => {
    document.title = `${trip?.title || 'Trip Detail'} | VIPDrive`;
  }, [trip]);

  // ── Reset dayRefs array size when days change ─────────────
  useEffect(() => {
    dayRefs.current = dayRefs.current.slice(0, currentDays.length);
  }, [currentDays.length]);

  // ── Tab switch handler (passed to TripHeroSection) ────────
  const handlePkgChange = useCallback((pkgKey) => {
    if (pkgKey === activePkg) return;
    setActivePkg(pkgKey);
    setResetKey((k) => k + 1);

    // Smooth scroll to itinerary section after state settles
    setTimeout(() => {
      itineraryTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }, [activePkg]);

  // ── Keyboard nav for tabs (passed to TripHeroSection) ─────
  const handleTabKeyDown = useCallback((e, pkgKey, pkgKeys) => {
    const idx = pkgKeys.indexOf(pkgKey);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = pkgKeys[(idx + 1) % pkgKeys.length];
      handlePkgChange(next);
      tabsRef.current?.querySelector(`[data-pkg="${next}"]`)?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = pkgKeys[(idx - 1 + pkgKeys.length) % pkgKeys.length];
      handlePkgChange(prev);
      tabsRef.current?.querySelector(`[data-pkg="${prev}"]`)?.focus();
    }
  }, [handlePkgChange]);

  // ── Not found state ───────────────────────────────────────
  if (!trip) {
    return (
      <div style={{ minHeight: '100vh', background: '#05070b', paddingTop: '50px' }}>
        <div className="trip-not-found">
          <h2>Trip not found</h2>
          <p>We couldn't find details for this trip.</p>
          <Link
            to={`/packages/special-organized-trips/statecategory/${dest}`}
            style={{ color: '#c9a84c' }}
          >
            ← Back to trips
          </Link>
        </div>
      </div>
    );
  }

  // Build packages map for TripHeroSection (label + duration per key)
  const packagesMeta = hasPackages
    ? Object.fromEntries(
        Object.entries(trip.packages).map(([key, pkg]) => [
          key,
          { label: pkg.label, duration: pkg.duration },
        ])
      )
    : null;

  return (
    <div className="trip-detail">

      {/* ══════════════════════════════════════════════════════
          HERO SECTION — Band 1 (hero) + Band 2 (intro) + Band 3 (pkg tabs)
          All managed by TripHeroSection component
      ══════════════════════════════════════════════════════ */}
      <TripHeroSection
        /* Band 1 — Hero */
        heroImage={trip.heroImage}
        title={trip.title}
        tagline={
          trip.tagline ||
          'Mountains, rivers, cafes, forests, and unforgettable Himalayan memories.'
        }
        duration={!hasPackages ? currentDuration : undefined}
        backLink={`/packages/special-organized-trips/statecategory/${dest}`}

        /* Band 2 — Intro narrative */
        intro={
          trip.intro
            ? {
                headline: trip.intro.headline,   // from data / Spring Boot API
                text:     trip.intro.text,
                images:   trip.intro.images,
              }
            : undefined
        }

        /* Band 3 — Package selector */
        packages={packagesMeta}
        activePkg={activePkg}
        onPkgChange={handlePkgChange}
        onImageClick={(src) => setIntroModal(src)}
        itineraryTopRef={itineraryTopRef}
        tabsRef={tabsRef}
        onTabKeyDown={handleTabKeyDown}
      />

      {/* ══════════════════════════════════════════════════════
          TRIP JOURNEY METER (Sticky speedometer tracker)
          Replaces CarJourneyMeter — matches reference design
      ══════════════════════════════════════════════════════ */}
      <TripJourneyMeter
        totalDays={currentDays.length}
        dayRefs={dayRefs}
        itineraryRef={itineraryRef}
        resetKey={resetKey}
        totalKm={trip.totalKm || 500}
      />

      {/* ══════════════════════════════════════════════════════
          DAY-WISE ITINERARY
      ══════════════════════════════════════════════════════ */}
      <section
        className="trip-itinerary"
        ref={itineraryRef}
        role="tabpanel"
        id={`itinerary-panel-${activePkg}`}
        aria-labelledby={`tab-${activePkg}`}
        aria-label="Day-wise itinerary"
      >
        <p className="trip-itinerary-heading">
          {hasPackages
            ? `${trip.packages[activePkg]?.label} Package — Day-Wise Itinerary`
            : 'Day-Wise Itinerary'}
        </p>

        {currentDays.map((dayData, i) => (
          <ItineraryDay
            key={`${activePkg}-${dayData.day}-${resetKey}`}
            day={dayData}
            tripTitle={trip.title}
            isLast={i === currentDays.length - 1}
            dayRef={(el) => { dayRefs.current[i] = el; }}
          />
        ))}
      </section>

      {/* Intro image modal / lightbox */}
      {introModal && (
        <ImageModal
          src={introModal}
          tripTitle={trip.title}
          onClose={() => setIntroModal(null)}
        />
      )}
    </div>
  );
};

export default TripDetailPage;
