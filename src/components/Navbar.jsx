import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // sticky top-0 = sticks to top on scroll
    // z-50 = sits above all other page content
    // border-b = thin bottom border (better than a full shadow for schools)
    <header className="sticky top-0 z-50 bg-cream border-b border-wine/10 transition-all duration-300">
      {/* max-w-6xl mx-auto = centers content and caps width at 1152px */}
      {/* px-8 = horizontal padding on both sides (not just left!) */}
      {/* h-18 = fixed height so navbar never shifts */}
      <nav className="max-w-8xl mx-auto px-8 h-18 flex justify-between items-center py-4">
        {/* LOGO AREA — flex + gap instead of absolute positioning */}
        <a href="/" className="flex items-center gap-3 no-underline group">
          <img
            src="src/assets/kingGiftlogo.jpg"
            alt="King Gift School Logo"
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
          {/* flex-col to stack school name and tagline vertically */}
          <div className="flex flex-col">
            <span className="text-[15px] font-medium text-gray-900 leading-tight">
              King Gift School
            </span>
            <span className="text-xs text-gray-400">
              Raising Excellent & Godly Leaders
            </span>
          </div>
        </a>

        {/* NAV LINKS */}
        {/* gap-1 not gap-8 — links have internal padding, gap just separates them slightly */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8 list-none">
            <li>
              <a
                href="/"
                className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-150"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-150"
              >
                About
              </a>
            </li>
            <li className="group relative">
              <a
                href="/sections"
                className=" flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-150 "
              >
                Sections
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </a>

              <div className="hidden group-hover:block absolute top-full left-0 bg-white p-2 border border-gray-100 shadow-md rounded-lg">
                <ul>
                  <li>
                    <Link
                      to="/sections/primary"
                      className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-wine rounded-md transition-colors duration-150"
                    >
                      Primary
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sections/secondary"
                      className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-wine rounded-md transition-colors duration-150"
                    >
                      Secondary
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="/contact"
                className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-150"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* HOTLINE — styled as a pill badge */}
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2">
            {/* Green dot to signal "live / reachable" */}
            <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-400">Hotline</span>
              <span className="text-sm font-medium text-gray-900">
                123-456-7890
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden relative z-60 transition-colors ${
            isOpen ? "text-white" : "text-wine"
          }`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-wine/95 flex flex-col justify-center items-center gap-8 md:hidden">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-serif text-5xl font-bold tracking-wide text-cream hover:text-gold transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={() => setIsOpen(false)}
            className="font-serif text-5xl font-bold tracking-wide text-cream hover:text-gold transition-colors"
          >
            About
          </a>
          <a
            href="/sections"
            onClick={() => setIsOpen(false)}
            className="font-serif text-5xl font-bold tracking-wide text-cream hover:text-gold transition-colors"
          >
            Sections
          </a>
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="font-serif text-5xl font-bold tracking-wide text-cream hover:text-gold transition-colors"
          >
            Contact
          </a>

          <div className="mt-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-serif text-cream">123-456-7890</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
