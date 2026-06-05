import React from 'react';
import '../../../styles/special-organized-trips/trip-details/TripMainDay.css';

// ─────────────────────────────────────────────────────────────────────────────
// TripMainDay
//
// Renders ONLY the cinematic hero image for one itinerary day.
// Description is rendered separately by TripDaySection in its own grid row
// so that card heights in the sidebar are consistent across all sections.
//
//   ┌─────────────────────────────────────────────────┐
//   │  [cinematic hero photo — 16:9]                  │
//   │                                                 │
//   │  ┌─────────┐                                    │
//   │  │ DAY 01  │  ← gold pill badge                 │
//   │  └─────────┘                                    │
//   │  Departure — Delhi to Kasol  ← Playfair title   │
//   └─────────────────────────────────────────────────┘
//
// Visual behaviour:
//   • hover → image scale(1.04) + subtle gold box-shadow
//   • hover → "Click Me" hint pill appears at centre
//   • click / Enter / Space → calls onImageClick(src) for the lightbox
//
// Props:
//   day           object  — { day, title, mainImage }
//   onImageClick  fn      — Called with the image src to open the lightbox
// ─────────────────────────────────────────────────────────────────────────────
const TripMainDay = ({ day, onImageClick }) => {
  const dayLabel = String(day.day).padStart(2, '0');

  const handleOpen = () => {
    if (typeof onImageClick === 'function') onImageClick(day.mainImage);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpen();
    }
  };

  return (
    /* tmd-hero fills the full height of its grid cell — crucial for sidebar alignment */
    <div
      className="tmd-hero"
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Enlarge day ${day.day} photo — ${day.title}`}
    >
      {/* The photograph */}
      <img
        src={day.mainImage}
        alt={`Day ${day.day} — ${day.title}`}
        className="tmd-img"
        loading="lazy"
        draggable={false}
      />

      {/* Bottom-heavy gradient keeps badge + title legible */}
      <div className="tmd-overlay-bottom" aria-hidden="true" />

      {/* Hover darkening veil */}
      <div className="tmd-overlay-hover" aria-hidden="true" />

      {/* "Click Me" hint pill — appears on hover */}
      <div className="tmd-hint" aria-hidden="true">
        <span className="tmd-hint-label">Click Me</span>
      </div>

      {/* Badge + title overlaid at the bottom of the image */}
      <div className="tmd-content">
        <span className="tmd-badge">DAY {dayLabel}</span>
        <h3 className="tmd-title">{day.title}</h3>
      </div>
    </div>
  );
};

export default TripMainDay;
