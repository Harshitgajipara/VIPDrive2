import React from 'react';
import PageLayout from '../layouts/PageLayout';
import HeroSection from '../components/HeroSection';
import CardSection from '../components/CardSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutUsSection from '../components/AboutUsSection';
import ContactUsSection from '../components/ContactUsSection';
import BlogSection from '../components/BlogSection';

function Homepage() {
  return (
    <PageLayout title="Luxury Car Booking & Chauffeur Service">
      <HeroSection />
      <CardSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutUsSection />
      <ContactUsSection />
      <BlogSection />
    </PageLayout>
  );
}

export default Homepage;
