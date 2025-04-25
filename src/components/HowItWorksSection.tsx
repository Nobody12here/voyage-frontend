import React from 'react';
import { Search, MapPin, Calendar, ThumbsUp } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-[#0F80DE]" />,
      title: 'Tell us your preferences',
      description: 'Enter your destination, travel dates, and interests to help our AI understand your ideal trip.'
    },
    {
      icon: <Calendar className="w-12 h-12 text-[#0F80DE]" />,
      title: 'Get AI-generated itinerary',
      description: 'Our AI creates a personalized day-by-day plan tailored to your preferences and travel style.'
    },
    {
      icon: <MapPin className="w-12 h-12 text-[#0F80DE]" />,
      title: 'Explore with confidence',
      description: 'Follow your custom itinerary with maps, recommendations, and insider tips.'
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-[#0F80DE]" />,
      title: 'Refine and enjoy',
      description: 'Adjust your plan as needed and enjoy a stress-free trip with perfect balance of activities.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creating your perfect travel itinerary has never been easier. 
            Our AI-powered platform handles the planning so you can focus on enjoying your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-[#EBF5FF] rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0F2B5B] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;