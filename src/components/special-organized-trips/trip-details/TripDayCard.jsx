import React from 'react';
import '../../../styles/special-organized-trips/trip-details/TripDayCard.css';

// ─────────────────────────────────────────────────────────────────────────────
// TripDayCard
//
// A single small gallery thumbnail card inside TripDayCardSection.
//
// Visual behaviour (from Harshit_Info/ss.png):
//   • Full-coverage image with object-fit: cover
//   • Subtle bottom gradient overlay for depth
//   • Image scale + gold border glow on hover
//   • "Click Me" hint pill appears at centre on hover
//   • Dark placeholder when src is null/undefined
//
// Props:
//   src      string   — Image URL (or null/undefined for placeholder)
//   alt      string   — Accessible alt text
//   onClick  fn|null  — Click handler; undefined for placeholder cards
// ─────────────────────────────────────────────────────────────────────────────
const TripDayCard = ({ src, alt, onClick }) => {
  const isPlaceholder = !src;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className="tdc-card"
      role="listitem"
      onClick={!isPlaceholder ? onClick : undefined}
      tabIndex={!isPlaceholder && onClick ? 0 : undefined}
      onKeyDown={!isPlaceholder && onClick ? handleKeyDown : undefined}
      aria-label={!isPlaceholder ? `View photo: ${alt}` : 'Gallery photo unavailable'}
      style={isPlaceholder ? { cursor: 'default' } : undefined}
    >
      {!isPlaceholder ? (
        <>
          {/* Photograph */}
          <img
            src={src}
            alt={alt}
            className="tdc-img"
            loading="lazy"
            draggable={false}
          />

          {/* Bottom depth gradient */}
          <div className="tdc-overlay" aria-hidden="true" />

          {/* Hover hint pill — "Click Me" */}
          <div className="tdc-hint" aria-hidden="true">
            <span className="tdc-hint-label">Click Me</span>
          </div>
        </>
      ) : (
        /* Placeholder — shown when a day has fewer than 3 gallery images */
        <div
          className="tdc-placeholder"
          aria-hidden="true"
        >
          📷
        </div>
      )}
    </div>
  );
};

export default TripDayCard;
