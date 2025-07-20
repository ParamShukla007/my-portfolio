import { Github, Linkedin, MessageCircle, Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function VintageFooter() {
  return (
    <footer className="bg-black text-white py-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ">
      <div className="max-w-7xl mx-auto">
        {/* Centered Contact Information at Top */}
        <div className="text-center mt-32 mb-24 space-y-6">
          <div className="text-center">
            <div className="text-4xl font-light mb-2">+91 982-0385-988</div>
            <div className="text-4xl font-tahoma font-thin">
              SHUKLAPARAM09022004 <span className="text-blue-700">@</span> GMAIL.COM
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Explore Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">Explore</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Home</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">About</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Resume</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Minimal</a>
            </nav>
          </div>

          {/* Follow Me Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Follow Me</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <Github size={20} />
                <span>Github</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <MessageCircle size={20} />
                <span>Discord</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <Phone size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Your Session Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">Your Session</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Visitor</span>
                <span className="text-white">#390</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Your IP</span>
                <span className="text-white">•••.•••.•••.•••</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Likes</span>
                <span className="text-white">22</span>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 mb-4">
                <Heart size={16} />
                <span className="text-sm">Like this site</span>
              </button>
              
              <div className="bg-gray-900 border border-cyan-400 rounded-lg p-4">
                <div className="text-cyan-400 font-semibold mb-1">Ready to Collaborate?</div>
                <div className="text-xs text-gray-300 mb-3">Let's build something cool!</div>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Section */}
        <div className="pt-12">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <div className="text-12xl sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-bold tracking-wider text-center" style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: 'bold' }}>PARAM</div>
            </div>
          </div>
          
      
        </div>
       
      </div>
    </footer>
  );
}