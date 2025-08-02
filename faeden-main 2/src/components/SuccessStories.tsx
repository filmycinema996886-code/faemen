import React from 'react';
import { ExternalLink, TrendingUp, Users, Monitor } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      company: 'Stepstone',
      logo: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Across Germany, FRAMEN strategically deploys Stepstone\'s campaigns within premium coworking hubs, effectively reaching the target demographic actively contemplating career shifts and organizational seeking talents and new joiners.',
      metrics: {
        impressions: '1.7M',
        locations: '291',
        screens: '551'
      },
      color: 'blue'
    },
    {
      id: 2,
      company: 'Vodafone',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Leveraging FRAMEN\'s dynamic reach, Vodafone elevates brand presence among young professionals in prime locations. The campaign delivers impressive early exposure averaging eight hours and engaging with tech-conscious consumers.',
      metrics: {
        impressions: '17.8M',
        locations: '9.6K',
        screens: '12.8K'
      },
      color: 'red'
    },
    {
      id: 3,
      company: 'Pro Columbia',
      logo: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'PROCOLUMBIA, in partnership with FRAMEN, extends its campaign beyond social channels to strategic DOOH placements. Through digital out of home we can target the customers precisely.',
      metrics: {
        impressions: '5.9M',
        locations: '577',
        screens: '1,406'
      },
      color: 'blue'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story) => (
            <div key={story.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div 
                  className="h-48 relative"
                  style={{ background: story.background }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{story.company}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {story.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm text-gray-600">Impressions</span>
                      </div>
                      <span className="font-bold text-indigo-600">{story.metrics.impressions}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm text-gray-600">Locations</span>
                      </div>
                      <span className="font-bold text-indigo-600">{story.metrics.locations}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Monitor className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm text-gray-600">Screens</span>
                      </div>
                      <span className="font-bold text-indigo-600">{story.metrics.screens}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                    <span>Check campaign</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;