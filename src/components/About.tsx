// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     // about me
//     <>
//       <section id="about" className="py-40 px-4 bg-green-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <Image
//                 src="/oliva.jpg"
//                 alt="About Olivia"
//                 width={900}
//                 height={900}
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>
//             <div className="space-y-6">
//               <div>
//                 <div className="flex items-center mb-4">
//                   <div className="w-8 h-1 bg-yellow-500 mr-3"></div>
//                   <span className="text-white font-bold lg:text-3xl">
//                     About Me
//                   </span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-white lg:text-800 mb-6">
//                   Who is{" "}
//                   <span className="text-yellow-500 italic lg:text-800   ">
//                     {" "}
//                     olivia smith ?{" "}
//                   </span>
//                 </h2>
//               </div>
//               <p className="text-white text-lg leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod.
//               </p>
//               <div className="grid grid-cols-3 gap-6 pt-6">
//                 <div>
//                   <div className="text-3xl font-bold text-yellow-500">600+</div>
//                   <div className="text-white-600">Projects Completed</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-yellow-500">50+</div>
//                   <div className="text-white">Years Experience</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-yellow-500">18+</div>
//                   <div className="text-white">Years Experience</div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between mt-10">
//                   <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
//                 <div className="bg-green-800 text-white px-8 py-3 rounded-full text-base font-medium flex-1 text-center transition-colors duration-300 group-hover:bg-green-900">
//                   Download CV
//                 </div>

//                 <div className="flex items-center  justify-center text-center  text-2xl  h-10 w-10 rounded-full bg-white text-green-800  font-bold ml-3 transition-colors duration-300 group-hover:bg-gray-100">
//                   →
//                 </div>
//               </button>
//                 <p className="text-yellow-400 text-4xl italic">Olivia Smith</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;





// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-4 bg-green-900">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid gap-10 lg:grid-cols-2 items-center">
//           {/* Image */}
//           <div className="flex justify-center">
//             <Image
//               src="/oliva.jpg"
//               alt="About Olivia"
//               width={900}
//               height={900}
//               className="rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-full"
//             />
//           </div>

//           {/* Text Content */}
//           <div className="space-y-6">
//             {/* Heading */}
//             <div>
//               <div className="flex items-center mb-4">
//                 <div className="w-8 h-1 bg-yellow-500 mr-3"></div>
//                 <span className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl">
//                   About Me
//                 </span>
//               </div>
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
//                 Who is{" "}
//                 <span className="text-yellow-500 italic">Olivia Smith?</span>
//               </h2>
//             </div>

//             {/* Paragraph */}
//             <p className="text-white text-base sm:text-lg leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
//               <div>
//                 <div className="text-3xl font-bold text-yellow-500">600+</div>
//                 <div className="text-white text-sm">Projects Completed</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-yellow-500">10+</div>
//                 <div className="text-white text-sm">Years Experience</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-yellow-500">18+</div>
//                 <div className="text-white text-sm">Awards Won</div>
//               </div>
//             </div>

//             {/* Button & Signature */}
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10">
//               <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
//                 <div className="bg-green-800 text-white px-8 py-3 rounded-full text-base font-medium transition-colors duration-300 group-hover:bg-green-900">
//                   Download CV
//                 </div>
//                 <div className="flex items-center justify-center text-2xl h-10 w-10 rounded-full bg-white text-green-800 font-bold ml-3 transition-colors duration-300 group-hover:bg-gray-100">
//                   →
//                 </div>
//               </button>
//               <p className="text-yellow-400 text-3xl italic">Olivia Smith</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


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
                <span className="text-yellow-500 italic">Olivia Smith?</span>
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
                Olivia Smith
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
