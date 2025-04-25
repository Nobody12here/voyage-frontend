import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'NESIA transformed our honeymoon planning! The AI created a perfect balance of romantic dinners and adventures in Bali. Every recommendation was spot on.',
      rating: 5,
      location: 'New York, USA'
    },
    {
      name: 'James Chen',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'As a solo traveler, I was worried about finding authentic experiences in Japan. NESIAs itinerary led me to hidden gems I never would have discovered on my own!',
      rating: 5,
      location: 'Toronto, Canada'
    },
    {
      name: 'Maria Rodriguez',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Our family trip to Spain was perfectly planned for our interests - museums for me, food tours for my husband, and kid-friendly activities. The AI even adjusted for our pace!',
      rating: 4,
      location: 'Barcelona, Spain'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: number;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 bg-[#0F2B5B]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Travelers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real experiences from travelers who used NESIA to plan their perfect trips.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:space-x-8">
                <div className="mb-6 md:mb-0 flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0F80DE]">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        fill={i < testimonials[currentIndex].rating ? "#FFD700" : "none"} 
                        color={i < testimonials[currentIndex].rating ? "#FFD700" : "#D1D5DB"} 
                        size={20} 
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4 text-lg">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-[#0F2B5B]">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-[#0F2B5B]" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-[#0F2B5B]" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-400 bg-opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;