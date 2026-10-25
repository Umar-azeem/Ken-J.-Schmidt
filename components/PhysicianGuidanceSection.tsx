"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, Home, Stethoscope, FileText, ArrowUpRight } from "lucide-react";

export default function PhysicianGuidanceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24">
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#236193]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#236193]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Image */}
          <div className="relative order-2 lg:order-1">
            {/* Accent frame */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#236193]/20 to-transparent blur-lg" />

            <div className="relative aspect-[4/2] w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Image
                src="/img/ken-p.png"   /* <-- swap in your image path */
                alt="Ken Schmidt, Mortgage Loan Officer — Physician Mortgage Guidance"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl border border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#236193]/10">
                <Award className="h-6 w-6 text-[#236193]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 leading-tight">
                  25+ Years Experience
                </p>
                <p className="text-xs text-slate-500">NMLS #697466</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Copy */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#236193]/10 px-4 py-2">
              <Stethoscope className="h-4 w-4 text-[#236193]" />
              <span className="text-sm font-semibold text-[#236193]">
                Physician Mortgage Guidance
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              Physician Mortgage Guidance{" "}
              <span className="text-[#236193]">with Ken Schmidt</span>
            </h2>

            <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
              Ken Schmidt &nbsp;|&nbsp; Mortgage Loan Officer &nbsp;|&nbsp; NMLS #697466
            </p>

            <p className="text-lg leading-relaxed text-slate-700">
              With <span className="font-semibold text-[#236193]">more than 25 years of mortgage lending experience</span>,
              Ken Schmidt helps borrowers navigate home financing decisions,
              including specialized mortgage options for medical professionals.
            </p>

            <p className="text-lg leading-relaxed text-slate-700">
              Whether you're completing medical training, relocating for a new
              position, purchasing your first home, or considering a move to a
              larger property, Ken provides guidance to help you understand
              available financing options and the mortgage process.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                <Home className="mt-0.5 h-5 w-5 shrink-0 text-[#236193]" />
                <p className="text-sm text-slate-700">
                  Guidance for residents, fellows &amp; attending physicians
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[#236193]" />
                <p className="text-sm text-slate-700">
                  Student loan &amp; employment contract expertise
                </p>
              </div>
            </div>

            {/* CTA block */}
            <div className="rounded-2xl bg-gradient-to-br from-[#000D1E] to-[#000A19] p-6 md:p-8 mt-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Explore Your Physician Mortgage Options
              </h3>
              <p className="text-slate-300 text-sm md:text-base mb-5">
                Contact Ken Schmidt to discuss your home financing goals, or
                proceed to the approved mortgage application.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#236193] px-6 py-3 font-semibold text-white transition hover:bg-[#1a4a70]"
                >
                  Contact 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/physician-mortgage"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Physician Mortgage Guidance
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}