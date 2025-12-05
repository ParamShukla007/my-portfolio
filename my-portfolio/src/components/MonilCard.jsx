import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdEmail, MdSchool } from 'react-icons/md';
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { TbBrandLeetcode } from "react-icons/tb";

const MonilCard = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    title: false,
    about: false,
    resume: false,
    links: false,
    education: false,
    experience: false,
    projects: false,
    skills: false
  });
  
  // Refs for each section
  const monilCardRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const linksRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll button when user scrolls down 300px
      setShowScrollButton(window.scrollY > 300);

      // Helper function to check if element is in viewport
      const isElementInView = (element, offset = 0.7) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        return rect.top < windowHeight * offset;
      };

      // Check each section and update visibility
      setVisibleSections(prev => ({
        ...prev,
        title: isElementInView(monilCardRef.current, 0.8),
        about: isElementInView(aboutRef.current),
        resume: isElementInView(resumeRef.current),
        links: isElementInView(linksRef.current),
        education: isElementInView(educationRef.current),
        experience: isElementInView(experienceRef.current),
        projects: isElementInView(projectsRef.current),
        skills: isElementInView(skillsRef.current)
      }));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Navbar />
    <div className="w-full min-h-screen bg-white py-12" ref={monilCardRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white border-4 border-blue-800 rounded-none p-10 md:p-12 overflow-hidden shadow-lg">
          {/* Header Section */}
          <div className="w-full border-b-2 border-blue-100 pb-8">
            <div className={`transform transition-all duration-1000 ${
              visibleSections.title ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-3">
                PARAM SHUKLA
              </h1>
              <h2 className="text-2xl text-blue-800 mb-6">
                Mumbai, India
              </h2>
            </div>
          </div>

          <div className="w-full">
            <div className="space-y-10">
              
              {/* Description */}
              <div 
                ref={aboutRef}
                className={`pt-8 transform transition-all duration-1000 delay-300 ${
                  visibleSections.about ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}>
                <h3 className="text-3xl font-bold text-blue-800 mb-5">About Me</h3>
                <p className="text-xl text-blue-800 leading-relaxed">
                  Software Developer with expertise in full-stack development. 
                  Passionate about building scalable applications and solving complex problems through technology. 
                  Currently pursuing Computer Engineering at DJSCE with hands-on experience across multiple tech stacks.
                </p>
              </div>

              {/* Download Resume */}
              <div
                ref={resumeRef}
                className={`transform transition-all duration-1000 delay-500 ${
                  visibleSections.resume ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}>
                <h3 className="text-3xl font-bold text-blue-800 mb-5">Resume</h3>
                <a 
                  href="/param_resume_new.pdf" 
                  className="inline-block bg-blue-800 text-white px-10 py-5 rounded-none hover:bg-blue-700 transition-colors text-xl font-semibold shadow-lg hover:shadow-xl"
                  download
                >
                  Download Resume PDF
                </a>
              </div>

              {/* Links Section */}
              <div
                ref={linksRef}
                className={`transform transition-all duration-600 delay-500 ${
                  visibleSections.links ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}>
                <h3 className="text-3xl font-bold text-blue-800 mb-5">Connect With Me</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
                  <div className="flex items-center gap-3">
                    <MdEmail className="text-2xl text-blue-800" />
                    <a href="mailto:shuklaparam09022004@gmail.com" className="hover:text-blue-600 text-lg">
                      shuklaparam09022004@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaGithub className="text-2xl text-blue-800" />
                    <a href="https://github.com/ParamShukla007" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-lg">
                        github.com/ParamShukla007
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="text-2xl text-blue-800" />
                    <a href="https://linkedin.com/in/paramshukla" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-lg">
                        linkedin.com/in/paramshukla
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaInstagram className="text-2xl text-blue-800" />
                    <a href="https://www.instagram.com/shuklaparam9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-lg">
                      @shuklaparam9
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <TbBrandLeetcode className="text-2xl text-blue-800" />
                    <a href="https://leetcode.com/u/param009/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-lg">
                      leetcode.com/u/param009
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-2xl text-blue-800" />
                    <a href="https://wa.me/919820385988" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-lg">
                      +91 9820385988
                    </a>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div
                ref={educationRef}
                className={`transform transition-all duration-1000 delay-900 ${
                  visibleSections.education ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}>
                <h3 className="text-3xl font-bold text-blue-800 mb-5">Education</h3>
                <div className="space-y-5">
                  <div className="p-6 bg-blue-800">
                    <div className="flex items-start gap-4">
                      <MdSchool className="text-3xl text-white mt-1" />
                      <div>
                        <h4 className="font-bold text-white text-xl">Dwarkadas J. Sanghvi College of Engineering</h4>
                        <p className="text-white/90 font-semibold text-lg">Bachelor of Technology in Computer Engineering</p>
                        <p className="text-white/80 text-lg">2022 - 2026 | Mumbai, India</p>
                        <p className="text-white text-lg">CGPA: 9.10</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-blue-800">
                    <div className="flex items-start gap-4">
                      <MdSchool className="text-3xl text-white mt-1" />
                      <div>
                        <h4 className="font-bold text-white text-xl">Prakash Vidyalaya College</h4>
                        <p className="text-white/90 font-semibold text-lg">Higher Secondary Certificate (HSC)</p>
                        <p className="text-white/80 text-lg">2020 - 2022 | Mumbai, India</p>
                        <p className="text-white text-lg">MH CET: 98.929</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-blue-800">
                    <div className="flex items-start gap-4">
                      <MdSchool className="text-3xl text-white mt-1" />
                      <div>
                        <h4 className="font-bold text-white text-xl">Swami Vivekanand International School</h4>
                        <p className="text-white/90 font-semibold text-lg">Secondary Education Certificate (SSC)</p>
                        <p className="text-white/80 text-lg">2014 - 2020 | Mumbai, India</p>
                        <p className="text-white text-lg">Percentage: 92%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div
                ref={experienceRef}
                className={`transform transition-all duration-1000 delay-1100 ${
                  visibleSections.experience ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}>
                <h3 className="text-3xl font-bold text-blue-800 mb-5">Experience</h3>
                <div className="space-y-5">
                  <div className="p-6 bg-blue-800">
                    <h4 className="font-bold text-white text-xl">Prodigy InfoTech</h4>
                    <p className="text-white/90 font-semibold mb-2 text-lg">Full Stack Web Developer Intern</p>
                    <p className="text-white/80 mb-4 text-lg">June 2025 - July 2025 | Remote</p>
                    <ul className="list-disc list-inside space-y-2 text-white/90 text-lg">
                      <li>Architected and deployed two Spring Boot enterprise apps (Employee Management & Contact Manager) for enhanced data management.</li>
                      <li>Built real-time WebSocket chat with &lt;250ms latency and zero message loss in test scenarios.</li>
                      <li>Implemented Spring Security for authentication and role-based access, preventing all unauthorized access during testing.</li>
                      <li>Containerized applications with Docker, cutting deployment setup time significantly.</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-blue-800">
                    <h4 className="font-bold text-white text-xl">Rogue Code</h4>
                    <p className="text-white/90 font-semibold mb-2 text-lg">Software Developer Intern</p>
                    <p className="text-white/80 mb-4 text-lg">June 2024 - August 2024 | Mumbai, India</p>
                    <ul className="list-disc list-inside space-y-2 text-white/90 text-lg">
                      <li>Worked with Firebase Realtime Database for dynamic data storage and retrieval.</li>
                      <li>Applied Greedy and Backtracking concepts to optimize a scheduling algorithm, improving efficiency by ~62% across datasets.</li>
                      <li>Developed backend functionality using Node.js and Express.js with RESTful APIs for data editing and deletion.</li>
                      <li>Implemented Excel data export via xlsx, reducing manual reporting effort by 80%.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div
                ref={projectsRef}
                className={`transform transition-all duration-1000 delay-1300 ${
                  visibleSections.projects ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}>
                <h3 className="text-3xl font-bold text-blue-800 mb-5">Featured Projects</h3>
                <div className="space-y-5">
                  <div className="p-6 bg-blue-800">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-white text-xl mb-2">MoneyOverflow</h4>
                        <p className="text-white/90 text-lg">Financial Literacy platform</p>
                      </div>
                      <a 
                        href="https://moneyoverflow.vercel.app/" 
                        className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-50 transition-colors flex items-center gap-2 text-lg font-semibold"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Live Demo <FaExternalLinkAlt className="text-sm" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-blue-800">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-white text-xl mb-2">NurtureNest</h4>
                        <p className="text-white/90 text-lg">NGO operations management platform</p>
                      </div>
                      <a 
                        href="https://nfc-3-0-hack-panthers.vercel.app/" 
                        className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-50 transition-colors flex items-center gap-2 text-lg font-semibold"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Live Demo <FaExternalLinkAlt className="text-sm" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-blue-800">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-white text-xl mb-2">ContactVault</h4>
                        <p className="text-white/90 text-lg">Secure Contact Management platform</p>
                      </div>
                      <a 
                        href="https://contactvault-v2.onrender.com/" 
                        className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-50 transition-colors flex items-center gap-2 text-lg font-semibold"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Live Demo <FaExternalLinkAlt className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div
                ref={skillsRef}
                className={`transform transition-all duration-1000 delay-1500 ${
                  visibleSections.skills ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}>
                <h3 className="text-3xl font-bold text-blue-800 mb-5">Technical Skills</h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-blue-800 text-xl mb-2">Languages</h4>
                    <p className="text-blue-700 text-lg">C, Java, SQL, JavaScript, Python</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 text-xl mb-2">Frontend</h4>
                    <p className="text-blue-700 text-lg">React.js, Thymeleaf, HTML5, CSS3, Tailwind CSS</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 text-xl mb-2">Backend</h4>
                    <p className="text-blue-700 text-lg">Node.js, Express.js, Mongoose, Spring Boot, Spring Security, Spring Data JPA, JDBC, MongoDB, Mongoose</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 text-xl mb-2">Cloud & DevOps</h4>
                    <p className="text-blue-700 text-lg">Docker, Render, Vercel</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 text-xl mb-2">Tools & Technologies</h4>
                    <p className="text-blue-700 text-lg">Git, GitHub, Postman, VS Code</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll to Top Button */}
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-blue-800 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${
        showScrollButton ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
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
    
    <Footer />
    </>
  );
};

export default MonilCard;
