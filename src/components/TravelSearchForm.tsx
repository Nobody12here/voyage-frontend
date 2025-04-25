import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import InterestSelector from './InterestSelector';

const TravelSearchForm: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tripLength, setTripLength] = useState('');
  const [showTripLengthDropdown, setShowTripLengthDropdown] = useState(false);
  
  const tripLengthOptions = [
    'Weekend (1-3 days)',
    'Short trip (4-7 days)',
    'Extended trip (1-2 weeks)',
    'Long journey (2+ weeks)'
  ];

  const handleGenerateItinerary = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with the AI backend in a real application
    console.log({
      destination,
      startDate,
      endDate,
      tripLength
    });
  };

  return (
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 md:p-8">
      <form onSubmit={handleGenerateItinerary}>
        <div className="space-y-6">
          {/* Destination */}
          <div>
            <label htmlFor="destination" className="block text-lg font-medium text-[#0F2B5B] mb-2">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Enter a destination"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F80DE] focus:border-transparent transition-all"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dates */}
            <div>
              <label htmlFor="dates" className="block text-lg font-medium text-[#0F2B5B] mb-2">
                Dates
              </label>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <div className="flex-1 relative">
                  <input
                    type="date"
                    placeholder="Start date"
                    className="w-full px-4 py-3 focus:ring-2 focus:ring-[#0F80DE] focus:border-transparent transition-all border-r border-gray-300"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
                <div className="flex-1 relative">
                  <input
                    type="date"
                    placeholder="End date"
                    className="w-full px-4 py-3 focus:ring-2 focus:ring-[#0F80DE] focus:border-transparent transition-all"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
              </div>
            </div>

            {/* Trip Length */}
            <div>
              <label htmlFor="tripLength" className="block text-lg font-medium text-[#0F2B5B] mb-2">
                Trip Length
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex justify-between items-center focus:ring-2 focus:ring-[#0F80DE] focus:border-transparent transition-all"
                  onClick={() => setShowTripLengthDropdown(!showTripLengthDropdown)}
                >
                  <span className={tripLength ? 'text-gray-900' : 'text-gray-500'}>
                    {tripLength || 'Select'}
                  </span>
                  <ChevronDown size={18} className="text-gray-400" />
                </button>
                
                {showTripLengthDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <ul>
                      {tripLengthOptions.map((option) => (
                        <li
                          key={option}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                          onClick={() => {
                            setTripLength(option);
                            setShowTripLengthDropdown(false);
                          }}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-lg font-medium text-[#0F2B5B] mb-2">
              Interests
            </label>
            <InterestSelector />
          </div>

          {/* Generate Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-[#0F80DE] hover:bg-[#0d6ab8] text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F80DE]"
          >
            Generate Itinerary
          </button>
        </div>
      </form>
    </div>
  );
};

export default TravelSearchForm;