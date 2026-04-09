// import { useState, useEffect, useRef } from 'react'

// const stats = [
//   { number: 1200, label: 'Students Enrolled', suffix: '+' },
//   { number: 80, label: 'Qualified Teachers', suffix: '+' },
//   { number: 25, label: 'Years of Excellence', suffix: '' },
//   { number: 98, label: 'graduation Rate', suffix: '%' },
// ]

// const Stats = () => {
//   return (
//     <section className="bg-wine py-20 px-8">
//       <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
//         {stats.map((stat, index) => (
//           <div key={index} className="flex flex-col items-center text-center">
//             <span className="font-serif text-5xl md:text-6xl font-bold text-gold">
//               {stat.number}{stat.suffix}
//             </span>
//             <span className="mt-2 text-sm text-white/70 tracking-widest uppercase">
//               {stat.label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Stats
import { useState, useEffect, useRef } from 'react'

const stats = [
  { number: 1200, label: 'Students Enrolled', suffix: '+' },
  { number: 80, label: 'Qualified Teachers', suffix: '+' },
  { number: 25, label: 'Years of Excellence', suffix: '' },
  { number: 98, label: 'Graduation Rate', suffix: '%' },
]

const StatItem = ({ number, label, suffix }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = number / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= number) {
              setCount(number)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [number, hasAnimated])

  return (
    <div ref={ref} className="relative flex flex-col gap-3 px-8 border-l border-gold/30 group">
      {/* Animated gold line */}
      <div className="w-8 h-[2px] bg-gold mb-2 transition-all duration-700 group-hover:w-16" />
      
      {/* Number */}
      <div className="flex items-end gap-1">
        <span className="font-serif text-6xl md:text-8xl font-bold text-gold leading-none">
          {count}
        </span>
        <span className="font-serif text-3xl text-gold/70 mb-2">{suffix}</span>
      </div>

      {/* Label */}
      <span className="text-xs text-white/50 tracking-[0.3em] uppercase">
        {label}
      </span>
    </div>
  )
}

const Stats = () => {
  return (
    <section className="relative bg-wine-dark overflow-hidden py-24">

      {/* Background detail — large faded text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-[20rem] font-bold text-white/2 leading-none">
          KGS
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase">By The Numbers</span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Stats