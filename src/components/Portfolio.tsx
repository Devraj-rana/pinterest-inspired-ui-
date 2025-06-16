import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <section 
        id="projects" 
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-8 bg-gray-100 mt-16 sm:mt-20 md:mt-24 lg:mt-32"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            {/* Title Section */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
                <span className="text-black text-2xl font-medium">
                  <span className="text-yellow-500">-</span> My Portfolio
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                My Latest{" "}
                <span className="text-yellow-500 italic">Projects</span>
              </h2>
            </div>

            {/* View All Button */}
            <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
              <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
                <div className="bg-green-800 text-white px-8 py-3 rounded-full text-base font-medium flex-1 text-center transition-colors duration-300 group-hover:bg-green-900">
                  view all Projects
                </div>

                <div className="flex items-center justify-center text-center text-2xl h-10 w-10 rounded-full bg-white text-green-800 font-bold ml-3 transition-colors duration-300 group-hover:bg-gray-100">
                  →
                </div>
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {[1, 2, 3, 4].map((item, index) => {
              const projectData = [
                {
                  img: "/image1.jpg",
                  alt: "Beauty Product Mobile App",
                  title: "Beauty Product - Ecommerce\nMobile App Solution",
                  tags: ["UI/UX Design", "App Design", "Wireframe"]
                },
                {
                  img: "/image2.jpg",
                  alt: "Beauty Product Landing Page",
                  title: "Beauty Product Mobile App\nLanding Page Design",
                  tags: ["UI/UX Design", "Web Design", "Wireframe"]
                },
                {
                  img: "/image3.jpg",
                  alt: "Coffee Shop Mobile App",
                  title: "Coffee Shop App - Coffee\nOrdering App Solution",
                  tags: ["UI/UX Design", "App Design", "Wireframe"]
                },
                {
                  img: "/image4.jpg",
                  alt: "Coffee Shop Landing Page",
                  title: "Coffee Shop Landing Page Design",
                  tags: ["UI/UX Design", "Web Design", "Wireframe"]
                }
              ][index];

              return (
                <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <Image
                      src={projectData.img}
                      alt={projectData.alt}
                      width={1200}
                      height={800}
                      className="w-full rounded-xl sm:rounded-2xl object-cover aspect-video"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                    {projectData.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-yellow-500 text-black px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-full text-sm sm:text-base md:text-lg whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start sm:items-center justify-between gap-2 sm:gap-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight flex-1">
                      {projectData.title.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h3>
                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-green-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-800 transition-colors duration-300">
                      <span className="text-yellow-500 text-lg sm:text-xl">→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
