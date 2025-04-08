import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AboutUsSection from "../components/AboutUsSection";
import ContactUsSection from "../components/ContactUsSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";



function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutUsSection />
      <ContactUsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default Homepage;
