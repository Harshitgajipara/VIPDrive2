import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { trips, destinationMeta } from '../../data/sotDestinations';
import '../../styles/special-organized-trips/StateCategoryPage.css';

const StateCategoryPage = () => {
  const { dest } = useParams();
  const meta = destinationMeta[dest];
  const destTrips = trips[dest] || [];
  const cardRefs = useRef([]);

  useEffect(() => {
    document.title = `${meta?.label || 'Destination'} Trips | VIPDrive`;
    // ScrollRestoration in PageLayout handles scroll-to-top on navigation

    // Staggered entrance
    const observers = [];
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => card.classList.add('visible'), i * 120);
            obs.unobserve(card);
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(card);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [dest, meta]);

  if (!meta) {
    return (
      <div className="dest-page">
        <div className="dest-not-found">
          <h2>Destination not found</h2>
          <p>The destination you're looking for doesn't exist.</p>
          <Link to="/packages/sot" style={{ color: '#c9a84c' }}>← Back to SOT</Link>
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
          <Link to="/packages/sot" className="dest-page-back">
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
            <Link
              key={trip.id}
              to={`/packages/sot/${dest}/${trip.id}`}
              className="trip-card"
              ref={(el) => (cardRefs.current[i] = el)}
              aria-label={`View ${trip.title} — ${trip.duration}`}
            >
              <div className="trip-card-thumb">
                <img
                  src={trip.thumbnail}
                  alt={trip.title}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="trip-card-body">
                <p className="trip-card-duration">✦ {trip.duration}</p>
                <h3 className="trip-card-title">{trip.title}</h3>
                <p className="trip-card-teaser">{trip.teaser}</p>
                <span className="trip-card-cta">View Details</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StateCategoryPage;
