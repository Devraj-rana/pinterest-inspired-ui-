import React from "react";
import {
  FaFigma,
  FaSketch,
  FaAddressBook,
  FaBook,
  FaFilm,
  FaInvision,
} from "react-icons/fa";

const Tools = () => {
  const tools = [
    { icon: <FaFigma className="text-[#a259ff]" />, name: "Figma" },
    { icon: <FaSketch className="text-orange-400" />, name: "Sketch" },
    { icon: <FaAddressBook className="text-red-600" />, name: "Photoshop" },
    { icon: <FaFilm className="text-purple-700" />, name: "After Effects" },
    { icon: <FaBook className="text-pink-600" />, name: "Storybook" },
    { icon: <FaInvision className="text-[#ff3366]" />, name: "InVision" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Headings */}
        <div className="text-3xl text-black flex justify-center items-center gap-2">
          <span className="text-yellow-400">-</span> My Favorite Tools
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-yellow-400 italic mt-3">
          Exploring The Tools
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl text-black mb-10">
          Behind My Designs
        </h3>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-14">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 text-center"
            >
              <div className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px]">
                {tool.icon}
              </div>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-black">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;