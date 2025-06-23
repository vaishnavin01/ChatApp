import React from "react";

const CustomerLogos = () => {
  return (
    <section className="bg-gray-900 text-white min-h-[30vh]">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-4 lg:grid-cols-6 items-center justify-center">
          {/* Logo 1 */}
          <a href="#" className="flex justify-center items-center">
            <svg
              className="h-9 hover:text-white"
              viewBox="0 0 125 35"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64.828 7.11521C64.828 8.52061 63.6775 9.6527..."
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Logo 2 */}
          <a href="#" className="flex justify-center items-center">
            <svg
              className="h-9 hover:text-white"
              viewBox="0 0 86 29"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6008 10.2627V13.2312L18.6907 13.2281..."
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Logo 3 */}
          <a href="#" className="flex justify-center items-center">
            <svg
              className="h-8 hover:text-white"
              viewBox="0 0 151 34"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3753_27919)">
                <path
                  d="M150.059 16.1144V13.4753H146.783V9.37378L14..."
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_3753_27919">
                  <rect
                    width="150"
                    height="32.8125"
                    fill="white"
                    transform="translate(0.0820312 0.835449)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>

          {/* Logo 4 */}
          <a href="#" className="flex justify-center items-center">
            <svg
              className="h-9 hover:text-white"
              viewBox="0 0 124 38"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.8299 17.3952C54.7246 18.342 56.3124 19.81..."
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Logo 5 */}
          <a href="#" className="flex justify-center items-center">
            <svg
              className="h-9 hover:text-white"
              viewBox="0 0 137 37"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.3228 13.9636C51.5883 13.9636 50.7303 15.3..."
                fill="currentColor"
              />
              {/* More <path>... entries omitted for brevity */}
            </svg>
          </a>

          {/* Logo 6 */}
          <a href="#" className="flex justify-center items-center">
            <svg
              className="h-6 hover:text-white"
              viewBox="0 0 124 21"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.813 0.069519L12.5605 11.1781L8.28275 0.06..."
                fill="currentColor"
              />
              {/* More <path>... entries omitted for brevity */}
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
