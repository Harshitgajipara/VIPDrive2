import React, { useEffect } from 'react';
import HeroSection from '../../components/landing-page/HeroSection';
import PackageSection from '../../components/landing-page/PackageSection';
import FeaturesSection from '../../components/landing-page/FeaturesSection';
import TestimonialsSection from '../../components/landing-page/TestimonialsSection';
import AboutUsSection from '../../components/landing-page/AboutUsSection';
import ContactUsSection from '../../components/landing-page/ContactUsSection';
import BlogSection from '../../components/landing-page/BlogSection';

function Homepage() {
  useEffect(() => {
    document.title = 'Luxury Car Booking & Chauffeur Service | VIPDrive';
  }, []);

  return (
    <>
      <HeroSection />
      <PackageSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutUsSection />
      <ContactUsSection />
      <BlogSection />
    </>
  );
}

export default Homepage;
