import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo3D from './Logo3D'
import ContactModal from './ContactModal'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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
        {/* Logo & Name Area - Clickable to Home */}
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-500/10 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <Logo3D />
          </div>
          
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-black tracking-tight text-[#0A1128] leading-tight">
              Vastu <span className="text-blue-600">Realty</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-px w-3 bg-blue-600"></span>
              <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-slate-400">
                Premium Estates
              </span>
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          
          {/* Construction Nav */}
          <div className="relative group">
            <Link 
              to="/construction/list"
              className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors py-4 inline-block"
            >
              Construction
            </Link>
            {/* Simple Hover Menu */}
            <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <div className="p-4 flex flex-col gap-3">
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">Residential</span>
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">Commercial</span>
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">Industrial</span>
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">Renovation</span>
              </div>
            </div>
          </div>

          {/* Buy/Rent Nav */}
          <div className="relative group">
            <Link 
              to="/buy-rent/list"
              className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors py-4 inline-block"
            >
              Buy/Rent
            </Link>
            {/* Simple Hover Menu */}
            <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <div className="p-4 flex flex-col gap-3">
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">2 BHK Apartments</span>
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">3 BHK Apartments</span>
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">Villas</span>
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">Penthouses</span>
              </div>
            </div>
          </div>

          {/* Men Power Nav */}
          <div className="relative group">
            <Link 
              to="/men-power/list"
              className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors py-4 inline-block"
            >
              Men Power
            </Link>
            {/* Simple Hover Menu */}
            <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <div className="p-4 flex flex-col gap-3">
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">Engineers</span>
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">Laborers</span>
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">Supervisors</span>
                <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer">Electricians</span>
              </div>
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-[#0A1128] hover:text-blue-600 transition-colors">
            Login
          </button>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="px-6 py-2.5 bg-[#0A1128] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-blue-900/10 active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        title="Contact Vastu Realty"
      />
    </nav>
  )
}

export default Header
