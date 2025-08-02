import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GlobalFeed = () => {
  const feedItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      type: 'Beauty Advertisement'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      type: 'Gaming Advertisement'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      type: 'Food Advertisement'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      type: 'Business Advertisement'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Global Live Feed
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feedItems.map((item) => (
              <div key={item.id} className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.type}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;