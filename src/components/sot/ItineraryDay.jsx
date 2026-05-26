import React, { useState, useRef, useEffect } from 'react';
import ImageModal from './ImageModal';

/**
 * ItineraryDay — Single day block in the trip detail page.
 * Animates into view with IntersectionObserver on scroll.
 *
 * Props:
 *  day         {Object}    — { day, title, mainImage, description, gallery }
 *  tripTitle   {string}    — For the modal header
 *  isLast      {boolean}   — Hides divider on last day
 *  dayRef      {Function}  — Callback ref forwarded from parent (for CarJourneyMeter)
 */
const ItineraryDay = ({ day, tripTitle, isLast, dayRef }) => {
  const [modalSrc, setModalSrc] = useState(null);
  const blockRef = useRef(null);

  // Intersection Observer for fade-up animation
  useEffect(() => {
    const el = blockRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('day-block--visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Merged ref: handles both internal animation ref and parent dayRef callback
  const setRefs = (el) => {
    blockRef.current = el;
    if (typeof dayRef === 'function') dayRef(el);
  };

  return (
    <>
      <article
        ref={setRefs}
        className="day-block"
        id={`day-${day.day}`}
        aria-label={`Day ${day.day}: ${day.title}`}
      >
        {/* Day Header */}
        <div className="day-header">
          <div className="day-badge">Day {day.day}</div>
          <h3 className="day-title">{day.title}</h3>
        </div>

        {/* Main Image */}
        <div className="day-main-img-wrap">
          <img
            src={day.mainImage}
            alt={`Day ${day.day} — ${day.title}`}
            className="day-main-img"
            loading="lazy"
            onClick={() => setModalSrc(day.mainImage)}
          />
          <div className="day-main-img-overlay" aria-hidden="true">
            <span className="day-img-click-hint">🔍 Click to enlarge</span>
          </div>
        </div>

        {/* Description */}
        <p className="day-description">{day.description}</p>

        {/* Small Gallery */}
        <div className="day-gallery">
          {day.gallery.map((imgSrc, idx) => (
            <div
              key={idx}
              className="day-gallery-item"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <img
                src={imgSrc}
                alt={`Day ${day.day} photo ${idx + 1}`}
                loading="lazy"
                onClick={() => setModalSrc(imgSrc)}
              />
              <div className="day-gallery-hover" aria-hidden="true">
                <span>🔍</span>
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Divider between days */}
      {!isLast && (
        <div className="day-divider" aria-hidden="true">
          <div className="day-divider-line" />
          <span className="day-divider-icon">✦</span>
          <div className="day-divider-line" />
        </div>
      )}

      {/* Image Modal */}
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

export default ItineraryDay;
