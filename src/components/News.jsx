import img1 from '../assets/kgsStu.jpg'
import img2 from '../assets/kgsStu1.jpg'
import img3 from '../assets/kgsStu2.jpg'

const news = [
  {
    image: img1,
    date: "March 15, 2025",
    category: "Academic",
    title: "King Gift Students Excel in National Mathematics Competition",
    excerpt: "Our students brought home 3 gold medals and 5 silver medals at the National Mathematics Olympiad.",
  },
  {
    image: img2,
    date: "March 8, 2025",
    category: "Admissions",
    title: "Admissions Now Open for the 2025/2026 Academic Session",
    excerpt: "We are pleased to announce that applications are now open for new students. Early applications are encouraged.",
  },
  {
    image: img3,
    date: "February 28, 2025",
    category: "Events",
    title: "Annual Cultural Day Celebration — A Day to Remember",
    excerpt: "Students showcased the rich diversity of Nigerian culture through music, dance, food and art.",
  },
]
const News = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-gold" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase">
            Latest
          </span>
        </div>
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-5xl text-wine leading-tight">
            News & Announcements
          </h2>
          <button className="text-xs tracking-widest uppercase text-wine border-b border-wine pb-1 hover:text-gold hover:border-gold transition-colors duration-300">
            View All News
          </button>
        </div>

        {/* News cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col bg-white border border-gray-100 hover:border-wine/20 hover:shadow-lg transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-8">
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-widest uppercase text-gold">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <div className="w-full h-[1px] bg-gray-100 group-hover:bg-wine/20 transition-colors duration-500" />
                <h3 className="font-serif text-xl text-wine leading-snug group-hover:text-wine-light transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-xs tracking-widest uppercase text-wine">
                    Read More
                  </span>
                  <div className="w-4 h-[1px] bg-wine group-hover:w-8 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
