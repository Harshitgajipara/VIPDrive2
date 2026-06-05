import React from 'react';
import TripDayCard from './TripDayCard';
import '../../../styles/special-organized-trips/trip-details/TripDayCardSection.css';

// ─────────────────────────────────────────────────────────────────────────────
// TripDayCardSection
//
// The vertical sidebar column that holds 3 small gallery thumbnail cards.
// Sits in the 3-column sidebar area of TripDaySection's 12-column grid.
//
// Visual behaviour (from Harshit_Info/ss.png):
//   • Three cards stacked vertically, each filling equal height
//   • Same total height as the adjacent main hero image
//   • Cards have a subtle gold border glow on hover
//   • Click any card to open the ImageModal lightbox in the parent
//
// Props:
//   images        string[]  — Array of gallery image URLs (show up to 3)
//   dayNumber     number    — For accessible alt text
//   tripTitle     string    — For accessible alt text
//   onImageClick  fn        — Callback(src) when a card is clicked
// ─────────────────────────────────────────────────────────────────────────────
const TripDayCardSection = ({
  images = [],
  dayNumber,
  tripTitle,
  onImageClick,
}) => {
  // Always render exactly 3 slots; fill missing slots with null (renders placeholder)
  const slots = [
    images[0] ?? null,
    images[1] ?? null,
    images[2] ?? null,
  ];

  return (
    <div
      className="tdcs-wrap"
      role="list"
      aria-label={`Day ${dayNumber} gallery photos`}
    >
      {slots.map((src, idx) => (
        <TripDayCard
          key={idx}
          src={src}
          alt={`${tripTitle} — Day ${dayNumber} photo ${idx + 1}`}
          onClick={src ? () => onImageClick?.(src) : undefined}
        />
      ))}
    </div>
  );
};

export default TripDayCardSection;
