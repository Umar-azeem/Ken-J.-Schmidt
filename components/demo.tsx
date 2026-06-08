"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MeetMarkCohen() {
  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[600px] md:min-h-[700px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/ken-j.png"
          alt="Mortgage Broker Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Animated content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-screen mx-auto px-4 py-10 md:py-16 lg:py-24 sm:px-6 lg:px-8 transition-transform duration-100 ease-out"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#236193]" />
            <span className="text-[#236193] font-semibold tracking-wide">
              Welcome to Your Trusted Advisor
            </span>
          </div>

          {/* Title */}
          <h1 className="w-full text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-tight mb-6">
            MORTGAGE BROKER
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
           Ken J. Schmidt is a leading mortgage lending expert with over 20
              years of experience in the home financing industry, committed to
              delivering tailored loan solutions designed to meet your unique
              homeownership goals.
          </p>

          {/* Features List */}
          <div className="space-y-3 text-slate-200 mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#236193] flex-shrink-0" />
              <span>Over 25 Years of Experience</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#236193] flex-shrink-0" />
              <span>Residential & Commercial Financing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="border-1 border-x-4 bg-transparent border-white hover:bg-[#1a4a70] text-white hover: px-10 py-7 text-lg rounded-none">
              APPLY FOR A LOAN
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}

("use client");

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current && contentRef.current) {
        const scrolled = window.scrollY;
        const content = contentRef.current as HTMLElement;
        content.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"
    >
      {/* Background Image with Mobile Optimization */}
      <div className="absolute inset-0 z-0">
        {/* Mobile-specific image positioning */}
        <div className="relative w-full h-full">
          <Image
            src="/img/ken-j.png"
            alt="Mortgage Broker Background"
            fill
            className="object-cover md:object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{
              objectPosition: "center 30%", // Adjusts focus point on mobile
            }}
          />
        </div>

        {/* Gradient Overlay - Mobile Optimized */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent"></div>
      </div>

      {/* Animated content - Mobile First Design */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-screen mx-auto px-4 py-12 sm:px-6 lg:px-8 transition-transform duration-100 ease-out"
      >
        <div className="max-w-4xl mx-auto text-center md:text-left md:text-left">
          {/* Location Badge - Mobile Friendly */}
          <div className="flex items-center justify-center md:justify-center gap-2 mb-4 md:mb-5">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#236193]" />
            <span className="text-[#236193] font-semibold tracking-wide text-sm md:text-base">
              Welcome to Your Trusted Advisor
            </span>
          </div>

          {/* Title - Responsive Font Sizes for Mobile */}
          <h1 className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-tight mb-4 md:mb-6">
            MORTGAGE
            <br className="hidden sm:block" /> BROKER
          </h1>

          {/* Description - Better readability on mobile */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto md:mx-auto px-2 sm:px-0">
            Ken J. Schmidt is a leading mortgage lending expert with over 20
            years of experience in the home financing industry, committed to
            delivering tailored loan solutions designed to meet your unique
            homeownership goals.
          </p>

          {/* Features List - Stacked on mobile, centered */}
          <div className="space-y-3 text-slate-200 mb-6 md:mb-8 max-w-md mx-auto md:mx-auto">
            <div className="flex items-center justify-center md:justify-center gap-3">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#236193] flex-shrink-0" />
              <span className="text-sm md:text-base">
                Over 25 Years of Experience
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-center gap-3">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#236193] flex-shrink-0" />
              <span className="text-sm md:text-base">
                Residential & Commercial Financing
              </span>
            </div>
          </div>

          {/* CTA Buttons - Full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center">
            <Button className="border-2 border-white bg-transparent hover:bg-[#236193] hover:border-[#236193] text-white px-6 sm:px-8 md:px-10 py-5 md:py-7 text-base md:text-lg rounded-none transition-all duration-300 w-full sm:w-auto">
              APPLY FOR A LOAN
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile for better UX */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
