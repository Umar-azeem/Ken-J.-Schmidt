// app/contact/page.tsx
"use client";

import React, { useRef } from 'react';
import Email from '@/components/email'; 
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const emailSectionRef = useRef<HTMLDivElement>(null);

  const scrollToEmailSection = () => {
    emailSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden p-8 md:p-16 lg:p-24 mx-2 mt-2 rounded-[2rem] bg-gradient-to-br from-[#000C1C] via-[#00142e] to-[#000C1C] shadow-2xl z-10">
        
        {/* Animated Background Orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#236193]/30 rounded-full blur-[120px] animate-pulse duration-1000"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#5bb8f5]/20 rounded-full blur-[100px] animate-pulse duration-1000 delay-500"></div>

        <div className="relative max-w-7xl mx-auto text-center z-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full mb-8 shadow-lg hover:bg-white/20 transition-colors cursor-default">
            <MessageCircle className="w-4 h-4 text-[#5bb8f5]" />
            <span className="text-[#5bb8f5] font-semibold text-sm tracking-wide">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5bb8f5] to-[#236193]">Mortgages</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Whether your money questions are large or small, you deserve answers that help you make informed decisions. We're always ready to help.
          </p>

          <Button 
            onClick={scrollToEmailSection}
            className="group bg-[#236193] hover:bg-white hover:text-[#000C1C] text-white px-8 py-7 text-lg rounded-2xl shadow-[0_10px_40px_-10px_rgba(35,97,147,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_-10px_rgba(255,255,255,0.3)]"
          >
            Send a Message
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Main Content: Contact Info (Left) & Form (Right) */}
      <div ref={emailSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* LEFT SIDE: Ken's Details & Socials */}
          <div className="lg:col-span-5 border border-slate-400 flex flex-col gap-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,12,28,0.1)] transform transition-all duration-500 hover:-translate-y-2 animate-[slideUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
            
            {/* Logo & Socials */}
            <div className="flex flex-col border-b border-slate-100 pb-8">
              <Link href="/" className="mb-8 inline-block hover:scale-105 transition-transform duration-300 origin-left">
                <Image
                  src="/img/logo.png"
                  alt="Ken J. Schmidt Logo"
                  width={240}
                  height={120}
                  priority
                  className="h-24 w-auto object-contain"
                />
              </Link>
              
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/kenschmidtchicago/"
                  className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center hover:bg-[#000C1C] hover:text-white text-slate-600 transition-all duration-300 hover:scale-110 shadow-sm"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                </Link>
                
                {/* Instagram */}
                <Link
                  target="_blank"
                  href="https://www.instagram.com/huntingtonbank/?hl=en"
                  className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center hover:bg-[#000C1C] hover:text-white text-slate-600 transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </Link>

                {/* YouTube */}
                <Link
                  target="_blank"
                  href="https://www.youtube.com/user/HuntingtonBank"
                  className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center hover:bg-[#000C1C] hover:text-white text-slate-600 transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="YouTube"
                >
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </span>
                </Link>

                {/* Zillow */}
                <Link
                  target="_blank"
                  href="https://www.zillow.com/lender-profile/ken%20schmidt12/"
                  className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center hover:bg-[#000C1C] transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Zillow"
                >
                  <Image
                    src="/zil.png"
                    alt="Zillow"
                    width={24}
                    height={24}
                    className="h-5 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="font-extrabold text-3xl text-[#000C1C] mb-1 tracking-tight">Ken J. Schmidt</h4>
              <p className="text-[#236193] font-bold text-sm mb-8 tracking-wide uppercase">Mortgage Loan Officer</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#236193] transition-colors">
                    <MapPin className="w-5 h-5 text-[#236193] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Coverage Area</p>
                    <span className="text-slate-700 font-medium">Illinois</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#236193] transition-colors">
                    <Phone className="w-5 h-5 text-[#236193] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+16304798545" className="text-slate-700 hover:text-[#236193] transition font-medium text-lg">
                      (630) 479-8545
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#236193] transition-colors">
                    <Mail className="w-5 h-5 text-[#236193] group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <a
                      href="mailto:ken.j.schmidt@huntington.com"
                      className="text-slate-700 hover:text-[#236193] transition font-medium break-all text-sm sm:text-base"
                    >
                      ken.j.schmidt@huntington.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Info inside the card */}
            <div className="mt-2 pt-6 border-t border-slate-100">
               <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                 NMLS ID: 697466<br/>
                 Huntington National Bank. Member FDIC. Equal Housing Lender.
               </p>
            </div>

          </div>

          {/* RIGHT SIDE: The Email Form */}
          <div className="lg:col-span-7 border border-slate-400 bg-white p-4 sm:p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,12,28,0.1)] border border-slate-100 animate-[slideUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="mb-8 border-b border-slate-100 pb-6">
              <h3 className="text-3xl font-extrabold text-[#000C1C] tracking-tight">Send a Message</h3>
              <p className="text-slate-500 mt-2 text-lg">Fill out the form below and we will get back to you as soon as possible.</p>
            </div>
            <Email />
          </div>

        </div>
      </div>

      {/* Required custom keyframe animation for the slide-up effect */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}