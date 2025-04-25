import React from 'react';
import { Check, Lock, Zap, Share2 } from 'lucide-react';

const PremiumFeatures: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-4">House & Yacht Terrace</h2>
          <p className="text-gray-600">
            Experience luxury accommodations with our exclusive House & Yacht Terrace collection, 
            featuring handpicked premium properties with extraordinary views and amenities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
            <div className="mb-4 p-3 inline-block bg-[#EBF5FF] rounded-full">
              <Lock className="w-8 h-8 text-[#0F80DE]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F2B5B] mb-3">Private Access</h3>
            <p className="text-gray-600 mb-4">
              Exclusive access to premium properties not available on regular booking platforms.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">No booking competition</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Verified luxury properties</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">VIP concierge service</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
            <div className="mb-4 p-3 inline-block bg-[#EBF5FF] rounded-full">
              <Zap className="w-8 h-8 text-[#0F80DE]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F2B5B] mb-3">Personalized Experience</h3>
            <p className="text-gray-600 mb-4">
              Custom amenities and services tailored to your preferences and needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Pre-arrival customization</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Private chef options</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Curated local experiences</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
            <div className="mb-4 p-3 inline-block bg-[#EBF5FF] rounded-full">
              <Share2 className="w-8 h-8 text-[#0F80DE]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F2B5B] mb-3">Seamless Transfers</h3>
            <p className="text-gray-600 mb-4">
              Effortless transitions between luxury accommodations and yacht charters.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Private transportation</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Yacht-to-villa transitions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Luggage handling service</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/pricing" className="inline-block bg-[#0F2B5B] text-white font-medium py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors transform hover:scale-[1.02] duration-300">
            Explore Premium Options
          </a>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;