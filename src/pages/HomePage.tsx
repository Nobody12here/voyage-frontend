import React from 'react';
import Hero from '../components/Hero';
import MapSection from '../components/MapSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import Testimonials from '../components/Testimonials';
import PremiumFeatures from '../components/PremiumFeatures';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#fff8f0]">
      <Hero />
      <MapSection />
      <HowItWorksSection />
      <FeaturedDestinations />
      <Testimonials />
      <PremiumFeatures />
      <CTASection />
    </div>
  );
};

export default HomePage;