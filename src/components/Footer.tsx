import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Marquee from "./Marquee";

const Footer = () => {
  return (
    <>
    <div className="-mt-10">
      <Marquee />
           </div>
      {/* Main Footer Section */}
      <section className="w-full bg-white px-4 md:px-10 lg:px-20 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center font-bold text-2xl sm:text-3xl lg:text-5xl mt-20 mb-5 gap-5">
          <div className="text-black">
            Let&apos;s <span className="text-yellow-500">connect</span> there
          </div>
          <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition duration-300">
            <div className="bg-green-800 text-white px-8 py-3 rounded-full text-base font-medium text-center group-hover:bg-green-900">
              View All Blogs
            </div>
            <div className="h-10 w-10 rounded-full bg-white text-green-800 font-bold text-2xl ml-3 flex items-center justify-center group-hover:bg-gray-100">
              →
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full border-b border-gray-400 mb-10"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10 text-black text-lg mt-10">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-800 text-4xl md:text-5xl font-extrabold">D</span>
              </div>
              <span className="text-3xl md:text-4xl font-bold text-black">Devraj</span>
              <span className="text-yellow-400 text-3xl md:text-4xl font-bold ml-1">.</span>
            </div>
            <p className="text-gray-600 text-base font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad
              deserunt veniam dicta.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-yellow-400 mb-4 font-bold">Navigation</h3>
            <ul className="text-gray-700 font-normal">
              {["Home", "Services", "About", "Projects", "Blogs", "FAQs"].map((item, i) => (
                <li key={i} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yellow-400 mb-4 font-bold">Contact</h3>
            <div className="text-gray-700 font-normal space-y-2">
              <div>+0123-456-789</div>
              <div>www.example.com</div>
              <div>example@gmail.com</div>
              <div>2464 Royal Ln. Mesa, New Jersey 45463</div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-yellow-400 mb-4 font-bold">Get the latest information</h3>
            <div className="flex w-full max-w-xs sm:max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-200 text-black px-4 py-2 rounded-l-full w-full focus:outline-none"
              />
              <button className="bg-green-900 text-white px-4 py-2 rounded-r-full hover:bg-yellow-500 transition">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-10">
          {[FaSquareFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram].map((Icon, i) => (
            <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition">
              <Icon className="text-black text-xl sm:text-2xl lg:text-3xl" />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="bg-green-900 w-full py-6 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-base font-semibold gap-3 px-4 md:px-10 lg:px-20 text-center md:text-left">
          <div>
            © 2024 <span className="text-yellow-500 font-bold">Devraj Rana</span>. All rights reserved.
          </div>
          <div>User Term & Conditions | Privacy Policy</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
