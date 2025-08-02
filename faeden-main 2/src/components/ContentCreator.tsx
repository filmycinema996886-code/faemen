import React from 'react';
import { Camera, Video, Palette, Zap, Users, TrendingUp } from 'lucide-react';

const ContentCreator = () => {
  const [hoveredIcon, setHoveredIcon] = React.useState<number | null>(null);

  const creatorIcons = [
    { id: 1, icon: Camera, position: { top: '20%', left: '15%' }, delay: 0 },
    { id: 2, icon: Video, position: { top: '30%', right: '20%' }, delay: 0.2 },
    { id: 3, icon: Palette, position: { top: '60%', left: '10%' }, delay: 0.4 },
    { id: 4, icon: Zap, position: { bottom: '25%', right: '15%' }, delay: 0.6 },
    { id: 5, icon: Users, position: { top: '15%', left: '50%' }, delay: 0.8 },
    { id: 6, icon: TrendingUp, position: { bottom: '20%', left: '45%' }, delay: 1.0 },
  ];

  return (
    <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-white bg-opacity-5 rounded-full animate-bounce"></div>
      </div>

      {/* Floating creator icons */}
      {creatorIcons.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float"
          style={{
            ...item.position,
            animationDelay: `${item.delay}s`,
          }}
          onMouseEnter={() => setHoveredIcon(item.id)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div className={`
            w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full 
            flex items-center justify-center cursor-pointer
            transition-all duration-300 hover:scale-125 hover:bg-opacity-30
            ${hoveredIcon === item.id ? 'shadow-2xl' : 'shadow-lg'}
          `}>
            <item.icon className="h-8 w-8 text-white" />
          </div>
        </div>
      ))}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Are you a content creator?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Expand your audience and be the first to monetize your content with our 
              Digital out of Home platform.
            </p>
          </div>

          <div className="pt-8">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-600 bg-white rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Learn more</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateY(-20px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContentCreator;