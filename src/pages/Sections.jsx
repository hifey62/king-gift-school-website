import { GraduationCap, BookOpen, Award, Users } from 'lucide-react'

const sections = [
  {
    image: '/src/assets/kgsStu.jpg',
    title: 'Primary Section',
    grades: 'Grade 1 — Grade 6',
    description: 'Our primary section builds a strong academic foundation through engaging, child-centred learning. We nurture curiosity, creativity and confidence in every young learner.',
    href: '/sections/primary'
  },
  {
    image: '/src/assets/kgsStu1.jpg',
    title: 'Secondary Section',
    grades: 'Grade 7 — Grade 12',
    description: 'Our secondary section prepares students for national examinations and beyond. With experienced teachers and a rigorous curriculum, we set students up for lifelong success.',
    href: '/sections/secondary'
  },
]

const features = [
  { icon: <GraduationCap size={28} />, title: 'Experienced Faculty', description: 'Over 80 qualified and passionate teachers dedicated to student success.' },
  { icon: <BookOpen size={28} />, title: 'Rich Curriculum', description: 'A balanced curriculum that goes beyond textbooks to develop well-rounded individuals.' },
  { icon: <Award size={28} />, title: 'Award Winning', description: 'Consistently recognised for academic excellence at state and national level.' },
  { icon: <Users size={28} />, title: 'Vibrant Community', description: 'A warm, inclusive school community where every student belongs and thrives.' },
]

const Sections = () => {
  return (
    <div>

      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src="/src/assets/kgsStu2.jpg"
          alt="Sections"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wine-dark/80 flex flex-col justify-center items-center text-white text-center px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Academics</span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold">Our Sections</h1>
        </div>
      </div>

      {/* Sections Cards */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Academic Sections</span>
          </div>
          <h2 className="font-serif text-5xl text-wine mb-12">Where Learning Happens</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="group flex flex-col border border-gray-100 hover:border-wine/20 hover:shadow-lg transition-all duration-500 cursor-pointer">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-8">
                  <span className="text-xs tracking-widest uppercase text-gold">{section.grades}</span>
                  <h3 className="font-serif text-3xl text-wine">{section.title}</h3>
                  <div className="w-8 h-[1px] bg-gold/40 group-hover:w-16 transition-all duration-300" />
                  <p className="text-sm text-gray-400 leading-relaxed">{section.description}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-xs tracking-widest uppercase text-wine">Learn More</span>
                    <div className="w-4 h-[1px] bg-wine group-hover:w-8 transition-all duration-300" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-wine-dark px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Why King Gift</span>
          </div>
          <h2 className="font-serif text-5xl text-white mb-12">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4 p-8 border border-white/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="text-gold">{feature.icon}</div>
                <h3 className="font-serif text-xl text-white">{feature.title}</h3>
                <div className="w-8 h-[1px] bg-gold/30 group-hover:w-16 transition-all duration-300" />
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}

export default Sections