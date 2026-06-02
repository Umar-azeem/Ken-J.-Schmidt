// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Calculator,
} from "lucide-react";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { useEffect, useRef } from "react";
import Beverly from "@/components/Beverly";

export default function HomePage() {
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
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
                Ken J. Schmidt and the team at Cohen Financial Group have been
                financing residential and commercial throughout Greater Illinois
                from our Beverly Hills office for over 25 years plus of
                experience.
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

        {/* About Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Background blur effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                {/* Tagline */}
                <p className="text-black font-extralight tracking-wide text-lg">
                  DECADES OF EXPERTISE.
                  <br />
                  ONE ADVOCATE WORKING FOR YOU.
                </p>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-samibold text-[#236193] leading-tight">
                  MEET Ken J. Schmidt
                </h2>

                {/* Description */}
                <div className="bg-white p-4">
                <div className="space-y-4 text-black">
                  <p className="text-lg font-light leading-relaxed">
                    For 15 consecutive years, Mark Cohen has ranked in the top
                    1% of mortgage brokers nationwide. In 2026, he was named the
                    <span className="underline font-normal">
                      #1 Mortgage Broker in the U.S. and the #1 Non-QM
                      Originator by the Scotsman Guide.
                    </span>
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    Over his career, Mark has originated more than 31,200 loans
                    totaling over $18 billion in volume, and remains the only
                    mortgage broker in the U.S. to average $1 billion in annual
                    loan volume for 11 consecutive years.
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    Whether you're purchasing your first home, financing a
                    luxury property, or navigating a complex lending situation,
                    Mark and his team bring an unmatched depth of experience to
                    every transaction.
                  </p>
                </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="border-1  border-x-4 bg-transparent border-black hover:bg-[#1a4a70] text-black hover:text-white hover: px-10 py-7 text-lg rounded-none">
                    LEARN MORE ABOUT MARK
                  </Button>
                  <Button className="border-1 border-x-4 bg-transparent border-black hover:bg-[#1a4a70] text-black hover:text-white hover: px-10 py-7 text-lg rounded-none">
                    MEET OUR TEAM
                  </Button>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative w-full bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E]  aspect-square rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/img/ken.png"
                    alt="Mark Cohen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#236193] rounded-lg opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <Beverly/>
        <section id="specialties" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Areas of Expertise
              </h2>
              <p className="text-xl text-slate-600">
                Specialized lending solutions for every borrower
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Construction Loans */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">🏗</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Construction Loans
                </h3>
                <p className="text-slate-600 mb-4">
                  One-time close construction to permanent loans with a wide
                  array of financing products.
                </p>
                <a
                  href="#contact"
                  className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </Card>

              {/* Doctors Only Program */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">👨‍⚕️</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Doctors Only Program
                </h3>
                <p className="text-slate-600 mb-4">
                  Specialized financing options designed specifically for
                  physicians with favorable terms.
                </p>
                <a
                  href="#contact"
                  className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </Card>

              {/* Jumbo Financing */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">💰</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Jumbo Financing
                </h3>
                <p className="text-slate-600 mb-4">
                  High-value mortgage solutions with competitive rates and
                  flexible terms for jumbo loans.
                </p>
                <a
                  href="#contact"
                  className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </Card>

              {/* Self-Employed Borrowers */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">🚀</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Self-Employed Borrowers
                </h3>
                <p className="text-slate-600 mb-4">
                  Alternative documentation options for self-employed
                  professionals and entrepreneurs.
                </p>
                <a
                  href="#contact"
                  className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </Card>

              {/* FHA Loans */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">🏠</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  FHA & VA Loans
                </h3>
                <p className="text-slate-600 mb-4">
                  Expert guidance on government-backed loans with specialized
                  knowledge and support.
                </p>
                <a
                  href="#contact"
                  className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </Card>

              {/* Refinancing */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">📈</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Refinancing Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Explore refinancing options to improve your mortgage terms or
                  access home equity.
                </p>
                <a
                  href="#contact"
                  className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#236193] to-[#1a4a70] rounded-lg p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
                Whether you're a first-time buyer, refinancing, or navigating a
                complex lending situation, Ken is ready to help you find the
                perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-[#236193] hover:bg-blue-50 font-semibold px-8 py-6">
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-slate-600">
                Reach out to discuss your mortgage needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Email */}
              <Card className="p-8 text-center border-slate-200">
                <div className="w-16 h-16 bg-[#236193] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
                <a
                  href="mailto:ken@example.com"
                  className="text-[#236193] hover:underline text-lg"
                >
                  ken.schmidt@lender.com
                </a>
              </Card>

              {/* Phone */}
              <Card className="p-8 text-center border-slate-200">
                <div className="w-16 h-16 bg-[#236193] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
                <a
                  href="tel:+13125551234"
                  className="text-[#236193] hover:underline text-lg"
                >
                  (312) 555-1234
                </a>
              </Card>

              {/* Location */}
              <Card className="p-8 text-center border-slate-200">
                <div className="w-16 h-16 bg-[#236193] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Location
                </h3>
                <p className="text-slate-600">
                  Chicago, Illinois
                  <br />
                  Service Area: Illinois
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
                    placeholder="(312) 555-1234"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193] resize-none"
                    placeholder="Tell me about your mortgage needs..."
                  ></textarea>
                </div>

                <Button className="w-full bg-[#236193] hover:bg-[#1a4a70] text-white font-semibold py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
