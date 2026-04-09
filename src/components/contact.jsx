import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-gold" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase">Get In Touch</span>
        </div>
        <div className="mb-12">
          <h2 className="font-serif text-5xl text-wine leading-tight">
            Contact Us
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — Contact Form */}
          <div className="flex flex-col gap-6">

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0" />
                <span className="text-sm text-gray-500">Kings Avenue, Koroko, Ago-Iwoye, Ogun State</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span className="text-sm text-gray-500">123-456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span className="text-sm text-gray-500">info@kinggift.edu.ng</span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100" />

            {/* Form */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase text-gray-400">First Name</label>
                  <input
                    type="text"
                    className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase text-gray-400">Last Name</label>
                  <input
                    type="text"
                    className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">Email</label>
                <input
                  type="email"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">Subject</label>
                <input
                  type="text"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                  placeholder="Admission Enquiry"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">Message</label>
                <textarea
                  rows={5}
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button className="w-full py-4 bg-wine text-white text-xs tracking-widest uppercase hover:bg-wine-light transition-all duration-300 mt-2">
                Send Message
              </button>
            </div>

          </div>

          {/* Right — Google Map */}
          <div className="w-full h-full min-h-[500px]">
            <iframe
              title="King Gift School Location"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=Ago-Iwoye,Ogun+State,Nigeria"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact