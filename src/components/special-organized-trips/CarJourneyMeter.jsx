import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../../styles/special-organized-trips/CarJourneyMeter.css';

/**
 * CarJourneyMeter — Scroll-driven car progress animation.
 *
 * Features:
 *  - Accurate height-based scroll progress (proportional to actual day block height)
 *  - Direction-aware car orientation
 *  - Responsive vertical fallback via CSS Variables
 *  - Clean tab-switch regeneration
 */
const CarJourneyMeter = ({ totalDays, itineraryRef, dayRefs, resetKey }) => {
  const [progress, setProgress] = useState(0);      // 0..1
  const [direction, setDirection] = useState('fwd'); // 'fwd' | 'rev'
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [markerPcts, setMarkerPcts] = useState([]);

  const animFrameRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);

  // ── Calculate Day Marker Positions ────────────────────────
  // To perfectly align the car with the markers, we map the markers
  // to the relative offsetTop of each day block.
  const measureMarkers = useCallback(() => {
    const days = dayRefs?.current?.filter(Boolean) || [];
    if (days.length === 0) {
      setMarkerPcts([]);
      return;
    }
    if (days.length === 1) {
      setMarkerPcts([0.5]);
      return;
    }

    // Use absolute document coordinates
    const firstTop = days[0].getBoundingClientRect().top + window.scrollY;
    const lastTop = days[days.length - 1].getBoundingClientRect().top + window.scrollY;
    const range = lastTop - firstTop || 1;

    const pcts = days.map(day => {
      const top = day.getBoundingClientRect().top + window.scrollY;
      return Math.max(0, Math.min(1, (top - firstTop) / range));
    });

    setMarkerPcts(pcts);
  }, [dayRefs]);

  // Recalculate on load, resize, or tab switch
  useEffect(() => {
    measureMarkers();
    window.addEventListener('resize', measureMarkers, { passive: true });

    // Fallback: wait a bit for images to load and remeasure
    const timer = setTimeout(measureMarkers, 500);
    return () => {
      window.removeEventListener('resize', measureMarkers);
      clearTimeout(timer);
    };
  }, [measureMarkers, resetKey]);

  // ── Scroll Tracking ──────────────────────────────────────
  const handleScroll = useCallback(() => {
    if (animFrameRef.current) return;
    animFrameRef.current = requestAnimationFrame(() => {
      animFrameRef.current = null;

      const currentScrollY = window.scrollY;
      const newDir = currentScrollY >= lastScrollY.current ? 'fwd' : 'rev';
      setDirection(newDir);
      lastScrollY.current = currentScrollY;

      const days = dayRefs?.current?.filter(Boolean) || [];
      if (days.length < 2) return;

      const firstTop = days[0].getBoundingClientRect().top + currentScrollY;
      const lastTop = days[days.length - 1].getBoundingClientRect().top + currentScrollY;
      const range = lastTop - firstTop || 1;

      // The "trigger line" is the middle of the viewport
      // When the trigger line crosses Day 2's top, progress === Day 2's marker percentage.
      const triggerY = currentScrollY + window.innerHeight / 2;

      const rawProgress = (triggerY - firstTop) / range;
      const clampedProgress = Math.min(1, Math.max(0, rawProgress));

      setProgress(clampedProgress);

      // Active day logic
      let bestDay = 0;
      days.forEach((el, i) => {
        const elTop = el.getBoundingClientRect().top + currentScrollY;
        // give a little buffer (100px) so it highlights just before hitting the exact middle
        if (triggerY >= elTop - 100) {
          bestDay = i;
        }
      });
      setActiveDayIndex(bestDay);
    });
  }, [dayRefs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [handleScroll]);

  return (
    <div className="car-journey-section" aria-label="Journey progress tracker">
      <div className="car-journey-inner">
        <p className="car-journey-label">Your Journey Progress</p>

        <div 
          className="car-journey-track" 
          data-dir={direction}
        >
          {/* Background line */}
          <div className="car-journey-line-bg" />

          {/* Progress fill (width/height controlled via inline style) */}
          <div 
            className="car-journey-line-fill" 
            style={{ 
              width: `${progress * 100}%`,
              height: `${progress * 100}%` // CSS media queries will ignore the inactive dimension
            }} 
          />

          {/* Start flag */}
          <span className="car-journey-endpoint start" aria-hidden="true">🏁</span>

          {/* Day markers */}
          <div className="car-journey-days" aria-hidden="true">
            {markerPcts.map((pct, i) => (
              <div
                key={i}
                className={`car-day-marker ${i <= activeDayIndex ? 'active' : ''}`}
                style={{ 
                  left: `${pct * 100}%`,
                  top: `${pct * 100}%`
                }}
              >
                <div className="car-day-dot" />
                <span className="car-day-label">D{i + 1}</span>
              </div>
            ))}
          </div>

          {/* Spark trail */}
          {progress > 0.01 && progress < 0.99 && direction === 'fwd' && (
            <div 
              className="car-journey-sparks" 
              aria-hidden="true"
              style={{
                left: `calc(${progress * 100}% - ${progress * 32}px - 10px)`,
                top: `calc(${progress * 100}% - ${progress * 32}px - 10px)`
              }}
            >
              <div className="spark" />
              <div className="spark" />
              <div className="spark" />
            </div>
          )}

          {/* Cinematic Racing Car */}
          <div
            className="car-journey-car"
            aria-hidden="true"
            style={{
              left: `calc(16px + ${progress * 100}% - ${progress * 32}px)`,
              top: `calc(16px + ${progress * 100}% - ${progress * 32}px)`
            }}
          >
            <svg
              width="50"
              height="20"
              viewBox="0 0 100 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: 'visible', filter: 'drop-shadow(0 2px 8px rgba(201, 168, 76, 0.4))' }}
            >
              <defs>
                <linearGradient id="carPaint" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e8c97a" />
                  <stop offset="50%" stopColor="#c9a84c" />
                  <stop offset="100%" stopColor="#8a6d2c" />
                </linearGradient>
                <linearGradient id="headlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Headlight beam */}
              <polygon points="96,20 140,28 96,24" fill="url(#headlightGrad)" />

              {/* Rear Wing / Spoiler */}
              <path d="M 5 15 L 0 9 L 14 9 L 18 13 Z" fill="#8a6d2c" />

              {/* Car Body Aerodynamics */}
              <path
                d="M 5 24 L 5 15 C 15 15, 25 5, 45 5 C 65 5, 75 12, 85 16 C 95 18, 98 20, 98 24 L 88 24 A 6 6 0 0 0 76 24 L 32 24 A 6 6 0 0 0 20 24 Z"
                fill="url(#carPaint)"
              />

              {/* Cockpit Window */}
              <path
                d="M 42 6 C 55 6, 65 10, 72 13 L 55 13 C 48 13, 44 10, 42 6 Z"
                fill="#05070b"
              />

              {/* Back window */}
              <path
                d="M 38 6 C 30 6, 20 10, 16 13 L 30 13 C 35 13, 37 10, 38 6 Z"
                fill="#05070b"
              />

              {/* Wheels */}
              <circle cx="26" cy="24" r="4.5" fill="#05070b" stroke="#c9a84c" strokeWidth="1.5" />
              <circle cx="82" cy="24" r="4.5" fill="#05070b" stroke="#c9a84c" strokeWidth="1.5" />

              {/* Rims / Alloys */}
              <circle cx="26" cy="24" r="1.5" fill="#e8c97a" />
              <circle cx="82" cy="24" r="1.5" fill="#e8c97a" />
            </svg>
          </div>

          {/* End flag */}
          <span className="car-journey-endpoint end" aria-hidden="true">🏔️</span>
        </div>

        {/* Badge */}
        <p className="car-journey-badge">
          {progress < 0.01
            ? ''
            : progress >= 0.98
              ? '🎉 Journey Complete!'
              : <><strong>Day {activeDayIndex + 1}</strong> of <strong>{totalDays}</strong></>
          }
        </p>
      </div>
    </div>
  );
};

export default CarJourneyMeter;
