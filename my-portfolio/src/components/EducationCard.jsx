import React, { useState, useEffect, useRef } from 'react'

const EducationCard = () => {
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [cardVisible, setCardVisible] = useState(false)
  const educationCardRef = useRef(null)

  const education = {
    id: "01",
    category: "EDUCATION",
    degree: "Bachelor of Engineering",
    institution: "Dwarkadas J. Sanghvi College of Engineering",
    location: "Mumbai, Maharashtra",
    duration: "2022 - 2026",
    cgpa: "CGPA: 9.10/10",
    major: "Computer Engineering",
    currentYear: "4th Year",
    expectedGraduation: "2026",
    academicStanding: "Top 10%",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems", 
      "Computer Networks",
      "Operating Systems",
      "Object-Oriented Programming",
      "Python Programming",
      "Java Programming",
      "Web Development",
      "Machine Learning Basics"
    ],
    isBlue: true
  }

  useEffect(() => {
    const handleScroll = () => {
      if (educationCardRef.current) {
        const rect = educationCardRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Check if component is visible (30% threshold for smoother trigger)
        const isInView = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3
        
        if (isInView) {
          // Staggered animations with delays
          setTimeout(() => setTitleVisible(true), 200)
          setTimeout(() => setSubtitleVisible(true), 600)
          setTimeout(() => setCardVisible(true), 1000)
        } else {
          setTitleVisible(false)
          setSubtitleVisible(false)
          setCardVisible(false)
        }
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 mb-16" ref={educationCardRef}>
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Animated Title */}
          <h2 className={`text-4xl md:text-6xl font-black text-blue-800 mb-4 transition-all duration-1500 ease-out transform ${
            titleVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-16 scale-90'
          }`}>
            EDUCATION
          </h2>
          
          {/* Animated Subtitle */}
          <p className={`text-blue-800 font-medium text-lg transition-all duration-1300 ease-out transform ${
            subtitleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            Academic background and achievements
          </p>
        </div>

        {/* Education Card */}
        <div className={`relative group transition-all duration-1400 ease-out transform ${
          cardVisible 
            ? 'opacity-100 translate-y-0 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-16 translate-y-12 scale-95'
        }`}>
          {/* 3D Shadow Card */}
          <div 
            className={`${education.isBlue ? 'bg-white border-4 border-blue-800' : 'bg-blue-800'} absolute rounded-none transition-all duration-300`}
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
            className={`${education.isBlue ? 'bg-blue-800' : 'bg-white border-4 border-blue-800'} rounded-none p-6 md:p-8 lg:p-12 ${education.isBlue ? 'text-white' : 'text-blue-800'} relative overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-full max-w-none`}
            style={{
              minHeight: '400px',
              boxShadow: education.isBlue 
                ? '0 25px 50px -12px rgba(37, 99, 235, 0.4)' 
                : '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 4px #1e40af'
            }}
          >
            {/* Content */}
            <div className="w-full">
              {/* Card number and category */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className={`text-5xl md:text-6xl lg:text-7xl font-black opacity-90 mb-2 ${education.isBlue ? 'text-white' : 'text-blue-800'} transition-all duration-700 ${cardVisible ? 'animate-pulse' : ''}`}>
                    {education.id}
                  </div>
                  <div className={`${education.isBlue ? 'text-white' : 'text-blue-800'} text-sm md:text-base font-bold tracking-wider transition-all duration-500 ${cardVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
                    {education.category}
                  </div>
                </div>
                
                {/* College Logo Placeholder */}
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-lg flex items-center justify-center transition-all duration-800 transform ${cardVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'}`} style={{ transitionDelay: '300ms' }}>
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                  </svg>
                </div>
              </div>

              {/* Degree and Institution */}
              <div className="mb-6">
                <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black mb-3 ${education.isBlue ? 'text-white' : 'text-blue-800'} transition-all duration-800 transform ${cardVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                  {education.degree}
                </h3>
                <p className={`${education.isBlue ? 'text-blue-200' : 'text-blue-800'} text-lg md:text-xl font-bold mb-3 transition-all duration-700 transform ${cardVisible ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                  {education.institution}
                </p>
              </div>

              {/* Duration, Location, and CGPA */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <p className={`${education.isBlue ? 'text-blue-200' : 'text-blue-800'} text-sm md:text-base flex items-center gap-2 transition-all duration-600 transform ${cardVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 8v4h8v-4M3 10v11a2 2 0 002 2h14a2 2 0 002-2V10a3 3 0 00-3-3H6a3 3 0 00-3 3z" />
                    </svg>
                    {education.duration}
                  </p>
                  <p className={`${education.isBlue ? 'text-blue-200' : 'text-blue-800'} text-sm md:text-base flex items-center gap-2 transition-all duration-600 transform ${cardVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {education.location}
                  </p>
                </div>
                
                {/* CGPA Badge */}
                <div className={`inline-block bg-white text-blue-800 px-4 py-2 rounded-none text-sm md:text-base font-bold mb-4 transition-all duration-600 transform ${cardVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                  {education.cgpa}
                </div>
              </div>

              {/* Academic Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className={`bg-white p-4 rounded-none text-center transition-all duration-600 transform ${cardVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '900ms' }}>
                  <div className="w-8 h-8 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-blue-600 text-xs mb-1">Current Year</div>
                  <div className="text-blue-800 font-bold">{education.currentYear}</div>
                </div>
                
                <div className={`bg-white p-4 rounded-none text-center transition-all duration-600 transform ${cardVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                  <div className="w-8 h-8 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-blue-600 text-xs mb-1">Major</div>
                  <div className="text-blue-800 font-bold text-sm">{education.major}</div>
                </div>
                
                <div className={`bg-white p-4 rounded-none text-center transition-all duration-600 transform ${cardVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1100ms' }}>
                  <div className="w-8 h-8 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 01.788 0l4 1.714A1 1 0 0115 8.93l2.356-1.011a1 1 0 000-1.84l-7-3zM11.673 12.845l4.322-1.852a1 1 0 00.115-1.766L15 8.688l-4.394 1.883a1 1 0 01-.788 0L5.424 8.688l-1.11.539a1 1 0 00.115 1.766l4.322 1.852a1 1 0 00.788 0 1 1 0 00-.076.07l.001.007-.001.009A1 1 0 0010.673 12.845z"/>
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div className="text-blue-600 text-xs mb-1">Expected Graduation</div>
                  <div className="text-blue-800 font-bold">{education.expectedGraduation}</div>
                </div>
                
                <div className={`bg-white p-4 rounded-none text-center transition-all duration-600 transform ${cardVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
                  <div className="w-8 h-8 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-blue-600 text-xs mb-1">Academic Standing</div>
                  <div className="text-blue-800 font-bold">{education.academicStanding}</div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mb-6">
                <h4 className={`${education.isBlue ? 'text-white' : 'text-blue-800'} text-lg md:text-xl font-bold mb-4 flex items-center gap-2 transition-all duration-700 transform ${cardVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '1300ms' }}>
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {education.coursework.map((course, index) => (
                    <div key={index} className={`${education.isBlue ? 'text-blue-200' : 'text-blue-800'} text-sm md:text-base flex items-start transition-all duration-700 transform ${cardVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: `${1400 + index * 100}ms` }}>
                      <span className="text-orange-400 mr-3 mt-1">•</span>
                      <span className="flex-1">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className={`absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-12 opacity-10 transition-all duration-800 transform ${cardVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'}`} style={{ transitionDelay: '1500ms' }}>
              <div className="flex space-x-1.5 md:space-x-2">
                <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${education.isBlue ? 'bg-white' : 'bg-blue-800'} rounded-full`}></div>
                <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${education.isBlue ? 'bg-white' : 'bg-blue-800'} rounded-full`}></div>
                <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${education.isBlue ? 'bg-white' : 'bg-blue-800'} rounded-full`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationCard