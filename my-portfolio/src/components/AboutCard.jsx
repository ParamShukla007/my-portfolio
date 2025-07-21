import React, { useState, useEffect } from 'react';

const PortfolioHero = () => {
  const [showCard, setShowCard] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  // Trigger content animation when card is shown
  useEffect(() => {
    if (showCard) {
      const timer = setTimeout(() => {
        setContentVisible(true);
      }, 300); // Start content animation after card slide-in begins
      return () => clearTimeout(timer);
    } else {
      setContentVisible(false);
    }
  }, [showCard]);

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Section - Content (Desktop) / Top Section (Mobile) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-8 md:px-16 md:py-16 bg-white">
        {/* Main Content */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-800 leading-tight">
            Part Time Developer<br />
            Full-Time Builder & Learner
          </h2>
          
          <p className="text-blue-800 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Craving to build innovative solutions that make an impact. Enthusiastic problem solver, always curious about new technologies. Committed to continuous learning and growth.
          </p>
          
          <button className="bg-blue-800 text-white px-6 py-2 md:px-8 md:py-3 font-medium hover:bg-blue-900 transition-colors duration-200">
            Let's Connect
          </button>
        </div>
      </div>
      
      {/* Right Section - Image and Card Container (Desktop) / Bottom Section (Mobile) */}
      <div className="w-full md:w-1/2 bg-blue-800 relative overflow-hidden min-h-[50vh] md:min-h-full">
        
        {/* Toggle Button - Circular with Arrow */}
        <button
          onClick={toggleCard}
          className={`absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg ${
            showCard 
              ? 'bg-blue-800 text-white hover:bg-blue-900' 
              : 'bg-white text-blue-800 hover:bg-gray-100'
          }`}
        >
          {showCard ? (
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </button>
        
        {/* Profile Image Container */}
        <div className="flex items-center justify-center h-full p-4 md:p-8">
          <div className="bg-white border-4 md:border-8 border-white overflow-hidden shadow-2xl max-w-xs md:max-w-lg w-full">
            <img
              src="/paramsh2.jpg"
              alt="Profile"
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </div>
        </div>
        
        {/* Info Card - Envelope Animation from Right */}
        <div className={`absolute inset-0 bg-white border border-blue-800 border-4 md:border-8 p-4 md:p-8 flex flex-col transition-transform duration-700 ease-in-out transform-gpu overflow-y-auto ${
          showCard ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 md:mb-6 flex-shrink-0">About Me</h3>
          
          <div className="space-y-3 md:space-y-6 flex-1">
            <p className="text-xs md:text-3xl text-blue-800 leading-relaxed font-bold">
              From the very beginning, I've been passionate about creating things. I've always seen myself as a builder—someone whose work should reflect who they are. Early on, I learned that engineers are creators, and that realization made engineering feel like the perfect fit for me.
            </p>
            <p className="text-xs md:text-3xl text-blue-800 leading-relaxed font-bold">
              Since then, I've developed a variety of applications—from financial literacy app to NGO management platforms—exploring ideas that have real-world impact. I've worked across different tech stacks, often learning by doing: building, breaking, debugging, and growing through the process. Participating in numerous hackathons taught me the importance of teamwork, fast learning, and problem-solving under pressure.
            </p>
            <p className="text-xs md:text-3xl text-blue-800 leading-relaxed font-bold">
             Alongside hands-on projects, I've also built a strong foundation in core computer science subjects such as Data Structures, Operating Systems, OOPs, Networks, and Database Management. I'm always eager to help others and just as open to learning from them. Ultimately, I'm driven by the goal of creating solutions that improve lives and make the world a little easier for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;