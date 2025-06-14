// import Image from 'next/image'
// import React from 'react'

// const Home = () => {
//   return (
//     <>
//       <section className="flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-6 md:py-8 mt-4 sm:mt-6 gap-6 lg:gap-8">
//         {/* Text Content */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8">
//           {/* Hello Button */}
//           <div className="relative z-10 flex items-center justify-center lg:justify-start min-h-10 mb-6 sm:mb-8 md:mb-10">
//             <button className="relative bg-white border-2 border-gray-600 px-4 sm:px-6 py-1 sm:py-2 hover:transform hover:scale-105 transition-transform duration-200">
//               <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 -top-1 -left-1" />
//               <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 -top-1 -right-1" />
//               <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 -bottom-1 -left-1" />
//               <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 -bottom-1 -right-1" />
//               <span className="relative z-10 font-medium text-sm sm:text-base md:text-lg text-gray-700">
//                 Hello There!
//               </span>
//             </button>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
//             <span className="text-black">I&apos;m</span>
//             <span className="text-yellow-500"> Olivia Smith, </span>
//             <br />
//             <span className="text-black">
//               Product Designer <br />
//               Based in USA.
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
//             I&apos;m an experienced Product Designer with 8+ years in the field,
//             collaborating with various companies and startups.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
//             <button className="bg-yellow-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center justify-center rounded-full hover:bg-green-950 hover:text-white transition-colors duration-300 min-w-[200px] sm:min-w-[220px] whitespace-nowrap cursor-pointer group">
//               <span className="bg-green-900 px-3 sm:px-4 py-1 sm:py-2 rounded-full cursor-pointer text-sm sm:text-base group-hover:bg-green-800 transition-colors duration-300">
//                 View My Portfolio
//               </span>
//               <span className="ml-2 px-2 sm:px-3 py-1 sm:py-2 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white text-black flex items-center justify-center cursor-pointer text-xs sm:text-sm">
//                 ▶
//               </span>
//             </button>
//             <button className="border-2 border-black px-6 sm:px-8 md:px-12 lg:px-15 py-2 sm:py-3 rounded-full text-black cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 text-sm sm:text-base">
//               Hire Me
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
//           <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
//             <Image
//               src="uiux.svg"
//               alt="Olivia Smith"
//               width={400}
//               height={500}
//               className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       {/* Marquee Section */}
//       <div className="bg-yellow-400 overflow-hidden py-3 sm:py-4 md:py-6 mt-6 sm:mt-8 md:mt-10">
//         <div className="flex animate-marquee space-x-4 sm:space-x-6 md:space-x-8 text-green-900 font-bold whitespace-nowrap">
//           <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">App Design</span>
//           <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">❋</span>
//           <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Website Design</span>
//           <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">❋</span>
//           <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Dashboard</span>
//           <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">❋</span>
//           <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Wireframe</span>
//           <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">❋</span>
//           {/* Duplicate for seamless loop */}
//           <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">App Design</span>
//           <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">❋</span>
//           <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Website Design</span>
//           <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">❋</span>
//           <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Dashboard</span>
//           <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">❋</span>
//           <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Wireframe</span>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 15s linear infinite;
//           white-space: nowrap;
//         }

//         /* Additional responsive styles */
//         @media (max-width: 640px) {
//           .animate-marquee {
//             animation: marquee 12s linear infinite;
//           }
//         }

//         @media (max-width: 480px) {
//           .animate-marquee {
//             animation: marquee 10s linear infinite;
//           }
//         }

//         /* Hover effects for better interaction */
//         @media (hover: hover) {
//           button:hover {
//             transform: translateY(-1px);
//           }
//         }

//         /* Ensure proper spacing on very small screens */
//         @media (max-width: 320px) {
//           .space-y-4 > * + * {
//             margin-top: 0.75rem;
//           }
//         }
//       `}</style>
//     </>
//   )
// }

// export default Home

// import Image from "next/image";
// import React from "react";

// const Home = () => {
//   return (
//     <>
//       <section className="flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-6 md:py-8 mt-4 sm:mt-6 gap-6 lg:gap-8">
//         {/* Text Content */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8">
//           {/* Hello Button */}
//           <div className="relative z-10 flex items-center justify-center lg:justify-start min-h-10 mb-6 sm:mb-8 md:mb-10">
//             <button className="relative bg-white border-2 border-gray-600 px-4 py-1 hover:transform hover:scale-105 transition-transform duration-200 text-sm">
//               <div className="absolute w-2 h-2 bg-orange-400 -top-1 -left-1" />
//               <div className="absolute w-2 h-2 bg-orange-400 -top-1 -right-1" />
//               <div className="absolute w-2 h-2 bg-orange-400 -bottom-1 -left-1" />
//               <div className="absolute w-2 h-2 bg-orange-400 -bottom-1 -right-1" />
//               <span className="relative z-10 font-medium text-gray-700">
//                 Hello There!
//               </span>
//             </button>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
//             <span className="text-black">I&apos;m</span>
//             <span className="text-yellow-500"> Olivia Smith, </span>
//             <br />
//             <span className="text-black">
//               Product Designer <br />
//               Based in USA.
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
//             I&apos;m an experienced Product Designer with 8+ years in the field,
//             collaborating with various companies and startups.
//           </p>

//           {/* Action Buttons - Center on mobile */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
//             {/* View My Portfolio */}
//             <button className="flex items-center bg-yellow-500 hover:bg-green-950 text-white rounded-full px-4 py-2 text-sm transition-colors duration-300 w-fit mx-auto sm:mx-0">
//               <span className="bg-green-900 px-3 py-1 rounded-full text-sm hover:bg-green-800 transition-colors duration-300">
//                 View My Portfolio
//               </span>
//               <span className="ml-2 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">
//                 ▶
//               </span>
//             </button>

//             {/* Hire Me */}
//             <button className="border-2 border-black px-4 py-2 rounded-full text-sm text-black hover:bg-black hover:text-white transition-colors duration-300 w-fit mx-auto sm:mx-0">
//               Hire Me
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
//           <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
//             <Image
//               src="uiux.svg"
//               alt="Olivia Smith"
//               width={400}
//               height={500}
//               className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 hover:scale-105 transform"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       {/* Marquee Section */}
//       <div className="bg-yellow-400 overflow-hidden py-3 sm:py-4 md:py-6 mt-6 sm:mt-8 md:mt-10">
//         <div className="flex animate-marquee space-x-6 text-green-900 font-bold whitespace-nowrap">
//           <span className="text-xl md:text-2xl lg:text-3xl">App Design</span>
//           <span className="text-black text-xl md:text-2xl lg:text-3xl">❋</span>
//           <span className="text-xl md:text-2xl lg:text-3xl">
//             Website Design
//           </span>
//           <span className="text-black text-xl md:text-2xl lg:text-3xl">❋</span>
//           <span className="text-xl md:text-2xl lg:text-3xl">Dashboard</span>
//           <span className="text-black text-xl md:text-2xl lg:text-3xl">❋</span>
//           <span className="text-xl md:text-2xl lg:text-3xl">Wireframe</span>
//           <span className="text-black text-xl md:text-2xl lg:text-3xl">❋</span>

//           {/* Duplicate for seamless loop */}
//           <span className="text-xl md:text-2xl lg:text-3xl">App Design</span>
//           <span className="text-black text-xl md:text-2xl lg:text-3xl">❋</span>
//           <span className="text-xl md:text-2xl lg:text-3xl">
//             Website Design
//           </span>
//           <span className="text-black text-xl md:text-2xl lg:text-3xl">❋</span>
//           <span className="text-xl md:text-2xl lg:text-3xl">Dashboard</span>
//           <span className="text-black text-xl md:text-2xl lg:text-3xl">❋</span>
//           <span className="text-xl md:text-2xl lg:text-3xl">Wireframe</span>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 15s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Home;

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
            <span className="text-yellow-500"> Olivia Smith, </span>
            <br />
            <span className="text-black">
              Product Designer <br />
              Based in USA.
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
