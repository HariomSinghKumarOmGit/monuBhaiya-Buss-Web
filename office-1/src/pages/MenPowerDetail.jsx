import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ChevronLeft, Users, MapPin, Award, Briefcase, CheckCircle } from 'lucide-react'
import { getMenPowerById } from '../data/menPowerData'
import Header from '../components/Header'

import ContactModal from '../components/ContactModal'

const MenPowerDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const service = getMenPowerById(id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#0A1128] mb-4">Service Not Found</h1>
          <p className="text-slate-500 mb-6">The service you're looking for doesn't exist.</p>
          <Link to="/" className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-24 pb-16 px-5">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-[#0A1128] mb-6 font-semibold transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Services
          </button>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video group">
                <img
                  src={service.images[currentImageIndex]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-orange-600 text-white text-sm font-bold rounded-lg">
                  {service.type}
                </div>

                {service.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? service.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#0A1128]" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === service.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#0A1128] rotate-180" />
                    </button>
                  </>
                )}
              </div>

              {service.images.length > 1 && (
                <div className="flex gap-3">
                  {service.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-orange-600 scale-105'
                          : 'border-transparent hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-black text-[#0A1128]">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Service Details */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6">
                <h1 className="text-3xl font-black text-[#0A1128] mb-2">{service.title}</h1>
                <p className="text-slate-500 font-medium">📍 {service.location}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Users className="w-4 h-4" />
                    <span>Team Size</span>
                  </div>
                  <p className="text-xl font-black text-[#0A1128]">{service.teamSize}</p>
                </div>

                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Award className="w-4 h-4" />
                    <span>Experience</span>
                  </div>
                  <p className="text-xl font-black text-[#0A1128]">{service.experience}</p>
                </div>

                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>Category</span>
                  </div>
                  <p className="text-base font-bold text-[#0A1128]">{service.type}</p>
                </div>

                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Availability</span>
                  </div>
                  <p className="text-base font-bold text-[#0A1128]">{service.availability}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-black text-[#0A1128]">Service Description</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>

              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full py-4 bg-orange-600 text-white text-lg font-black rounded-xl hover:bg-orange-700 transition-all shadow-xl hover:shadow-2xl active:scale-95"
              >
                Hire Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        title={`Hire ${service.title}`}
      />
    </div>
  )
}

export default MenPowerDetail
