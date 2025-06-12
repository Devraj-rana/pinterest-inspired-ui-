import React from 'react'
import Image from 'next/image'
const Home = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center px-20 py-1 mt-6">
        <div className="align-center md:text-left space-y-4 md:space-y-1">
          <div className=" relative z-10 flex items-center justify-start min-h-10 mb-10">
            <button className="relative bg-white border-2 border-gray-600 px-10 py-0">
              <div className="absolute w-3 h-3 bg-orange-400 -top-1 -left-1" />
              <div className="absolute w-3 h-3 bg-orange-400 -top-1 -right-1" />
              <div className="absolute w-3 h-3 bg-orange-400 -bottom-1 -left-1" />
              <div className="absolute w-3 h-3 bg-orange-400 -bottom-1 -right-1" />

              <span className="relative z-10 font-medium text-lg text-gray-700">
                Hello There!
              </span>
            </button>
          </div>
          <h1 className="text-4xl font-bold">
            <span className="text-black">I&apos;m</span>
            <span className="text-yellow-500"> Olivia Smith, </span>
            <br />
            <span className="text-black">
              Product Designer <br></br> Based in USA.
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            I&apos;m an experienced Product Designer with 8+ years in the <br />{" "}
            field, collaborating with various companies and startups.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-yellow-500 text-white px-8 py-2 flex items-center rounded-full hover:bg-green-950 hover:text-white min-w-[220px] whitespace-nowrap cursor-pointer">
              <span className="bg bg-green-900 px-4 py-2 rounded-full cursor-pointer">
                View My Portfolio
              </span>
              <span className="ml-2 px-3 py-2 h-6 w-6 rounded-full bg-white text-black flex items-center justify-center cursor-pointer">
                ▶
              </span>
            </button>
            <button className="border-2 border-black px-15 py-2 rounded-full text-black cursor-pointer">
              Hire Me
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <div className="w-full max-w-md">
            <Image
              src="uiux.svg"
              alt="Olivia Smith"
              width={400}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl animate-pulse hover:shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="bg-yellow-400 overflow-hidden py-4 mt-7">
        <div className="flex animate-marquee space-x-8 text-green-900 font-bold text-xl">
          <span className="text-4xl">App Design</span>
          <span className="text-black text-4xl">❋</span>
          <span className="text-4xl">Website Design</span>
          <span className="text-black text-4xl">❋</span>
          <span className="text-4xl">Dashboard</span>
          <span className="text-black text-4xl">❋</span>
          <span className="text-4xl">Wireframe</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
          white-space: nowrap;
        }
      `}</style>
      </>
  )
}

export default Home