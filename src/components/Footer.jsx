import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-wine-dark text-white">

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Column 1 — Logo and about */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <div>
            <h3 className="font-serif text-3xl text-gold">King Gift School</h3>
            <div className="w-12 h-[1px] bg-gold/40 mt-3" />
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            Nurturing excellence in every child for over 25 years. We are committed to providing world-class education in a safe and inspiring environment.
          </p>
          {/* Social links */}
          <div className="flex gap-4 mt-2">
            {['Facebook', 'Twitter', 'Instagram'].map((social) => (
              <a key={social} href="#" className="text-xs tracking-widest uppercase text-white/40 hover:text-gold transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-gold">Quick Links</h4>
          <div className="w-8 h-[1px] bg-gold/40" />
          {['Home', 'About Us', 'Sections', 'Admissions', 'Contact'].map((link) => (
            <a key={link} href="#" className="text-sm text-white/50 hover:text-gold transition-colors duration-300">
              {link}
            </a>
          ))}
        </div>

        {/* Column 3 — Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-gold">Contact Us</h4>
          <div className="w-8 h-[1px] bg-gold/40" />
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
              <span className="text-sm text-white/50">123 School Road, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gold flex-shrink-0" />
              <span className="text-sm text-white/50">123-456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gold flex-shrink-0" />
              <span className="text-sm text-white/50">info@kinggift.edu.ng</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-white/30">
            © 2025 King Gift School. All rights reserved.
          </span>
          <span className="text-xs text-white/30">
            Designed with excellence in mind.
          </span>
        </div>
      </div>

    </footer>
  )
}

export default Footer