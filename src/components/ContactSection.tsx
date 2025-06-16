"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { GrSkype } from "react-icons/gr";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    budgetRange: "",
    country: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const ContactDetail = ({
    icon,
    text,
  }: {
    icon: React.ReactNode;
    text: React.ReactNode;
  }) => (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="text-lg sm:text-xl font-semibold text-gray-600">
        {text}
      </div>
    </div>
  );

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-10">
      <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left: Contact Info */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="text-yellow-500 text-xl font-semibold">
            - <span className="text-black"> Contact Us </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-black mt-5 leading-snug">
            Let&apos;s Talk for
            <span className="text-yellow-400"> Your</span>
          </h1>
          <h1 className="text-3xl sm:text-5xl font-bold text-yellow-400">
            Next Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Contact Methods */}
          <div className="mt-10 space-y-5">
            <ContactDetail
              icon={<Phone className="text-green-600 h-6" />}
              text="+1(406) 555-0120"
            />
            <ContactDetail
              icon={<Mail className="text-green-600 h-6" />}
              text="example@gmail.com"
            />
            <ContactDetail
              icon={<GrSkype className="text-green-600 h-6" />}
              text="Example"
            />
            <ContactDetail
              icon={<MapPin className="text-green-600 h-6" />}
              text={
                <>
                  2464 Royal Ln. Mesa,
                  <br /> New Jersey 45463
                </>
              }
            />
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ex. John Doe"
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Phone and Interest */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Phone Number"
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  I&apos;m Interested in *
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Budget and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="budgetRange"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Budget Range (USD) *
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="in">India</option>
                  <option value="jp">Japan</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter here.."
                required
                rows={6}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none resize-vertical"
              />
            </div>

            <div className="flex justify-center w-full mt-8">
              <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
                <div className="bg-green-800 text-white px-8 py-3 rounded-full text-base font-medium flex-1 text-center transition-colors duration-300 group-hover:bg-green-900">
                  Submit
                </div>

                <div className="flex items-center  justify-center text-center  text-2xl  h-10 w-10 rounded-full bg-white text-green-800  font-bold ml-3 transition-colors duration-300 group-hover:bg-gray-100">
                  →
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
