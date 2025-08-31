import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Resume = () => {
  const [titleVisible, setTitleVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const resumeRef = useRef(null)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      // Scroll to top button visibility
      if (window.pageYOffset > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Animation triggers
      if (resumeRef.current) {
        const rect = resumeRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Check if component is visible (30% threshold for smoother trigger)
        const isInView = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3
        
        if (isInView) {
          // Staggered animations with delays
          setTimeout(() => setTitleVisible(true), 200)
          setTimeout(() => setContentVisible(true), 600)
        } else {
          setTitleVisible(false)
          setContentVisible(false)
        }
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]" ref={resumeRef}>
      <div className="max-w-7xl mx-auto p-4 md:p-8 pt-32">
        {/* Main Card */}
        <div 
          className={`relative group transform transition-all duration-1000 ease-out hover:-translate-y-2 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          {/* 3D Shadow Card */}
          <div 
            className="bg-blue-800 absolute rounded-none group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 ease-out"
            style={{
              top: '12px',
              left: '12px',
              right: '-12px',
              bottom: '-12px',
              minHeight: '400px',
              zIndex: -1
            }}
          ></div>

          {/* Main Content Card */}
          <div 
            className="bg-white rounded-none p-6 md:p-8 lg:p-12 text-blue-800 border-4 border-blue-800
              relative overflow-visible w-full max-w-none"
            style={{
              minHeight: '400px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 4px #1e40af'
            }}
          >
            {/* Main content */}
            <div className="flex flex-col gap-8">
              {/* Hero Section */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                  <h1 className="text-5xl md:text-7xl font-black mb-4">
                    PARAM<br />SHUKLA
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
                    SOFTWARE ENGINEER
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-xl font-medium">Mumbai, India</p>
                  <p className="text-xl font-medium">Remote Worldwide</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="inline-flex items-center gap-2 border-2 border-blue-800/30 px-4 py-2">
                <p className="text-blue-800 text-lg font-medium">
                  Node.js • Spring Boot • React.js
                </p>
              </div>

              </div>
          </div>
        </div>

        {/* Resume Actions - Outside Card */}
        <div className={`flex flex-col sm:flex-row justify-center gap-4 my-16 transition-all duration-1000 delay-500 transform ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <a
            href="/param_september_resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-3 font-bold text-sm tracking-wider transform transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Resume
          </a>
          <a
            href="https://drive.google.com/file/d/1gE8CTgcZ5zyVTwYHnzhDnjAEz4UVEDrt/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-3 font-bold text-sm tracking-wider transform transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Online
          </a>
        </div>

        {/* PDF Viewer Card - Only show on desktop */}
        {!isMobile && (
          <div className={`relative group transform transition-all duration-1000 ease-out ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            {/* 3D Shadow Card */}
            <div 
              className="bg-blue-800 absolute rounded-none group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 ease-out"
              style={{
                top: '12px',
                left: '12px',
                right: '-12px',
                bottom: '-12px',
                zIndex: -1
              }}
            ></div>

            {/* Main Content Card */}
            <div 
              className="bg-white rounded-none p-6 text-blue-800 border-4 border-blue-800
                relative overflow-hidden w-full max-w-none"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 4px #1e40af'
              }}
            >
              <object
                data="/param_september_resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH"
                type="application/pdf"
                className="w-full h-[800px]"
              >
                <p>Your browser doesn't support PDF viewing.</p>
              </object>
            </div>
          </div>
        )}


      </div>
    </div>
    {/* Scroll to Top Button */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 bg-blue-800 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 z-50 ${
        showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } hover:bg-blue-700 hover:scale-110 focus:outline-none`}
      aria-label="Scroll to top"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
    <Footer />
    </>
  )
}

export default Resume
