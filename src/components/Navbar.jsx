import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/kingGiftlogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-wine/10 transition-all duration-300">
      <nav className="max-w-8xl mx-auto px-8 h-18 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <img
            src={Logo}
            alt="King Gift School Logo"
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
          <div className="flex flex-col">
            <span className="text-[15px] font-medium text-gray-900 leading-tight">
              King Gift School
            </span>
            <span className="text-xs text-gray-400">
              Raising Excellent & Godly Leaders
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8 list-none">
            <li>
              <Link
                to="/"
                className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-150"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-150"
              >
                About
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="/sections"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-150"
              >
                Sections
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </Link>
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
              <Link
                to="/admissions"
                className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-150"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-150"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hotline */}
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-400">Hotline</span>
              <span className="text-sm font-medium text-gray-900">
                123-456-7890
              </span>
            </div>
          </div>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden relative z-60 transition-colors ${
            isOpen ? "text-white" : "text-wine"
          }`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-wine/95 flex flex-col justify-center items-center gap-8 md:hidden">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-serif text-5xl font-bold tracking-wide text-cream hover:text-gold transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="font-serif text-5xl font-bold tracking-wide text-cream hover:text-gold transition-colors"
          >
            About
          </Link>
          <Link
            to="/sections"
            onClick={() => setIsOpen(false)}
            className="font-serif text-5xl font-bold tracking-wide text-cream hover:text-gold transition-colors"
          >
            Sections
          </Link>
          <Link to="/admissions" onClick={() => setIsOpen(false)} className="font-serif text-5xl font-bold tracking-wide text-cream hover:text-gold transition-colors">
             Admissions
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="font-serif text-5xl font-bold tracking-wide text-cream hover:text-gold transition-colors"
          >
            Contact
          </Link>
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
