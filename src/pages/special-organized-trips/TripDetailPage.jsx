import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { tripDetails } from '../../data/sotDestinations';
import CarJourneyMeter from '../../components/special-organized-trips/CarJourneyMeter';
import ItineraryDay from '../../components/special-organized-trips/ItineraryDay';
import ImageModal from '../../components/special-organized-trips/ImageModal';
import '../../styles/special-organized-trips/TripDetailPage.css';

// ─────────────────────────────────────────────────────────────
// TripDetailPage
// Supports: kasol-manali (packages.basic / packages.discovery)
//           and any trip with legacy .itinerary array
// ─────────────────────────────────────────────────────────────
const TripDetailPage = () => {
  const { dest, tripId } = useParams();
  const trip = tripDetails[tripId];

  // Does this trip have the new packages structure?
  const hasPackages = !!(trip?.packages);

  // Active package key ('basic' | 'discovery') — default 'basic'
  const [activePkg, setActivePkg] = useState('basic');

  // Derived days array (whichever tab is active)
  const currentDays = hasPackages
    ? (trip.packages[activePkg]?.days || [])
    : (trip?.itinerary || []);

  const currentDuration = hasPackages
    ? (trip.packages[activePkg]?.duration || '')
    : (trip?.duration || '');

  // resetKey: increments on tab switch to reset CarJourneyMeter
  const [resetKey, setResetKey] = useState(0);

  const heroImgRef   = useRef(null);
  const itineraryRef = useRef(null);
  const itineraryTopRef = useRef(null); // anchor for scroll-to-top on tab switch
  const tabsRef      = useRef(null);
  const dayRefs      = useRef([]);
  const [introModal, setIntroModal] = useState(null);
  const rafRef       = useRef(null);

  useEffect(() => {
    document.title = `${trip?.title || 'Trip Detail'} | VIPDrive`;
    // ScrollRestoration in PageLayout handles scroll-to-top on navigation
  }, [trip]);

  // ── Hero parallax ─────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const img = heroImgRef.current;
        if (!img) return;
        img.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Reset dayRefs array size when days change ─────────────
  useEffect(() => {
    dayRefs.current = dayRefs.current.slice(0, currentDays.length);
  }, [currentDays.length]);

  // ── Tab switch handler ────────────────────────────────────
  const handleTabSwitch = useCallback((pkgKey) => {
    if (pkgKey === activePkg) return;
    setActivePkg(pkgKey);
    setResetKey(k => k + 1);

    // Smooth scroll to itinerary section after state settles
    setTimeout(() => {
      itineraryTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }, [activePkg]);

  // ── Keyboard nav for tabs ─────────────────────────────────
  const handleTabKeyDown = useCallback((e, pkgKey, pkgKeys) => {
    const idx = pkgKeys.indexOf(pkgKey);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = pkgKeys[(idx + 1) % pkgKeys.length];
      handleTabSwitch(next);
      tabsRef.current?.querySelector(`[data-pkg="${next}"]`)?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = pkgKeys[(idx - 1 + pkgKeys.length) % pkgKeys.length];
      handleTabSwitch(prev);
      tabsRef.current?.querySelector(`[data-pkg="${prev}"]`)?.focus();
    }
  }, [handleTabSwitch]);

  if (!trip) {
    return (
      <div style={{ minHeight: '100vh', background: '#05070b', paddingTop: '50px' }}>
        <div className="trip-not-found">
          <h2>Trip not found</h2>
          <p>We couldn't find details for this trip.</p>
          <Link to={`/packages/sot/${dest}`} style={{ color: '#c9a84c' }}>
            ← Back to trips
          </Link>
        </div>
      </div>
    );
  }

  const pkgKeys = hasPackages ? Object.keys(trip.packages) : [];

  return (
    <div className="trip-detail">

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="trip-hero" aria-label="Trip hero">
        <img
          ref={heroImgRef}
          src={trip.heroImage}
          alt={trip.title}
          className="trip-hero-img"
          loading="eager"
        />
        <div className="trip-hero-overlay" aria-hidden="true" />
        <div className="trip-hero-content">
          <Link to={`/packages/sot/${dest}`} className="trip-hero-back">
            ← Back to trips
          </Link>
          <span className="trip-hero-tag">Special Organized Trip</span>
          <h1>{trip.title}</h1>
          <p className="trip-hero-tagline">
            Mountains, rivers, cafes, forests, and unforgettable Himalayan memories.
          </p>
          <p className="trip-hero-duration">
            <span>📅</span> {currentDuration}
          </p>
        </div>
        <div className="trip-hero-scroll" aria-hidden="true">Scroll</div>
      </section>

      {/* ══════════════════════════════════════
          INTRO SECTION
      ══════════════════════════════════════ */}
      <section className="trip-intro" aria-label="Trip introduction">
        <div className="trip-intro-text">
          {trip.intro.text.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="trip-intro-gallery" role="list" aria-label="Intro gallery">
          {trip.intro.images.map((src, i) => (
            <div
              key={i}
              className="trip-intro-img-wrap"
              role="listitem"
              onClick={() => setIntroModal(src)}
              aria-label={`View gallery image ${i + 1}`}
            >
              <img src={src} alt={`${trip.title} highlight ${i + 1}`} loading="lazy" />
              <div className="trip-intro-img-hover" aria-hidden="true">🔍</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PACKAGE TABS (only if trip has packages)
      ══════════════════════════════════════ */}
      {hasPackages && (
        <div className="pkg-tabs-wrapper" ref={itineraryTopRef}>
          <div
            className="pkg-tabs"
            role="tablist"
            aria-label="Trip packages"
            ref={tabsRef}
          >
            {pkgKeys.map((key) => {
              const pkg = trip.packages[key];
              return (
                <button
                  key={key}
                  data-pkg={key}
                  role="tab"
                  aria-selected={activePkg === key}
                  className={`pkg-tab ${activePkg === key ? 'active' : ''}`}
                  onClick={() => handleTabSwitch(key)}
                  onKeyDown={(e) => handleTabKeyDown(e, key, pkgKeys)}
                  id={`tab-${key}`}
                  aria-controls={`itinerary-panel-${key}`}
                >
                  <span className="pkg-tab-label">{pkg.label}</span>
                  <span className="pkg-tab-duration">{pkg.duration}</span>
                </button>
              );
            })}
          </div>
          <p className="pkg-tabs-hint">
            Choose your package to see the full itinerary
          </p>
        </div>
      )}

      {/* ══════════════════════════════════════
          CAR JOURNEY METER (Sticky)
      ══════════════════════════════════════ */}
      <CarJourneyMeter
        totalDays={currentDays.length}
        itineraryRef={itineraryRef}
        dayRefs={dayRefs}
        resetKey={resetKey}
      />

      {/* ══════════════════════════════════════
          DAY-WISE ITINERARY
      ══════════════════════════════════════ */}
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
            : 'Day-Wise Itinerary'
          }
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

      {/* Intro image modal */}
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
