import img1 from '../assets/kgsStu.jpg'
import img2 from '../assets/kgsStu1.jpg'
import img3 from '../assets/kgsStu2.jpg'
const images = [
  { src: img1, label: 'Art Class' },
  { src: img2, label: 'Science Lab' },
  { src: img3, label: 'Sports Day' },
  { src: img1, label: 'Graduation' },
  { src: img1, label: 'Music Room' },
  { src: img3, label: 'Library' },
]

const Gallery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-gold" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase">Our World</span>
        </div>
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-5xl text-wine leading-tight">
            Life at King Gift
          </h2>
          <button className="text-xs tracking-widest uppercase text-wine border-b border-wine pb-1 hover:text-gold hover:border-gold transition-colors duration-300">
            View Full Gallery
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative overflow-hidden group cursor-pointer">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-wine/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="font-serif text-2xl text-white">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery