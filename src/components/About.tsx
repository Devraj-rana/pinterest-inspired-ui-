import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="pt-6 pb-8 px-4 bg-green-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/oliva.jpg"
              alt="About Olivia"
              width={900}
              height={900}
              className="rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-full"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            {/* Heading */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-1 bg-yellow-500 mr-3"></div>
                <span className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl">
                  About Me
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Who is{" "}
                <span className="text-yellow-500 italic">Devraj Rana ?</span>
              </h2>
            </div>

            {/* Paragraph */}
            <p className="text-white text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div>
                <div className="text-3xl font-bold text-yellow-500">600+</div>
                <div className="text-white text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">10+</div>
                <div className="text-white text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">18+</div>
                <div className="text-white text-sm">Awards Won</div>
              </div>
            </div>

            {/* Button & Name */}
            <div className="flex items-center justify-between gap-4 mt-8">
              <p className="text-yellow-400 text-xl sm:text-3xl italic">
                Devraj Rana
              </p>
              <button className="group bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition duration-300 focus:outline-none">
                <div className="bg-green-800 text-white px-3 py-1 sm:px-6 sm:py-2 rounded-full text-sm font-medium group-hover:bg-green-900">
                  Download CV
                </div>
                <div className="flex items-center justify-center text-lg h-8 w-8 rounded-full bg-white text-green-800 font-bold ml-2 group-hover:bg-gray-100">
                  →
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
