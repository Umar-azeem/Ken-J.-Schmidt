import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button';
import { CheckCircle2, MapPin } from 'lucide-react';

function Hero() {
     const heroRef = useRef<HTMLDivElement>(null);
      const contentRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        const handleScroll = () => {
          if (heroRef.current && contentRef.current) {
            const scrollY = window.scrollY;
            const translateY = scrollY * 0.5; // Text moves up as scroll increases
            contentRef.current.style.transform = `translateY(${translateY}px)`;
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
     <div>
          <section
            ref={heroRef}
            className="relative hidden sm:flex overflow-hidden min-h-[600px] md:min-h-[700px]"
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
              <div className="max-w-4xl mx-auto text-center mt-16">
                {/* Location Badge */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#236193]" />
                  <span className="text-[#236193] font-semibold tracking-wide">
                    Welcome to Your Trusted Advisor
                  </span>
                </div>

                {/* Title */}
                <h1 className="w-full text-5xl md:text-6xl lg:text-5xl font-extralight text-white leading-tight mb-3">
                  MORTGAGE BROKER
                </h1>

                {/* Description */}
                <p className="text-lg md:text-md font-light text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Ken J. Schmidt and the team at Cohen Financial Group have been
                  financing residential and commercial throughout Greater
                  Illinois from our Beverly Hills office for over 25 years plus
                  of experience.
                </p>

                {/* Features List */}
                <div className="space-y-3 text-slate-200 mb-3 max-w-md mx-auto">
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
          <section className="w-full max-w-lg mx-auto md:max-w-none">
            <div className="relative w-full aspect-[3/2.8] overflow-hidden bg-[#1a2535] sm:hidden">
              <Image
                src="/img/ken-j.png"
                alt="Ken J. Schmidt"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Mobile: text + button section */}
            <div className="md:hidden px-6 py-8 text-center bg-white">
              <h1 className="text-[2rem] font-bold text-[#1a3a5c] leading-tight tracking-wider uppercase mb-4">
                MORTGAGE
                <br />
                BROKER
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed mb-7">
                Ken J. Schmidt and the team at Cohen Financial Group have been
                financing residential and commercial properties throughout
                Greater Illinois from our Beverly Hills office for over 25 years
                of experience.
              </p>
              <button className="w-full border border-[#1a3a5c] text-[#1a3a5c] font-semibold tracking-widest uppercase py-4 text-sm hover:bg-[#1a3a5c] hover:text-white transition-colors">
                APPLY FOR A LOAN
              </button>
            </div>
          </section>
        </div>
  )
}

export default Hero