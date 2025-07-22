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
  const [positions, setPositions] = useState([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const skillCardRef = useRef(null)
  const animationRef = useRef(null)

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
    { name: "Mongoose", icon: SiMongoose },
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

  // Mobile: 4 columns 6 rows, Desktop: 12x2 grid
  const MOBILE_COLS = 4
  const MOBILE_ROWS = 6
  const DESKTOP_COLS = 12
  const DESKTOP_ROWS = 2

  const COLS = isMobile ? MOBILE_COLS : DESKTOP_COLS
  const ROWS = isMobile ? MOBILE_ROWS : DESKTOP_ROWS
  const TOTAL_POSITIONS = COLS * ROWS

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Initialize positions
  useEffect(() => {
    if (isMobile) {
      // Simple 4x6 grid for mobile - no animation
      const initPositions = []
      for (let i = 0; i < Math.min(allSkills.length, 24); i++) {
        const row = Math.floor(i / 4)
        const col = i % 4
        initPositions.push({ 
          row, 
          col, 
          skillIndex: i,
          x: col * 100,
          y: row * 100
        })
      }
      setPositions(initPositions)
    } else {
      // Desktop: circular flow animation
      const initPositions = []
      for (let i = 0; i < allSkills.length; i++) {
        const pos = i % TOTAL_POSITIONS
        let row, col
        
        if (pos < COLS) {
          row = 0
          col = pos
        } else {
          row = 1
          col = COLS - 1 - (pos - COLS)
        }
        
        initPositions.push({ 
          row, 
          col, 
          skillIndex: i,
          x: col * 100,
          y: row * 100
        })
      }
      setPositions(initPositions)
    }
  }, [isMobile])

  // Animation only for desktop
  useEffect(() => {
    if (!isMobile && skillsVisible && positions.length > 0 && isAnimating) {
      const animate = () => {
        setPositions(prevPositions => {
          return prevPositions.map(pos => {
            let { row, col, skillIndex, x, y } = pos
            
            if (row === 0) {
              x += 0.5
              if (x >= (COLS - 1) * 100) {
                row = 1
                col = COLS - 1
                x = (COLS - 1) * 100
                y = 100
              } else {
                col = Math.floor(x / 100)
              }
            } else {
              x -= 0.5
              if (x <= 0) {
                row = 0
                col = 0
                x = 0
                y = 0
              } else {
                col = Math.floor(x / 100)
              }
            }
            
            return { row, col, skillIndex, x, y }
          })
        })
        
        animationRef.current = requestAnimationFrame(animate)
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [skillsVisible, positions.length, isAnimating, isMobile])

  // Start animation for desktop only
  useEffect(() => {
    if (!isMobile && skillsVisible) {
      setTimeout(() => setIsAnimating(true), 1000)
    } else {
      setIsAnimating(false)
    }
  }, [skillsVisible, isMobile])

  useEffect(() => {
    const handleScroll = () => {
      if (skillCardRef.current) {
        const rect = skillCardRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        const isInView = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3
        setIsVisible(isInView)
        
        if (isInView) {
          setTimeout(() => setTitleVisible(true), 200)
          setTimeout(() => setSubtitleVisible(true), 600)
          setTimeout(() => setSkillsVisible(true), 1000)
        } else {
          setTitleVisible(false)
          setSubtitleVisible(false)
          setSkillsVisible(false)
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderGrid = () => {
    if (isMobile) {
      // Simple mobile grid - no animations
      return allSkills.slice(0, 24).map((skill, index) => {
        return (
          <div
            key={`skill-${index}`}
            className="skill-cell group cursor-pointer bg-white transition-all duration-300 ease-in-out hover:bg-gray-50 border border-gray-200 flex flex-col items-center justify-center p-2 relative"
            style={{
              aspectRatio: '1/1',
              minHeight: '80px'
            }}
          >
            {/* Piano Key Effect */}
            <div className="absolute inset-0 bg-white transition-all duration-300 ease-out group-hover:translate-y-1 group-hover:shadow-inner">
              {/* Primary highlights */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-white via-gray-50 to-transparent opacity-80"></div>
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-r from-white via-gray-50 to-transparent opacity-80"></div>
              {/* Secondary highlights */}
              <div className="absolute top-[2px] left-[2px] right-0 h-0.5 bg-gradient-to-b from-white to-transparent opacity-60"></div>
              <div className="absolute top-[2px] left-[2px] bottom-0 w-0.5 bg-gradient-to-r from-white to-transparent opacity-60"></div>
              {/* Additional subtle highlights */}
              <div className="absolute top-1 left-0 right-0 h-[1px] bg-gradient-to-b from-gray-50 to-transparent opacity-40"></div>
              <div className="absolute top-0 left-1 bottom-0 w-[1px] bg-gradient-to-r from-gray-50 to-transparent opacity-40"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>

            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-1 transition-all duration-300 ease-out group-hover:translate-y-0.5">
              {skill.icon && (
                <skill.icon className="w-6 h-6 mb-1 text-blue-800 transition-all duration-300 ease-out group-hover:text-blue-900 group-hover:scale-110" />
              )}
              <span className="text-blue-800 text-xs font-bold leading-tight break-words hyphens-auto transition-all duration-300 ease-out group-hover:text-blue-900 group-hover:scale-95">
                {skill.name}
              </span>
            </div>

            <div className="absolute inset-0 shadow-inner opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-out pointer-events-none rounded-sm"></div>
          </div>
        )
      })
    } else {
      // Desktop animated grid
      const gridCells = []
      
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          gridCells.push(
            <div
              key={`empty-${row}-${col}`}
              className="skill-cell relative bg-white border border-gray-200"
              style={{
                aspectRatio: '1/1',
                minHeight: '80px'
              }}
            />
          )
        }
      }
      
      const skillElements = positions.map((pos, index) => {
        const skill = allSkills[pos.skillIndex]
        
        return (
          <div
            key={`skill-${pos.skillIndex}`}
            className="absolute skill-cell group cursor-pointer bg-white transition-all duration-300 ease-in-out hover:bg-gray-50 border border-gray-200"
            style={{
              aspectRatio: '1/1',
              minHeight: '80px',
              left: `${(pos.x / COLS)}%`,
              top: `${(pos.y / ROWS)}%`,
              width: `${100 / COLS}%`,
              height: `${100 / ROWS}%`,
              transform: 'translate(0, 0)',
              transition: isAnimating ? 'none' : 'all 0.3s ease-out'
            }}
          >
            <div className="absolute inset-0 bg-white transition-all duration-300 ease-out group-hover:translate-y-1 group-hover:shadow-inner">
              {/* Primary highlights */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-white via-gray-50 to-transparent opacity-80"></div>
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-r from-white via-gray-50 to-transparent opacity-80"></div>
              {/* Secondary highlights */}
              <div className="absolute top-[2px] left-[2px] right-0 h-0.5 bg-gradient-to-b from-white to-transparent opacity-60"></div>
              <div className="absolute top-[2px] left-[2px] bottom-0 w-0.5 bg-gradient-to-r from-white to-transparent opacity-60"></div>
              {/* Additional subtle highlights */}
              <div className="absolute top-1 left-0 right-0 h-[1px] bg-gradient-to-b from-gray-50 to-transparent opacity-40"></div>
              <div className="absolute top-0 left-1 bottom-0 w-[1px] bg-gradient-to-r from-gray-50 to-transparent opacity-40"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>

            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-1 sm:p-2 md:p-3 transition-all duration-300 ease-out group-hover:translate-y-0.5">
              {skill.icon && (
                <skill.icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-1 sm:mb-2 text-blue-800 transition-all duration-300 ease-out group-hover:text-blue-900 group-hover:scale-110" />
              )}
              <span className="text-blue-800 text-xs sm:text-sm md:text-base font-bold leading-tight break-words hyphens-auto transition-all duration-300 ease-out group-hover:text-blue-900 group-hover:scale-95 px-1">
                {skill.name}
              </span>
            </div>

            <div className="absolute inset-0 shadow-inner opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-out pointer-events-none rounded-sm"></div>
          </div>
        )
      })
      
      return [...gridCells, ...skillElements]
    }
  }

  return (
    <div className="bg-white" ref={skillCardRef}>
      {/* Header Section with Animation */}
      <div className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-800 mb-2 sm:mb-4 transition-all duration-1500 ease-out transform ${
          titleVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-16 scale-90'
        }`}>
          SKILL WALL
        </h2>
        
        <p className={`text-blue-700 font-medium text-base sm:text-lg md:text-xl lg:text-2xl transition-all duration-1300 ease-out transform ${
          subtitleVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          Skills that I have built block by block
        </p>
      </div>

      {/* Skills Grid */}
      <div className={`bg-white text-white pb-8 sm:pb-12 md:pb-16 transition-all duration-1000 ease-out transform ${
        skillsVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        <div 
          className={`${isMobile ? 'grid grid-cols-4 gap-0' : 'relative bg-white'}`}
          style={!isMobile ? {
            display: 'grid',
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            aspectRatio: `${COLS}/${ROWS}`
          } : {}}
          onMouseEnter={() => !isMobile && setIsAnimating(false)}
          onMouseLeave={() => !isMobile && setIsAnimating(true)}
        >
          {renderGrid()}
        </div>
      </div>
    </div>
  )
}

export default SkillCard
