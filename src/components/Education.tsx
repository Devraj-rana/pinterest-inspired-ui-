import React from 'react'

const Education = () => {
  return (
  

      <section id="education" className="relative py-20 px-4 mt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-yellow-500">-</span>
            <span className="text-black ml-4">Education & Work</span>
          </h2>
          <p className="text-3xl text-black mb-2">
            My{" "}
            <span className="text-3xl text-yellow-400 mb-2">
              {" "}
              Academic and{" "}
            </span>{" "}
          </p>
          <p className="text-3xl text-yellow-400  mb-2">
            Professional <span className="text-4xl text-black"> Journey</span>
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
                <h4 className="text-2xl  text-black mt-1">
                  Harmony Institute
                </h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-black">2008 -2012</p>
                <h4 className="text-2xl  text-black mt-1">
                  Aurora Academy
                </h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-black">1996 -2008</p>
                <h4 className="text-2xl  text-black mt-1">
                  Crystalbrook
                </h4>
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
                <h4 className="text-2xl text-black mt-1">
                  Insightlancer
                </h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-black">2016 -2018</p>
                <h4 className="text-2xl text-black mt-1">
                  Self-Employed
                </h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-6 py-2">
                <p className="text-black">2014 -2016</p>
                <h4 className="text-2xl text-black mt-1">
                  KG Graphics Studio
                </h4>
                <p className="text-black mt-1">Master in Visual Arts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Education