import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { trips, destinationMeta } from '../../data/sotDestinations';
import StateCategoryCard from '../../components/special-organized-trips/state-category/StateCategoryCard';
import '../../styles/special-organized-trips/StateCategoryPage.css';

const StateCategoryPage = () => {
  const { dest } = useParams();
  const meta = destinationMeta[dest];
  const destTrips = trips[dest] || [];

  useEffect(() => {
    document.title = `${meta?.label || 'Destination'} Trips | VIPDrive`;
  }, [dest, meta]);

  /* ── 404 fallback ── */
  if (!meta) {
    return (
      <div className="dest-page">
        <div className="dest-not-found">
          <h2>Destination not found</h2>
          <p>The destination you're looking for doesn't exist.</p>
          <Link to="/packages/special-organized-trips" style={{ color: '#c9a84c' }}>
            ← Back to SOT
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dest-page">
      {/* ── Hero ── */}
      <section className="dest-page-hero" aria-label="Destination hero">
        <img
          src={meta.heroImage}
          alt={meta.label}
          className="dest-page-hero-img"
          loading="eager"
        />
        <div className="dest-page-hero-overlay" aria-hidden="true" />
        <div className="dest-page-hero-content">
          <Link to="/packages/special-organized-trips" className="dest-page-back">
            ← Back to Destinations
          </Link>
          <h1>{meta.label}</h1>
          <p>{meta.subtitle}</p>
        </div>
      </section>

      {/* ── Trip Cards ── */}
      <section className="dest-trips-section" aria-label="Available trips">
        <div className="dest-trips-grid">
          {destTrips.map((trip, i) => (
            <StateCategoryCard
              key={trip.id}
              trip={trip}
              dest={dest}
              index={i}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default StateCategoryPage;
