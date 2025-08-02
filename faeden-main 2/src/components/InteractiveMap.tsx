import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Search, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Country {
  name: string;
  code: string;
  flag: string;
  center: [number, number];
  zoom: number;
}

interface ScreenLocation {
  id: number;
  position: [number, number];
  count: number;
  venue: string;
}

const countries: Country[] = [
  { name: 'INDIA', code: 'IN', flag: '🇮🇳', center: [20.5937, 78.9629], zoom: 5 },
  { name: 'USA', code: 'US', flag: '🇺🇸', center: [39.8283, -98.5795], zoom: 4 },
  { name: 'GERMANY', code: 'DE', flag: '🇩🇪', center: [51.1657, 10.4515], zoom: 6 },
  { name: 'UK', code: 'GB', flag: '🇬🇧', center: [55.3781, -3.4360], zoom: 6 },
  { name: 'FRANCE', code: 'FR', flag: '🇫🇷', center: [46.2276, 2.2137], zoom: 6 },
];

const screenLocations: ScreenLocation[] = [
  { id: 1, position: [28.6139, 77.2090], count: 5, venue: 'Coworking Spaces' },
  { id: 2, position: [19.0760, 72.8777], count: 8, venue: 'Gyms & Fitness' },
  { id: 3, position: [12.9716, 77.5946], count: 6, venue: 'Retail Stores' },
  { id: 4, position: [22.5726, 88.3639], count: 4, venue: 'Hotels' },
  { id: 5, position: [26.9124, 75.7873], count: 3, venue: 'Restaurants' },
];

const MapController = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  
  return null;
};

const InteractiveMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCountries(filtered);
      setShowDropdown(true);
    } else {
      setFilteredCountries([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setSearchQuery('');
    setShowDropdown(false);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          Launch in Minutes
        </h2>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-900">1/5 Geotargeting</span>
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Select Country</label>
                <div className="relative">
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-md bg-white appearance-none cursor-pointer"
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                {showDropdown && filteredCountries.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {filteredCountries.map((country) => (
                      <button
                        key={country.code}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
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
              <div className="relative rounded-lg overflow-hidden h-96 border border-gray-200">
                <MapContainer
                  center={selectedCountry.center}
                  zoom={selectedCountry.zoom}
                  style={{ height: '100%', width: '100%' }}
                  zoomControl={true}
                  scrollWheelZoom={true}
                >
                  <MapController center={selectedCountry.center} zoom={selectedCountry.zoom} />
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  {screenLocations.map((location) => (
                    <Marker key={location.id} position={location.position}>
                      <Popup>
                        <div className="text-center">
                          <div className="font-semibold">{location.count} Screens</div>
                          <div className="text-sm text-gray-600">{location.venue}</div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
                
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="bg-white rounded shadow-lg p-2">
                    <MapPin className="h-5 w-5 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors">
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