import React, { useState, useRef, useEffect } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Initialize EmailJS
emailjs.init("9YQhYYjH-HmQVEJkv");

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    title: '',
    message: ''
  });

  const formRef = useRef(null);
  const pageRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' }); // For success/error messages
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      // Scroll to top button visibility
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Animation triggers
      if (pageRef.current) {
        const rect = pageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if component is visible (30% threshold for smoother trigger)
        const isInView = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;
        
        if (isInView) {
          // Staggered animations with delays
          setTimeout(() => setTitleVisible(true), 200);
          setTimeout(() => setContentVisible(true), 600);
          setTimeout(() => setFormVisible(true), 1000);
        } else {
          setTitleVisible(false);
          setContentVisible(false);
          setFormVisible(false);
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    
    try {
      // Using emailjs.send instead of sendForm for better control over the parameters
      await emailjs.send(
        'service_hnxffvg',
        'template_p4uk7qv',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: formData.title,
          organisation: formData.organisation
        },
        '9YQhYYjH-HmQVEJkv'
      );
      
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        organisation: '',
        title: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white p-4 md:p-6" ref={pageRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-stretch transition-all duration-1000 ease-out transform ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          {/* Left Side - Image and Text */}
          <div className="flex-1 lg:max-w-lg">
            {/* Image Placeholder */}
            <div className="w-full h-80 lg:h-[32rem] bg-gray-200 border-4 border-blue-800 flex items-center justify-center mb-8">
              <div className="text-blue-800 text-center">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <p className="text-blue-800 font-medium opacity-50">Image Placeholder</p>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black text-blue-800">Let's Collaborate</h2>
              <p className="text-blue-600 text-lg leading-relaxed">
                I'm always excited about new opportunities and collaborations. Whether you have a project in mind, want to discuss technology, or just want to say hello, feel free to reach out!
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-800 text-white font-bold py-3 px-6 rounded-none transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-start gap-3">
                  <Mail size={20} className="flex-shrink-0" />
                  <div className="flex flex-col items-start">
                    <div>Email</div>
                    <div className="text-sm opacity-90">Drop me a line</div>
                  </div>
                </button>
                <a 
                  href="https://www.linkedin.com/in/paramshukla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-800 text-white font-bold py-3 px-6 rounded-none transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-start gap-3">
                  <Linkedin size={20} className="flex-shrink-0" />
                  <div className="flex flex-col items-start">
                    <div>LinkedIn</div>
                    <div className="text-sm opacity-90">Let's connect</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="flex-1 max-w-2xl w-full">
            {/* Contact Form Card */}
            <div className={`relative group transition-all duration-1000 ease-out transform ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}>
              {/* 3D Shadow Card */}
              <div 
                className="bg-blue-800 absolute rounded-none transition-all duration-300"
                style={{
                  top: '12px',
                  left: '12px',
                  right: '-12px',
                  bottom: '-12px',
                  zIndex: -1
                }}
              ></div>
              
              {/* Main Card */}
              <div className="bg-white border-4 border-blue-800 rounded-none p-6 lg:p-8 text-blue-800 relative overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-full"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 4px #1e40af'
                }}>
                <div className="space-y-4">
                  {/* Card Header */}
                  <div>
                    <div className="text-4xl md:text-5xl font-black opacity-90 mb-1 transition-all duration-700">01</div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-black mb-2">
                      You've come this far, might as well say hi!
                    </h2>
                    <p className="text-blue-600 text-sm opacity-90">
                      I'll get back to you as soon as possible, usually within 24-48 hours.
                    </p>
                  </div>

                  {/* Contact Form */}
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    {status.message && (
                      <div className={`p-4 rounded-sm border ${
                        status.type === 'success' 
                          ? 'bg-green-50 border-green-200 text-green-800'
                          : 'bg-red-50 border-red-200 text-red-800'
                      }`}>
                        {status.message}
                      </div>
                    )}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-blue-800 mb-1">
                        Name<span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-blue-800 bg-transparent text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-800 mb-1">
                        Email<span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-blue-800 bg-transparent text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="organisation" className="block text-sm font-medium text-blue-800 mb-1">
                        Organisation
                      </label>
                      <input
                        type="text"
                        id="organisation"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-blue-800 bg-transparent text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="Your company or organisation"
                      />
                    </div>

                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-blue-800 mb-1">
                        Subject<span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-blue-800 bg-transparent text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-blue-800 mb-1">
                        Message<span className="text-orange-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-3 py-2 border-2 border-blue-800 bg-transparent text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-800 text-white font-bold py-3 px-6 rounded-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl hover:bg-blue-700"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>

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
    </div>
    
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
    
    <Footer />
    </>
  );
};

export default ContactMe;