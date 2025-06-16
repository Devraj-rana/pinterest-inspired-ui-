'use client'
import React from "react";

const PricingSection = () => {
  return (
    <section className="relative bg-[#344c36] text-white py-20 px-4 sm:px-8 md:px-16 lg:px-32 w-full mt-16">
      {/* Heading and CTA */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left mb-12 gap-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="text-yellow-400">-</span> Pricing Table
          <br />
          <br />
          <span className="text-3xl sm:text-5xl">My</span>{" "}
          <span className="text-yellow-400 italic text-3xl sm:text-5xl">
            Pricing Model
          </span>
        </h2>

        <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
          <div className="bg-green-800 text-white px-8 py-3 rounded-full text-base font-medium flex-1 text-center transition-colors duration-300 group-hover:bg-green-900">
            Get started
          </div>

          <div className="flex items-center justify-center text-center text-2xl h-10 w-10 rounded-full bg-white text-green-800 font-bold ml-3 transition-colors duration-300 group-hover:bg-gray-100">
            →
          </div>
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Hourly Card */}
        <div className="bg-[#455a45] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="relative bg-[#344c36] rounded-md p-6 flex flex-col">
            <button className="absolute top-4 right-4 bg-yellow-400 text-green-900 rounded-full p-2 hover:bg-yellow-300 w-14 h-14">
              <span className="text-2xl sm:text-3xl font-bold">↗</span>
            </button>
            <div className="text-xl sm:text-2xl font-semibold mb-2">Hourly</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-yellow-400 mb-4">
              $80<span className="text-base font-normal text-white">/Hour</span>
            </div>
          </div>
          <ul className="space-y-2 text-yellow-400 text-sm sm:text-base">
            <li className="flex items-center gap-2">✔ Lorem ipsum dolor sit amet</li>
            <li className="flex items-center gap-2">✔ Sed ut perspiciatis</li>
            <li className="flex items-center gap-2">✔ At vero eos et accusamus</li>
            <li className="flex items-center gap-2">✔ Vitae dicta sunt explicabo</li>
            <li className="flex items-center gap-2 text-white opacity-30">✔ Veritatis et quasi architecto</li>
            <li className="flex items-center gap-2 text-white opacity-30">✔ Beatae vitae dicta sunt</li>
            <li className="flex items-center gap-2 text-white opacity-30">✔ Explicabo. Nemo enim</li>
            <li className="flex items-center gap-2 text-white opacity-30">✔ Nemo enim ipsam voluptatem</li>
          </ul>
        </div>

        {/* Monthly Card */}
        <div className="bg-[#faad1a] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="relative bg-[#344c36] rounded-md p-6 flex flex-col">
            <button className="absolute top-4 right-4 bg-yellow-400 text-green-900 rounded-full p-2 hover:bg-yellow-300 w-14 h-14">
              <span className="text-2xl sm:text-3xl font-bold">↗</span>
            </button>
            <div className="text-xl sm:text-2xl font-semibold mb-2">Monthly</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-yellow-400 mb-4">
              $9600<span className="text-base font-normal text-white"> /Month</span>
            </div>
          </div>
          <ul className="space-y-2 text-black text-sm sm:text-base">
            {[
              "Lorem ipsum dolor sit amet",
              "Sed ut perspiciatis",
              "At vero eos et accusamus",
              "Vitae dicta sunt explicabo",
              "Veritatis et quasi architecto",
              "ae dicta sunt",
              "Explicabo. Nemo enim",
              "Nemo enim ipsam voluptatem"
            ].map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 ${index >= 6 ? "opacity-50" : ""}`}
              >
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quarterly Card */}
        <div className="bg-[#455a45] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="relative bg-[#344c36] rounded-md p-6 flex flex-col">
            <button className="absolute top-4 right-4 bg-yellow-400 text-green-900 rounded-full p-2 hover:bg-yellow-300 w-14 h-14">
              <span className="text-2xl sm:text-3xl font-bold">↗</span>
            </button>
            <div className="text-xl sm:text-2xl font-semibold mb-2">Quarterly</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-yellow-400 mb-4">
              $24,000<span className="text-base font-normal text-white"> /Quarter</span>
            </div>
          </div>
          <ul className="space-y-2 text-yellow-400 text-sm sm:text-base">
            {[
              "Lorem ipsum dolor sit amet",
              "Sed ut perspiciatis",
              "At vero eos et accusamus",
              "Vitae dicta sunt explicabo",
              "Veritatis et quasi architecto",
              "Beatae vitae dicta sunt",
              "Explicabo. Nemo enim",
              "Nemo enim ipsam voluptatem"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                ✔ {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
