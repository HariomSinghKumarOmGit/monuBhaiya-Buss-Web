import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MediaCarousel from './components/MediaCarousel'
import PropertyListings from './components/PropertyListings'
import PropertyDetail from './pages/PropertyDetail'
import './App.css'

// Home Page Component
function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main className="pt-32">
        <section className="relative px-6 overflow-hidden">
          {/* Decorative Background Blur */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full -z-10 animate-pulse"></div>
          
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#0A1128] tracking-tight">
              Find Your <span className="text-blue-600">Perfect Place</span> <br />
              to Live and Prosper.
            </h1>
            <p className="max-w-xl mx-auto text-lg text-slate-500 leading-relaxed font-medium">
              We provide the most exclusive property listings in the region, 
              designed for comfort, luxury, and Vastu compliance.
            </p>

            {/* Media Carousel - Hero Video and Property Images */}
            <MediaCarousel />
            
            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="px-8 py-4 bg-[#0A1128] text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/20 active:scale-95">
                Explore Properties
              </button>
              <button className="px-8 py-4 bg-white text-[#0A1128] border border-slate-200 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm active:scale-95">
                Virtual Tour
              </button>
            </div> */}
          </div>
        </section>

        {/* Property Listings Section */}
        <PropertyListings />
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy-rent/:id" element={<PropertyDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
