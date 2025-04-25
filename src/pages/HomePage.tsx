import React from 'react';
import Hero from '../components/Hero';
import MapSection from '../components/MapSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#fff8f0]">
      <Hero />
      <MapSection />
      <FeaturedDestinations />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;