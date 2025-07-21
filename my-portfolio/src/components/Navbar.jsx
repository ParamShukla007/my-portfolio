import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { 
  User, 
  Briefcase, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  Award,
  FolderOpen
} from 'lucide-react'
import { IoHomeOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    // If we're already on the home page, just scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // If we're on another page, navigate to home first, then scroll
      navigate('/')
      
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 300) // Adjust timeout as needed
    }
    // Close mobile menu after clicking
    setIsOpen(false)
  }

  return (
    <>
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
            <Link to="/" className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity">
              <IoHomeOutline className="w-4 h-4" />
              <span>HOME</span>
            </Link>
            <a href="#" className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity">
              <User className="w-4 h-4" />
              <span>ABOUT</span>
            </a>
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity cursor-pointer"
            >
              <FolderOpen className="w-4 h-4" />
              <span>PROJECTS</span>
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              <span>WORK</span>
            </button>
            <Link to="/resume" className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity">
              <FileText className="w-4 h-4" />
              <span>RESUME</span>
            </Link>
            <Link href="/minimal" className="flex items-center space-x-2 text-white text-sm font-bold tracking-wider hover:opacity-80 transition-opacity">
              <FileText className="w-4 h-4" />
              <span>MINIMAL</span>
            </Link>
          </div>
                    
          {/* Desktop Get In Touch Button & Mobile Menu Button */}
          <div className="flex items-center">
            <Link 
              to="/contactme"
              className="hidden md:flex items-center space-x-2 bg-white hover:bg-gray-100 text-blue-700 px-6 py-2 font-black text-sm tracking-wider transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>GET IN TOUCH</span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Mobile Menu Sliding Panel */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-blue-700 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="px-6 py-6">
          {/* Menu Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-lg font-bold tracking-wider">MENU</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white p-1 hover:opacity-80"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="space-y-4">
            <Link
              to="/" 
              className="flex items-center space-x-4 text-white text-base font-bold tracking-wider py-3 hover:opacity-80 transition-opacity border-b border-blue-600"
              onClick={() => setIsOpen(false)}
            >
              <IoHomeOutline className="w-5 h-5" />
              <span>HOME</span>
            </Link>
            <a 
              href="#" 
              className="flex items-center space-x-4 text-white text-base font-bold tracking-wider py-3 hover:opacity-80 transition-opacity border-b border-blue-600"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-5 h-5" />
              <span>ABOUT</span>
            </a>
            <button 
              onClick={() => scrollToSection('projects')}
              className="w-full flex items-center space-x-4 text-white text-base font-bold tracking-wider py-3 hover:opacity-80 transition-opacity border-b border-blue-600"
            >
              <FolderOpen className="w-5 h-5" />
              <span>PROJECTS</span>
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="w-full flex items-center space-x-4 text-white text-base font-bold tracking-wider py-3 hover:opacity-80 transition-opacity border-b border-blue-600"
            >
              <Briefcase className="w-5 h-5" />
              <span>WORK</span>
            </button>
            <Link 
              to="/resume" 
              className="flex items-center space-x-4 text-white text-base font-bold tracking-wider py-3 hover:opacity-80 transition-opacity border-b border-blue-600"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-5 h-5" />
              <span>RESUME</span>
            </Link>
            <Link 
              to="/minimal" 
              className="flex items-center space-x-4 text-white text-base font-bold tracking-wider py-3 hover:opacity-80 transition-opacity border-b border-blue-600"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-5 h-5" />
              <span>MINIMAL</span>
            </Link>
          </div>
          
          {/* Get In Touch Button */}
          <div className="pt-6">
            <Link 
              to="/contactme"
              className="w-full flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-blue-700 px-6 py-4 font-black text-base tracking-wider transition-colors rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="w-5 h-5" />
              <span>GET IN TOUCH</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar