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
  Save,
  DoorClosedLocked,
  CircleDollarSign,
  Landmark,
  HandCoins,
  CloudSync,
} from "lucide-react";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { useEffect, useRef } from "react";
import Beverly from "@/components/Beverly";
import Hero from "@/components/hero";
import Email from "@/components/email";

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
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        {/* About Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0468b9] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0468b9] rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-black font-extralight tracking-wide text-lg">
                  DECADES OF EXPERTISE.
                  <br />
                  ONE ADVOCATE WORKING FOR YOU.
                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-samibold text-[#236193] leading-tight">
                  MEET Ken J. Schmidt
                </h2>

                <div className="bg-white p-4">
                  <div className="space-y-4 text-black">
                    <p className="text-lg font-light leading-relaxed">
                      Premier mortgage lending professional with more than 20
                      years of expertise in the home financing industry,
                      
                    </p>
                    <p className="text-lg font-light leading-relaxed">
                     dedicated to building the home loan that meets your
                      needs.
                      <span className="underline font-normal">
                        I'm here to work with you
                      </span>
                    </p>
                    <p className="text-lg font-light leading-relaxed">
                      Whether you are new to the process or an old pro, a
                      knowledgeable, trustworthy and patient loan officer is an
                      invaluable resource.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="border-1  border-x-4 bg-transparent border-black hover:bg-[#1a4a70] text-black hover:text-white hover: px-10 py-7 text-lg rounded-none">
                    <Link href="/kenSchmidt">MORE ABOUT KEN J. SCHMIDT</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E]  aspect-square rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/img/kens.png"
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

        <Beverly />
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
                  <div className="text-white text-xl font-bold">
                    <Save />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Investments
                </h3>
                <p className="text-slate-600 mb-4">
                  From retirement savings, insurance concerns, and tax
                  strategies, we make sure your interests come first so you can
                  lean into your full potential.
                </p>
                <a className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                  <Link href="/investments">Learn more</Link>{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Card>

              {/* Doctors Only Program */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">
                    <Landmark />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Compare Mortgage Loan Options
                </h3>
                <p className="text-slate-600 mb-4">
                  Your home. Your story. Your mortgage, crafted with care.
                </p>
                <a className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                  <Link href="/mortgage">Learn more</Link>{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Card>

              {/* Jumbo Financing */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">
                    <CircleDollarSign />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Insurance
                </h3>
                <p className="text-slate-600 mb-4">
                  From your daily driver, to your home, and the loved ones in
                  it, we'll tailor your coverage to your needs and budget. Get a
                  Quote
                </p>
                <a className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                  <Link href="/insurance">Learn more</Link>{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Card>

              {/* Self-Employed Borrowers */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">
                    <DoorClosedLocked />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Security
                </h3>
                <p className="text-slate-600 mb-4">
                  While digital banking can be fast and convenient, be sure to
                  take steps to help protect your sensitive personal and
                  financial information while online.
                </p>
                <a
                  href="#contact"
                  className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition"
                >
                  <Link href="/security">Learn more</Link>{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Card>

              {/* FHA Loans */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">
                    <HandCoins />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Banking
                </h3>
                <p className="text-slate-600 mb-4">
                  Expert guidance on government-backed loans with specialized
                  knowledge and support.
                </p>
                <a className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                  <Link href="/banking">Learn more</Link>{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Card>

              {/* Refinancing */}
              <Card className="p-8 hover:shadow-lg transition border-slate-200">
                <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-xl font-bold">
                    <CloudSync />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  borrowing{" "}
                </h3>
                <p className="text-slate-600 mb-4">
                  Explore refinancing options to improve your mortgage terms or
                  access home equity.
                </p>
                <a className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                  <Link href="/security">Learn more</Link>{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Card>
            </div>
          </div>
        </section>

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
                  ken.j.schmidt@huntington.com{" "}
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

            <div>
              <Email />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
