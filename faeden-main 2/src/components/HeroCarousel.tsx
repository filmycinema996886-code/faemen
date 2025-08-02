import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      image: 'https://cdn.prod.website-files.com/6364e4e0baec605ceeeff94d/684052915ba65247c394549b_Kopie%20von%20FRAMEN%20NEWS%20IMAGE%20SIZER%20-%20Creator%20(1)-p-1600.jpg',
      title: 'Back to School, Back to Business - Let\'s Get Ready for Q4 with FRAMEN',
      buttonText: 'Explore Opportunities'
    },
    {
      image: 'https://cdn.prod.website-files.com/6364e4e0baec605ceeeff94d/687e1babbdc4a3ce1f4e3267_Kopie%20von%20FRAMEN%20NEWS%20IMAGE%20SIZER%20-%20Creator.jpg',
      title: 'Transform Your Digital Advertising Strategy',
      buttonText: 'Get Started'
    },
    {
      image: 'https://cdn.prod.website-files.com/6364e4e0baec605ceeeff94d/686bf4f1d49ce74649ffae72_Kopie%20von%20FRAMEN%20NEWS%20IMAGE%20SIZER%20-%20Creator%20(2)-p-800.jpg',
      title: 'Reach Your Audience Where It Matters',
      buttonText: 'Learn More'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="flex items-center justify-between">
                <button 
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-indigo-50"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>

                <div className="flex-1 mx-8">
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                    <div className="flex">
                      <div className="flex-1 p-8 bg-gradient-to-r from-white to-indigo-50">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in">
                          {slides[currentSlide].title}
                        </h2>
                        <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                          {slides[currentSlide].buttonText}
                        </button>
                      </div>
                      <div className="w-1/2">
                        <img
                          className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                          src={slides[currentSlide].image}
                          alt={slides[currentSlide].title}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-indigo-50"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
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