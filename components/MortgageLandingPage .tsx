// MortgageLandingPage.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

const data = {
  title: "Your Mortgage\nLoan Officer",
  subtitle: "Hi, I'm Ken J. Schmidt",
  description: "With over 25 years of experience, I specialize in construction loans, jumbo financing, and helping self-employed borrowers. Whether you're building your dream home or refinancing, I'm here to make the mortgage process simple, transparent, and stress-free.",
  image: "/img/ken.png", // Make sure this matches your actual image file name in /public/img/
};

const MortgageLandingPage = () => {
  return (
    <div className="">
      <div className="rounded-3xl bg-[#000C1C] m-2 text-white font-sans overflow-hidden relative">
        <main className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-8 pt-24 pb-20 gap-10">
          
          {/* LEFT COLUMN: Text & Buttons */}
          <div className="flex-1 max-w-2xl w-full text-center lg:text-left">
            <div className="hidden md:flex flex-col">
              <p className="text-md font-bold tracking-[0.2em] mb-6 uppercase text-[#5bb8f5]">
                {data.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 whitespace-pre-line">
                {data.title}
              </h1>
            </div>
            
            <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed whitespace-pre-line">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full flex items-center border-2 border-white/30 justify-center gap-3 px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1 hover:bg-white/10">
                  Start Application
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </Link>
              <a href="tel:+16304798545" className="w-full sm:w-auto">
                <button className="w-full flex items-center bg-white text-[#000C1C] justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1 hover:bg-gray-100">
                  Call 630-479-8545
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Image & Profile Card */}
          <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full">
            <div className="relative w-full max-w-[450px]">
              
              {/* Mobile Only: Title Text above Image */}
              <div className="flex flex-col text-center p-1 md:hidden">
                <p className="text-md font-bold tracking-[0.2em] mb-2 uppercase text-[#5bb8f5]">
                  {data.subtitle}
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-24 whitespace-pre-line">
                  {data.title}
                </h1>
              </div>
              
              <img
                src={data.image}
                alt="Ken J. Schmidt"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = data.image;
                }}
                className="w-full h-[400px] sm:h-[580px] lg:h-[550px] object-cover object-top rounded-2xl"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />

              {/* White Profile Card */}
              <div className="absolute -bottom-6 sm:bottom-10 right-0 md:right-10 left-0 sm:left-auto mx-auto sm:mx-0 bg-white text-gray-900 p-5 sm:p-6 rounded-2xl shadow-2xl w-[85%] max-w-[280px] sm:w-72">
                <h3 className="text-xl font-bold mb-2">Ken J. Schmidt</h3>
                <p className="text-gray-600 text-sm mb-1">Mortgage Loan Officer</p>
                <p className="text-gray-500 text-xs mb-2">NMLS ID: 697466</p>
                
                {/* Social Icons */}
                <div className="flex items-center gap-2 sm:gap-3 w-full mt-3">
                  
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/kenschmidtchicago/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition shrink-0"
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4 text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/huntingtonbank/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition shrink-0"
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4 text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/user/HuntingtonBank"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition shrink-0"
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4 text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                      </svg>
                    </span>
                  </a>

                  {/* Zillow */}
                  <a
                    href="https://www.zillow.com/lender-profile/ken%20schmidt12/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Zillow"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition shrink-0"
                  >
                   <Image
                    src="/img/z-logo.svg"
                    alt="Zillow"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default MortgageLandingPage;