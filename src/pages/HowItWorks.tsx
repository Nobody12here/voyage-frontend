import React from 'react';
import HowItWorksSection from '../components/HowItWorksSection';
import CTASection from '../components/CTASection';

const HowItWorks: React.FC = () => {
  return (
    <div className="pt-20 bg-[#fff8f0]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0F2B5B] mb-6">How NESIA Works</h1>
          <p className="text-lg text-gray-600">
            Our AI-powered platform simplifies travel planning by creating personalized itineraries based on your preferences.
            Learn how NESIA transforms the way you explore the world.
          </p>
        </div>
      </div>
      
      <HowItWorksSection />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI Travel Planning" 
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-6">Powered by Advanced AI</h2>
            <p className="text-gray-600 mb-4">
              NESIA uses cutting-edge artificial intelligence to understand your travel preferences and create 
              the perfect itinerary. Our AI analyzes thousands of data points including:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-[#0F80DE] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                <div>
                  <span className="font-medium text-[#0F2B5B]">Travel Patterns</span>
                  <p className="text-gray-600">Understanding rhythm and pace preferences for your journey</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#0F80DE] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                <div>
                  <span className="font-medium text-[#0F2B5B]">Interest Matching</span>
                  <p className="text-gray-600">Pairing your interests with relevant attractions and activities</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#0F80DE] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                <div>
                  <span className="font-medium text-[#0F2B5B]">Local Insights</span>
                  <p className="text-gray-600">Incorporating authentic experiences based on local knowledge</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#0F80DE] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
                <div>
                  <span className="font-medium text-[#0F2B5B]">Optimization</span>
                  <p className="text-gray-600">Creating logical routes that maximize your time and enjoyment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default HowItWorks;