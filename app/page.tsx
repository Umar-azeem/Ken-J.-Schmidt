// app/page.tsx
"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useEffect, useRef } from "react";
import Email from "@/components/email";
import MortgageLandingPage from "@/components/MortgageLandingPage ";
import Community from "@/components/Community";
import Education from "@/components/Education";
import CreditBuild from "@/components/CreditBuild";
import FAQ from "@/components/FAQ";

// import MortgageLandingPage from "@/components/MortgageLandingPage";
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
        <MortgageLandingPage />
       
        <Community />
        <Education />
        <CreditBuild />
        <section id="contact" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Link href="/contact">
                {" "}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Get in Touch
                </h2>
              </Link>
              <p className="text-xl text-slate-600">
                Reach out to discuss your mortgage needs
              </p>
            </div>
           

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Email */}
              <Card className="p-8 text-center border-slate-200">
                <div className="w-16 h-16 bg-[#000C1C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
                <a
                  href="mailto:ken.j.schmidt@huntington.com"
                  className="text-[#000C1C] hover:underline text-lg"
                >
                  ken.j.schmidt@huntington.com{" "}
                </a>
              </Card>

              {/* Phone */}
              <Card className="p-8 text-center border-slate-200">
                <div className="w-16 h-16 bg-[#000C1C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
                <a
                  href="tel:+13125551234"
                  className="text-[#000C1C] hover:underline text-lg"
                >
                  (630) 479-8545{" "}
                </a>
              </Card>

              <Card className="p-8 text-center border-slate-200">
                <div className="w-16 h-16 bg-[#000C1C] rounded-full flex items-center justify-center mx-auto mb-6">
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
               <FAQ/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
