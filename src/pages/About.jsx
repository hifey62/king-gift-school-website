import { Shield, BookOpen } from 'lucide-react'

const team = [
  { name: 'Mr. A. Johnson', role: 'Principal', image: '/src/assets/kgsStu.jpg' },
  { name: 'Mrs. B. Adeyemi', role: 'Vice Principal', image: '/src/assets/kgsStu1.jpg' },
  { name: 'Mr. C. Okafor', role: 'Head of Academics', image: '/src/assets/kgsStu2.jpg' },
]

const About = () => {
  return (
    <div>

      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src="/src/assets/kgsStu.jpg"
          alt="About King Gift School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wine-dark/80 flex flex-col justify-center items-center text-white text-center px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Our Story</span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 z-0" />
            <img
              src="/src/assets/kgsStu1.jpg"
              alt="Our Story"
              className="relative z-10 w-full h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase">Our Story</span>
            </div>
            <h2 className="font-serif text-5xl text-wine leading-tight">
              25 Years of Shaping Futures
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Founded in 2000, King Gift School began with a simple but powerful belief — that every child is uniquely gifted. From our humble beginnings with just 50 students, we have grown into one of the most respected schools in Ogun State.
            </p>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Over the decades we have built a community of learners, educators, and families united by a shared commitment to excellence, integrity, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">What Drives Us</span>
          </div>
          <h2 className="font-serif text-5xl text-wine mb-12">Mission & Vision</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="bg-wine p-12 flex flex-col gap-6">
              <Shield size={32} className="text-gold" />
              <h3 className="font-serif text-3xl text-white">Our Mission</h3>
              <div className="w-12 h-[1px] bg-gold/40" />
              <p className="text-white/60 leading-relaxed">
                To provide a world-class education that develops the intellectual, moral, and creative potential of every student — equipping them to thrive in a rapidly changing world.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-gray-100 p-12 flex flex-col gap-6">
              <BookOpen size={32} className="text-gold" />
              <h3 className="font-serif text-3xl text-wine">Our Vision</h3>
              <div className="w-12 h-[1px] bg-gold/40" />
              <p className="text-gray-500 leading-relaxed">
                To be the leading school in Nigeria, recognised for producing graduates of exceptional character, academic excellence, and a lifelong love for learning.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">The People</span>
          </div>
          <h2 className="font-serif text-5xl text-wine mb-12">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1 py-6 border-b border-gray-100">
                  <h3 className="font-serif text-2xl text-wine">{member.name}</h3>
                  <span className="text-xs tracking-widest uppercase text-gold">{member.role}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}

export default About