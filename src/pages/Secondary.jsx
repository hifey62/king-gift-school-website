import { BookOpen, Users, Clock, Award } from 'lucide-react'
import img1 from '../assets/kgsStu.jpg'
import img2 from '../assets/kgsStu1.jpg'
import img3 from '../assets/kgsStu2.jpg'

const subjects = [
  'English Language', 'Mathematics', 'Physics',
  'Chemistry', 'Biology', 'Geography',
  'Economics', 'Government', 'Literature in English',
  'Computer Science', 'Further Mathematics', 'Yoruba Language',
]

const classes = [
  { level: 'JSS 1', age: '11 — 12 years', size: '30 students' },
  { level: 'JSS 2', age: '12 — 13 years', size: '30 students' },
  { level: 'JSS 3', age: '13 — 14 years', size: '30 students' },
  { level: 'SSS 1', age: '14 — 15 years', size: '28 students' },
  { level: 'SSS 2', age: '15 — 16 years', size: '28 students' },
  { level: 'SSS 3', age: '16 — 17 years', size: '28 students' },
]

const teachers = [
  { name: 'Mr. D. Fashola', role: 'Head of Secondary', image: img1 },
  { name: 'Mrs. R. Nwosu', role: 'Head of Sciences', image:  img2  },
  { name: 'Mr. S. Afolabi', role: 'Head of Humanities', image: img3  },
]

const stats = [
  { icon: <Users size={24} />, value: '750+', label: 'Secondary Students' },
  { icon: <BookOpen size={24} />, value: '12', label: 'Subjects Offered' },
  { icon: <Clock size={24} />, value: '6', label: 'Class Levels' },
  { icon: <Award size={24} />, value: '96%', label: 'WAEC Pass Rate' },
]

const Secondary = () => {
  return (
    <div>

      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={img1}
          alt="Secondary Section"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wine-dark/80 flex flex-col justify-center items-center text-white text-center px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Academics</span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold">Secondary Section</h1>
          <p className="mt-4 text-white/60 text-sm tracking-widest uppercase">JSS 1 — SSS 3</p>
        </div>
      </div>

      {/* Quick Stats */}
      <section className="bg-wine py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <div className="text-gold">{stat.icon}</div>
              <span className="font-serif text-4xl font-bold text-gold">{stat.value}</span>
              <span className="text-xs tracking-widest uppercase text-white/50">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 z-0" />
            <img
              src={img2}
              alt="Secondary Students"
              className="relative z-10 w-full h-[450px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase">Overview</span>
            </div>
            <h2 className="font-serif text-5xl text-wine leading-tight">
              Preparing Leaders of Tomorrow
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Our Secondary Section takes students through a transformative journey from Junior Secondary School to Senior Secondary School. We combine a rigorous academic programme with leadership development, sports, arts and community service.
            </p>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Our students consistently achieve outstanding results in BECE and WAEC examinations, gaining admission into top universities across Nigeria and abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24 bg-gray-50 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Curriculum</span>
          </div>
          <h2 className="font-serif text-5xl text-wine mb-12">Subjects Offered</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white border border-gray-100 hover:border-wine/20 hover:shadow-md transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                <span className="font-serif text-lg text-wine">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Structure</span>
          </div>
          <h2 className="font-serif text-5xl text-wine mb-12">Class Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classes.map((cls, index) => (
              <div key={index} className="flex flex-col gap-3 p-8 border border-gray-100 hover:border-wine/20 hover:shadow-md transition-all duration-300 group">
                <div className="w-8 h-[2px] bg-gold group-hover:w-16 transition-all duration-300" />
                <h3 className="font-serif text-2xl text-wine">{cls.level}</h3>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-xs tracking-widest uppercase text-gray-400">Age Range</span>
                  <span className="text-sm text-gray-600">{cls.age}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs tracking-widest uppercase text-gray-400">Class Size</span>
                  <span className="text-sm text-gray-600">{cls.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-24 bg-wine-dark px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Our People</span>
          </div>
          <h2 className="font-serif text-5xl text-white mb-12">Secondary Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="group flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1 py-6 border-b border-white/10">
                  <h3 className="font-serif text-2xl text-white">{teacher.name}</h3>
                  <span className="text-xs tracking-widest uppercase text-gold">{teacher.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Secondary