import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'AMD', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-AMD.png' },
    { name: 'American Express', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-American-Express.png' },
    { name: 'Bosch', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654ba70_Client-Bosch.png' },
    { name: 'Uber', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654ba70_Client-Uber.png' },
    { name: 'eBay', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654ba70_Client-ebay.png' },
    { name: 'Lufthansa', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654ba70_Client-Lufthansa.png' },
    { name: 'Porsche', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Porsche.png' },
    { name: 'Personio', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Personio.png' },
    { name: 'Vodafone', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Vodafone.png' },
    { name: 'Sixt', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Sixt.png' },
    { name: 'RedBull', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Redbull.png' },
    { name: 'Tommy Hilfiger', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Tommy-Hilfiger.png' },
    { name: 'Babbel', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Babbel.png' },
    { name: 'Seiko', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Seiko.png' },
    { name: 'Perrier', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Pierriere.png' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-12 text-lg">
          Used by the world largest 1,000 companies
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {duplicatedCompanies.map((company, index) => (
              <div key={index} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-20 h-12 bg-gray-200 rounded items-center justify-center">
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