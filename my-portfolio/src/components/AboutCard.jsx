import React, { useState, useEffect } from 'react';
import { Linkedin, Github, MessageCircle, Twitter, Instagram, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { MdEmail} from 'react-icons/md';
const PortfolioHero = () => {
  const [showCard, setShowCard] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  // Trigger page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100); // Small delay to ensure smooth animation
    return () => clearTimeout(timer);
  }, []);

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
      <div className={`w-full md:w-1/2 flex flex-col justify-center px-6 py-8 md:px-16 md:py-16 bg-white transition-all duration-1000 ease-out ${
        pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Main Content */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <h2 className={`text-3xl md:text-5xl font-bold text-blue-800 leading-tight transition-all duration-1000 ease-out delay-200 ${
            pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Part Time Developer<br />
            Full-Time Creator & Learner
          </h2>
          
          <p className={`text-blue-800 text-base md:text-xl leading-relaxed max-w-md mx-auto md:mx-0 transition-all duration-1000 ease-out delay-400 ${
            pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Guided by curiosity, powered by persistence, and driven to build solutions that matter. Committed to continuous learning and growth.
          </p>
          
          <button className={`bg-blue-800 text-white px-6 py-2 md:px-8 md:py-3 font-medium hover:bg-blue-900 transition-all duration-1000 ease-out delay-600 ${
            pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Let's Connect
          </button>

          {/* Social Media Icons */}
          <div className={`flex justify-center md:justify-start space-x-4 transition-all duration-1000 ease-out delay-700 ${
            pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a 
              href="https://linkedin.com/in/paramshukla" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-800 p-3 rounded-full transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-800/30 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 hover:text-blue-900 active:scale-95"
              style={{
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(-10deg) rotateY(10deg) translateZ(20px) scale(1.1) translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1) translateY(0px)';
              }}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/ParamShukla007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-800 p-3 rounded-full transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-800/30 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 hover:text-blue-900 active:scale-95"
              style={{
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(-10deg) rotateY(10deg) translateZ(20px) scale(1.1) translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1) translateY(0px)';
              }}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://wa.me/9820385988" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-800 p-3 rounded-full transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-800/30 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 hover:text-blue-900 active:scale-95"
              style={{
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(-10deg) rotateY(10deg) translateZ(20px) scale(1.1) translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1) translateY(0px)';
              }}
            >
              <FaWhatsapp size={24} />
            </a>
            <a 
              href="https://x.com/ParamShukla8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-800 p-3 rounded-full transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-800/30 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 hover:text-blue-900 active:scale-95"
              style={{
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(-10deg) rotateY(10deg) translateZ(20px) scale(1.1) translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1) translateY(0px)';
              }}
            >
              <RiTwitterXFill size={24} />
            </a>
            <a 
              href="https://www.instagram.com/shuklaparam9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-800 p-3 rounded-full transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-800/30 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 hover:text-blue-900 active:scale-95"
              style={{
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(-10deg) rotateY(10deg) translateZ(20px) scale(1.1) translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1) translateY(0px)';
              }}
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Right Section - Image and Card Container (Desktop) / Bottom Section (Mobile) */}
      <div className={`w-full md:w-1/2 bg-blue-700 relative overflow-hidden min-h-[80vh] md:min-h-full transition-all duration-1000 ease-out delay-300 ${
        pageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}>
        
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
        <div className={`flex items-center justify-center h-full p-4 md:p-8 transition-all duration-1000 ease-out delay-500 ${
          pageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="bg-white border-4 md:border-8 border-white overflow-hidden shadow-2xl max-w-xs md:max-w-lg w-full">
            <img
              src="/param_lego2.png"
              alt="Profile"
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </div>
        </div>
        
        {/* Info Card - Envelope Animation from Right */}
        <div className={`absolute inset-0 bg-white border border-blue-800 border-4 md:border-8 transition-transform duration-700 ease-in-out transform-gpu ${
          showCard ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2 flex-shrink-0 p-4 md:p-8 pb-0">About Me</h3>

            <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-0">
              <div className="space-y-3 md:space-y-4">
                <p className="text-[12px] md:text-[25px] text-blue-800 leading-relaxed font-bold md:font-bold">
                  From the very beginning, I've been passionate about building and creating. I've always seen myself as a builder—someone whose work is a reflection of who they are. Early on, I realized that engineers are creators, and that insight made engineering feel like the perfect fit.
                </p>
                <p className="text-[12px] md:text-[25px] text-blue-800 leading-relaxed font-bold md:font-bold">
                 Since then, I've developed a range of applications—from financial literacy tools to NGO management platforms—focused on ideas with real-world impact. Working across various tech stacks, I learned by doing: building, breaking, debugging, and growing through the process. Participating in numerous hackathons taught me the value of teamwork, quick learning, and problem-solving under pressure.
                </p>
                <p className="text-[12px] md:text-[25px] text-blue-800 leading-relaxed font-bold md:font-bold">
                 Alongside hands-on experience, I've built a strong foundation in core computer science subjects such as Data Structures, Operating Systems, OOPs, Networks, and Database Management. I'm always eager to support others and just as open to learning from them. At my core, I'm driven by a desire to create solutions that improve lives and make the world a little easier for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;