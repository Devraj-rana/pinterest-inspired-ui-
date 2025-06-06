import React from "react";

const PricingSection = () => {
  return (
    <section className="relative bg-[#344c36] text-white py-20 px-8 max-w-7xl mx-auto rounded-3xl mt-32">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-yellow-400 italic">Pricing Model</span>
        </h2>
        <button className="bg-yellow-400 text-green-900 px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-yellow-300 cursor-pointer">
          <span>Get Started</span>
          <span className="text-2xl font-bold">→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hourly Card */}
        <div className="bg-green-800 rounded-2xl p-8 space-y-6">
          <div className="text-lg font-semibold">Hourly</div>
          <div className="bg-green-700 rounded-md p-6 text-4xl font-extrabold flex items-baseline space-x-2">
            <span className="text-yellow-400">$80</span>
            <span className="text-lg font-normal">/Hour</span>
            <button className="ml-auto bg-yellow-400 text-green-900 rounded-full p-2 hover:bg-yellow-300 cursor-pointer">
              <span className="text-xl font-bold">↗</span>
            </button>
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
            <li className="flex items-center space-x-2 text-green-700">
              <span>✔</span>
              <span>Veritatis et quasi architecto</span>
            </li>
            <li className="flex items-center space-x-2 text-green-700">
              <span>✔</span>
              <span>Beatae vitae dicta sunt</span>
            </li>
            <li className="flex items-center space-x-2 text-green-700">
              <span>✔</span>
              <span>Explicabo. Nemo enim</span>
            </li>
            <li className="flex items-center space-x-2 text-green-700">
              <span>✔</span>
              <span>Nemo enim ipsam voluptatem</span>
            </li>
          </ul>
        </div>

        {/* Monthly Card */}
        <div className="bg-yellow-400 rounded-2xl p-8 space-y-6 text-green-900">
          <div className="text-lg font-semibold">Monthly</div>
          <div className="bg-green-900   rounded-md p-6 text-4xl font-extrabold flex items-baseline space-x-2">
            <span className="text-yellow-400">$9600</span>
            <span className="text-lg font-normal">/Month</span>
            <button className="ml-auto bg-green-900 text-yellow-400 rounded-full p-2 hover:bg-green-700 cursor-pointer">
              <span className="text-xl font-bold">↗</span>
            </button>
          </div>
          <ul className="space-y-2">
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
            <li className="flex items-center space-x-2 text-green-700">
              <span>✔</span>
              <span>Explicabo. Nemo enim</span>
            </li>
            <li className="flex items-center space-x-2 text-green-700">
              <span>✔</span>
              <span>Nemo enim ipsam voluptatem</span>
            </li>
          </ul>
        </div>

        {/* Quarterly Card */}
        <div className="bg-green-800 rounded-2xl p-8 space-y-6">
          <div className="text-lg font-semibold">Quarterly</div>
          <div className="bg-green-700 rounded-md p-6 text-4xl font-extrabold flex items-baseline space-x-2">
            <span className="text-yellow-400">$28,800</span>
            <span className="text-lg font-normal">/Quarter</span>
            <button className="ml-auto bg-yellow-400 text-green-900 rounded-full p-2 hover:bg-yellow-300 cursor-pointer">
              <span className="text-xl font-bold">↗</span>
            </button>
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
