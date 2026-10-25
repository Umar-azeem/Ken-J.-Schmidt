"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Wallet,
  ShieldCheck,
  GraduationCap,
  FileSignature,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Award,
  ClipboardCheck,
  Search,
  FileText,
  BadgeCheck,
  Home,
} from "lucide-react";


const benefits = [
  {
    icon: Wallet,
    title: "Low or No Down Payment Options",
    body: "Physician mortgage programs frequently offer reduced down payment requirements for qualified borrowers. Depending on the lender, loan amount, and program guidelines, eligible medical professionals may qualify for financing with little or no down payment. This flexibility can allow physicians to preserve savings for moving expenses, emergency reserves, investments, or other financial priorities.",
  },
  {
    icon: ShieldCheck,
    title: "No Private Mortgage Insurance (PMI)",
    body: "Many physician mortgage programs eliminate the requirement for private mortgage insurance, even when borrowers make a down payment of less than 20%. Avoiding PMI can reduce monthly housing expenses compared with mortgage options that require this additional insurance.",
  },
  {
    icon: GraduationCap,
    title: "Flexible Student Loan Considerations",
    body: "Medical education often involves substantial student loan obligations. Physician mortgage lenders may use specialized underwriting guidelines when evaluating student loan payments and debt-to-income ratios. Depending on the program, lenders may consider documented income-driven repayment amounts or other qualifying payment calculations rather than relying exclusively on standard conventional mortgage guidelines.",
  },
  {
    icon: FileSignature,
    title: "Employment Contract Qualification",
    body: "Physicians frequently relocate or purchase homes before beginning a new position. Many physician mortgage lenders consider qualifying signed employment contracts or offer letters when evaluating borrowers who have not yet started their new employment. This can be particularly helpful for residents transitioning into attending positions, fellows completing training, and physicians relocating for new opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Higher Loan Amounts",
    body: "Physician mortgage programs often accommodate larger loan amounts for qualified medical professionals. Depending on the lender and program, these financing options may provide alternatives to traditional jumbo mortgage requirements.",
  },
  {
    icon: Users,
    title: "Financing for Residents and Fellows",
    body: "Many lenders extend physician mortgage eligibility to qualified medical residents and fellows who are early in their careers. These programs can provide homeownership opportunities for medical professionals who have limited savings but meet applicable income, credit, and underwriting requirements.",
  },
];

const eligibility = [
  { label: "Medical Doctors (MD)" },
  { label: "Doctors of Osteopathic Medicine (DO)" },
  { label: "Doctors of Dental Surgery (DDS)" },
  { label: "Doctors of Dental Medicine (DMD)" },
  { label: "Medical residents and fellows" },
];

const steps = [
  {
    icon: Search,
    title: "Initial Mortgage Consultation",
    body: "The process begins with a review of your employment status, professional credentials, income, student loan obligations, available funds, and homeownership goals.",
  },
  {
    icon: ClipboardCheck,
    title: "Review Financing Options",
    body: "Available mortgage programs are evaluated based on down payment requirements, loan amounts, qualifying income guidelines, interest rates, closing costs, and overall financial objectives.",
  },
  {
    icon: FileText,
    title: "Mortgage Application",
    body: "Borrowers complete a mortgage application and provide supporting documentation, which may include income verification, employment contracts, professional credentials, asset statements, and credit information.",
  },
  {
    icon: BadgeCheck,
    title: "Underwriting and Approval",
    body: "The lender reviews the borrower's financial qualifications and the property to determine whether applicable program requirements are satisfied.",
  },
  {
    icon: Home,
    title: "Mortgage Closing",
    body: "Once underwriting conditions are satisfied and final approval is issued, the borrower completes the mortgage closing and takes ownership of the home.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function PhysicianMortgagePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#236193]/10 px-4 py-2 rounded-full">
              <Stethoscope className="w-4 h-4 text-[#236193]" />
              <span className="text-[#236193] font-semibold text-sm">
                Physician Mortgage Loans
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Specialized Home Financing for{" "}
              <span className="text-[#236193]">Medical Professionals</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Your medical career follows a unique financial path. Years of
              education, student loan obligations, residency, fellowship
              training, and career transitions can make traditional mortgage
              qualification more challenging.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#236193] px-7 py-3 font-semibold text-white hover:bg-[#1a4a70] transition"
              >
                Talk to Ken Schmidt
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Start Application
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#236193]" /> 25+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#236193]" /> NMLS #697466
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#236193]" /> Serving Illinois &amp; eligible states
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#236193]/30 to-transparent blur-lg" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl">
              <Image
                src="/img/ho.jpg"
                alt="Physician mortgage loans for medical professionals"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl border border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#236193]/10">
                <Stethoscope className="h-6 w-6 text-[#236193]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 leading-tight">
                  MD · DO · DDS · DMD
                </p>
                <p className="text-xs text-slate-500">Residents &amp; Fellows Welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Financing Built Around Your Medical Career
          </h2>
          <div className="h-1 w-20 bg-[#236193] rounded-full mx-auto" />
          <p className="text-lg text-slate-700 leading-relaxed">
            Physician mortgage loans are specialized financing programs designed
            to address the unique financial circumstances of medical
            professionals.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Lenders offering physician mortgage programs generally provide
            flexible financing options that recognize the earning potential,
            employment structure, and financial responsibilities associated with
            a medical career.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Whether you're completing residency, beginning a fellowship,
            accepting your first attending position, or purchasing your next
            home, understanding physician mortgage options can help you make
            informed financial decisions.
          </p>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-[#236193]/10 px-4 py-1 text-sm font-semibold text-[#236193]">
              BENEFITS
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Benefits of Physician Mortgage Loans
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Physician mortgage programs offer several potential advantages
              compared with traditional mortgage financing. Lenders offering
              physician mortgage programs generally provide specialized
              financing features that may include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#236193]/10 mb-5 group-hover:bg-[#236193] transition-colors">
                  <b.icon className="h-6 w-6 text-[#236193] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {b.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO MAY QUALIFY ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image left */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#236193]/20 to-transparent blur-lg" />
            <div className="relative aspect-[4/2] w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Image
                src="/img/ken-p.png"
                alt="Medical professionals eligible for physician mortgage loans"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content right */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-block rounded-full bg-[#236193]/10 px-4 py-1 text-sm font-semibold text-[#236193]">
              ELIGIBILITY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Who May Qualify for a Physician Mortgage?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Physician mortgage eligibility varies by lender and program.
              Eligible medical professionals commonly include:
            </p>

            <ul className="space-y-3">
              {eligibility.map((e, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 px-5 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#236193]" />
                  <span className="text-slate-800 font-medium">{e.label}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-600 leading-relaxed">
              Certain lenders also extend eligibility to additional licensed
              healthcare professionals, depending on their specific program
              guidelines.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Qualification generally depends on factors such as credit history,
              income, employment, existing financial obligations, available
              assets, and the property being financed.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-[#236193]/10 px-4 py-1 text-sm font-semibold text-[#236193]">
              HOW IT WORKS
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              How Does the Physician Mortgage Process Work?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A clear, guided path from first conversation to keys in hand.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

            <div className="space-y-8 lg:space-y-12">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    i % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#236193]/10">
                        <s.icon className="h-5 w-5 text-[#236193]" />
                      </div>
                      <span className="text-sm font-semibold text-[#236193]">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{s.body}</p>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-[#236193] text-white font-bold shadow-lg border-4 border-white z-10">
                    {i + 1}
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-[#000D1E] to-[#000A19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Explore Your Physician Mortgage Options
          </h2>
          <p className="text-slate-300 text-lg">
            Contact Ken Schmidt to discuss your home financing goals, or proceed
            to the approved mortgage application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#236193] px-8 py-3 font-semibold text-white hover:bg-[#1a4a70] transition"
            >
              Contact Ken Schmidt
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Start Application
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-sm text-slate-400 pt-4">
            Ken Schmidt &nbsp;|&nbsp; Mortgage Loan Officer &nbsp;|&nbsp; NMLS #697466
          </p>
        </div>
      </section>

      {/* ================= COMPLIANCE DISCLAIMER ================= */}
      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 leading-relaxed text-center">
          Educational information only. Mortgage program availability,
          eligibility, down payment requirements, loan limits, interest rates,
          and other terms vary by lender and state. All loans are subject to
          credit approval, underwriting, and applicable program requirements.
          Final website content, licensing information, and required disclosures
          are subject to employer compliance review.
        </div>
      </section>
    </div>
  );
}