import React from 'react'

const AboutSection = () => {
  const owners = [
    {
      name: "Monu Bhaiya",
      role: "Founder & Visionary",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      description: "With over two decades of transformative leadership in real estate, Monu Bhaiya has redefined premium living. His unwavering integrity and foresight have built not just homes, but thriving communities that stand as testaments to trust and excellence."
    },
    {
      name: "Rajesh Kumar",
      role: "Director of Architecture",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      description: "A master of spatial dynamics and sustainable design, Rajesh ensures that every Vastu Realty project is a harmonious blend of modern aesthetics and traditional Vastu principles, creating spaces that truly breathe."
    },
    {
      name: "Amit Singh",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      description: "Amit's rigorous attention to detail and commitment to seamless execution guarantee that our client experience is as premium as our properties. He is the backbone that turns our ambitious visions into tangible reality."
    }
  ]

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#0A1128] tracking-tight">
            Meet The <span className="text-blue-600">Visionaries</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            The driving force behind Vastu Realty's commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {owners.map((owner, index) => (
            <div key={index} className="group hover:-translate-y-2 transition-transform duration-500">
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 h-full flex flex-col">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={owner.image} 
                    alt={owner.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-[#0A1128] mb-2">{owner.name}</h3>
                  <div className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                    {owner.role}
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {owner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
