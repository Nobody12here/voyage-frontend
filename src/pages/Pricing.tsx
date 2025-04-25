import React, { useState } from 'react';
import { Check } from 'lucide-react';
import CTASection from '../components/CTASection';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Explorer',
      monthlyPrice: 0,
      annualPrice: 0,
      description: 'Perfect for occasional travelers',
      features: [
        'Up to 3 AI-generated itineraries per month',
        'Basic destination information',
        'Standard itinerary customization',
        'Email support'
      ],
      buttonText: 'Start Free',
      isPopular: false,
      buttonStyle: 'border border-[#0F80DE] text-[#0F80DE] hover:bg-[#0F80DE] hover:text-white'
    },
    {
      name: 'Voyager',
      monthlyPrice: 12.99,
      annualPrice: 9.99,
      description: 'Ideal for regular travelers',
      features: [
        'Unlimited AI-generated itineraries',
        'Advanced destination insights',
        'Priority customization options',
        'Offline access to itineraries',
        '24/7 customer support',
        'Ad-free experience'
      ],
      buttonText: 'Get Started',
      isPopular: true,
      buttonStyle: 'bg-[#0F80DE] text-white hover:bg-[#0d6ab8]'
    },
    {
      name: 'Globetrotter',
      monthlyPrice: 24.99,
      annualPrice: 19.99,
      description: 'For serious travel enthusiasts',
      features: [
        'All Voyager features',
        'Premium accommodation recommendations',
        'VIP restaurant reservations',
        'Private guide suggestions',
        'Real-time itinerary adjustments',
        'Exclusive travel deals and perks',
        'Dedicated travel concierge'
      ],
      buttonText: 'Choose Plan',
      isPopular: false,
      buttonStyle: 'border border-[#0F80DE] text-[#0F80DE] hover:bg-[#0F80DE] hover:text-white'
    }
  ];

  return (
    <div className="pt-20 bg-[#fff8f0]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0F2B5B] mb-6">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that fits your travel needs. Cancel anytime with no questions asked.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 font-medium ${isAnnual ? 'text-gray-500' : 'text-[#0F2B5B]'}`}>Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                value="" 
                className="sr-only peer" 
                checked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0F80DE]"></div>
            </label>
            <span className={`ml-3 font-medium ${isAnnual ? 'text-[#0F2B5B]' : 'text-gray-500'}`}>
              Annual <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded ml-2">SAVE 23%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md overflow-hidden ${plan.isPopular ? 'ring-2 ring-[#0F80DE] transform scale-105 md:scale-105 z-10' : ''}`}
            >
              {plan.isPopular && (
                <div className="bg-[#0F80DE] text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F2B5B] mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#0F2B5B]">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/{isAnnual ? 'month' : 'month'}</span>
                  {isAnnual && <p className="text-sm text-gray-500">Billed annually</p>}
                </div>
                
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
              
              <div className="p-6 bg-gray-50">
                <p className="font-medium text-[#0F2B5B] mb-4">Features</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-[#0F2B5B] mb-4">Need a custom solution?</h3>
          <p className="text-gray-600 mb-6">
            We offer tailored packages for travel agencies, corporate travel, and special events.
            Contact our team to discuss your specific requirements.
          </p>
          <button className="bg-[#0F2B5B] text-white font-medium py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default Pricing;