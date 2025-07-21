import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'
import SkillCard from '../components/SkillCard'
import EducationCard from '../components/EducationCard'
import Footer from '../components/Footer'
import AboutCard from '../components/AboutCard'
import Start from '../components/Start'

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Show animation for 5 seconds before starting fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Complete loading 0.5 seconds after fade starts
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add effect to prevent horizontal scrolling
  useEffect(() => {
    // Apply styles to prevent horizontal scroll
    document.body.style.overflowX = 'hidden'
    document.documentElement.style.overflowX = 'hidden'
    document.body.style.maxWidth = '100%'
    document.documentElement.style.maxWidth = '100%'

    // Cleanup function to restore original styles when component unmounts
    return () => {
      document.body.style.overflowX = ''
      document.documentElement.style.overflowX = ''
      document.body.style.maxWidth = ''
      document.documentElement.style.maxWidth = ''
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
    {isLoading ? (
      <Start fadeOut={fadeOut} />
    ) : (
      <>
        <Navbar />
        <div className="min-h-screen bg-white p-4 md:p-8 max-w-full overflow-x-hidden">
          <AboutCard />

      <SkillCard />
      
      {/* Work Section */}
      <div id="work">
        <WorkCard />
      </div>
      
      {/* Projects Section */}
      <div id="projects">
        <ProjectCard />
      </div>
      
      <EducationCard/>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
    <Footer />
        </>
      )}
    </>
  )
}

export default Home