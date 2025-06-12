import React from "react";

const PricingSection = () => {
  return (
    <section className="relative bg-[#344c36] text-white py-40 px-30 w-full rounded-none mt-15">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold ">
          <span className="text-yellow-400">-</span> Pricing Table
          <br />
          <br />
          <span className="text-5xl "> My</span>
          <span className="text-yellow-400 italic text-5xl ">
            Pricing Model
          </span>
        </h2>
        <button className="bg-yellow-500 text-white px-4 py-2 flex items-center rounded-full hover:bg-green-950 hover:text-white min-w-{220px} whitespace-nowrap cursor-pointer mt-17">
          <span className="bg bg-green-900 px-4 py-2 rounded-full cursor-pointer">
            Get started
          </span>
          <span className="ml-2 px-3 py-2 h-6 w-6 rounded-full bg-white text-black lg:flex items-center justify-center cursor-pointer">
            →
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hourly Card */}
        <div className="bg-[#455a45] rounded-2xl p-8 space-y-6">
          <div className="relative bg-[#344c36] rounded-md p-6 flex flex-col">
            <button className=" absolute top-4 right-4  bg-yellow-400 text-green-900 rounded-full p-2 hover:bg-yellow-300 cursor-pointer w-14 h-15">
              <span className="text-4xl font-bold">↗</span>
            </button>
            <div className="text-2xl font-semibold mb-2">Hourly</div>
            <div className="text-3xl font-extrabold text-yellow-400 mb-4">
              $80<span className="text-lg font-normal text-white">/Hour</span>
            </div>
            <div className="flex items-baseline space-x-2"></div>
          </div>

          <ul className="space-y-2 text-yellow-400">
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>Lorem ipsum dolor sit amet</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>Sed ut perspiciatis</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>At vero eos et accusamus</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>Vitae dicta sunt explicabo</span>
            </li>
            <li className="flex items-center space-x-2 text-white opacity-30">
              <span>✔</span>
              <span>Veritatis et quasi architecto</span>
            </li>
            <li className="flex items-center space-x-2 text-white opacity-30">
              <span>✔</span>
              <span>Beatae vitae dicta sunt</span>
            </li>
            <li className="flex items-center space-x-2 text-white opacity-30">
              <span>✔</span>
              <span>Explicabo. Nemo enim</span>
            </li>
            <li className="flex items-center space-x-2 text-white opacity-30">
              <span>✔</span>
              <span>Nemo enim ipsam voluptatem</span>
            </li>
          </ul>
        </div>

        {/* Monthly Card */}
        <div className="bg-[#faad1a] rounded-2xl p-8 space-y-6">
          <div className=" relative bg-[#344c36] rounded-md p-6 flex flex-col">
            <button className=" absolute top-4 right-4  bg-yellow-400 text-green-900 rounded-full p-2 hover:bg-yellow-300 cursor-pointer w-14 h-15">
              <span className="text-4xl font-bold">↗</span>
            </button>
            <div className="text-2xl font-semibold mb-2">Monthly</div>
            <div className="text-3xl font-extrabold text-yellow-400 mb-4">
              $9600<span className="text-lg font-normal text-white"> /Month</span>
            </div>
            <div className="flex items-baseline space-x-2"></div>
          </div>
          <ul className="space-y-2 text-black">
            <li className="flex items-center space-x-2">
             
       <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
      <svg
        className="w-3 h-3 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
             
              <span>Lorem ipsum dolor sit amet</span>
            </li>
            <li className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
      <svg
        className="w-3 h-3 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
              <span>Sed ut perspiciatis</span>
            </li>
            <li className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
      <svg
        className="w-3 h-3 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
              <span>At vero eos et accusamus</span>
            </li>
            <li className="flex items-center space-x-2">
             <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
      <svg
        className="w-3 h-3 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
              <span>Vitae dicta sunt explicabo</span>
            </li>
            <li className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
      <svg
        className="w-3 h-3 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
              <span>Veritatis et quasi architecto</span>
            </li>

             <li className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
      <svg
        className="w-3 h-3 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
              <span>ae dicta sunt</span>
            </li>


            <li className="flex items-center space-x-2 opacity-50">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
      <svg
        className="w-3 h-3 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
              <span>Explicabo. Nemo enim</span>
            </li>
            <li className="flex items-center space-x-2 opacity-50">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
      <svg
        className="w-3 h-3 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
              <span>Nemo enim ipsam voluptatem</span>
            </li>
          </ul>
        </div>

        {/* Quarterly Card */}
        <div className="bg-[#455a45] rounded-2xl p-8 space-y-6">
          <div className="relative bg-[#344c36] rounded-md p-6 flex flex-col">
            <button className=" absolute top-4 right-4  bg-yellow-400 text-green-900 rounded-full p-2 hover:bg-yellow-300 cursor-pointer w-14 h-15">
              <span className="text-4xl font-bold">↗</span>
            </button>
            <div className="text-2xl font-semibold mb-2">Quarterly</div>
            <div className="text-3xl font-extrabold text-yellow-400 mb-4">
              $24,000<span className="text-lg font-normal text-white"> /Quarter</span>
            </div>
            <div className="flex items-baseline space-x-2"></div>
          </div>
          <ul className="space-y-2 text-yellow-400">
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>Lorem ipsum dolor sit amet</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>Sed ut perspiciatis</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>At vero eos et accusamus</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>Vitae dicta sunt explicabo</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>Veritatis et quasi architecto</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>Beatae vitae dicta sunt</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>Explicabo. Nemo enim</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span>
              <span>Nemo enim ipsam voluptatem</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
