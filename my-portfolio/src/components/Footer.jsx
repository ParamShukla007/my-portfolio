import { Github, Linkedin, MessageCircle, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaDiscord } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { likesRef, visitsRef, visitorCountRef, onValue, set, ref, database, get } from '../firebase';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [ipAddress, setIpAddress] = useState('•••.•••.•••.•••');
  const [location, setLocation] = useState('');
  const [isIpBlurred, setIsIpBlurred] = useState(true);
  const [visitorNumber, setVisitorNumber] = useState(0);
  
  const navigate = useNavigate();
  const currentLocation = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're already on the home page, just scroll
    if (currentLocation.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If we're on another page, navigate to home first, then scroll
      navigate('/');
      
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    }
  };

  const storeVisitorLocation = async (locationData) => {
    if (!locationData.city || !locationData.country_name) {
      console.error('Invalid location data:', locationData);
      return;
    }

    try {
      // First, get and update visitor count
      const countSnapshot = await get(visitorCountRef);
      const currentCount = countSnapshot.val() || 0;
      const newCount = currentCount + 1;
      await set(visitorCountRef, newCount);
      
      // Then store the visit data
      const timestamp = Date.now();
      const visitId = `visit_${timestamp}_${Math.random().toString(36).substr(2, 9)}`;
      const visitRef = ref(database, `visits/records/${visitId}`);
      
      await set(visitRef, {
        timestamp: new Date().toISOString(),
        timestampMs: timestamp,
        visitorNumber: newCount,
        location: {
          city: locationData.city,
          country: locationData.country_name,
          region: locationData.region,
          timezone: locationData.timezone
        }
      });
      
      console.log('Visit stored successfully:', { visitId, count: newCount });
      setVisitorNumber(newCount);
    } catch (error) {
      console.error('Error storing visit:', error);
    }
  };

  useEffect(() => {
    // Fetch IP address and location
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        setIpAddress(data.ip);
        setLocation(`${data.city}, ${data.country_name}`);
        storeVisitorLocation(data);
      })
      .catch(error => console.error('Error fetching IP:', error));

    // Load user's like status from localStorage
    const userHasLiked = localStorage.getItem('userHasLiked') === 'true';
    setHasLiked(userHasLiked);

    // Set up real-time listeners for likes and visitor count
    const unsubscribeLikes = onValue(likesRef, (snapshot) => {
      const data = snapshot.val();
      setLikes(data || 0);
    });

    const unsubscribeVisitors = onValue(visitorCountRef, (snapshot) => {
      const count = snapshot.val();
      setVisitorNumber(count || 0);
    });

    return () => {
      unsubscribeLikes();
      unsubscribeVisitors();
    };
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      set(likesRef, newLikes)
        .then(() => {
          setHasLiked(true);
          localStorage.setItem('userHasLiked', 'true');
        })
        .catch((error) => {
          console.error('Error updating likes:', error);
        });
    }
  };

  return (
    <footer className="bg-black text-white py-8 md:py-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Contact Information at Top */}
        <div className="text-center mt-8 md:mt-32 mb-12 md:mb-24 space-y-4 md:space-y-6">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-light mb-2">+91 982-0385-988</div>
            <div className="text-lg sm:text-2xl md:text-4xl font-tahoma font-thin break-all sm:break-normal">
              SHUKLAPARAM09022004 <span className="text-blue-700">@</span> GMAIL.COM
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Explore Section */}
          <div className="order-1 md:order-1">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white tracking-wider" style={{ fontFamily: 'Peter Sans, sans-serif' }}>EXPLORE</h3>
            <nav className="space-y-2 md:space-y-3" style={{ fontFamily: 'Peter Sans, sans-serif' }}>
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base">About</Link>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base text-left"
              >
                Work
              </button>
              <Link to="/resume" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base">Resume</Link>
              <Link to="/contactme" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base">Contact Me</Link>
              <Link to="/minimal" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base">Minimal</Link>
            </nav>
          </div>

          {/* Follow Me Section */}
          <div className="order-2 md:order-2">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white tracking-wider" style={{ fontFamily: 'Peter Sans, sans-serif' }}>FOLLOW ME</h3>
            <div className="space-y-2 md:space-y-3">
              <a href="https://github.com/ParamShukla007" target="_blank" 
                rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                <Github size={18} className="md:w-5 md:h-5" />
                <span>Github</span>
              </a>
              <a href="https://www.linkedin.com/in/paramshukla/" target="_blank" 
                rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                <Linkedin size={18} className="md:w-5 md:h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/ParamShukla8?t=TYuSQKicURYENh-kzPiN1g&s=08" target="_blank" 
                rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X</span>
              </a>
              <a href="https://www.instagram.com/shuklaparam9/?igsh=MWZrMzczZmdrd20ydg%3D%3D#" target="_blank" 
                rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                <FaInstagram size={18} className="md:w-5 md:h-5" />
                <span>Instagram</span>
              </a>
              <a href="https://wa.me/919820385988" target="_blank" 
                rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                <FaWhatsapp size={18} className="md:w-5 md:h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Your Session Section */}
          <div className="order-3 md:order-3">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white tracking-wider" style={{ fontFamily: 'Peter Sans, sans-serif' }}>YOUR SESSION</h3>
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm" style={{ fontFamily: 'Peter Sans, sans-serif' }}>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-400">Visitor No.</span>
                  <span className="text-white"># {visitorNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Your IP</span>
                  <span className="text-white transition-all duration-300 blur-sm hover:blur-none cursor-default">
                    {ipAddress}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Your Location</span>
                  <span className="text-white transition-all duration-300 blur-sm hover:blur-none cursor-default truncate ml-2">
                    {location ? `${location}` : '•••••••••'}
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Likes</span>
                <span className="text-white">{likes}</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-6">
              <button 
                onClick={handleLike}
                className={`flex items-center space-x-2 transition-colors duration-300 mb-3 md:mb-4 text-sm md:text-base ${
                  hasLiked ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
                disabled={hasLiked}
              >
                <Heart size={14} className={`md:w-4 md:h-4 ${hasLiked ? 'fill-current' : ''}`} />
                <span className="text-xs md:text-sm">{hasLiked ? 'Liked!' : 'Like this site'}</span>
              </button>
              
              <a href="/contactme" className="block">
                <div className="bg-white border border-black rounded-lg p-3 md:p-4 hover:bg-gray-50 transition-all duration-300">
                  <div className="text-black font-semibold mb-1 text-sm md:text-base">Ready to Collaborate?</div>
                  <div className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">Let's build something amazing together!</div>
                  <div className="text-black transition-colors duration-300">
                    <svg className="w-3 h-3 md:w-4 md:h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Brand Section - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block pt-8 md:pt-12">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <div className="text-8xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] 2xl:text-[24rem] font-bold tracking-wider text-center leading-none" style={{ fontFamily: 'Peter Sans, sans-serif', fontWeight: 'bold' }}>PARAM</div>
            </div>
          </div>
        </div>
       
      </div>
    </footer>
  );
}