import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="bg-yellow-400 overflow-hidden py-4 mt-7">
        <div className="flex animate-marquee space-x-8 text-green-900 font-bold text-xl">
          <span className="text-4xl">App Design</span>
          <span className="text-black text-4xl">❋</span>
          <span className="text-4xl">Website Design</span>
          <span className="text-black text-4xl">❋</span>
          <span className="text-4xl">Dashboard</span>
          <span className="text-black text-4xl">❋</span>
          <span className="text-4xl">Wireframe</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
          white-space: nowrap;
        }
      `}</style>
      <div>
        <section>
          <div className="flex justify-between items-center text-black font-bold text-5xl mt-20 mb-5 px-40">
            <div>
              Let&apos;s <span className="text-yellow-500">connect</span> there
            </div>
            <button className="bg-yellow-500 text-white px-8 py-3 flex items-center rounded-full hover:bg-green-950 hover:text-white min-w-[220px] whitespace-nowrap cursor-pointer">
              <span className="bg-green-900 px-6 py-2 rounded-full cursor-pointer text-base font-semibold">
                View All Blogs
              </span>
              <span className="ml-2 px-3 py-2 h-6 w-6 rounded-full bg-white text-black flex items-center justify-center cursor-pointer text-xl">
                →
              </span>
            </button>
          </div>
          <div className="w-4/5 mx-auto border-b border-gray-400 mb-10"></div>

          <div className="flex items-start text-black font-bold text-xl mt-10 px-40 ">
            {/* Olivia logo and name */}
            <div className="flex flex-col items-start w-1/4 min-w-[200px]">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center rounded-full bg-yellow-400 w-20 h-20 px-2 mr-4">
                  <span className="text-green-800 text-5xl font-extrabold">O</span>
                </div>
                <span className="text-4xl font-bold text-black">Olivia</span>
                <span className="text-yellow-400 text-4xl font-bold ml-1">.</span>
              </div>
              <div className="text-gray-600 text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Id ad deserunt veniam
                dicta 
              </div>
            </div>
            {/* Navigation */}
            <div className="w-1/4 min-w-[180px] ml-60">
              <div className="text-yellow-400 mb-4">Navigation</div>
              <ul>
                <li className="text-black mb-2">Home</li>
                <li className="text-black mb-2">Services</li>
                <li className="text-black mb-2">About</li>
                <li className="text-black mb-2">Projects</li>
                <li className="text-black mb-2">Blogs</li>
                <li className="text-black mb-2">FAQs</li>
              </ul>
            </div>
            {/* Contact */}
            <div className="w-1/4 min-w-[180px] mr-10">
              <div className="text-yellow-400 mb-4">Contact</div>
              <div className="text-black mb-2">+0123-456-789</div>
              <div className="text-black mb-2">www.example.com</div>
              <div className="text-black mb-2">example@gmail.com</div>
              <div className="text-black">2464 Royal Ln. Mesa, New Jersey 45463</div>
            </div>
            {/* Get the latest information */}
            <div className="w-1/4 min-w-[250px]">
              <div className="text-yellow-400 mb-4">Get the latest information</div>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-gray-200 text-black px-4 py-2 rounded-l-full focus:outline-none w-full"
                />
                <button className="bg-green-900 text-white px-6 py-2 rounded-r-full hover:bg-yellow-500">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center gap-6 -mt-10 px-35">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center ">
              <FaSquareFacebook className="text-black h-6" />
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <FaWhatsapp className="text-black h-6" />
            </div>

            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <FaYoutube className="text-black h-6" />
            </div>

            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <FaTwitter className="text-black h-6" />
            </div>

            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <FaInstagram className="text-black h-6" />
            </div>
          </div>

          <div className="bg-green-900 w-full py-6 mt-20">
            <div className="flex justify-between items-center text-white text-lg font-semibold px-40">
              <div>
                Copyright © 2024
                <span className="text-yellow-500 font-bold px-1">Olivia</span>.
                All rights reserved.
              </div>
              <div>
                User Term & Conditions | Privacy Policy
              </div>
            </div>
          </div>


        </section>
      </div>
    </>
  );
};

export default Footer;
