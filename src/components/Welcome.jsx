const Welcome = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Welcome</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-wine leading-tight">
            A Legacy of Excellence in Education
          </h2>
          <p className="text-gray-500 leading-relaxed text-[15px]">
            King Gift School has been shaping the minds and futures of young learners for over 25 years. We believe every child carries a unique gift — our mission is to discover, nurture, and celebrate it.
          </p>
          <p className="text-gray-500 leading-relaxed text-[15px]">
            Our approach combines rigorous academics with character development, producing graduates who are confident, compassionate, and ready for the world.
          </p>
          <button className="w-fit mt-4 px-8 py-3 bg-wine text-white text-xs tracking-widest uppercase hover:bg-wine-light transition-all duration-300">
            Discover Our Story
          </button>
        </div>

        {/* Right — Image */}
        <div className="relative">
          {/* Decorative gold border */}
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 z-0" />
          <img
            src="/src/assets/kgsStu.jpg"
            alt="Students at King Gift School"
            className="relative z-10 w-full h-[500px] object-cover"
          />
          {/* Overlay badge */}
          <div className="absolute bottom-8 -left-8 z-20 bg-wine px-8 py-6">
            <span className="font-serif text-4xl font-bold text-gold">25+</span>
            <p className="text-white/70 text-xs tracking-widest uppercase mt-1">Years of Excellence</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Welcome