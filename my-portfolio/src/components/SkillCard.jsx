import React, { useState, useEffect, useRef } from 'react'
import { 
  SiC, SiOpenjdk, SiMysql, SiPython, SiJavascript,
  SiNodedotjs, SiExpress, SiMongodb, SiSpringboot,
  SiReact, SiHtml5, SiCss3, SiTailwindcss,
  SiDocker, SiGit, SiGithub, SiVisualstudiocode, SiPostman,
  SiThymeleaf, SiSpringsecurity, SiMongoose 
} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import { VscVscode } from "react-icons/vsc"
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";

const SkillCard = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const skillCardRef = useRef(null)

  const allSkills = [
    // Languages
    { name: "", icon: SiC },
    { name: "Java", icon: FaJava },
    { name: "SQL", icon: GrMysql },
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    // Frameworks & Libraries
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Mongoose", icon: SiMongoose  },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Spring Security", icon: SiSpringsecurity },
    { name: "Spring Data JPA", icon: SiSpringboot },
    { name: "React.js", icon: SiReact },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Thymeleaf", icon: SiThymeleaf },
    // Database Systems
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: GrMysql },
    // Tools & Technologies
    { name: "Docker", icon: SiDocker },
    { name: "JDBC", icon: FaDatabase },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: VscVscode },
    { name: "Postman", icon: SiPostman }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (skillCardRef.current) {
        const rect = skillCardRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Check if component is visible (30% threshold for smoother trigger)
        const isInView = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3
        
        setIsVisible(isInView)
        
        // Staggered animations with delays
        if (isInView) {
          // Title appears first
          setTimeout(() => setTitleVisible(true), 200)
          // Subtitle appears next
          setTimeout(() => setSubtitleVisible(true), 600)
          // Skills appear last
          setTimeout(() => setSkillsVisible(true), 1000)
        } else {
          setTitleVisible(false)
          setSubtitleVisible(false)
          setSkillsVisible(false)
        }
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-white" ref={skillCardRef}>
      {/* Header Section with Animation */}
      <div className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        {/* Animated Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-800 mb-2 sm:mb-4 transition-all duration-1500 ease-out transform ${
          titleVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-16 scale-90'
        }`}>
          SKILL WALL
        </h2>
        
        {/* Animated Subtitle */}
        <p className={`text-blue-700 font-medium text-base sm:text-lg md:text-xl lg:text-2xl transition-all duration-1300 ease-out transform ${
          subtitleVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          Skiils that I have built brick by brick 
        </p>
      </div>

      {/* Skills Grid - Compact layout with Container Animation */}
      <div className={`bg-white text-white pb-8 sm:pb-12 md:pb-16 transition-all duration-1000 ease-out transform ${
        skillsVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        {/* Skills Grid - Mobile optimized */}
        <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-14 2xl:grid-cols-16 gap-px bg-gray-200">
          {allSkills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className={`relative group cursor-pointer min-w-0 transition-all duration-1400 ease-out transform ${
                skillsVisible 
                  ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                  : 'opacity-0 translate-y-12 scale-90 rotate-2'
              }`}
              style={{
                aspectRatio: '1/1',
                minHeight: '80px',
                transitionDelay: `${200 + (skillIndex * 60)}ms` // Staggered animation delay with base delay
              }}
            >
              {/* Piano Key Effect - Background layers */}
              <div className="absolute inset-0 bg-white transition-all duration-300 ease-out group-hover:translate-y-1 group-hover:shadow-inner">
                {/* Top highlight (piano key bevel) */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-b from-gray-100 to-transparent"></div>
                {/* Left highlight */}
                <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-r from-gray-100 to-transparent"></div>
              </div>

              {/* Shadow effect when pressed */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>

              {/* Skill Content */}
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-1 sm:p-2 md:p-3 transition-all duration-300 ease-out group-hover:translate-y-0.5">
                {/* Skill Icon */}
                {skill.icon && (
                  <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-1 sm:mb-2 md:mb-3 text-blue-800 transition-all duration-300 ease-out group-hover:text-blue-900 group-hover:scale-110" />
                )}
                {/* Skill Text */}
                <span className="text-blue-800 text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight break-words hyphens-auto transition-all duration-300 ease-out group-hover:text-blue-900 group-hover:scale-95 px-1">
                  {skill.name}
                </span>
              </div>

              {/* Pressed state shadow */}
              <div className="absolute inset-0 shadow-inner opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-out pointer-events-none rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCard