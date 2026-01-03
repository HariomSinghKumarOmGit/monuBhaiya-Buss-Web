import React, { useState, useEffect } from 'react'
import Logo3D from './Logo3D'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl py-3 shadow-lg shadow-blue-900/5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Name Area */}
        <div className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-500/10 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <Logo3D />
          </div>
          
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-black tracking-tight text-[#0A1128] leading-tight">
              Vastu <span className="text-blue-600">Reality</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-px w-3 bg-blue-600"></span>
              <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-slate-400">
                Premium Estates
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {['Construction', 'Buy/Rent', 'Men Power'].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-[#0A1128] hover:text-blue-600 transition-colors">
            Login
          </button>
          <button className="px-6 py-2.5 bg-[#0A1128] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-blue-900/10 active:scale-95">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
