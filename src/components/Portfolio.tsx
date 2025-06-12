import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
       <section id="projects" className="relative py-40 px-4 bg-gray-100 mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-left mb-50">
              <div className="flex justify-start mb-4">
                <span className="text-black text-3xl font-medium">
                  <span className="text-yellow-500">-</span> My Portfolio
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                My Latest{" "}
                <span className="text-yellow-500 italic">Projects</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute top-52 right-32 flex justify-end">
          <button className="bg-yellow-500 text-white px-8 py-2 flex items-center rounded-full hover:bg-green-950 hover:text-white min-w-[220px] whitespace-nowrap cursor-pointer">
            <span className="bg bg-green-900 px-4 py-2 rounded-full cursor-pointer">
              View All Projects
            </span>
            <span className="ml-2 px-3 py-2 h-6 w-6 rounded-full bg-white text-black lg:flex items-center justify-center cursor-pointer">
              →
            </span>
          </button>
        </div>

        {/* Project Grid */}
        <div className="-mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Project 1 */}
          <div className="bg-white rounded-3xl p-16 shadow-lg">
            <div className="mb-46">
              <Image
                src="/image1.jpg"
                alt="Beauty Product Mobile App"
                width={1500}
                height={800}
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="flex flex-nowrap gap-4 mb-4 overflow-x-auto">
              <span className="bg-yellow-500 text-black px-5 py-1 rounded-full text-lg whitespace-nowrap">
                UI/UX Design
              </span>
              <span className="bg-yellow-500 text-black px-5 py-1 rounded-full text-lg whitespace-nowrap">
                App Design
              </span>
              <span className="bg-yellow-500 text-black px-5 py-1 rounded-full text-lg whitespace-nowrap">
                Wireframe
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-black">
                Beauty Product - Ecommerce <br></br>
                Mobile App Solution
              </h3>
              <button className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-yellow-500">→</span>
              </button>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-white rounded-3xl p-16 shadow-lg">
            <div className="mb-16">
              <Image
                src="/image2.jpg"
                alt="Beauty Product Landing Page"
                width={1200}
                height={800}
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="flex flex-nowrap gap-2 mb-4 overflow-x-auto">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-lg whitespace-nowrap">
                UI/UX Design
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-lg whitespace-nowrap">
                Web Design
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-lg whitespace-nowrap">
                Wireframe
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-black">
                Beauty Product Mobile App <br /> Landing Page Design
              </h3>
              <button className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-yellow-500">→</span>
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-3xl p-16 shadow-lg">
            <div className="mb-16">
              <Image
                src="/image3.jpg"
                alt="Coffee Shop Mobile App"
                width={1200}
                height={800}
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="flex flex-nowrap gap-2 mb-4 overflow-x-auto">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-lg whitespace-nowrap">
                UI/UX Design
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-lg whitespace-nowrap">
                App Design
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-lg whitespace-nowrap">
                Wireframe
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-black">
                Coffee Shop App - coffee <br /> Ordering App Solution
              </h3>
              <button className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-yellow-500">→</span>
              </button>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white rounded-3xl p-16 shadow-lg">
            <div className="mb-56">
              <Image
                src="/image4.jpg"
                alt="Coffee Shop Landing Page"
                width={1200}
                height={800}
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="flex flex-nowrap gap-2 mb-4 overflow-x-auto">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-lg whitespace-nowrap">
                UI/UX Design
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-lg whitespace-nowrap">
                Web Design
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-lg whitespace-nowrap">
                Wireframe
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-black">
                Coffee Shop Landing Page Design
              </h3>
              <button className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-yellow-500">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
