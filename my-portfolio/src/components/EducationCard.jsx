import React, { useState, useEffect, useRef } from 'react'
import { 
  Calendar,
  MapPin,
  GraduationCap,
  FileText,
  Award,
  BookOpen
} from 'lucide-react'
import { SlBookOpen } from "react-icons/sl";

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
    <div className="min-h-screen mt-16 bg-white p-4 md:p-8 mb-16" ref={educationCardRef}>
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Animated Title */}
          <h2 className={`text-4xl md:text-5xl font-black text-blue-800 mb-4 transition-all duration-1500 ease-out transform ${
            titleVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-16 scale-90'
          }`}>
            WHERE I LAID THE GROUNDWORK FOR MEANINGFUL SOLUTIONS
          </h2>
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
                  <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white" />
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
                    <Calendar className="w-4 h-4" />
                    {education.duration}
                  </p>
                  <p className={`${education.isBlue ? 'text-blue-200' : 'text-blue-800'} text-sm md:text-base flex items-center gap-2 transition-all duration-600 transform ${cardVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
                    <MapPin className="w-4 h-4" />
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
                    <Calendar className="w-5 h-5 text-blue-800" />
                  </div>
                  <div className="text-blue-600 text-sm mb-1">Current Year</div>
                  <div className="text-blue-800 font-bold text-base">{education.currentYear}</div>
                </div>
                
                <div className={`bg-white p-4 rounded-none text-center transition-all duration-600 transform ${cardVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                  <div className="w-8 h-8 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                    <SlBookOpen className="w-5 h-5 text-blue-800" />
                  </div>
                  <div className="text-blue-600 text-sm mb-1">Major</div>
                  <div className="text-blue-800 font-bold text-base">{education.major}</div>
                </div>
                
                <div className={`bg-white p-4 rounded-none text-center transition-all duration-600 transform ${cardVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1100ms' }}>
                  <div className="w-8 h-8 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-800" />
                  </div>
                  <div className="text-blue-600 text-sm mb-1">Expected Graduation</div>
                  <div className="text-blue-800 font-bold text-base">{education.expectedGraduation}</div>
                </div>
                
                <div className={`bg-white p-4 rounded-none text-center transition-all duration-600 transform ${cardVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
                  <div className="w-8 h-8 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-800" />
                  </div>
                  <div className="text-blue-600 text-sm mb-1">Academic Standing</div>
                  <div className="text-blue-800 font-bold text-base">{education.academicStanding}</div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mb-6">
                <h4 className={`${education.isBlue ? 'text-white' : 'text-blue-800'} text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 transition-all duration-700 transform ${cardVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '1300ms' }}>
                  <BookOpen className="w-6 h-6" />
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {education.coursework.map((course, index) => (
                    <div key={index} className={`${education.isBlue ? 'text-blue-200' : 'text-blue-800'} text-base md:text-lg flex items-start transition-all duration-700 transform ${cardVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: `${1400 + index * 100}ms` }}>
                      <span className="text-orange-400 mr-3 mt-1 text-lg">•</span>
                      <span className="flex-1 font-medium">{course}</span>
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