import { BookOpen, Users, Clock, Award } from 'lucide-react'
import img1 from '../assets/kgsStu.jpg'
import img2 from '../assets/kgsStu1.jpg'
import img3 from '../assets/kgsStu2.jpg'


const subjects = [
  'English Language', 'Mathematics', 'Basic Science',
  'Social Studies', 'Civic Education', 'Cultural & Creative Arts',
  'Physical & Health Education', 'Computer Studies', 'Yoruba Language',
]



const classes = [
  { level: 'Primary 1', age: '6 — 7 years', size: '25 students' },
  { level: 'Primary 2', age: '7 — 8 years', size: '25 students' },
  { level: 'Primary 3', age: '8 — 9 years', size: '28 students' },
  { level: 'Primary 4', age: '9 — 10 years', size: '28 students' },
  { level: 'Primary 5', age: '10 — 11 years', size: '30 students' },
  { level: 'Primary 6', age: '11 — 12 years', size: '30 students' },
]

const teachers = [
  { name: 'Mrs. F. Adeleke', role: 'Head of Primary', image:  img1  },
  { name: 'Mr. K. Babatunde', role: 'Primary 4 — 6 Teacher', image: img2  },
  { name: 'Mrs. T. Ogundimu', role: 'Primary 1 — 3 Teacher', image:  img3  },
]

const stats = [
  { icon: <Users size={24} />, value: '450+', label: 'Primary Students' },
  { icon: <BookOpen size={24} />, value: '9', label: 'Subjects Offered' },
  { icon: <Clock size={24} />, value: '6', label: 'Class Levels' },
  { icon: <Award size={24} />, value: '98%', label: 'Pass Rate' },
]

const Primary = () => {
  return (
    <div>

      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={img1}
          alt="Primary Section"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wine-dark/80 flex flex-col justify-center items-center text-white text-center px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Academics</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold">Primary Section</h1>
          <p className="mt-4 text-white/60 text-sm tracking-widest uppercase">Grade 1 — Grade 6</p>
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
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase">Overview</span>
            </div>
            <h2 className="font-serif text-5xl text-wine leading-tight">
              Building Strong Foundations
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Our Primary Section is designed to give every child the strongest possible start. We combine a rich academic curriculum with creative, physical and social development — nurturing not just the student, but the whole child.
            </p>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Small class sizes ensure every child receives personal attention. Our teachers are trained to identify each child's unique learning style and adapt accordingly.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 z-0" />
            <img
              src={img2}
              alt="Primary Students"
              className="relative z-10 w-full h-112.5 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24 bg-gray-50 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Curriculum</span>
          </div>
          <h2 className="font-serif text-5xl text-wine mb-12">Subjects Offered</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white border border-gray-100 hover:border-wine/20 hover:shadow-md transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-gold shrink-0 group-hover:scale-150 transition-transform duration-300" />
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
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Structure</span>
          </div>
          <h2 className="font-serif text-5xl text-wine mb-12">Class Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classes.map((cls, index) => (
              <div key={index} className="flex flex-col gap-3 p-8 border border-gray-100 hover:border-wine/20 hover:shadow-md transition-all duration-300 group">
                <div className="w-8 h-0.5 bg-gold group-hover:w-16 transition-all duration-300" />
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
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Our People</span>
          </div>
          <h2 className="font-serif text-5xl text-white mb-12">Primary Teachers</h2>
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

export default Primary