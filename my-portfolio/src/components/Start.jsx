import React from 'react';

const Start = ({ fadeOut }) => {
  return (
    <div className={`w-screen h-screen flex items-center justify-center overflow-hidden bg-blue-700 fixed inset-0 z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Center Container */}
      <div className="flex items-center justify-center w-full h-full relative">
        {/* Border Frame */}
        <div className="absolute inset-4 sm:inset-6 md:inset-8 border-2 sm:border-4 border-white pointer-events-none" />
        
        {/* Corner Decorations */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-12 md:left-12 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border-t-2 border-l-2 sm:border-t-4 sm:border-l-4 border-white" />
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border-t-2 border-r-2 sm:border-t-4 sm:border-r-4 border-white" />
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border-b-2 border-l-2 sm:border-b-4 sm:border-l-4 border-white" />
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border-b-2 border-r-2 sm:border-b-4 sm:border-r-4 border-white" />

        {/* Main Content Container */}
        <div className="relative">
          {/* Loading Text */}
          <div className="absolute -top-8 sm:-top-12 md:-top-16 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl md:text-2xl font-bold tracking-widest">
            <span className="animate-pulse">LOADING</span>
            <span className="animate-[blink_1s_infinite]">...</span>
          </div>

          {/* Main logo container with white background frame */}
          <div className="relative transform transition-all duration-700 ease-out bg-white/5 p-4 sm:p-6 md:p-8 rounded-none">
            <div className="relative">
              <img
                src="/load.png"
                alt="Logo"
                className="w-[16rem] h-[16rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] object-contain"
                style={{
                  animation: 'float 2s ease-in-out infinite, scale 2s ease-in-out infinite'
                }}
              />
              
              {/* Shimmer effect overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"
                style={{
                  animation: 'shimmer 3s ease-in-out infinite',
                  transform: 'skewX(-20deg)'
                }}
              ></div>
            </div>

            {/* Piano key highlight effect */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-white/40 to-transparent" />
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-r from-white/40 to-transparent" />
            </div>
          </div>

          {/* Loading Bar */}
          <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 md:w-64 h-0.5 sm:h-1 bg-white/20">
            <div className="h-full bg-white/80" style={{ animation: 'loading 2s ease-in-out infinite', width: '0%' }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(1deg);
          }
        }
         
        @keyframes scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
         
        @keyframes shimmer {
          0% {
            transform: translateX(-150%) skewX(-20deg);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(150%) skewX(-20deg);
            opacity: 0;
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50px);
          }
        }

        @keyframes loading {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Start;