import React from "react";

const Payments = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-24">
        <div className="mx-auto max-w-screen-md text-center mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light sm:text-xl text-gray-400">
            Here at Swift we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Starter Plan */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border border-gray-700 shadow bg-gray-800">
            <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
            <p className="font-light sm:text-lg text-gray-400">Best option for personal use & for your next project.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$29</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              {[
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 1 developer",
                "Premium support: 6 months",
                "Free updates: 1 year",
              ].map((feature, i) => (
                <li className="flex items-center space-x-3" key={i}>
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 
                        01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                        011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Get started
            </a>
          </div>

          {/* Company Plan */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border border-gray-700 shadow bg-gray-800">
            <h3 className="mb-4 text-2xl font-semibold">Company</h3>
            <p className="font-light sm:text-lg text-gray-400">Relevant for multiple users, extended & premium support.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$99</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              {[
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 10 developers",
                "Premium support: 24 months",
                "Free updates: 3 years",
              ].map((feature, i) => (
                <li className="flex items-center space-x-3" key={i}>
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 
                        01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                        011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Get started
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border border-gray-700 shadow bg-gray-800">
            <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
            <p className="font-light sm:text-lg text-gray-400">Best for large-scale uses and extended redistribution rights.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$499</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              {[
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 100+ developers",
                "Premium support: 36 months",
                "Free updates: Lifetime",
              ].map((feature, i) => (
                <li className="flex items-center space-x-3" key={i}>
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 
                        01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                        011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
