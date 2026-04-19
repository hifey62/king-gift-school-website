import { useState } from "react";
import emailjs from "@emailjs/browser";
import img1 from "../assets/kgsStu.jpg";

const SERVICE_ID = "service_6th9zgu";
const TEMPLATE_ID = "template_c97yjzp";
const PUBLIC_KEY = "XSUMjFgoZQeeIC_o5";
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzQX_1yhbV2j8u3qlgW523dWAYQMC0XdyNMkRYCJCihaPqN1O0yCZ2auYryYwqLlmKDnQ/exec";

const steps = [
  {
    number: "01",
    title: "Submit Application",
    description: "Fill out the admission form below with accurate information.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "Our admissions team reviews your application within 3 working days.",
  },
  {
    number: "03",
    title: "Assessment",
    description:
      "Shortlisted candidates are invited for an entrance assessment.",
  },
  {
    number: "04",
    title: "Admission Offer",
    description:
      "Successful candidates receive an official admission offer letter.",
  },
];

const Admissions = () => {
  const [formData, setFormData] = useState({
    student_name: "",
    email: "",
    date_of_birth: "",
    place_of_birth: "",
    home_town: "",
    lga: "",
    state_of_origin: "",
    nationality: "",
    present_school: "",
    present_class: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Send email via EmailJS AND send to Google Sheet at the same time
      await Promise.all([
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY),
        fetch(SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }),
      ]);

      setStatus("success");
      setFormData({
        student_name: "",
        email: "",
        date_of_birth: "",
        place_of_birth: "",
        home_town: "",
        lga: "",
        state_of_origin: "",
        nationality: "",
        present_school: "",
        present_class: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={img1}
          alt="Admissions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wine-dark/80 flex flex-col justify-center items-center text-white text-center px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">
              Join Us
            </span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold">
            Admissions
          </h1>
          <p className="mt-4 text-white/60 text-sm tracking-widest uppercase">
            2025 / 2026 Academic Session
          </p>
        </div>
      </div>

      {/* What Happens Next */}
      <section className="py-24 bg-gray-50 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">
              The Process
            </span>
          </div>
          <h2 className="font-serif text-5xl text-wine mb-12">
            What Happens Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col gap-4 group">
                <span className="font-serif text-5xl font-bold text-gold/30 group-hover:text-gold transition-colors duration-300">
                  {step.number}
                </span>
                <div className="w-8 h-[2px] bg-gold/30 group-hover:w-16 group-hover:bg-gold transition-all duration-300" />
                <h3 className="font-serif text-xl text-wine">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">
              Apply Now
            </span>
          </div>
          <h2 className="font-serif text-5xl text-wine mb-4">Admission Form</h2>
          <p className="text-gray-400 text-sm mb-12">
            All fields are required. Please ensure all information is accurate
            before submitting.
          </p>

          {/* Success Message */}
          {status === "success" && (
            <div className="mb-8 p-6 border border-green-200 bg-green-50 flex flex-col gap-2">
              <h3 className="font-serif text-2xl text-green-800">
                Application Submitted!
              </h3>
              <p className="text-sm text-green-600">
                Thank you for applying to King Gift School. We will be in touch
                within 3 working days.
              </p>
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="mb-8 p-6 border border-red-200 bg-red-50">
              <p className="text-sm text-red-600">
                Something went wrong. Please try again or contact us directly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  Student Full Name *
                </label>
                <input
                  type="text"
                  name="student_name"
                  value={formData.student_name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Adebayo Smith"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="parent@example.com"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  Place of Birth *
                </label>
                <input
                  type="text"
                  name="place_of_birth"
                  value={formData.place_of_birth}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Lagos"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  Home Town *
                </label>
                <input
                  type="text"
                  name="home_town"
                  value={formData.home_town}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Ago-Iwoye"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  Local Government Area *
                </label>
                <input
                  type="text"
                  name="lga"
                  value={formData.lga}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Ijebu North"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  State of Origin *
                </label>
                <input
                  type="text"
                  name="state_of_origin"
                  value={formData.state_of_origin}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Ogun State"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  Nationality *
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Nigerian"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  Present School *
                </label>
                <input
                  type="text"
                  name="present_school"
                  value={formData.present_school}
                  onChange={handleChange}
                  required
                  placeholder="e.g. ABC Primary School"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  Present Class *
                </label>
                <input
                  type="text"
                  name="present_class"
                  value={formData.present_class}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Primary 5"
                  className="border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-wine transition-colors duration-300"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 w-full py-4 bg-wine text-white text-xs tracking-widest uppercase hover:bg-wine-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
