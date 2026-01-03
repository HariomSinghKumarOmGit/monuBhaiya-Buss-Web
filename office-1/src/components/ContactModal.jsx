import React from 'react'
import { X, Mail, Phone, MessageSquare, User } from 'lucide-react'

const ContactModal = ({ isOpen, onClose, title = "Contact Us" }) => {
  if (!isOpen) return null

  const contactName = "Prabhat kr jha"
  const contactNumber = "9142583132"
  const contactEmail = "prabhat58236@gmail.com"

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100 opacity-100">
        
        {/* Header */}
        <div className="bg-[#0f172a] p-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors bg-white/10 p-1.5 rounded-full hover:bg-white/20"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-600 mb-2">
              <User size={32} />
            </div>
            <h4 className="text-xl font-bold text-slate-800">{contactName}</h4>
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">Property & Service Manager</p>
          </div>

          <div className="space-y-3">
            {/* Email Action */}
            <a 
              href={`mailto:${contactEmail}?subject=Inquiry from Website`}
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-800">Send Email</p>
                <p className="text-xs text-slate-500 truncate">{contactEmail}</p>
              </div>
            </a>

            {/* Call Action */}
            <a 
              href={`tel:+91${contactNumber}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-green-100 hover:bg-green-50/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-800">Call Now</p>
                <p className="text-xs text-slate-500">+91 {contactNumber}</p>
              </div>
            </a>

            {/* SMS Action */}
            <a 
              href={`sms:+91${contactNumber}?body=Hi, I am interested in your services.`}
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-purple-100 hover:bg-purple-50/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageSquare size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-800">Send SMS</p>
                <p className="text-xs text-slate-500">Fastest Response</p>
              </div>
            </a>
          </div>

          <p className="text-center text-xs text-slate-400">
            Clicking buttons will open your default apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
