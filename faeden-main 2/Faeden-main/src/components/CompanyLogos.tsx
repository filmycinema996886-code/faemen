import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'Perrier', logo: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
    { name: 'American Express', logo: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
    { name: 'Bosch', logo: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
    { name: 'Uber', logo: 'https://images.pexels.com/photos/1006211/pexels-photo-1006211.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
    { name: 'eBay', logo: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
    { name: 'Lufthansa', logo: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
    { name: 'Porsche', logo: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
    { name: 'Vodafone', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
    { name: 'Sixt', logo: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-12 text-lg">
          Used by the world largest 1,000 companies
        </p>
        
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-600">{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;