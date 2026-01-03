import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ChevronLeft, Building2, MapPin, Calendar, Layers, CheckCircle } from 'lucide-react'
import { getConstructionById } from '../data/constructionData'
import Header from '../components/Header'

import ContactModal from '../components/ContactModal'

const ConstructionDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = getConstructionById(id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#0A1128] mb-4">Project Not Found</h1>
          <p className="text-slate-500 mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/" className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all">
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
            Back to Projects
          </button>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video group">
                <img
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-green-600 text-white text-sm font-bold rounded-lg">
                  {project.type}
                </div>

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#0A1128]" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#0A1128] rotate-180" />
                    </button>
                  </>
                )}
              </div>

              {project.images.length > 1 && (
                <div className="flex gap-3">
                  {project.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-green-600 scale-105'
                          : 'border-transparent hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-black text-[#0A1128]">Project Features</h3>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-teal-500 text-white text-sm font-semibold rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Project Details */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6">
                <h1 className="text-3xl font-black text-[#0A1128] mb-2">{project.title}</h1>
                <p className="text-slate-500 font-medium">📍 {project.location}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Floors</span>
                  </div>
                  <p className="text-xl font-black text-[#0A1128]">{project.floors} Floors</p>
                </div>

                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Layers className="w-4 h-4" />
                    <span>Total Area</span>
                  </div>
                  <p className="text-xl font-black text-[#0A1128]">{project.area} sq ft</p>
                </div>

                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Timeline</span>
                  </div>
                  <p className="text-base font-bold text-[#0A1128]">{project.completionTime}</p>
                </div>

                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Status</span>
                  </div>
                  <p className="text-base font-bold text-[#0A1128]">{project.status}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-black text-[#0A1128]">Project Description</h3>
                <p className="text-slate-600 leading-relaxed">{project.description}</p>
              </div>

              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full py-4 bg-green-600 text-white text-lg font-black rounded-xl hover:bg-green-700 transition-all shadow-xl hover:shadow-2xl active:scale-95"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </main>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        title={`Quote for ${project.title}`}
      />
    </div>
  )
}

export default ConstructionDetail
