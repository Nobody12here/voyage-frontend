import React, { useState } from 'react';
import { X } from 'lucide-react';

const InterestSelector: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const interestSuggestions = [
    'Adventure', 'Food', 'Culture', 'History', 'Nature',
    'Architecture', 'Nightlife', 'Shopping', 'Relaxation', 'Beach',
    'Photography', 'Art', 'Music', 'Festivals', 'Sports'
  ];
  
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value.length > 0) {
      const filtered = interestSuggestions.filter(
        interest => 
          interest.toLowerCase().includes(value.toLowerCase()) && 
          !selectedInterests.includes(interest)
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const addInterest = (interest: string) => {
    if (!selectedInterests.includes(interest) && interest.trim() !== '') {
      setSelectedInterests([...selectedInterests, interest]);
      setInputValue('');
      setShowSuggestions(false);
    }
  };

  const removeInterest = (interest: string) => {
    setSelectedInterests(selectedInterests.filter(i => i !== interest));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      if (filteredSuggestions.length > 0) {
        addInterest(filteredSuggestions[0]);
      } else {
        addInterest(inputValue);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-2">
        {selectedInterests.map(interest => (
          <div 
            key={interest}
            className="inline-flex items-center px-3 py-1 bg-[#EBF5FF] text-[#0F2B5B] rounded-full"
          >
            <span className="mr-1">{interest}</span>
            <button 
              type="button"
              onClick={() => removeInterest(interest)}
              className="text-[#0F2B5B] hover:text-red-500 transition-colors focus:outline-none"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
      
      <div className="relative">
        <input
          type="text"
          placeholder="Add interests (e.g., food, history, adventure)"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => inputValue && setShowSuggestions(true)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F80DE] focus:border-transparent transition-all"
        />
        
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            <ul>
              {filteredSuggestions.map(suggestion => (
                <li 
                  key={suggestion}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={() => addInterest(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="mt-2">
        <p className="text-sm text-gray-500">Popular:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {interestSuggestions.slice(0, 5).map(suggestion => (
            !selectedInterests.includes(suggestion) && (
              <button
                key={suggestion}
                type="button"
                onClick={() => addInterest(suggestion)}
                className="text-sm text-[#0F80DE] hover:text-[#0d6ab8] bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
              >
                {suggestion}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestSelector;