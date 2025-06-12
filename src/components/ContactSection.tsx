import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { GrSkype } from "react-icons/gr";

const ContactSection = () => {
  return (
    <>
    <section>
      <div className="bg-white rounded-3xl p-20 flex justify-center gap-6">
        <div className="flex-[0.45] text-2xl font-bold text-black text-left">
          <span className="text-yellow-500 gap-2">- </span>
          Contact US
          <div>
            <h1 className="text-5xl font-bold text-black mt-5">
              Let&apos;s Talk for
              <span className="text-5xl font-bold text-yellow-400 "> Your</span>
            </h1>
            <h1 className="text-5xl font-bold text-yellow-400">
              Next Projects
            </h1>
          </div>
          <h1 className="text-2xl font-bold text-gray-600 mt-10">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </h1>
          <div className="flex items-center mt-10 gap-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <Phone className="text-green-600 h-6" />
            </div>
            <div className="text-2xl font-bold text-gray-600">
              +1(406) 555-0120
            </div>
          </div>
          <div className="flex items-center mt-6 gap-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <Mail className="text-green-600 h-6" />
            </div>
            <div className="text-2xl font-bold text-gray-600">
              example@gmail.com
            </div>
          </div>
          <div className="flex items-center mt-6 gap-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <GrSkype className="text-green-600 h-6" />
            </div>
            <div className="text-2xl font-bold text-gray-600">Example</div>
          </div>
          <div className="flex items-center mt-6 gap-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <MapPin className="text-green-600 h-6" />
            </div>
            <div className="text-2xl font-bold text-gray-600">
              2464 Royal Ln. Mesa,
              <br />
              New Jersey 45463
            </div>
          </div>
        </div>
        <div className="flex-[0.45]">
          <ContactForm />
        </div>
      </div>
    </section>
    </>
  );
};

function ContactForm() {
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
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl">
        {/* Name and Email Row */}
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
              className="w-full px-4 py-3 border  text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50"
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
              className="w-full px-4 py-3 border  text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50"
            />
          </div>
        </div>
        {/* Phone and Interest Row */}
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
              className="w-full px-4 py-3 border  text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50"
            />
          </div>

          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              I&apos;m Interested in *
            </label>
            <div className="relative">
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border  text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 appearance-none cursor-pointer"
              >
                <option value="">Select</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Budget Range and Country Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="budgetRange"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Budget Range (USD) *
            </label>
            <div className="relative">
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 appearance-none cursor-pointer"
              >
                <option value="">Select Range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">Over $100,000</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Country *
            </label>
            <div className="relative">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border  text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 appearance-none cursor-pointer"
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none  ">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Message Field */}
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
            className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 resize-vertical"
          />
        </div>
        {/* Submit Button */}v{" "}
        <div className="flex justify-center w-full">
          <button className="bg-yellow-500 text-white px-8 py-3 flex items-center rounded-full hover:bg-green-950 hover:text-white min-w-[220px] whitespace-nowrap cursor-pointer mt-8">
            <span className="bg-green-900 px-6 py-2 rounded-full cursor-pointer">
              Submit
            </span>
            <span className="ml-2 px-3 py-2 h-6 w-6 rounded-full bg-white text-black flex items-center justify-center cursor-pointer">
              →
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactSection;
