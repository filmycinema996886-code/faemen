import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'AMD' },
    { name: 'American Express' },
    { name: 'Bosch' },
    { name: 'Uber' },
    { name: 'eBay' },
    { name: 'Lufthansa' },
    { name: 'Porsche' },
    { name: 'Personio' },
    { name: 'Vodafone' },
    { name: 'Sixt' },
    { name: 'RedBull' },
    { name: 'Tommy Hilfiger' },
    { name: 'Babbel' },
    { name: 'Seiko' },
    { name: 'Perrier' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600">Join thousands of companies that trust our platform</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {duplicatedCompanies.map((company, index) => (
              <div key={index} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110">
                <div className="w-24 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-xs font-semibold text-gray-600">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CompanyLogos;