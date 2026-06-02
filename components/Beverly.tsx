// app/page.tsx
// Complete single-page Next.js application with background video hero section
// All code is self-contained - just copy this file into your Next.js app directory

"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Beverly() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Ensure video plays automatically with error handling
    if (videoRef.current && !videoError) {
      const video = videoRef.current;
      
      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Video autoplay failed:", error);
          setVideoError(true);
        });
      }
      
      // Handle video load success
      video.addEventListener('canplay', () => {
        setIsVideoLoaded(true);
      });
      
      // Handle video errors
      video.addEventListener('error', (e) => {
        console.error("Video error:", e);
        setVideoError(true);
      });
    }
  }, [videoError]);
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* ========== BACKGROUND VIDEO SECTION ========== */}
      <div className="absolute inset-0 z-0">
        {videoError && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-black"
            style={{
              backgroundImage: 'url("/img/wpr.png")',
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
        )}
        
        {/* Video Element - FULL COVERAGE */}
        <video
          ref={videoRef}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
          poster="/img/sec.mp4"
          style={{ display: videoError ? 'none' : 'block' }}
        >
          <source src="/img/sec.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* ========== MAIN CONTENT - FULLY RESPONSIVE ========== */}
      <div className="relative z-10  flex items-center justify-center min-h-screen max-w-2xl px-4 py-12 sm:py-16 md:py-20">
        {/* Glassmorphism Card Container */}
        <div className="absolute left-1/2 max-w-5xl  w-full mx-auto bg-[#236193]/50 backdrop-blur-md   shadow-2xl shadow-black/30 animate-fadeSlideUp overflow-hidden">
          {/* Inner Content with Padding */}
          <div className="p-5 sm:p-8 md:p-10 lg:p-12">
            {/* Top Eyebrow / Tagline */}
            <div className="text-center mb-3 sm:mb-4 md:mb-5">
              <span className="inline-block text-[0.7rem] sm:text-xs md:text-sm tracking-[0.25em] uppercase font-semibold text-amber-700 bg-amber-100/50 px-3 py-1 rounded-full">
                PREMIUM MORTGAGE SOLUTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className=" font-bold text-center text-slate-800 mb-2 sm:mb-3 leading-tight tracking-tight">
              SERVING THE GREATER
              <br />
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 bg-clip-text text-transparent">
                LOS ANGELES AREA
              </span>
            </h1>

            {/* Subheading / Location Badge */}
            <div className="text-center mb-5 sm:mb-7 md:mb-8">
              <div className="inline-block border-b-2 border-dashed border-amber-300 pb-1 sm:pb-2">
                <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700">
                  FROM OUR BEVERLY HILLS OFFICE
                </p>
              </div>
            </div>

            {/* Main Description Text */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 text-center">
              <p className="text-xs sm:text-sm text-slate-500">
                Through our strategic network of lending partners, we structure
                mortgage solutions for residential and commercial properties
                throughout the greater Los Angeles area. From first-time buyers
                to complex and high-value transactions, our team helps borrowers
                find the right financing fit. Based in Beverly Hills, we bring
                more than 38 years of industry experience and a
                relationship-driven approach that goes beyond traditional banks.
                Learn more about working with a Los Angeles mortgage
                broker.{" "}
              </p>
            </div>

            {/* Bottom Footer Text - Exact Original Copy */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 text-center ">
              <p className="text-xs sm:text-sm text-slate-500">
                Learn more about working with a Los Angeles mortgage broker.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== CUSTOM STYLES (via style tag for animations) ========== */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }

        @keyframes slowZoom {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        video {
          animation: slowZoom 20s ease-in-out infinite alternate;
        }

        /* Custom radial gradient background */
        .bg-radial-gradient {
          background: radial-gradient(
            circle at center,
            transparent 0%,
            rgba(0, 0, 0, 0.2) 100%
          );
        }
      `}</style>
    </main>
  );
}
