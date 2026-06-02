import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/special-organized-trips/trip-details/TripHeroSection.css';

// ─────────────────────────────────────────────────────────────────────────────
// TripHeroSection
//
// Covers three visual bands at the top of TripDetailPage:
//   1.  Full-screen parallax hero  (background image + title)
//   2.  Narrative intro            (headline + text paragraphs + 2-image grid)
//   3.  Package selector tabs      (only when trip has packages)
//
// All data is injected as props — ready for Spring Boot API responses.
//
// Props:
//   heroImage       string  — Full-bleed hero background URL
//   title           string  — Trip title, e.g. "Kasol & Manali"
//   tagline         string  — Short cinematic sub-headline (optional)
//   duration        string  — e.g. "10 Days" (only for flat/non-package trips)
//   backLink        string  — URL for the back-arrow link
//   backLabel       string  — Back-link text (default: "← Back to trips")
//   intro           object  — { headline?: string, text: string, images: string[] }
//   packages        object  — { [key]: { label: string, duration: string } } | null
//   activePkg       string  — Currently active package key
//   onPkgChange     fn      — Callback(pkgKey) when user switches package
//   onImageClick    fn      — Callback(src) when intro gallery image is clicked
//   itineraryTopRef ref     — Forwarded ref on package-tabs wrapper (for scroll)
//   tabsRef         ref     — Forwarded ref on tablist (for keyboard nav)
//   onTabKeyDown    fn      — Callback(e, pkgKey, pkgKeys) for keyboard nav
// ─────────────────────────────────────────────────────────────────────────────

const TripHeroSection = ({
  // ── Band 1: Hero ──────────────────────────────────────────────────────────
  heroImage,
  title,
  tagline,
  duration,
  backLink,
  backLabel = 'Back to trips',

  // ── Band 2: Intro ─────────────────────────────────────────────────────────
  intro,        // { headline?: string, text: string, images: string[] }

  // ── Band 3: Package selector ──────────────────────────────────────────────
  packages,     // { [key]: { label: string, duration: string } } | null
  activePkg,
  onPkgChange,
  onImageClick,
  itineraryTopRef,
  tabsRef,
  onTabKeyDown,
}) => {
  const bgImgRef = useRef(null);
  const rafRef = useRef(null);

  // Derived helpers
  const pkgKeys = packages ? Object.keys(packages) : [];
  const hasPackages = pkgKeys.length > 0;
  const introParas = intro?.text
    ? intro.text.split('\n\n').filter(Boolean)
    : [];

  // ── Parallax: moves bg image at 28% scroll speed ────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const img = bgImgRef.current;
        if (!img) return;
        img.style.transform = `translateY(${window.scrollY * 0.28}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── IntersectionObserver: reveal intro + tabs as they scroll in ──────────
  useEffect(() => {
    const targets = document.querySelectorAll('.ths-reveal-scroll');
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ths-reveal-scroll--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════════════════
          BAND 1 — CINEMATIC HERO
          ths-hero-outer is position:relative and NOT overflow:clip,
          so .ths-back-link (absolute) is never clipped by the
          overflow:clip on the inner .ths-hero parallax container.
      ════════════════════════════════════════════════════ */}
      <div className="ths-hero-outer">

        {/* ── Inner hero: parallax image + centered text ── */}
        <section className="ths-hero" aria-label="Trip hero">

          {/* Background parallax image */}
          <div className="ths-bg-wrap" aria-hidden="true">
            <img
              ref={bgImgRef}
              src={heroImage}
              alt={title}
              className="ths-bg-img"
              loading="eager"
              fetchPriority="high"
            />
            {/* Bottom-heavy gradient for text legibility */}
            <div className="ths-overlay-bottom" />
            {/* Top vignette for navbar contrast */}
            <div className="ths-overlay-top" />
          </div>

          {/* Centered hero text — label → title → tagline → duration */}
          <div className="ths-content" role="banner">

            <span
              className="ths-label ths-anim ths-anim--d0"
              aria-label="Trip category"
            >
              SPECIAL ORGANIZED TRIP
            </span>

            <h1 className="ths-title ths-anim ths-anim--d1">
              {title}
            </h1>

            {tagline && (
              <p className="ths-tagline ths-anim ths-anim--d2">
                {tagline}
              </p>
            )}

            {/* Back link — centered below tagline */}
            {backLink && (
              <Link
                to={backLink}
                className="ths-back-link ths-anim ths-anim--d3"
                aria-label="Back to trip listings"
              >
                <span className="ths-back-arrow" aria-hidden="true">←</span>
                <span>{backLabel}</span>
              </Link>
            )}

            {/* Duration badge — only for non-package trips */}
            {duration && (
              <div
                className="ths-duration ths-anim ths-anim--d4"
                aria-label={`Duration: ${duration}`}
              >
                <span className="ths-duration-icon" aria-hidden="true">📅</span>
                <span>{duration}</span>
              </div>
            )}
          </div>

          {/* Scroll indicator — bottom-center pulsing gold line */}
          <div className="ths-scroll-indicator" aria-hidden="true">
            <span className="ths-scroll-label">Scroll</span>
            <div className="ths-scroll-line" />
          </div>

        </section>
      </div> {/* /.ths-hero-outer */}

      {/* ════════════════════════════════════════════════════
          BAND 2 — NARRATIVE INTRO
          Left: headline + DM Sans body paragraphs
          Right: 2-image staggered portrait grid
      ════════════════════════════════════════════════════ */}
      {intro && (
        <section className="ths-intro" aria-label="Trip introduction">
          <div className="ths-intro-inner">

            {/* Left column — text */}
            <div className="ths-intro-text ths-reveal-scroll">

              {/* Headline — read from data (e.g. intro.headline) */}
              {intro.headline && (
                <h2 className="ths-intro-headline">{intro.headline}</h2>
              )}

              {/* Body paragraphs split on double-newline */}
              <div className="ths-intro-body">
                {introParas.map((para, i) => (
                  <p
                    key={i}
                    className={i === 0 ? 'ths-intro-para--lead' : 'ths-intro-para'}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Right column — 2-image staggered portrait grid */}
            {intro.images?.length > 0 && (
              <div
                className="ths-intro-gallery ths-reveal-scroll"
                role="list"
                aria-label="Intro gallery"
                style={{ transitionDelay: '0.18s' }}
              >
                {intro.images.slice(0, 2).map((src, i) => (
                  <div
                    key={i}
                    className={`ths-intro-img-wrap ths-intro-img-wrap--${i === 0 ? 'top' : 'bottom'}`}
                    role="listitem"
                    onClick={() => onImageClick?.(src)}
                    tabIndex={onImageClick ? 0 : undefined}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') onImageClick?.(src);
                    }}
                    aria-label={`View intro image ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${title} highlight ${i + 1}`}
                      loading="lazy"
                    />
                    {onImageClick && (
                      <div className="ths-intro-img-overlay" aria-hidden="true">
                        <span className="ths-intro-img-icon">🔍</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════
          BAND 3 — PACKAGE SELECTOR TABS
          Centered glass pill — only when trip has packages
      ════════════════════════════════════════════════════ */}
      {hasPackages && (
        <div
          className="ths-pkg-tabs-wrapper ths-reveal-scroll"
          ref={itineraryTopRef}
          aria-label="Package selection"
          style={{ transitionDelay: '0.1s' }}
        >
          {/* Glass pill tablist */}
          <div className="ths-pkg-tabs-pill">
            <div
              className="ths-pkg-tablist"
              role="tablist"
              aria-label="Trip packages"
              ref={tabsRef}
            >
              {pkgKeys.map((key) => {
                const pkg = packages[key];
                const isActive = activePkg === key;
                return (
                  <button
                    key={key}
                    data-pkg={key}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`itinerary-panel-${key}`}
                    id={`tab-${key}`}
                    className={`ths-pkg-tab${isActive ? ' ths-pkg-tab--active' : ''}`}
                    onClick={() => onPkgChange?.(key)}
                    onKeyDown={(e) => onTabKeyDown?.(e, key, pkgKeys)}
                  >
                    <span className="ths-pkg-tab-label">
                      {pkg.label?.toUpperCase()} PACKAGE
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hint caption below tabs */}
          <p className="ths-pkg-tabs-hint">
            CHOOSE YOUR PACKAGE TO SEE THE FULL ITINERARY
          </p>
        </div>
      )}
    </>
  );
};

export default TripHeroSection;
