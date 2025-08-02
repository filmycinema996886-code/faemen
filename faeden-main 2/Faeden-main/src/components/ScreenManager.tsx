import React from 'react';
import { Monitor, Radio, DollarSign } from 'lucide-react';

const ScreenManager = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Manage your own content',
      description: ''
    },
    {
      icon: Radio,
      title: 'Subscribe to exciting content streams',
      description: 'Daily News, Social Influencer Content - subscribe to channels for free and entertain your customers while visiting.'
    },
    {
      icon: DollarSign,
      title: 'Monetize your screens',
      description: ''
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Become a Screen Manager
              </h2>
              
              <p className="text-gray-600">
                Once you are signed up - our free Software will enhance all your existing Screens, Tablets at the reception or even bigger billboards.
              </p>
              
              <button className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Learn more
              </button>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    {feature.description && (
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gym with exercise equipment"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenManager;