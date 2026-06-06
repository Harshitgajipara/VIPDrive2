import React, { useEffect } from 'react';
import { destinations } from '../../data/sotDestinations';
import TripPackageHero from '../../components/special-organized-trips/trip-package/TripPackageHero';
import TripPackageCard from '../../components/special-organized-trips/trip-package/TripPackageCard';
import '../../styles/special-organized-trips/TripPackagePage.css';

const TripPackagePage = () => {
  useEffect(() => {
    document.title = 'Special Offers on Trips | VIPDrive';
  }, []);

  return (
    <div className="sot-landing">
      {/* ── Hero ── */}
      <TripPackageHero />

      {/* ── Destination Grid ── */}
      <section className="sot-grid-section" aria-label="Destinations">
        <p className="sot-grid-heading">Choose Your Destination</p>
        <div className="sot-grid">
          {destinations.map((dest, i) => (
            <TripPackageCard key={dest.id} dest={dest} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TripPackagePage;
