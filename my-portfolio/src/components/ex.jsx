import React, { useState, useEffect, useRef } from 'react';

const AboutCard = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const aboutCardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutCardRef.current) {
        const rect = aboutCardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;
        
        if (isInView) {
          setTimeout(() => setTitleVisible(true), 200);
          setTimeout(() => setContentVisible(true), 600);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full" ref={aboutCardRef}>
      <div className="flex flex-col md:flex-row">
        {/* Image section */}
        <img
          src="/paramsh2.png"
          alt="Param Shukla"
          className={`w-full md:w-1/2 h-screen object-cover transform transition-all duration-1000 ${
            titleVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        />
        
        {/* Content section with heading and description in blue div */}
        <div className={`w-full md:w-1/2 bg-blue-800 pt-8 px-8 flex flex-col transform transition-all duration-1000 ${
          titleVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              PARAM SHUKLA
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              A passionate final year Computer Engineering Student based in 
              Mumbai
            </h2>
          </div>
          
          <div className={`space-y-6 mt-16 transform transition-all duration-1000 delay-300 ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}>
            <p className="text-xl text-white leading-relaxed font-bold">
              From the very beginning, I've been passionate about creating things. I've always seen myself as a builder—someone whose work should reflect who they are. Early on, I learned that engineers are creators, and that realization made engineering feel like the perfect fit for me.
            </p>
            <p className="text-xl text-white leading-relaxed font-bold">
              Since then, I've developed a variety of applications—from financial literacy app to NGO management platforms—exploring ideas that have real-world impact. I've worked across different tech stacks, often learning by doing: building, breaking, debugging, and growing through the process. Participating in numerous hackathons taught me the importance of teamwork, fast learning, and problem-solving under pressure.
            </p>
            <p className="text-xl text-white leading-relaxed font-bold">
             Alongside hands-on projects, I've also built a strong foundation in core computer science subjects such as Data Structures, Operating Systems, OOPs, Networks, and Database Management. I'm always eager to help others and just as open to learning from them. Ultimately, I'm driven by the goal of creating solutions that improve lives and make the world a little easier for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;