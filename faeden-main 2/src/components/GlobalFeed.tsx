import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GlobalFeed = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const feedItems = [
    {
      id: 1,
      video: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a28bc22684b3fd98e582c_personio_portrait-transcode.mp4',
      type: 'Personio Campaign',
      poster: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      type: 'Coming Soon'
    },
    {
      id: 3,
      video: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a291e87bb9967188832ed_RedBull-transcode.mp4',
      type: 'RedBull Campaign',
      poster: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    },
    {
      id: 4,
      video: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a29b63d917530a1e74e7a_babbel_landscape-transcode.mp4',
      type: 'Babbel Campaign',
      poster: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, feedItems.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, feedItems.length - 3)) % Math.max(1, feedItems.length - 3));
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Global Live Feed
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {feedItems.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4">
                  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {item.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        poster={item.poster}
                      >
                        <source src={item.video} type="video/mp4" />
                        <img
                          src={item.poster}
                          alt={item.type}
                          className="w-full h-full object-cover"
                        />
                      </video>
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={item.image}
                          alt={item.type}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">{item.type}</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-white text-sm font-medium">{item.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:border-indigo-300"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:border-indigo-300"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;