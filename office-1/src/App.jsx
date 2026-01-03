import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MediaCarousel from './components/MediaCarousel'
import PropertyListings from './components/PropertyListings'
import ConstructionListings from './components/ConstructionListings'
import MenPowerListings from './components/MenPowerListings'
import PropertyDetail from './pages/PropertyDetail'
import PropertyList from './pages/PropertyList'
import ConstructionDetail from './pages/ConstructionDetail'
import ConstructionList from './pages/ConstructionList'
import MenPowerDetail from './pages/MenPowerDetail'
import MenPowerList from './pages/MenPowerList'
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
          </div>
        </section>

        {/* Property Listings Section */}
        <PropertyListings />

        {/* Construction Section */}
        <ConstructionListings />

        {/* Men Power Section */}
        <MenPowerListings />
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy-rent/list" element={<PropertyList />} />
        <Route path="/buy-rent/:id" element={<PropertyDetail />} />
        <Route path="/construction/list" element={<ConstructionList />} />
        <Route path="/construction/:id" element={<ConstructionDetail />} />
        <Route path="/men-power/list" element={<MenPowerList />} />
        <Route path="/men-power/:id" element={<MenPowerDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// skfjsl
