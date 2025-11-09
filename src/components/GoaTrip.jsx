import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/GoaTrip.css";

gsap.registerPlugin(ScrollTrigger);

const GoaTrip = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.from(".goa-hero h1", {
      opacity: 0,
      y: 80,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.from(".goa-hero p", {
      opacity: 0,
      y: 40,
      delay: 0.6,
      duration: 1.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="goa-trip-container">
      {/* Hero Section */}
      <section className="goa-hero">
        <div className="hero-content">
          <h1>Luxury Goa Getaway</h1>
          <p>
            Experience the charm of Goa with our exclusive VIP Drive trip plan —
            curated for elegance, comfort, and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section
        className="goa-section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="text-content">
          <h2>Day 1 — Arrival & Sunset Cruise</h2>
          <p>
            Begin your journey with a private airport pickup in a luxury car,
            followed by a sunset yacht cruise on the Mandovi River with
            champagne and live music.
          </p>
        </div>
        <div className="image-content img1"></div>
      </section>

      {/* Section 2 */}
      <section
        className="goa-section reverse"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="image-content img2"></div>
        <div className="text-content">
          <h2>Day 2 — Beachside Bliss</h2>
          <p>
            Spend the day at a private beach resort, indulge in spa therapy, and
            enjoy a candlelight dinner by the waves.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="goa-section"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="text-content">
          <h2>Day 3 — Explore Old Goa</h2>
          <p>
            Discover the rich heritage of Old Goa with a guided tour in a
            chauffeur-driven luxury car. Visit churches, forts, and hidden gems.
          </p>
        </div>
        <div className="image-content img3"></div>
      </section>

      {/* Final Section */}
      <section
        className="goa-final"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <h2>Book Your VIP Goa Experience</h2>
        <p>
          Let’s craft your exclusive journey to paradise — where every moment
          feels luxurious.
        </p>
        <button className="book-btn">Book Now</button>
      </section>
    </div>
  );
};

export default GoaTrip;
