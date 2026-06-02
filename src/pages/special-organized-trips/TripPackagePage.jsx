import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../../data/sotDestinations';
import '../../styles/special-organized-trips/TripPackagePage.css';

const TripPackagePage = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    document.title = 'Special Offers on Trips | VIPDrive';
    // ScrollRestoration in PageLayout handles scroll-to-top on navigation

    // Staggered card entrance with IntersectionObserver
    const observers = [];
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add('visible');
            }, i * 150);
            obs.unobserve(card);
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(card);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="sot-landing">
      {/* ── Hero ── */}
      <section className="sot-hero" aria-label="SOT hero">
        <div className="sot-hero-content">
          <span className="sot-hero-tag">Special Offers on Trips</span>
          <h1>
            Your Next Adventure<br />
            <span>Starts Here</span>
          </h1>
          <p>
            Discover breathtaking destinations crafted for unforgettable adventures.
            Choose your dream destination and let VIPDrive handle the rest.
          </p>
        </div>
      </section>

      {/* ── Destination Grid ── */}
      <section className="sot-grid-section" aria-label="Destinations">
        <p className="sot-grid-heading">Choose Your Destination</p>
        <div className="sot-grid">
          {destinations.map((dest, i) => (
            <Link
              key={dest.id}
              to={`/packages/special-organized-trips/statecategory/${dest.id}`}
              className="dest-card"
              ref={(el) => (cardRefs.current[i] = el)}
              aria-label={`Explore ${dest.label} trips`}
            >
              <img
                src={dest.image}
                alt={dest.label}
                className="dest-card-img"
                loading={i < 2 ? 'eager' : 'lazy'}
              />
              <div className="dest-card-overlay" aria-hidden="true" />
              <div className="dest-card-body">
                <h2 className="dest-card-title">{dest.label}</h2>
                <p className="dest-card-desc">{dest.description}</p>
                <span className="dest-card-cta">Explore Trips</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TripPackagePage;
