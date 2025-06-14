// import React from 'react'
// import Image from 'next/image'

// const Services = () => {
//   return (

// <>
//       <section className=" relative px-4 md:px-10 py-16 bg-white">
//         <div className="text-4xl text-black mb-2">-Services</div>

//         <h2 className="text-3xl font-bold mb-8">
//           <span className="text-yellow-500 italic">Services </span>
//           <span className="text-black">I Provide</span>
//         </h2>

//         <div className=" absolute top-15 right-10 flex justify-end mt-10 align-center mb-10">
//             <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
//                 <div className="bg-green-800 text-white px-8 py-3 rounded-full text-base font-medium flex-1 text-center transition-colors duration-300 group-hover:bg-green-900">
//                   view all services
//                 </div>

//                 <div className="flex items-center  justify-center text-center  text-2xl  h-10 w-10 rounded-full bg-white text-green-800  font-bold ml-3 transition-colors duration-300 group-hover:bg-gray-100">
//                   →
//                 </div>
//               </button>
//         </div>
//         <div className="text-black grid md:grid-cols-3 gap-6 ">
//           <div className="mb-4 flex flex-col items-left mt-8">
//             <Image
//               src="/ui.png"
//               alt="UI/UX Design"
//               width={400}
//               height={500}
//               className="w-full max-w-sm mx-auto rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
//             />
//             <div className="text-xl font-semibold mb-2">UI/UX Design</div>
//             <p className="text-gray-600 text-sm mb-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod.
//             </p>
//             <a
//               href="#"
//               className="text-yellow-500 font-medium text-sm cursor-pointer"
//             >
//               Learn more →
//             </a>
//           </div>
//           <div className="mb-4">
//             <Image
//               src="/application.png"
//               alt="Application Design"
//               width={400}
//               height={500}
//               className="w-full max-w-sm mx-auto rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
//             />
//             <div className="text-xl font-semibold mb-2">Application Design</div>
//             <p className="text-gray-600 text-sm mb-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod.
//             </p>
//             <a
//               href="#"
//               className="text-yellow-500 font-medium text-sm cursor-pointer"
//             >
//               Learn more →
//             </a>
//           </div>
//           <div className="mb-4">
//             <Image
//               src="/website.png"
//               alt="Website Design"
//               width={400}
//               height={500}
//               className="w-full max-w-sm mx-auto rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
//             />
//             <div className="text-xl font-semibold mb-2">Website Design</div>
//             <p className="text-gray-600 text-sm mb-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod.
//             </p>
//             <a
//               href="#"
//               className="text-yellow-500 font-medium text-sm cursor-pointer"
//             >
//               Learn more →
//             </a>
//           </div>
//         </div>
//       </section>
//       </>
//   )
// }
// export default Services






import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <section className="relative px-4 md:px-10 py-16 bg-white">
      {/* Header */}
      <div className="text-4xl text-black mb-2">-Services</div>
      <h2 className="text-3xl font-bold mb-8">
        <span className="text-yellow-500 italic">Services </span>
        <span className="text-black">I Provide</span>
      </h2>

      {/* View All Services Button */}
      <div className="flex justify-start mb-10">
        <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
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
          { src: "/website.png", title: "Website Design" }
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
  )
}

export default Services


