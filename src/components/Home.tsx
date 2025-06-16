import Image from "next/image";
import React from "react";
import Marquee from "./Marquee"; // adjust path if needed

const Home = () => {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-6 md:py-8 mt-4 sm:mt-6 gap-6 lg:gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8">
          {/* Hello Button */}
          <div className="relative z-10 flex items-center justify-center lg:justify-start min-h-10 mb-6 sm:mb-8 md:mb-10">
            <button className="relative bg-white border-2 border-gray-600 px-4 py-1 hover:transform hover:scale-105 transition-transform duration-200 text-sm">
              <div className="absolute w-2 h-2 bg-orange-400 -top-1 -left-1" />
              <div className="absolute w-2 h-2 bg-orange-400 -top-1 -right-1" />
              <div className="absolute w-2 h-2 bg-orange-400 -bottom-1 -left-1" />
              <div className="absolute w-2 h-2 bg-orange-400 -bottom-1 -right-1" />
              <span className="relative z-10 font-medium text-gray-700">
                Hello There!
              </span>
            </button>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-black">I&apos;m</span>
            <span className="text-yellow-500"> Devraj Rana, </span>
            <br />
            <span className="text-black">
              Product Designer <br />
              Based in INDIA.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
            I&apos;m an experienced Product Designer with 8+ years in the field,
            collaborating with various companies and startups.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button className="flex items-center bg-yellow-500 hover:bg-green-950 text-white rounded-full px-4 py-2 text-sm transition-colors duration-300 w-fit mx-auto sm:mx-0">
              <span className="bg-green-900 px-3 py-1 rounded-full text-sm hover:bg-green-800 transition-colors duration-300">
                View My Portfolio
              </span>
              <span className="ml-2 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">
                ▶
              </span>
            </button>

            <button className="border-2 border-black px-4 py-2 rounded-full text-sm text-black hover:bg-black hover:text-white transition-colors duration-300 w-fit mx-auto sm:mx-0">
              Hire Me
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="uiux.svg"
              alt="Olivia Smith"
              width={400}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 hover:scale-105 transform"
              priority
            />
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />
    </>
  );
};

export default Home;
