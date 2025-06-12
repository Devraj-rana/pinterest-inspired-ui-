import React from "react";
import Image from "next/image";

const About = () => {
  return (
    // about me
    <>
      <section id="about" className="py-40 px-4 bg-green-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/oliva.jpg"
                alt="About Olivia"
                width={900}
                height={900}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-1 bg-yellow-500 mr-3"></div>
                  <span className="text-white font-bold lg:text-3xl">
                    About Me
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white lg:text-800 mb-6">
                  Who is{" "}
                  <span className="text-yellow-500 italic lg:text-800   ">
                    {" "}
                    olivia smith ?{" "}
                  </span>
                </h2>
              </div>
              <p className="text-white text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-3xl font-bold text-yellow-500">600+</div>
                  <div className="text-white-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500">50+</div>
                  <div className="text-white">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500">18+</div>
                  <div className="text-white">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-10">
                <button className="bg-yellow-500 text-white px-8 py-2 flex items-center rounded-full hover:bg-green-950 hover:text-white min-w-{220px} whitespace-nowrap cursor-pointer">
                  <span className="bg bg-green-900 px-4 py-2 rounded-full cursor-pointer">
                    Download CV
                  </span>
                  <span className="ml-2 px-3 py-2 h-6 w-6 rounded-full bg-white text-black lg:flex items-center justify-center cursor-pointer">
                    →
                  </span>
                </button>
                <p className="text-yellow-400 text-4xl italic">Olivia Smith</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
