import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
  
<>
      <section className=" relative px-10 py-16 bg-white">
        <div className="text-4xl text-black mb-2">-Services</div>

        <h2 className="text-3xl font-bold mb-8">
          <span className="text-yellow-500 italic">Services </span>
          <span className="text-black">I Provide</span>
        </h2>

        <div className=" absolute top-15 right-10 flex justify-end mt-10 align-center mb-10">
          <button className="bg-yellow-500 text-white px-8 py-2 flex items-center rounded-full hover:bg-green-950 hover:text-white min-w-{220px} whitespace-nowrap cursor-pointer">
            <span className="bg bg-green-900 px-4 py-2 rounded-full cursor-pointer">
              View All Services
            </span>
            <span className="ml-2 px-3 py-2 h-6 w-6 rounded-full bg-white text-black lg:flex items-center justify-center cursor-pointer">
              →
            </span>
          </button>
        </div>
        <div className="text-black grid md:grid-cols-3 gap-6 ">
          <div className="mb-4 flex flex-col items-left mt-8">
            <Image
              src="/ui.png"
              alt="UI/UX Design"
              width={400}
              height={500}
              className="w-full max-w-sm mx-auto rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            />
            <div className="text-xl font-semibold mb-2">UI/UX Design</div>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <a
              href="#"
              className="text-yellow-500 font-medium text-sm cursor-pointer"
            >
              Learn more →
            </a>
          </div>
          <div className="mb-4">
            <Image
              src="/application.png"
              alt="Application Design"
              width={400}
              height={500}
              className="w-full max-w-sm mx-auto rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            />
            <div className="text-xl font-semibold mb-2">Application Design</div>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <a
              href="#"
              className="text-yellow-500 font-medium text-sm cursor-pointer"
            >
              Learn more →
            </a>
          </div>
          <div className="mb-4">
            <Image
              src="/website.png"
              alt="Website Design"
              width={400}
              height={500}
              className="w-full max-w-sm mx-auto rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            />
            <div className="text-xl font-semibold mb-2">Website Design</div>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <a
              href="#"
              className="text-yellow-500 font-medium text-sm cursor-pointer"
            >
              Learn more →
            </a>
          </div>
        </div>
      </section>
      </>
  )
}

export default Services