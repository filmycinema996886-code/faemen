import React from 'react';

const MainHero = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Digital Out of Home Advertising in +32 Countries
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Combine the power of Digital Out of Home with the precision of programmatic. Reach millions weekly 
          across high-impact venues - retail, fitness, business and beyond.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors">
            Start your Campaign
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors">
            Get our Digital Signage
          </button>
        </div>

        {/* Video Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-lg border-2 border-gray-200 p-16 flex items-center justify-center min-h-96">
            <div className="text-center">
              <h2 className="text-6xl font-bold text-indigo-600 mb-2">FOR SCREEN</h2>
              <h2 className="text-6xl font-bold text-indigo-600 mb-2">PROVIDERS</h2>
              <h2 className="text-6xl font-bold text-indigo-600 italic">AI SIMPLI...</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;