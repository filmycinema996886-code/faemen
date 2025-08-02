import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Back to School, Back to Business - Let\'s Get Ready for Q4 with FRAMEN',
      buttonText: 'Explore Opportunities'
    }
  ];

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="flex items-center justify-between">
                <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>

                <div className="flex-1 mx-8">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex">
                      <div className="flex-1 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                          {slides[currentSlide].title}
                        </h2>
                        <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                          {slides[currentSlide].buttonText}
                        </button>
                      </div>
                      <div className="w-1/2">
                        <img
                          className="w-full h-64 object-cover"
                          src={slides[currentSlide].image}
                          alt="Office space"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {[0, 1, 2, 3, 4].map((index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === 0 ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;