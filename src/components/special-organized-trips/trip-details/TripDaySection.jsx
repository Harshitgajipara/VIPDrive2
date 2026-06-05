import React, { useRef, useEffect } from 'react';
import TripMainDay from './TripMainDay';
import TripDayCardSection from './TripDayCardSection';
import ImageModal from '../ImageModal';
import '../../../styles/special-organized-trips/trip-details/TripDaySection.css';

// ─────────────────────────────────────────────────────────────────────────────
// TripDaySection  —  outer shell for one editorial day block
//
// Grid layout (2 explicit rows — fixes uniform card height across sections):
//
//   Row 1 — image row (height driven by 16:9 hero → same for every section):
//   ┌──────────────────────────┬──────────┐
//   │  TripMainDay  (9 cols)   │ Sidebar  │
//   │  hero image only         │ 3 cards  │ ← align-items: stretch → equal height
//   └──────────────────────────┴──────────┘
//   Row 2 — text row (description only, never touches sidebar):
//   ┌──────────────────────────┐
//   │  description paragraph   │
//   └──────────────────────────┘
//
//   Even-numbered days reverse the column order (reverse=true):
//   Row 1: [Sidebar 3 cols | TripMainDay 9 cols]
//   Row 2:                  [description  9 cols]
//
// TripJourneyMeter integration:
//   dayRef callback is merged with blockRef (opacity-only reveal, no translateY)
//   so getBoundingClientRect() always reflects the true layout position.
//
// Props:
//   day         object   — { day, title, mainImage, description, gallery[] }
//   tripTitle   string   — Passed to TripDayCardSection + ImageModal
//   isLast      boolean  — Hides the ✦ divider after the last day
//   dayRef      fn       — Callback ref from TripDetailPage → TripJourneyMeter
//   reverse     boolean  — If true, sidebar before main (even-indexed days)
// ─────────────────────────────────────────────────────────────────────────────
const TripDaySection = ({
  day,
  tripTitle,
  isLast,
  dayRef,
  reverse = false,
}) => {
  const [modalSrc, setModalSrc] = React.useState(null);
  const blockRef = useRef(null);

  // ── Merged ref: local animation + parent TripJourneyMeter ─────────────────
  const setRefs = (el) => {
    blockRef.current = el;
    if (typeof dayRef === 'function') dayRef(el);
  };

  // ── Opacity-only reveal (NO translateY → getBoundingClientRect() safe) ─────
  useEffect(() => {
    const el = blockRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('tds-section--visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.07, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <article
        ref={setRefs}
        className="tds-section"
        id={`day-${day.day}`}
        aria-label={`Day ${day.day}: ${day.title}`}
      >
        {/* ── 2-row editorial grid ─────────────────────────────────────────── */}
        <div className={`tds-grid${reverse ? ' tds-grid--reverse' : ''}`}>

          {/* Row 1, col A: TripMainDay — hero image (fills full row 1 height) */}
          <div className="tds-col-hero">
            <TripMainDay
              day={day}
              onImageClick={(src) => setModalSrc(src)}
            />
          </div>

          {/* Row 1, col B: TripDayCardSection — 3 cards (stretches to image height) */}
          <div className="tds-col-sidebar">
            <TripDayCardSection
              images={day.gallery}
              dayNumber={day.day}
              tripTitle={tripTitle}
              onImageClick={(src) => setModalSrc(src)}
            />
          </div>

          {/* Row 2: description text — isolated in its own row, never affects card height */}
          <div className="tds-col-desc">
            <p className="tds-description">{day.description}</p>
          </div>

        </div>

        {/* ── ✦ divider (hidden after last day) ── */}
        {!isLast && (
          <div className="tds-divider" aria-hidden="true">
            <div className="tds-divider-line" />
            <span className="tds-divider-icon">✦</span>
            <div className="tds-divider-line" />
          </div>
        )}
      </article>

      {/* ── ImageModal lightbox ── */}
      {modalSrc && (
        <ImageModal
          src={modalSrc}
          tripTitle={tripTitle}
          onClose={() => setModalSrc(null)}
        />
      )}
    </>
  );
};

export default TripDaySection;
