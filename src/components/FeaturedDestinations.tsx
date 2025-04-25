import React from 'react';

const FeaturedDestinations: React.FC = () => {
  const destinations = [
    {
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Iconic white buildings with blue domes overlooking the Aegean Sea',
    },
    {
      name: 'Kyoto, Japan',
      image: 'https://images.pexels.com/photos/5759275/pexels-photo-5759275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Ancient temples, traditional gardens, and historic geisha districts',
    },
    {
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Tropical paradise with stunning beaches, rice terraces, and vibrant culture',
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#f7f9fc]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-4">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get inspired with these popular destinations. Let our AI create the perfect itinerary for your dream vacation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0F2B5B] mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <button className="text-[#0F80DE] hover:text-[#0d6ab8] font-medium transition-colors">
                  Explore destination →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;