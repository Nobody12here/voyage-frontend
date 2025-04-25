import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#0F2B5B] to-[#0F80DE]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to plan your next adventure?
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Let our AI create the perfect itinerary for you. No more hours of research and planning.
          Just tell us what you like, and we'll handle the rest.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/"
            className="inline-flex items-center justify-center bg-white text-[#0F2B5B] font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-[1.02] duration-300"
          >
            Start Planning
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="/how-it-works"
            className="inline-flex items-center justify-center bg-transparent text-white border border-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;