import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    // Close mobile menu after clicking
    setIsOpen(false)
  }

  return (
    <div className="p-2 md:p-4">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-blue-700 mx-2 md:mx-4 mt-2 md:mt-4">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Decorative dots - hidden on mobile */}
          <div className="hidden sm:flex flex-col space-y-1 mr-4">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
              <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
            </div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
              <div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
              <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
            </div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full opacity-70"></div>
            </div>
          </div>
                        
          {/* Logo and Text */}
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
              <div className="bg-white px-2 md:px-3 py-1 md:py-2 mr-2 md:mr-4">
                <span className="text-blue-700 font-black text-lg md:text-xl">PS</span>
              </div>
            </Link>
            <div className="flex flex-col">
              <span className="text-white text-xs md:text-sm font-black tracking-wider">PARAM</span>
              <span className="text-white text-xs md:text-sm font-black tracking-wider">SHUKLA</span>
            </div>
          </div>
        </div>
                  
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span>ABOUT</span>
          </a>
          <button 
            onClick={() => scrollToSection('projects')}
            className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span>PROJECTS</span>
          </button>
          <button 
            onClick={() => scrollToSection('work')}
            className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <span>WORK</span>
          </button>
          <Link to="/resume" className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            <span>RESUME</span>
          </Link>
          <a href="#" className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>MINIMAL</span>
          </a>
        </div>
                  
        {/* Desktop Get In Touch Button & Mobile Menu Button */}
        <div className="flex items-center">
          <Link 
            to="/contactme"
            className="hidden md:flex items-center space-x-2 bg-white hover:bg-gray-100 text-blue-700 px-6 py-2 font-black text-sm tracking-wider transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>GET IN TOUCH</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mx-2 mt-2 bg-blue-700 overflow-hidden">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="w-full flex items-center space-x-3 text-white text-sm font-bold tracking-wider py-2 hover:opacity-80 transition-opacity border-b border-blue-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span>ABOUT</span>
            </a>
            <button 
              onClick={() => scrollToSection('projects')}
              className="w-full flex items-center space-x-3 text-white text-sm font-bold tracking-wider py-2 hover:opacity-80 transition-opacity border-b border-blue-600"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <span>PROJECTS</span>
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="w-full flex items-center space-x-3 text-white text-sm font-bold tracking-wider py-2 hover:opacity-80 transition-opacity border-b border-blue-600"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <span>WORK</span>
            </button>
            <Link to="/resume" className="w-full flex items-center space-x-3 text-white text-sm font-bold tracking-wider py-2 hover:opacity-80 transition-opacity border-b border-blue-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              <span>RESUME</span>
            </Link>
            <a href="#" className="w-full flex items-center space-x-3 text-white text-sm font-bold tracking-wider py-2 hover:opacity-80 transition-opacity border-b border-blue-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>MINIMAL</span>
            </a>
            <div className="pt-2 pb-2">
              <Link 
                to="/contactme"
                className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-blue-700 px-6 py-2 font-black text-sm tracking-wider transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>GET IN TOUCH</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar