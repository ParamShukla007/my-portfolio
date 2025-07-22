import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
const ContactVault = () => {
    const navigate = useNavigate();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);
    const [carouselVisible, setCarouselVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const [animateCards, setAnimateCards] = useState(false);
    const pageRef = useRef(null);

    // Initial load animations
    useEffect(() => {
        // Trigger animations on component mount
        setTimeout(() => setTitleVisible(true), 200);
        setTimeout(() => setCarouselVisible(true), 600);
        setTimeout(() => setContentVisible(true), 1000);
        setTimeout(() => setAnimateCards(true), 1400);
    }, []); // Empty dependency array means this runs once on mount

    useEffect(() => {
        const handleScroll = () => {
            // Scroll to top button visibility
            if (window.pageYOffset > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }

            // Keep animation states when scrolling to maintain visibility
            if (pageRef.current) {
                const rect = pageRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Check if component is visible
                const isInView = rect.top < windowHeight && rect.bottom > 0;
                
                // Reset animations if out of view, trigger them when in view
                if (!isInView) {
                    setTitleVisible(false);
                    setCarouselVisible(false);
                    setContentVisible(false);
                    setAnimateCards(false);
                } else {
                    // Retrigger animations in sequence when component comes into view
                    setTimeout(() => setTitleVisible(true), 200);
                    setTimeout(() => setCarouselVisible(true), 600);
                    setTimeout(() => setContentVisible(true), 1000);
                    setTimeout(() => setAnimateCards(true), 1400);
                }
            }

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // JSON data structure for project information
    const projectData = {
        projectHeader: {
            title: "Contact Vault",
            subtitle: "Full-Stack Secure Contact Management Platform"
        },
        links: {
            liveDemo: "https://contactvault-v2.onrender.com/",
            sourceCode: "https://github.com/ParamShukla007/PRODIGY_FS_04"
        },
        aboutProject: {
            id: "01",
            title: "About This Project",
            icon: "info",
            content: {
                projectName: "Contact Vault",
                description: "Contact Vault is a full-stack contact management system that I built using Spring Boot and WebSocket, focused on delivering secure contact storage and real-time communication. The backend is powered by Spring Boot and Spring Security for robust authentication and authorization, with Spring Data JPA and MySQL handling data persistence. Real-time messaging is implemented using WebSocket with STOMP and SockJS. User passwords are securely hashed using BCrypt. On the frontend, I used Thymeleaf for server-side rendering and Tailwind CSS to design a responsive, clean, and user-friendly interface. The application allows users to securely store, edit, and delete their contacts, update their profiles, and engage in real-time chat. I integrated Cloudinary to manage user profile photos in the cloud, added pagination to optimize page performance by reducing load time, and implemented a dynamic search functionality for easy contact filtering. MySQL Workbench was used for efficient database design and management. Deployed using Docker and Render.",
            }
        },
        keyFeatures: {
            id: "02", 
            title: "Key Features",
            icon: "features",
            content: {
                features: [
    {
        description: "Secure User Authentication & Role-Based Access - Implemented using Spring Security and BCrypt encryption to protect routes and restrict access based on user roles."
    },
    {
        description: "Real-Time Chat Functionality - Integrated WebSocket-based messaging with <250ms response time and zero message loss during testing."
    },
    {
        description: "Efficient Data Handling with Pagination & Search - Pagination improves performance by reducing data load; personalized search enhances user experience across contact records."
    },
    {
        description: "Cloud-Based Image Upload & Scalable Deployment - Cloudinary integration for image management; Docker containerization for simplified and portable deployment."
    }
]

            }
        },
        technologies: {
            id: "03",
            title: "Technologies",
            icon: "tech",
            content: {
                frontend: ["HTML5", "Tailwind CSS", "Thymeleaf"],
                backend: ["Spring Boot", "Spring Security", "Spring Data JPA", "WebSocket"],
                database: ["MySQL"],
                apis: [],
                deployment: ["Docker","Render"],
                tools: ["Git", "GitHub", "Postman", "VS Code"]
            }
        },
        timeline: {
            id: "04",
            title: "Timeline",
            icon: "calendar",
            content: {
                startDate: "May 2025",
                endDate: "June 2025"
            }
        }
    };

    const desktopImages = [
        '/contactvault/cv1.jpg',
        '/contactvault/cv2.jpg',
        '/contactvault/cv3.jpg',
        '/contactvault/cv4.jpg',
        '/contactvault/cv5.jpg',
        '/contactvault/cv6.jpg'
    ];

    const mobileImages = [
        '/contactvault/mc1.jpg',
        '/contactvault/mc2.jpg',
        '/contactvault/mc3.jpg',
        '/contactvault/mc4.jpg',
        '/contactvault/mc5.jpg',
        '/contactvault/mc1.jpg' // Reusing second mobile image for 10th slide
    ];

    const cards = [
        projectData.aboutProject,
        projectData.keyFeatures,
        projectData.technologies, 
        projectData.timeline
    ];
      const allTechnologies = [
    ...projectData.technologies.content.frontend,
    ...projectData.technologies.content.backend,
    ...projectData.technologies.content.database,
    ...projectData.technologies.content.apis,
    ...projectData.technologies.content.deployment,
    ...projectData.technologies.content.tools
  ]
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide functionality for images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === desktopImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000); // Change image every 6 seconds

        return () => clearInterval(interval);
    }, [desktopImages.length]);

    // Handle dot click
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Handle previous/next buttons
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? desktopImages.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === desktopImages.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-white py-16 p-2 md:p-4" ref={pageRef}>
            <div className="mx-2 md:mx-4">
                {/* Carousel Container */}
                <div className={`w-full transition-all duration-1000 ease-out transform ${
                    carouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}>
                    {/* Main Carousel */}
                    <div className="relative group">
                        {/* Carousel Wrapper */}
                        <div className="relative w-full h-[36rem] md:h-[42rem] lg:h-[45rem] overflow-hidden bg-blue-50 rounded-none shadow-2xl border-4 border-blue-800">
                            {/* Images carousel */}
                            <div 
                                className="flex transition-transform duration-500 ease-in-out h-full"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {desktopImages.map((desktopImage, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-full flex-shrink-0 relative flex items-center justify-center"
                                    >
                                        <picture>
                                            {/* Mobile image */}
                                            <source
                                                media="(max-width: 768px)"
                                                srcSet={mobileImages[index]}
                                            />
                                            {/* Desktop image */}
                                            <source
                                                media="(min-width: 769px)"
                                                srcSet={desktopImage}
                                            />
                                            <img 
                                                src={desktopImage}
                                                alt={`Money Overflow ${index + 1}`}
                                                className="h-full md:w-full md:h-full object-contain md:object-cover bg-blue-50"
                                            />
                                        </picture>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={goToPrevious}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                            >
                                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                            >
                                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-200">
                                <div 
                                    className="h-full bg-blue-800 transition-all duration-300"
                                    style={{ width: `${((currentIndex + 1) / desktopImages.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center space-x-3 mt-6 flex-wrap gap-y-2">
                            {desktopImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentIndex
                                            ? 'w-4 h-4 bg-blue-800 shadow-lg'
                                            : 'w-3 h-3 bg-blue-300 hover:bg-blue-500'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Slide Counter */}
                        <div className="text-center mt-4">
                            <span className="text-blue-600 font-medium text-sm">
                                {currentIndex + 1} / {desktopImages.length}
                            </span>
                        </div>
                    </div>

                    {/* Project Name - Below carousel */}
                    <div className={`mt-8 text-left transition-all duration-1000 delay-300 ease-out transform ${
                        titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                    }`}>
                        <h1 className="text-3xl md:text-5xl font-black text-blue-800 mb-2">
                            {projectData.projectHeader.title}
                        </h1>
                        <p className="text-blue-800 text-base md:text-lg font-medium">
                            {projectData.projectHeader.subtitle}
                        </p>
                    </div>
                </div>
                 {/* Action Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-start mt-8 transition-all duration-1000 delay-500 ease-out transform ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}>
                    <a 
                        href={projectData.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-800 hover:bg-blue-900 text-white px-6 md:px-8 py-3 rounded-none font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg w-fit"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                    </a>
                    <a 
                        href={projectData.links.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-6 md:px-8 py-3 rounded-none font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg w-fit"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        View Code
                    </a>
                </div>
                {/* Information Cards Grid - Two Column Layout */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-8 md:gap-12">
                        {/* About This Project Card - Blue theme */}
                        <div className={`relative group animate-on-scroll transition-all duration-700 transform ${animateCards ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                            {/* 3D Shadow Card */}
                            <div 
                                className="bg-white border-4 border-blue-800 absolute rounded-none"
                                style={{
                                    top: '12px',
                                    left: '12px',
                                    right: '-12px',
                                    bottom: '-12px',
                                    minHeight: '220px',
                                    zIndex: -1
                                }}
                            ></div>
                            
                            {/* Main Card */}
                            <div 
                                className="bg-blue-800 rounded-none p-4 md:p-6 lg:p-8 text-white relative overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-full"
                                style={{
                                    minHeight: '220px',
                                    boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.4)'
                                }}
                            >
                                {/* Card number and category */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="text-5xl md:text-6xl lg:text-7xl font-black opacity-90 mb-2 text-white">01</div>
                                        <div className="text-white text-sm md:text-base font-bold tracking-wider">
                                            PROJECT INFO
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 text-white">
                                        About This Project
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="text-blue-200 text-sm md:text-base lg:text-lg leading-relaxed opacity-90 mb-6">
                                    <p className="mb-4">{projectData.aboutProject.content.description}</p>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-12 opacity-10">
                                    <div className="flex space-x-1.5 md:space-x-2">
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Key Features Card - Blue theme */}
                        <div className={`relative group animate-on-scroll transition-all duration-700 delay-200 transform ${animateCards ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                            {/* 3D Shadow Card */}
                            <div 
                                className="bg-white border-4 border-blue-800 absolute rounded-none"
                                style={{
                                    top: '12px',
                                    left: '12px',
                                    right: '-12px',
                                    bottom: '-12px',
                                    minHeight: '220px',
                                    zIndex: -1
                                }}
                            ></div>
                            
                            {/* Main Card */}
                            <div 
                                className="bg-blue-800 rounded-none p-4 md:p-6 lg:p-8 text-white relative overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-full"
                                style={{
                                    minHeight: '220px',
                                    boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.4)'
                                }}
                            >
                                {/* Card number and category */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="text-5xl md:text-6xl lg:text-7xl font-black opacity-90 mb-2 text-white">03</div>
                                        <div className="text-white text-sm md:text-base font-bold tracking-wider">
                                            FEATURES
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 text-white">
                                        Key Features
                                    </h3>
                                </div>

                                {/* Features content */}
                                <div className="text-blue-200 text-base md:text-lg lg:text-xl leading-relaxed opacity-90 mb-6">
                                    <ul className="space-y-6">
                                        {projectData.keyFeatures.content.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-orange-400 mr-4 mt-1 text-2xl">•</span>
                                                <div className="flex-1">
                                                    <p className="text-blue-200 text-base md:text-lg lg:text-xl leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-12 opacity-10">
                                    <div className="flex space-x-1.5 md:space-x-2">
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 md:gap-12">
                        {/* Technologies Card - White theme */}
                        <div className={`relative group animate-on-scroll transition-all duration-700 transform ${animateCards ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                            {/* 3D Shadow Card */}
                            <div 
                                className="bg-blue-800 absolute rounded-none"
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
                                className="bg-white border-4 border-blue-800 rounded-none p-6 md:p-8 lg:p-12 text-blue-800 relative overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-full"
                                style={{
                                    minHeight: '300px',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 4px #1e40af'
                                }}
                            >
                                {/* Card number and category */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="text-5xl md:text-6xl lg:text-7xl font-black opacity-90 mb-2 text-blue-800">02</div>
                                        <div className="text-blue-800 text-sm md:text-base font-bold tracking-wider">
                                            TECH STACK
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 text-blue-800">
                                        Technologies
                                    </h3>
                                </div>

                                {/* Technologies Grid - Similar to SkillCard layout */}
      <div className="bg-white">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-px bg-gray-200">
          {allTechnologies.map((tech, index) => (
            <div
              key={index}
              className="relative group cursor-pointer min-w-0"
              style={{
                aspectRatio: '1.2/1',
                minHeight: '70px'
              }}
            >
              {/* Piano Key Effect - Background layers */}
              <div className="absolute inset-0 bg-white transition-all duration-150 ease-out group-hover:translate-y-1 group-hover:shadow-inner">
                {/* Top highlight (piano key bevel) */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-b from-gray-100 to-transparent"></div>
                {/* Left highlight */}
                <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-r from-gray-100 to-transparent"></div>
              </div>

              {/* Shadow effect when pressed */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out"></div>

              {/* Technology Content */}
              <div className="relative w-full h-full flex items-center justify-center text-center p-1 sm:p-2 md:p-3 transition-all duration-150 ease-out group-hover:translate-y-0.5">
                {/* Technology Text */}
                <span className="text-blue-800 text-xs sm:text-sm md:text-base font-bold leading-tight break-words hyphens-auto transition-all duration-150 ease-out group-hover:text-blue-900 group-hover:scale-95">
                  {tech}
                </span>
              </div>

              {/* Pressed state shadow */}
              <div className="absolute inset-0 shadow-inner opacity-0 group-hover:opacity-30 transition-opacity duration-150 ease-out pointer-events-none rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>
                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-12 opacity-10">
                                    <div className="flex space-x-1.5 md:space-x-2">
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-800 rounded-full"></div>
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-800 rounded-full"></div>
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-800 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Card - White theme */}
                       <div className={`relative group animate-on-scroll transition-all duration-700 delay-200 transform ${animateCards ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
    {/* 3D Shadow Card */}
    <div
        className="bg-blue-800 absolute rounded-none"
        style={{
            top: '12px',
            left: '12px',
            right: '-12px',
            bottom: '-12px',
            minHeight: '220px',
            zIndex: -1
        }}
    ></div>
    
    {/* Main Card */}
    <div
        className="bg-white border-4 border-blue-800 rounded-none p-6 md:p-8 lg:p-12 text-blue-800 relative overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-full"
        style={{
            minHeight: '220px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 4px #1e40af'
        }}
    >
        {/* Card number and category */}
        <div className="flex justify-between items-start mb-6">
            <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-black opacity-90 mb-2 text-blue-800">04</div>
                <div className="text-blue-800 text-sm md:text-base font-bold tracking-wider">
                    DURATION
                </div>
            </div>
        </div>

        {/* Title */}
        <div className="mb-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 text-blue-800">
                Timeline
            </h3>
        </div>

        {/* Timeline content */}
        <div className="text-blue-800 text-lg md:text-xl leading-relaxed">
            <div className="font-bold mb-4">
                {projectData.timeline.content.startDate} - {projectData.timeline.content.endDate}
            </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-12 opacity-10">
            <div className="flex space-x-1.5 md:space-x-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-800 rounded-full"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-800 rounded-full"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-800 rounded-full"></div>
            </div>
        </div>
    </div>
</div>
                    </div>
                </div>

            </div>
        </div>
        {/* Navigation Buttons */}
        <div className="fixed bottom-8 right-8 flex gap-4 z-50">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl group"
                aria-label="Go back"
            >
                <svg
                    className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
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
    );
};

export default ContactVault;