import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/special-organized-trips/state-category/StateCategoryCard.css';

/**
 * StateCategoryCard
 *
 * Dark premium trip card used on the State Category page (trip listing grid).
 * Shows a 16:9 thumbnail on top, then duration badge, title, teaser, and a
 * "View Details" CTA pill below.
 *
 * Props:
 *  - trip      {object}  Trip object from sotDestinations.js
 *                          { id, title, duration, thumbnail, teaser }
 *  - dest      {string}  Active destination slug (e.g. 'himachal-pradesh')
 *  - index     {number}  Position in the grid — controls stagger delay
 *  - basePath  {string}  URL prefix. Defaults to
 *                        '/packages/special-organized-trips/statecategory'
 */
const StateCategoryCard = ({
  trip,
  dest,
  index = 0,
  basePath = '/packages/special-organized-trips/statecategory',
}) => {
  const cardRef = useRef(null);

  /* ── Staggered entrance via IntersectionObserver ── */
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            card.classList.add('scc-trip-card--visible');
          }, index * 120);
          obs.unobserve(card);
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(card);
    return () => obs.disconnect();
  }, [index]);

  return (
    <Link
      ref={cardRef}
      to={`${basePath}/${dest}/${trip.id}`}
      className="scc-trip-card"
      aria-label={`View ${trip.title} — ${trip.duration}`}
    >
      {/* ── Thumbnail ── */}
      <div className="scc-trip-thumb">
        <img
          src={trip.thumbnail}
          alt={trip.title}
          loading={index === 0 ? 'eager' : 'lazy'}
          draggable={false}
        />
      </div>

      {/* ── Body ── */}
      <div className="scc-trip-body">
        <p className="scc-trip-duration">✦ {trip.duration}</p>
        <h3 className="scc-trip-title">{trip.title}</h3>
        <p className="scc-trip-teaser">{trip.teaser}</p>
        <span className="scc-trip-cta">View Details</span>
      </div>
    </Link>
  );
};

export default StateCategoryCard;
