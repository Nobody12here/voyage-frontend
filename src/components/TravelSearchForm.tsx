import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { generateIterary } from "../api"; // Assuming you have a function to generate itinerary
import { itineraryData } from "../types";

const TravelSearchForm: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [interests, setIntrests] = useState("");

  const handleGenerateItinerary = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const itineraryData: itineraryData = {
        destination,
        startDate,
        endDate,
        budget: parseFloat(budget),
        intrests: interests,
      };
      // Call the function to generate the itinerary with the data
      const response = generateIterary(itineraryData);
      console.log("Generated Itinerary:", response);
    } catch (error) {
      console.error("Error generating itinerary:", error);
    }
  };

  return (
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 md:p-8">
      <form onSubmit={handleGenerateItinerary}>
        <div className="space-y-6">
          {/* Destination */}
          <div>
            <label
              htmlFor="destination"
              className="block text-lg font-medium text-[#0F2B5B] mb-2"
            >
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
              <label
                htmlFor="dates"
                className="block text-lg font-medium text-[#0F2B5B] mb-2"
              >
                Dates
              </label>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <div className="flex-1 relative">
                  <input
                    type="date"
                    placeholder="Start date"
                    className="calender-input w-full px-4 py-3 focus:ring-2 focus:ring-[#0F80DE] focus:border-transparent transition-all border-r border-gray-300"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <Calendar
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={18}
                  />
                </div>
                <div className="flex-1 relative">
                  <input
                    type="date"
                    placeholder="End date"
                    className="calender-input w-full px-4 py-3 focus:ring-2 focus:ring-[#0F80DE] focus:border-transparent transition-all"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <Calendar
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={18}
                  />
                </div>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label
                htmlFor="budget"
                className="block text-lg font-medium text-[#0F2B5B] mb-2"
              >
                Budget ($)
              </label>
              <input
                type="number"
                id="budget"
                placeholder="Enter your budget"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F80DE] focus:border-transparent transition-all"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Interests */}
          <div>
            <label
              htmlFor="interests"
              className="block text-lg font-medium text-[#0F2B5B] mb-2"
            >
              Intrests
            </label>
            <input
              type="text"
              id="interests"
              placeholder="add interests (e.g., food, history, adventure)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F80DE] focus:border-transparent transition-all"
              value={interests}
              onChange={(e) => setIntrests(e.target.value)}
              required
            />
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
