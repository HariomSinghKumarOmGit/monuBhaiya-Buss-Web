import React, { useState, useEffect, useRef } from 'react'

const MediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef(null)

  // Media playlist: video first, then images
  const mediaItems = [
    { type: 'video', src: '/heroSecLoop.mov' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', alt: 'Luxury Modern Villa' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', alt: 'Premium Penthouse Interior' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80', alt: 'Contemporary Beach House' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', alt: 'Architectural Masterpiece' },
  ]

  // Handle video end - advance to next item
  const handleVideoEnd = () => {
    advanceToNext()
  }

  // Advance to next item with transition
  const advanceToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
      setIsTransitioning(false)
    }, 500)
  }

  // Auto-advance images every 4 seconds
  useEffect(() => {
    const currentItem = mediaItems[currentIndex]
    
    if (currentItem.type === 'image') {
      const timer = setTimeout(() => {
        advanceToNext()
      }, 4000)
      
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  const currentItem = mediaItems[currentIndex]

  return (
    <div className="w-full px-5 mt-12">
      <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/20 bg-slate-900 aspect-21/9">
        {/* Transition Overlay */}
        <div 
          className={`absolute inset-0 bg-black z-10 transition-opacity duration-500 ${
            isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Video */}
        {currentItem.type === 'video' && (
          <video
            ref={videoRef}
            src={currentItem.src}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          />
        )}

        {/* Image */}
        {currentItem.type === 'image' && (
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="w-full h-full object-cover"
          />
        )}

        {/* Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsTransitioning(false)
                }, 300)
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-12' 
                  : 'bg-white/40 w-8 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Optional: Property Badge for Images */}
        {currentItem.type === 'image' && (
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full z-20">
            <span className="text-xs font-bold text-[#0A1128] uppercase tracking-wider">
              Featured Property
            </span>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-400/5 blur-[100px] rounded-full" />
    </div>
  )
}

export default MediaCarousel
