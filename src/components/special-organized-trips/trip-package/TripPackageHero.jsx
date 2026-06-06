import React from 'react';
import '../../../styles/special-organized-trips/trip-package/TripPackageHero.css';

/**
 * TripPackageHero
 *
 * Hero section displayed at the top of the SOT (Special Offers on Trips) landing page.
 * Features a dark radial-gradient background with ambient gold glow orbs and
 * staggered fade-up animations on the tag, heading, and sub-heading.
 *
 * Props:
 *  - tag         {string}  Small uppercase badge text. Default: 'Special Offers on Trips'
 *  - heading     {ReactNode} Main h1 content (can contain JSX for the gold <span>).
 *                           Default: 'Your Next Adventure <br/> <span>Starts Here</span>'
 *  - subheading  {string}  Paragraph text below the heading.
 */
const TripPackageHero = ({
  tag = 'Special Offers on Trips',
  heading,
  subheading = 'Discover breathtaking destinations crafted for unforgettable adventures. Choose your dream destination and let VIPDrive handle the rest.',
}) => {
  const defaultHeading = (
    <>
      Your Next Adventure<br />
      <span>Starts Here</span>
    </>
  );

  return (
    <section className="tph-hero" aria-label="SOT hero">
      <div className="tph-content">
        <span className="tph-tag">{tag}</span>
        <h1 className="tph-heading">{heading ?? defaultHeading}</h1>
        <p className="tph-subheading">{subheading}</p>
      </div>
    </section>
  );
};

export default TripPackageHero;
