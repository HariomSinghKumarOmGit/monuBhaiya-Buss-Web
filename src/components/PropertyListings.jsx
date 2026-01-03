import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Bed, Bath, Square } from 'lucide-react'
import { properties } from '../data/propertyData'

const PropertyListings = () => {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = container.offsetWidth * 0.8
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    })

    // Update button states after scroll
    setTimeout(() => updateScrollButtons(), 300)
  }

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.offsetWidth - 10
    )
  }

  return (
    <section className="py-16 px-5 bg-slate-50">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-black text-[#0A1128]">Buy</h2>
        <button className="px-6 py-2.5 bg-white border border-slate-200 text-[#0A1128] rounded-lg font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
          Show All →
        </button>
      </div>

      {/* Property Carousel */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-all ${
            canScrollLeft 
              ? 'opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95' 
              : 'opacity-0 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-6 h-6 text-[#0A1128]" />
        </button>

        {/* Property Cards Container */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollButtons}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {properties.map((property) => (
            <Link
              key={property.id}
              to={`/buy-rent/${property.id}`}
              className="flex-none w-[calc(33.333%-16px)] min-w-[320px] snap-start group/card"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                  />
                  {/* <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                    {property.type}
                  </div> */}
                </div>

                {/* Property Details */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold text-[#0A1128] line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    📍 {property.location}
                  </p>

                  {/* Property Stats */}
                  <div className="flex items-center gap-4 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm font-semibold">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm font-semibold">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Square className="w-4 h-4" />
                      <span className="text-sm font-semibold">{property.area} sq ft</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full mt-3 py-2.5 bg-slate-50 text-[#0A1128] rounded-lg font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-all ${
            canScrollRight 
              ? 'opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95' 
              : 'opacity-0 cursor-not-allowed'
          }`}
        >
          <ChevronRight className="w-6 h-6 text-[#0A1128]" />
        </button>
      </div>
    </section>
  )
}

export default PropertyListings
