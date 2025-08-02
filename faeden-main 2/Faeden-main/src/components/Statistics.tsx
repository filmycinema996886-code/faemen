import React from 'react';

const Statistics = () => {
  const stats = [
    {
      number: '>18000',
      label: 'Programmatic Screens',
      color: 'text-indigo-600'
    },
    {
      number: '32',
      label: 'Countries Globally',
      color: 'text-indigo-600'
    },
    {
      number: '20M',
      label: 'People Reach Daily',
      color: 'text-indigo-600'
    },
    {
      number: '200M',
      label: 'Monthly Impressions',
      color: 'text-indigo-600'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;