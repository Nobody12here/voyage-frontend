import React from 'react';
import TravelSearchForm from './TravelSearchForm';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 px-4 flex flex-col items-center">
      <div className="container mx-auto text-center max-w-3xl mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2B5B] mb-6 leading-tight">
          Plan Less, Explore More<br />
          with AI-Powered Travel
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Let our AI create personalized travel itineraries based on your preferences.
          Discover hidden gems and make the most of your journey.
        </p>
      </div>
      
      <TravelSearchForm />
    </section>
  );
};

export default Hero;