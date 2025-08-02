import React from 'react';
import { Search, Map } from 'lucide-react';

const LaunchSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          Launch in Minutes
        </h2>

        <div className="space-y-8">
          {/* Geotargeting Section */}
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
                    <select className="w-full p-3 border border-gray-300 rounded-md bg-white">
                      <option>🇮🇳 INDIA</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for city, district or zip code"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="text-sm text-gray-500">
                  powered by bing api
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
                <div className="relative bg-blue-100 rounded-lg h-96 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-300"></div>
                  <div className="absolute top-4 right-4 space-y-2">
                    <button className="w-8 h-8 bg-white rounded shadow flex items-center justify-center">
                      <span className="text-gray-600">⚙</span>
                    </button>
                    <button className="w-8 h-8 bg-white rounded shadow flex items-center justify-center">
                      <span className="text-gray-600">+</span>
                    </button>
                  </div>
                  
                  {/* Mock map markers */}
                  <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    5
                  </div>
                  <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    6
                  </div>

                  <div className="absolute bottom-4 right-4 text-xs text-gray-600 bg-white px-2 py-1 rounded">
                    OpenStreetMap contributors
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
    </div>
  );
};

export default LaunchSection;