import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section className="relative px-4 md:px-10 py-16 bg-white">
      {/* Header */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4">
        <div className="text-2xl text-black mb-2">-Services</div>
        <h2 className="text-3xl sm:text-4xl font-semibold">
          <span className="text-yellow-500">Services </span>
          <span className="text-black">I Provide</span>
        </h2>
      </div>

      {/* View All Services Button */}
      <div className="flex justify-center md:justify-start mb-10">
        <button className="group flex items-center bg-yellow-500 hover:bg-yellow-600 rounded-full p-1 transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
          <div className="bg-green-800 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-medium group-hover:bg-green-900">
            View All Services
          </div>
          <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center text-xl sm:text-2xl rounded-full bg-white text-green-800 font-bold ml-2 sm:ml-3 group-hover:bg-gray-100">
            →
          </div>
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-black">
        {[
          { src: "/ui.png", title: "UI/UX Design" },
          { src: "/application.png", title: "Application Design" },
          { src: "/website.png", title: "Website Design" },
        ].map((service, idx) => (
          <div key={idx} className="flex flex-col items-start">
            <Image
              src={service.src}
              alt={service.title}
              width={400}
              height={500}
              className="w-full max-w-sm mx-auto rounded-2xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <a href="#" className="text-yellow-500 font-medium text-sm cursor-pointer">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
