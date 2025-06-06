"use client";

import Image from "next/image";
import React from "react";
import { Monitor, ArrowRight } from "lucide-react";
import PricingSection from "@/components/PricingSection";

export default function HomePage() {
  return (
    <main className=" bg-white min-h-screen font-sans px-0 py-3 pt-7 ">
      {/* header*/}
      <div className="px-12">
        <header className=" rounded-4xl flex justify-between items-center px-20 py-5 bg-green-900 ">
          <div className="text-2xl font-bold text-yellow-500 px-20">Olivia</div>
          <nav className="space-x-6 text-white font-medium hidden md:flex px-20">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Blogs</a>
            <a href="#">Testimonials</a>
          </nav>
          <button className="bg-white text-green-900 px-4 py-2 rounded-full hover:bg-green-950 hover:text-white cursor-pointer">
            Contact Me
          </button>
        </header>
      </div>

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
            <span className="text-black">I'm</span>
            <span className="text-yellow-500"> Olivia Smith, </span>
            <br />
            <span className="text-black">
              Product Designer <br></br> Based in USA.
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            I'm an experienced Product Designer with 8+ years in the <br />{" "}
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

      {/* services*/}

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
            <a href="#" className="text-yellow-500 font-medium text-sm cursor-pointer">
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
            <a href="#" className="text-yellow-500 font-medium text-sm cursor-pointer">
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
            <a href="#" className="text-yellow-500 font-medium text-sm cursor-pointer">
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* about me  */}

      <section id="about" className="py-40 px-4 bg-green-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/oliva.jpg"
                alt="About Olivia"
                width={900}
                height={900}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-1 bg-yellow-500 mr-3"></div>
                  <span className="text-white font-bold lg:text-3xl">
                    About Me
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white lg:text-800 mb-6">
                  Who is{" "}
                  <span className="text-yellow-500 italic lg:text-800   ">
                    {" "}
                    olivia smith ?{" "}
                  </span>
                </h2>
              </div>
              <p className="text-white text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-3xl font-bold text-yellow-500">600+</div>
                  <div className="text-white-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500">50+</div>
                  <div className="text-white">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500">18+</div>
                  <div className="text-white">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-10">
                <button className="bg-yellow-500 text-white px-8 py-2 flex items-center rounded-full hover:bg-green-950 hover:text-white min-w-{220px} whitespace-nowrap cursor-pointer">
                  <span className="bg bg-green-900 px-4 py-2 rounded-full cursor-pointer">
                    Download CV
                  </span>
                  <span className="ml-2 px-3 py-2 h-6 w-6 rounded-full bg-white text-black lg:flex items-center justify-center cursor-pointer">
                    →
                  </span>
                </button>
                <p className="text-yellow-400 text-4xl italic">Olivia Smith</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* fav tools*/}

      <section>
        <div className="text-3xl text-black align-middle flex justify-center gap-2 mt-40">
          <span className="text-yellow-400">-</span>
          My Favorite Tools
        </div>
        <p className="text-5xl text-yellow-400 italic align-middle flex justify-center mt-4">
          {" "}
          Exploring The Tools
        </p>
        <p className="text-5xl text-black align-middle flex justify-center">
          {" "}
          Behind My Designs
        </p>
      </section>
      <div className="w-full px-4">
        <div className="flex justify-center items-center gap-4">
          <div className="flex-1">
            <Image
              src="/figma_icon.png"
              alt="figma"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/sketch_icon.png"
              alt="sketch"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/photoshop_icon.png"
              alt="photoshop"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/After_Effects_icon.png"
              alt="after effects"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/storybook_icon.png"
              alt="storybook"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/InVision_icon.png"
              alt="InVision"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}

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

      {/* education and work */}
      
      <section id="education" className="relative py-20 px-4 mt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-yellow-500">-</span>
            <span className="text-black ml-4">Education & Work</span>
          </h2>
          <p className="text-5xl text-black italic mb-2">
            My{" "}
            <span className="ext-5xl text-yellow-400 italic mb-2">
              {" "}
              Academic and{" "}
            </span>{" "}
          </p>
          <p className="text-5xl text-yellow-400 italic mb-2">
            Professional <span className="text-5xl text-black"> Journey</span>
          </p>
        </div>

        <div className="-mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Education Box */}
          <div className="bg-gray-100 rounded-3xl p-16 shadow-lg mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-3xl">👨‍🎓</span>
              </div>
              <h3 className="text-3xl font-bold text-black">Education</h3>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-black">2012 -2014</p>
                <h4 className="text-2xl font-bold text-black mt-1">Harmony Institute</h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-black">2008 -2012</p>
                <h4 className="text-2xl font-bold text-black mt-1">Aurora Academy</h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-black">1996 -2008</p>
                <h4 className="text-2xl font-bold text-black mt-1">Crystalbrook</h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>
            </div>
          </div>

          {/* Work Experience Box */}
          <div className="bg-gray-100 rounded-3xl p-16 shadow-lg mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-3xl font-bold text-black">Work Experience</h3>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-black">2018 -2024</p>
                <h4 className="text-2xl font-bold text-black mt-1">Insightlancer</h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-black">2016 -2018</p>
                <h4 className="text-2xl font-bold text-black mt-1">Self-Employed</h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-black">2014 -2016</p>
                <h4 className="text-2xl font-bold text-black mt-1">KG Graphics Studio</h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingSection/>
    </main>
  );
}

