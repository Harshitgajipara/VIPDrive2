import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/special-organized-trips/trip-package/TripPackageCard.css';

/**
 * TripPackageCard
 *
 * Full-bleed destination image card used on the SOT landing page (destination grid).
 * Renders a large photograph with a bottom-pinned overlay showing the destination
 * name, short description, and a gold "EXPLORE TRIPS →" CTA.
 *
 * Props:
 *  - dest      {object}  Destination object from sotDestinations.js
 *                          { id, label, description, image }
 *  - index     {number}  Position in the grid — controls stagger delay
 *  - basePath  {string}  URL prefix before `/:id`. Defaults to
 *                        '/packages/special-organized-trips/statecategory'
 */
const TripPackageCard = ({
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
            card.classList.add('tpc-card--visible');
          }, index * 150);
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
      to={`${basePath}/${dest.id}`}
      className="tpc-card"
      aria-label={`Explore ${dest.label} trips`}
    >
      {/* Background photograph */}
      <img
        src={dest.image}
        alt={dest.label}
        className="tpc-img"
        loading={index < 2 ? 'eager' : 'lazy'}
        draggable={false}
      />

      {/* Dark gradient overlay */}
      <div className="tpc-overlay" aria-hidden="true" />

      {/* Text body */}
      <div className="tpc-body">
        <h2 className="tpc-title">{dest.label}</h2>
        <p className="tpc-desc">{dest.description}</p>
        <span className="tpc-cta">Explore Trips</span>
      </div>
    </Link>
  );
};

export default TripPackageCard;
