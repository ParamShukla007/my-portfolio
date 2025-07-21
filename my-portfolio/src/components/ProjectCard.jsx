import React, { useState, useEffect } from 'react'

const ProjectCard = () => {
  const [animateCards, setAnimateCards] = useState(false);

  // Reset animation state when component mounts
  useEffect(() => {
    setAnimateCards(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Animate cards on scroll
      const cards = document.querySelectorAll('.animate-on-scroll');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.85;
        if (isInView) {
          setAnimateCards(true);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      id: "01",
      category: "WEB APPLICATION",
      title: "Money Overflow",
      subtitle: "FULL-STACK PLATFORM",
      description: "MoneyOverflow is a comprehensive financial literacy platform developed using React.js for the frontend and Node.js, Express.js, and Mongoose on the backend. The platform offers interactive learning modules, financial blogs, real-time news updates, built-in calculators, and a vibrant community-driven Q&A system to promote financial awareness and knowledge sharing. To enhance user engagement, we integrated gamified quizzes and investment simulations that allow users to test and apply their understanding in a practical context. Additionally, the platform features an AI-powered assistant built using the Gemini API, which provides personalized financial query resolution and learning guidance. The entire application is designed to be fully mobile responsive, ensuring a smooth and consistent experience across all devices. This project emphasizes accessibility, interactivity, and personalization in financial education.",
      image: "/api/placeholder/300/200",
      tags: ["React.js", "Node.js", "Express.js", "Mongoose", "MongoDB"],
      additionalTags: ["Financial Literacy"],
      liveDemo: "https://moneyoverflow.vercel.app/",
      codeLink: "https://github.com/MonilMehta/MoneyOverflow",
      detailsLink: "/projects/moneyoverflow",
      timeline: "May 2025 - June 2025",
      bgColor: "bg-blue-800",
      isBlue: true
    },
    {
      id: "02", 
      category: "WEB APPLICATION",
      title: "Nurture Nest",
      subtitle: "FULL-STACK",
      description: "NurtureNest is a full-stack NGO management platform designed to streamline operations for both administrators and users. The platform features a comprehensive admin portal that enables administrators to create and manage events and projects, track staff and volunteer data, view detailed donation analytics through interactive charts, and generate event reports in PDF format. It includes secure payment integration using Razorpay for donations and volunteering contributions. Automated SMS notifications are sent to users upon registration via Twilio API. On the user side, individuals can browse and participate in events and projects, make donations, and view important messages shared by the admin. The platform also offers a responsive and user-friendly interface, ensuring a seamless experience across devices.",
      image: "/api/placeholder/300/200",
      tags: ["React.js", "Node.js", "Express.js", "Mongoose", "MongoDB"],
      additionalTags: ["NGO Management"],
      liveDemo: "https://nfc-3-0-hack-panthers.vercel.app/",
      codeLink: "https://github.com/MonilMehta/NFC3.0_HackPanthers",
      detailsLink: "/projects/nurturenest",
      timeline: "Sep 2024 - Oct 2024",
      bgColor: "bg-white border-4 border-blue-800",
      isBlue: false
    },
    {
      id: "03",
      category: "WEB APPLICATION", 
      title: "Contact Vault",
      subtitle: "FULL-STACK",
      description: "Contact Vault is a full-stack contact management system that I built using Spring Boot and WebSocket, focused on delivering secure contact storage and real-time communication. The backend is powered by Spring Boot and Spring Security for robust authentication and authorization, with Spring Data JPA and MySQL handling data persistence. Real-time messaging is implemented using WebSocket with STOMP and SockJS. User passwords are securely hashed using BCrypt. On the frontend, I used Thymeleaf for server-side rendering and Tailwind CSS to design a responsive, clean, and user-friendly interface. The application allows users to securely store, edit, and delete their contacts, update their profiles, and engage in real-time chat. I integrated Cloudinary to manage user profile photos in the cloud, added pagination to optimize page performance by reducing load time, and implemented a dynamic search functionality for easy contact filtering. MySQL Workbench was used for efficient database design and management. Deployed using Docker and Render.",
      image: "/api/placeholder/300/200",
      tags: ["Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "Thymeleaf", "WebSocket", "Docker"],
      additionalTags: ["Contact Management"],
      liveDemo: "https://contact-vault.onrender.com",
      codeLink: "https://github.com/ParamShukla007/PRODIGY_FS_04",
      detailsLink: "/projects/contactvault",
      timeline: "May 2025 - June 2025",
      bgColor: "bg-blue-800",
      isBlue: true
    }
  ]

  // Function to truncate text to specified character limit
  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  }

  return (
    <div className="min-h-screen bg-blue-800 relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header - Left aligned */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            PROJECTS I'VE SHIPPED
          </h2>
          <p className="text-white font-medium text-lg mb-2">
            Ideas I've transformed into working applications
          </p>
          <div className="inline-flex items-center gap-2 border border-white/30 px-4 py-2 animate-[pulse_3s_ease-in-out_infinite]">
            <svg 
              className="w-5 h-5 text-blue-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <p className="text-blue-200 text-base italic">
              Hover over the cards to reveal projects
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-8 md:gap-12">
          {cards.map((card, index) => (
            <div className="relative group" key={card.id}>
              {/* 3D Shadow Card */}
              <div 
                className={`${card.isBlue ? 'bg-white border-4 border-blue-800' : 'bg-blue-800'} absolute rounded-none`}
                style={{
                  top: '12px',
                  left: '12px',
                  right: '-12px',
                  bottom: '-12px',
                  minHeight: '400px',
                  zIndex: -1
                }}
              ></div>

              {/* Main Card */}
              <div 
                className={`${card.bgColor} rounded-none p-6 md:p-8 lg:p-12 ${card.isBlue ? 'text-white border-2 border-white' : 'text-blue-800'} 
                  relative overflow-visible
                  w-full max-w-none transform 
                  transition-all duration-700 ease-out
                  ${index % 2 === 0 ? '-translate-x-3/4' : 'translate-x-3/4'} 
                  group-hover:translate-x-0 group-hover:translate-y-0
                  opacity-100 group-hover:opacity-100`}
                style={{
                  minHeight: '400px',
                  boxShadow: card.isBlue 
                    ? '0 25px 50px -12px rgba(30, 64, 175, 0.4)' 
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 4px #1e40af'
                }}
              >
                {/* Main content area - responsive layout */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12">
                  
                  {/* Image - First on mobile, left/right on desktop based on card color */}
                  <div className={`w-full md:w-96 lg:w-[550px] flex-shrink-0 order-1 ${card.isBlue ? 'md:order-1' : 'md:order-2'}`}>
                    <div className={`${card.isBlue ? 'bg-white' : 'bg-blue-50'} rounded-none overflow-hidden aspect-video md:aspect-square group-hover:scale-105 transition-transform duration-500`}>
                      <div className={`w-full h-full flex items-center justify-center ${card.isBlue ? 'bg-blue-50' : 'bg-blue-100'}`}>
                        <div className="text-blue-400 text-6xl md:text-8xl lg:text-9xl font-black opacity-30">PS</div>
                      </div>
                    </div>
                  </div>

                  {/* Content - Second on mobile, right/left on desktop based on card color */}
                  <div className={`flex-1 order-2 ${card.isBlue ? 'md:order-2' : 'md:order-1'}`}>
                    {/* Card number and category */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className={`text-5xl md:text-6xl lg:text-7xl font-black opacity-90 mb-2 ${card.isBlue ? 'text-white' : 'text-blue-800'}`}>{card.id}</div>
                        <div className={`${card.isBlue ?'text-white' : 'text-blue-800'} text-sm md:text-base font-bold tracking-wider`}>
                          {card.category}
                        </div>
                      </div>
                    </div>

                    {/* Title and description */}
                    <div className="mb-6">
                      <h3 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 ${card.isBlue ? 'text-white' : 'text-blue-800'} transition-colors`}>
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <p className={`${card.isBlue ? 'text-blue-200' : 'text-blue-800'} text-sm md:text-base lg:text-lg font-bold tracking-wider mb-3`}>
                          {card.subtitle}
                        </p>
                      )}
                      {card.description && (
                        <div>
                          <p className={`${card.isBlue ? 'text-blue-200' : 'text-blue-800'} text-sm md:text-base lg:text-lg leading-relaxed opacity-90 max-w-2xl mb-3`}>
                            {truncateText(card.description, 250)}
                          </p>
                          <a
                            href={card.detailsLink}
                            className={`${card.isBlue ? 'text-white hover:text-blue-200' : 'text-blue-800 hover:text-blue-600'} text-sm font-medium underline transition-colors duration-300 flex items-center gap-1 w-fit`}
                          >
                            View More Details
                            <svg 
                              className="w-3 h-3"
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Tags - Primary tech stack */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                      {card.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`${card.isBlue ? 'bg-white text-blue-800' : 'bg-blue-800 text-white'} px-3 md:px-4 py-1.5 md:py-2 rounded-none text-xs md:text-sm font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
                      <a 
                        href={card.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${card.isBlue ? 'bg-white text-blue-800 hover:bg-blue-50' : 'bg-blue-800 text-white hover:bg-blue-900'} px-4 md:px-6 py-2.5 md:py-3 rounded-none font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                      <a 
                        href={card.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${card.isBlue ? 'bg-white text-blue-800 hover:bg-blue-50' : 'bg-blue-800 text-white hover:bg-blue-900'} px-4 md:px-6 py-2.5 md:py-3 rounded-none font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg border ${card.isBlue ? 'border-blue-200' : 'border-blue-900'}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Code
                      </a>
                    </div>

                    {/* Timeline */}
                    <div className={`${card.isBlue ? 'text-blue-200' : 'text-blue-800'} text-xs md:text-sm font-medium opacity-80`}>
                      {card.timeline}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-12 opacity-10">
                  <div className="flex space-x-1.5 md:space-x-2">
                    <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${card.isBlue ? 'bg-white' : 'bg-blue-800'} rounded-full`}></div>
                    <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${card.isBlue ? 'bg-white' : 'bg-blue-800'} rounded-full`}></div>
                    <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${card.isBlue ? 'bg-white' : 'bg-blue-800'} rounded-full`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProjectCard