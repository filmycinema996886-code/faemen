import React from 'react';
import { Target, Settings, DollarSign, Zap } from 'lucide-react';

const WhyFramen = () => {
  const features = [
    {
      icon: Target,
      title: 'Target Ideal Customers',
      description: 'Boost your brand reach in over 20,000 prime locations, engaging with a 200 million-strong audience in places like coworking spaces, luxury hotels, gyms, and more.'
    },
    {
      icon: Settings,
      title: 'Agile Campaign Management',
      description: 'Quickly adjust your campaigns as needed without extensive planning. Adapt on-the-fly to improve results effectively.'
    },
    {
      icon: DollarSign,
      title: 'Cost-Efficient Advertising',
      description: 'Start advertising with as little as $10/£10. Enjoy significant impact without large budget, and the freedom of no binding contracts.'
    },
    {
      icon: Zap,
      title: 'Rapid Campaign Setup',
      description: 'Sign up at no cost and launch your campaign almost instantly. Our Sales team is ready to help with any assistance you may require.'
    }
  ];

  return (
    <div className="bg-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-4xl font-bold text-white">
            Why FRAMEN?
          </h2>
          <button className="bg-white text-indigo-600 px-6 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors">
            Sign up for free
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              
              <p className="text-indigo-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyFramen;