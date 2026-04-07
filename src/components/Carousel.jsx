import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/kgsStu.jpg";
import img2 from "../assets/kgsStu1.jpg";
import img3 from "../assets/kgsStu2.jpg";

const slides = [
  {
    image: img1,
    title: "Welcome to King Gift School.",
    subtitle: "Nurturing excellence in every child",
  },
  {
    image: img2,
    title: "Quality Education.",
    subtitle: "Building the leaders of tomorrow",
  },
  {
    image: img3,
    title: "Join Our Community.",
    subtitle: "Admissions open for 2025",
  },
];

const Carousel = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    setDisplayedText("");
    setCharIndex(0);
  }, [current]);

  useEffect(() => {
    const fullText = slides[current].title;

    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50); // 50ms between each character

      return () => clearTimeout(timer);
    }
  }, [charIndex, current]);

  useEffect(() => {
    if (isPaused) return;
    const autoSlide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(autoSlide);
  }, [isPaused]);

  const goNext = () => {
    setCurrent((current + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="w-full h-full object-cover object-left"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end text-white px-8 md:px-24 pb-16 md:pb-44">
        {/* Title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight">
          {displayedText}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-white/80 max-w-xl">
          {slides[current].subtitle}
        </p>

        {/* Button */}
        <button className="mt-8 w-fit px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-wine-dark transition-all duration-300 text-sm tracking-widest uppercase">
          Learn More
        </button>

        {/* Arrows */}
        <button
          onClick={() => {
            goPrev();
            setIsPaused(true);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={() => {
            goNext();
            setIsPaused(true);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-gold w-8" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
