// import React from "react";
// import Image from "next/image";

// const Tools = () => {
//   return (
//     <section className="py-16 pr-6 sm:px-6 md:px-10 bg-white">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Headings */}
//         <div className="text-xl sm:text-2xl md:text-3xl text-black flex justify-center items-center gap-2">
//           <span className="text-yellow-400">-</span> My Favorite Tools
//         </div>
//         <h2 className="text-2xl sm:text-4xl md:text-5xl text-yellow-400 italic mt-3 sm:mt-4">
//           Exploring The Tools
//         </h2>
//         <h3 className="text-2xl sm:text-4xl md:text-5xl text-black mb-10 sm:mb-14">
//           Behind My Designs
//         </h3>

//         {/* Tools Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-10 ">
//           {[
//             { src: "/figma_icon.png", alt: "Figma" },
//             { src: "/sketch_icon.png", alt: "Sketch" },
//             { src: "/photoshop_icon.png", alt: "Photoshop" },
//             { src: "/After_Effects_icon.png", alt: "After Effects" },
//             { src: "/storybook_icon.png", alt: "Storybook" },
//             { src: "/InVision_icon.png", alt: "InVision" },
//           ].map((tool, index) => (
//             <div key={index} className="flex justify-between items-center">
//               <Image
//                 src={tool.src}
//                 alt={tool.alt}
//                 width={160}
//                 height={160}
//                 className="w-50 sm:w-36 md:w-40 lg:w-44 xl:w-48 h-auto object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tools;





// // // import Image from "next/image";
// // // import React from "react";

// // // const Tools = () => {
// // //   return (
// // //     <section className="py-20 px-4 bg-white">
// // //       <div className="max-w-6xl mx-auto text-center">
// // //         {/* Headings */}
// // //         <div className="text-2xl sm:text-3xl text-black flex justify-center items-center gap-2">
// // //           <span className="text-yellow-400">-</span> My Favorite Tools
// // //         </div>
// // //         <h2 className="text-3xl sm:text-5xl text-yellow-400 italic mt-4">
// // //           Exploring The Tools
// // //         </h2>
// // //         <h3 className="text-3xl sm:text-5xl text-black mb-12">
// // //           Behind My Designs
// // //         </h3>

// // //         {/* Tools Grid */}
// // //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
// // //           {[
// // //             { src: "/figma_icon.png", alt: "Figma" },
// // //             { src: "/sketch_icon.png", alt: "Sketch" },
// // //             { src: "/photoshop_icon.png", alt: "Photoshop" },
// // //             { src: "/After_Effects_icon.png", alt: "After Effects" },
// // //             { src: "/storybook_icon.png", alt: "Storybook" },
// // //             { src: "/InVision_icon.png", alt: "InVision" },
// // //           ].map((tool, index) => (
// // //             <div key={index} className="flex justify-center">
// // //               <Image
// // //                 src={tool.src}
// // //                 alt={tool.alt}
// // //                 height={400}
// // //                 width={600}
// // //                 className="h-auto w-20 sm:w-24 md:w-28 lg:w-32 object-contain"
// // //               />
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Tools;





// // import React from "react";
// // import Image from "next/image";

// // const Tools = () => {
// //   return (
// //     <section className="py-20 px-4 bg-white">
// //       <div className="max-w-6xl mx-auto text-center">
// //         {/* Headings */}
// //         <div className="text-2xl sm:text-3xl text-black flex justify-center items-center gap-2">
// //           <span className="text-yellow-400">-</span> My Favorite Tools
// //         </div>
// //         <h2 className="text-3xl sm:text-5xl text-yellow-400 italic mt-4">
// //           Exploring The Tools
// //         </h2>
// //         <h3 className="text-3xl sm:text-5xl text-black mb-12">
// //           Behind My Designs
// //         </h3>

// //         {/* Tools Grid */}
// //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
// //           {[ 
// //             { src: "/figma_icon.png", alt: "Figma" },
// //             { src: "/sketch_icon.png", alt: "Sketch" },
// //             { src: "/photoshop_icon.png", alt: "Photoshop" },
// //             { src: "/After_Effects_icon.png", alt: "After Effects" },
// //             { src: "/storybook_icon.png", alt: "Storybook" },
// //             { src: "/InVision_icon.png", alt: "InVision" },
// //           ].map((tool, index) => (
// //             <div key={index} className="flex justify-center">
// //               <Image
// //                 src={tool.src}
// //                 alt={tool.alt}
// //                 height={400}
// //                 width={400}
// //                 className="h-auto w-40 sm:w-44 md:w-48 lg:w-52 object-contain"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Tools;




import React from "react";
import { FaFigma, FaSketch, FaAddressBook, FaBook, FaFilm, FaInvision } from "react-icons/fa";

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
        <div className="text-xl sm:text-2xl md:text-3xl text-black flex justify-center items-center gap-2">
          <span className="text-yellow-400">-</span> My Favorite Tools
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-yellow-400 italic mt-3 sm:mt-4">
          Exploring The Tools
        </h2>
        <h3 className="text-2xl sm:text-4xl md:text-5xl text-black mb-10 sm:mb-14">
          Behind My Designs
        </h3>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 text-center"
            >
              <div className="text-5xl md:text-6xl">{tool.icon}</div>
              <p className="text-sm sm:text-base text-black">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
