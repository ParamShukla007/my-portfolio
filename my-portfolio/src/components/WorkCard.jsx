import React, { useState, useEffect, useRef } from 'react'

const WorkCard = () => {
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState([false, false])
  const workCardRef = useRef(null)

  const experiences = [
    {
      id: "01",
      category: "INTERNSHIP",
      company: "Prodigy InfoTech",
      subtitle: "Full Stack Developer Intern",
      duration: "June 2025 - July 2025",
      location: "Remote",
      description: [
        "Developed and deployed two enterprise-grade Spring Boot applications—an Employee Management System and a Contact Manager with real-time chat—improving user data management and collaboration",
        "Implemented WebSocket-based real-time messaging with <250ms latency and zero message loss in testing",
        "Integrated Spring Security for authentication and role-based access, eliminating unauthorized access incidents",
        "Containerized applications using Docker, significantly reducing deployment setup time"
      ],
      tags: ["Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "Thymeleaf", "WebSocket", "Docker"],
      isBlue: true
    },
    {
      id: "02",
      category: "INTERNSHIP", 
      company: "Rogue Code",
      subtitle: "Software Developer Intern",
      duration: "June 2024 - Aug 2024",
      location: "Mumbai, India",
      description: [
        "Worked with Firebase Realtime Database for efficient, real-time data storage and retrieval",
        "Applied Greedy and Backtracking algorithms to design and optimize a scheduling system, improving efficiency by ~62% through dry run comparisons across multiple datasets",
        "Developed RESTful backend services using Node.js and Express.js, enabling robust data editing and deletion",
        "Implemented Excel export functionality using xlsx, reducing manual reporting workload by 80%"
      ],
      tags: ["Node.js", "React.js", "Firebase", "Algorithms"],
      isBlue: false
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (workCardRef.current) {
        const rect = workCardRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Check if component is visible (30% threshold for smoother trigger)
        const isInView = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3
        
        if (isInView) {
          // Staggered animations with delays
          setTimeout(() => setTitleVisible(true), 200)
          setTimeout(() => setSubtitleVisible(true), 600)
          
          // Animate cards with staggered delays
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setCardsVisible(prev => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, 1000 + (index * 400))
          })
        } else {
          setTitleVisible(false)
          setSubtitleVisible(false)
          setCardsVisible([false, false])
        }
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 mb-16" ref={workCardRef}>
      <div className="max-w-7xl mx-auto relative">
        {/* Header - Center aligned with animations */}
        <div className="text-center mb-12">
          {/* Animated Title */}
          <h2 className={`text-4xl md:text-6xl font-black text-blue-800 mb-4 transition-all duration-1500 ease-out transform ${
            titleVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-16 scale-90'
          }`}>
            WHERE I'VE MADE MY MARK
          </h2>
          
          {/* Animated Subtitle */}
          <p className={`text-blue-800 font-medium text-lg transition-all duration-1300 ease-out transform ${
            subtitleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            Building impactful solutions and learning from every opportunity
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <div 
              className={`relative group transition-all duration-1400 ease-out transform ${
                cardsVisible[index] 
                  ? 'opacity-100 translate-y-0 translate-x-0 scale-100' 
                  : `opacity-0 ${index % 2 === 0 ? 'translate-x-16' : '-translate-x-16'} translate-y-12 scale-95`
              }`}
              key={exp.id}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* 3D Shadow Card */}
              <div 
                className={`${exp.isBlue ? 'bg-white border-4 border-blue-800' : 'bg-blue-800'} absolute rounded-none transition-all duration-300`}
                style={{
                  top: '12px',
                  left: '12px',
                  right: '-12px',
                  bottom: '-12px',
                  minHeight: '300px',
                  zIndex: -1
                }}
              ></div>
              
              {/* Main Card */}
              <div 
                className={`${exp.isBlue ? 'bg-blue-800' : 'bg-white border-4 border-blue-800'} rounded-none p-6 md:p-8 lg:p-12 ${exp.isBlue ? 'text-white' : 'text-blue-800'} relative overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-full max-w-none`}
                style={{
                  minHeight: '300px',
                  boxShadow: exp.isBlue 
                    ? '0 25px 50px -12px rgba(37, 99, 235, 0.4)' 
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 4px #1e40af'
                }}
              >
                {/* Content - Full width without image */}
                <div className="w-full">
                  {/* Card number and category */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className={`text-5xl md:text-6xl lg:text-7xl font-black opacity-90 mb-2 ${exp.isBlue ? 'text-white' : 'text-blue-800'} transition-all duration-700 ${cardsVisible[index] ? 'animate-pulse' : ''}`}>{exp.id}</div>
                      <div className={`${exp.isBlue ? 'text-white' : 'text-blue-800'} text-sm md:text-base font-bold tracking-wider transition-all duration-500 ${cardsVisible[index] ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                        {exp.category}
                      </div>
                    </div>
                  </div>

                  {/* Company and role */}
                  <div className="mb-6">
                    <h3 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 ${exp.isBlue ? 'text-white' : 'text-blue-800'} transition-all duration-800 transform ${cardsVisible[index] ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                      {exp.company}
                    </h3>
                    {exp.subtitle && (
                      <p className={`${exp.isBlue ? 'text-blue-200' : 'text-blue-800'} text-sm md:text-base lg:text-lg font-bold tracking-wider mb-3 transition-all duration-700 transform ${cardsVisible[index] ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                        {exp.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Duration and Location */}
                  <div className="mb-6">
                    {exp.duration && (
                      <p className={`${exp.isBlue ? 'text-blue-200' : 'text-blue-800'} text-sm md:text-base mb-2 flex items-center gap-2 transition-all duration-600 transform ${cardsVisible[index] ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${500 + index * 100}ms` }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 8v4h8v-4M3 10v11a2 2 0 002 2h14a2 2 0 002-2V10a3 3 0 00-3-3H6a3 3 0 00-3 3z" />
                        </svg>
                        {exp.duration}
                      </p>
                    )}
                    {exp.location && (
                      <p className={`${exp.isBlue ? 'text-blue-200' : 'text-blue-800'} text-sm md:text-base mb-4 flex items-center gap-2 transition-all duration-600 transform ${cardsVisible[index] ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </p>
                    )}
                  </div>

                  {/* Description - Point wise */}
                  {exp.description && (
                    <div className={`${exp.isBlue ? 'text-blue-200' : 'text-blue-800'} text-sm md:text-base lg:text-lg leading-relaxed opacity-90 mb-6 max-w-4xl`}>
                      <ul className="space-y-3">
                        {exp.description.map((point, pointIndex) => (
                          <li 
                            key={pointIndex} 
                            className={`flex items-start transition-all duration-700 transform ${cardsVisible[index] ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                            style={{ transitionDelay: `${700 + index * 100 + pointIndex * 150}ms` }}
                          >
                            <span className="text-orange-400 mr-3 mt-1 text-lg">•</span>
                            <span className="flex-1">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags - Tech stack */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                    {exp.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`${exp.isBlue ? 'bg-white text-blue-800' : 'bg-blue-800 text-white'} px-3 md:px-4 py-1.5 md:py-2 rounded-none text-xs md:text-sm font-medium transition-all duration-600 transform ${cardsVisible[index] ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                        style={{ transitionDelay: `${1000 + index * 100 + tagIndex * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className={`absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-12 opacity-10 transition-all duration-800 transform ${cardsVisible[index] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'}`} style={{ transitionDelay: `${1200 + index * 100}ms` }}>
                  <div className="flex space-x-1.5 md:space-x-2">
                    <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${exp.isBlue ? 'bg-white' : 'bg-blue-800'} rounded-full`}></div>
                    <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${exp.isBlue ? 'bg-white' : 'bg-blue-800'} rounded-full`}></div>
                    <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${exp.isBlue ? 'bg-white' : 'bg-blue-800'} rounded-full`}></div>
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

export default WorkCard