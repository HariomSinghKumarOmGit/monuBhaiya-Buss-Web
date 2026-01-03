import React, { useState, useEffect } from 'react'
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, ChevronUp, ChevronDown } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isExpanded, setIsExpanded] = useState(isHomePage)

  // Auto-collapse/expand based on route
  useEffect(() => {
    setIsExpanded(isHomePage)
  }, [location.pathname, isHomePage])

  return (
    <footer className="bg-[#0f172a] text-slate-300 transition-all duration-500">
      {/* Collapsible Main Content */}
      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-bold">Vastu Realty</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Price Trends</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Post your Property</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Real Estate Investments</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Builders in India</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-bold">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers with us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Request Info</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Feedback</a></li>
              </ul>
            </div>

            {/* Partners Column */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-bold">Our Partners</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Housing.com</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Proptiger.com</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Makaan.com</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Realestate.com.au</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Realtor.com</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-bold">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Toll Free - 1800 41 99099</p>
                    <p className="text-xs text-slate-500 mt-1">9:30 AM to 6:30 PM (Mon-Sun)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <a href="mailto:feedback@vasturealty.com" className="hover:text-blue-400 transition-colors">feedback@vasturealty.com</a>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-white font-bold mb-4">Connect with us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group">
                    <Facebook className="w-5 h-5 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group">
                    <Youtube className="w-5 h-5 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors group">
                    <Twitter className="w-5 h-5 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors group">
                    <Instagram className="w-5 h-5 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Toggle Bar */}
      <div className="border-t border-slate-800 bg-[#0f172a] relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-slate-500 flex items-center gap-4">
              <span>All trademarks are the property of their respective owners.</span>
              <span className="hidden md:inline text-slate-700">|</span>
              <span>All rights reserved - Vastu Realty Pvt. Ltd.</span>
            </div>
            
            <div className="flex items-center gap-6">
               {/* App Download Buttons (Simplified for collapsed view coherence) */}
               <div className={`flex gap-4 transition-opacity duration-300 ${!isExpanded && !isHomePage ? 'opacity-0 hidden md:flex md:opacity-100' : 'opacity-100'}`}>
                   {/* Google Play Button Replica */}
                   <button className="flex items-center gap-3 bg-black border border-slate-700 rounded-lg px-4 py-2 hover:border-slate-500 transition-colors scale-90 origin-right">
                      <div className="w-5 h-5">
                        <svg viewBox="0 0 24 24" className="fill-current text-white"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.65C5.09,22.23 3.96,21.41 3.5,20.37L15.3,13.6L16.81,15.12M20.17,11.5L16.81,8.88L15.3,10.4L20.17,11.5M16.81,8.88L6.05,2.35C5.09,1.77 3.96,2.59 3.5,3.63L16.81,8.88Z" /></svg>
                      </div>
                      <div className="text-left">
                        <div className="text-[9px] uppercase font-bold leading-none">Get it on</div>
                        <div className="text-xs font-bold text-white leading-none mt-0.5">Google Play</div>
                      </div>
                   </button>

                   {/* App Store Button Replica */}
                   <button className="flex items-center gap-3 bg-black border border-slate-700 rounded-lg px-4 py-2 hover:border-slate-500 transition-colors scale-90 origin-right">
                      <div className="w-5 h-5">
                        <svg viewBox="0 0 24 24" className="fill-current text-white"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.45C5.62,7.91 7.2,6.97 8.74,6.96C10.1,6.97 11.12,7.74 12,7.74C12.8,7.74 13.9,6.66 15.54,6.66C16.14,6.66 17.89,6.91 18.91,8.39C15.93,10.06 16.63,14.61 19.46,15.82C19.4,16.29 19.33,16.71 19.14,17.2C18.96,17.65 18.25,19.4 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" /></svg>
                      </div>
                      <div className="text-left">
                        <div className="text-[9px] uppercase font-bold leading-none">Download on the</div>
                        <div className="text-xs font-bold text-white leading-none mt-0.5">App Store</div>
                      </div>
                   </button>
               </div>

               {/* Collapse/Expand Toggle - Not shown on Home Page */}
               {!isHomePage && (
                 <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all hover:scale-110 active:scale-95"
                  title={isExpanded ? "Collapse Footer" : "Expand Footer"}
                 >
                   {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                 </button>
               )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
