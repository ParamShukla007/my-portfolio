import React from 'react';

const PortfolioHero = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Section - Content */}
      <div className="w-1/2 flex flex-col justify-center px-16 py-16 bg-white">
       
        
        {/* Main Content */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-blue-800 leading-tight">
            Part Time Developer<br />
            Full-Time Builder & Learner
          </h2>
          
          <p className="text-blue-800 text-lg leading-relaxed max-w-md">
            Craving to build innovative solutions that make an impact. Enthusiastic problem solver, always curious about new technologies. Committed to continuous learning and growth.
          </p>
          
          <button className="bg-blue-800 text-white px-8 py-3 font-medium hover:bg-blue-900 transition-colors duration-200">
            Let's Connect
          </button>
        </div>
      </div>
      
      {/* Right Section - Image and Navigation */}
      <div className="w-1/2 bg-blue-800 relative">
       
        
        {/* Profile Image Container */}
        <div className="flex items-center justify-center h-full p-8">
          <div className="bg-white border border-white border-8 overflow-hidden shadow-2xl max-w-lg w-full">
            {/* Profile Image */}
            <img 
              src="/paramsh1.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;