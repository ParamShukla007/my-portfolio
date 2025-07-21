import React from 'react';

const Start = ({ fadeOut }) => {
  return (
    <div className={`w-screen h-screen flex items-center justify-center overflow-hidden bg-white fixed inset-0 z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex items-center justify-center w-full h-full relative">
        <div className="relative">
          {/* Main logo container */}
          <div className="relative transform transition-all duration-700 ease-out">
            <img
              src="/load.png"
             alt="Logo"
             className="w-[44rem] h-[44rem] object-contain"
             style={{
               animation: 'float 2s ease-in-out infinite, scale 2s ease-in-out infinite'
             }}
            />
                     
            {/* Shimmer effect overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                animation: 'shimmer 3s ease-in-out infinite',
                transform: 'skewX(-20deg)'
              }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
         
        @keyframes scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }
         
        @keyframes shimmer {
          0% {
            transform: translateX(-150%) skewX(-20deg);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
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
            transform: translateY(-8rem);
          }
        }
      `}</style>
    </div>
  );
};

export default Start;