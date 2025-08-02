import React, { useState } from 'react';
import { Search, MapPin, Globe } from 'lucide-react';

interface Country {
  name: string;
  code: string;
  flag: string;
}

const countries: Country[] = [
  { name: 'INDIA', code: 'IN', flag: '🇮🇳' },
  { name: 'USA', code: 'US', flag: '🇺🇸' },
  { name: 'GERMANY', code: 'DE', flag: '🇩🇪' },
  { name: 'UK', code: 'GB', flag: '🇬🇧' },
  { name: 'FRANCE', code: 'FR', flag: '🇫🇷' },
];

const InteractiveMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(query.toLowerCase()) ||
        country.code.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCountries(filtered);
      setShowDropdown(true);
    } else {
      setFilteredCountries([]);
      setShowDropdown(false);
    }
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setSearchQuery('');
    setShowDropdown(false);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 animate-fade-in">
          Launch in Minutes
        </h2>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-900">1/5 Geotargeting</span>
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Select Country</label>
                <div className="relative">
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-md bg-white appearance-none cursor-pointer hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                    value={selectedCountry.code}
                    onChange={(e) => {
                      const country = countries.find(c => c.code === e.target.value);
                      if (country) setSelectedCountry(country);
                    }}
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for city, district or zip code"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-300 transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                
                {showDropdown && filteredCountries.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg animate-fade-in">
                    {filteredCountries.map((country) => (
                      <button
                        key={country.code}
                        className="w-full px-4 py-2 text-left hover:bg-indigo-50 flex items-center space-x-2 transition-colors duration-200"
                        onClick={() => handleCountrySelect(country)}
                      >
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="text-sm text-gray-500">
                powered by OpenStreetMap
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-white text-xs">1</span>
                  </div>
                  <span className="text-sm text-gray-700">Targeted country-wide</span>
                </div>
                
                <p className="text-sm text-gray-600">
                  Currently you are targeting all available screens in this country. 
                  Add locations to specify your targets.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative rounded-lg overflow-hidden h-96 border border-gray-200 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
                {/* Mock map interface */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-spin" style={{animationDuration: '10s'}} />
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Interactive Map</h3>
                    <p className="text-blue-600">Showing screens in {selectedCountry.name}</p>
                  </div>
                </div>
                
                {/* Mock map markers */}
                <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold animate-bounce">
                  5
                </div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold animate-bounce" style={{animationDelay: '0.5s'}}>
                  6
                </div>
                <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold animate-bounce" style={{animationDelay: '1s'}}>
                  8
                </div>

                <div className="absolute top-4 right-4 space-y-2">
                  <div className="bg-white rounded shadow-lg p-2 hover:shadow-xl transition-shadow duration-300">
                    <MapPin className="h-5 w-5 text-gray-600" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 text-xs text-gray-600 bg-white px-2 py-1 rounded">
                  OpenStreetMap contributors
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;