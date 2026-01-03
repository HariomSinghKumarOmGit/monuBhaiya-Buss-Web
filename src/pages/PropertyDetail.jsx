import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ChevronLeft, Bed, Bath, Home, MapPin, Building2, Calendar, FileText, Shield, Zap, Car } from 'lucide-react'
import { getPropertyById } from '../data/propertyData'
import Header from '../components/Header'

const PropertyDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = getPropertyById(id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle invalid property ID
  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#0A1128] mb-4">Property Not Found</h1>
          <p className="text-slate-500 mb-6">The property you're looking for doesn't exist.</p>
          <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">
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
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-[#0A1128] mb-6 font-semibold transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Properties
          </button>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video group">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Counter */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#0A1128]/80 backdrop-blur-sm text-white text-sm font-bold rounded-lg">
                  Property ({property.images.length})
                </div>

                {/* Shortlist Badge */}
                {property.shortlistedCount > 0 && (
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-pink-600 text-white text-sm font-bold rounded-full flex items-center gap-2">
                    ⭐ {property.shortlistedCount} people shortlisted this property this week
                  </div>
                )}

                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#0A1128]" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#0A1128] rotate-180" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {property.images.length > 1 && (
                <div className="flex gap-3">
                  {property.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-blue-600 scale-105'
                          : 'border-transparent hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Why Consider This Property? */}
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-black text-[#0A1128]">Why should you consider this property?</h3>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
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

            {/* Right: Property Details */}
            <div className="space-y-4">
              {/* Property Title */}
              <div className="bg-white rounded-2xl p-6">
                <h1 className="text-3xl font-black text-[#0A1128] mb-2">{property.title}</h1>
                <p className="text-slate-500 font-medium">📍 {property.location}</p>
              </div>

              {/* Property Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {/* Area */}
                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Home className="w-4 h-4" />
                    <span>Area</span>
                  </div>
                  <div>
                    <p className="text-xl font-black text-[#0A1128]">Super Built-up area {property.area}</p>
                    <p className="text-sm text-slate-400">({(property.area * 0.0929).toFixed(2)} sq.m.)</p>
                  </div>
                </div>

                {/* Configuration */}
                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Configuration</span>
                  </div>
                  <p className="text-xl font-black text-[#0A1128]">
                    {property.bedrooms} Bedrooms, {property.bathrooms} Bathrooms, {property.balconies} Balcony
                  </p>
                </div>

                {/* Address */}
                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Address</span>
                  </div>
                  <p className="text-base font-bold text-[#0A1128]">{property.address}</p>
                </div>

                {/* Floor Number */}
                <div className="bg-white rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Floor Number</span>
                  </div>
                  <p className="text-base font-bold text-[#0A1128]">{property.floorNumber}</p>
                </div>

                {/* Property Age */}
                <div className="bg-white rounded-2xl p-5 space-y-2 col-span-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Property Age</span>
                  </div>
                  <p className="text-base font-bold text-[#0A1128]">{property.propertyAge}</p>
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-black text-[#0A1128]">Additional Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-slate-500 text-xs">Transaction Type</p>
                      <p className="font-bold text-[#0A1128]">{property.transactionType}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-slate-500 text-xs">Property Code</p>
                      <p className="font-bold text-[#0A1128] font-mono text-xs">{property.propertyCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-slate-500 text-xs">Furnishing</p>
                      <p className="font-bold text-[#0A1128]">{property.furnishing}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-slate-500 text-xs">Parking</p>
                      <p className="font-bold text-[#0A1128]">{property.parking}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-slate-500 text-xs">Power Backup</p>
                      <p className="font-bold text-[#0A1128]">{property.powerBackup}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-slate-500 text-xs">Property Ownership</p>
                      <p className="font-bold text-[#0A1128]">{property.propertyOwnership}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full py-4 bg-blue-600 text-white text-lg font-black rounded-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl active:scale-95">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PropertyDetail
