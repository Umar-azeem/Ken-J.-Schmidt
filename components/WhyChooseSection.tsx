"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Sparkles,
  Users,
  Smartphone,
  ShieldCheck,
  Scale,
  Calculator,
} from "lucide-react";

// ─────────────────────────────────────────────
// FEATURE CARDS DATA (with images)
// Replace `image` with your local paths like "/img/cards/personal.jpg"
// ─────────────────────────────────────────────
const features = [
  {
    icon: Heart,
    title: "It's not just a home loan, it's personal",
    description:
      "Every home has a story, and your mortgage should support the one you're creating. We offer guidance built around your goals, your timeline, and your life.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    alt: "Family in front of their new home",
  },
  {
    icon: Sparkles,
    title: "Clarity, not complexity",
    description:
      "No jargon. No hidden fees. Just straight answers and a clear path forward, whether you're buying your first home or refinancing your fifth.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    alt: "Signing mortgage documents at a desk",
  },
  {
    icon: Users,
    title: "People who listen first",
    description:
      "We start by understanding what matters to you — not by pushing a product. Your goals shape the loan, not the other way around.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    alt: "Mortgage advisor meeting with clients",
  },
  {
    icon: Smartphone,
    title: "Get the mobile app",
    description:
      "Track your application, upload documents, and message your loan officer from anywhere. Your mortgage, in your pocket.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    alt: "Person using mortgage mobile app on phone",
  },
  {
    icon: ShieldCheck,
    title: "Pre-approval that prepares you",
    description:
      "Walk into every showing with confidence. Our pre-approval process is thorough, fast, and designed to make your offer stand out.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    alt: "Couple reviewing pre-approval letter",
  },
  {
    icon: Scale,
    title: "Fixed or adjustable?",
    description:
      "A fixed-rate mortgage gives you steady payments. An ARM starts lower but may adjust over time. One offers predictability. The other offers flexibility.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    alt: "Financial planning and rate comparison",
  },
];

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────
export default function WhyChooseSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#eef4fa] to-white py-16 sm:py-20 md:py-24">
      {/* Floating 3D orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-20 h-64 w-64 rounded-full blur-3xl animate-float-slow sm:h-96 sm:w-96"
          style={{ backgroundColor: "rgba(35, 97, 147, 0.10)" }}
        />
        <div
          className="absolute bottom-0 -right-24 h-72 w-72 rounded-full blur-3xl animate-float-slow sm:h-[420px] sm:w-[420px]"
          style={{
            backgroundColor: "rgba(35, 97, 147, 0.07)",
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mx-auto mb-12 max-w-3xl text-center animate-fade-up sm:mb-16">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide sm:px-4 sm:py-1.5 sm:text-sm"
            style={{
              backgroundColor: "rgba(35, 97, 147, 0.1)",
              color: "#236193",
            }}
          >
            YOUR HOME. YOUR STORY.
          </span>

          <h2
            className="mt-3 text-2xl font-bold tracking-tight sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#133653" }}
          >
            Every home has a story.
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg"
            style={{ color: "rgba(35, 97, 147, 0.75)" }}
          >
            And your mortgage should support the one you're creating. At Ken, we
            don't just offer loans. We offer guidance — built around your goals,
            your timeline, and your life.
          </p>
        </div>

        {/* ── Feature Cards Grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-up sm:rounded-3xl"
                style={{
                  borderColor: "rgba(35, 97, 147, 0.12)",
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {/* ── Image header ── */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={i < 3 ? "eager" : "lazy"}
                  />

                  {/* Overlay gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Icon badge — floats on image */}
                  <div
                    className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-2xl backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-12 sm:w-12"
                    style={{
                      background:
                        "linear-gradient(135deg, #4f88c2 0%, #236193 100%)",
                      boxShadow: "0 10px 25px -8px rgba(35, 97, 147, 0.55)",
                    }}
                  >
                    <Icon
                      className="h-5 w-5 text-white sm:h-6 sm:w-6"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Optional corner label */}
                  <span
                    className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-wide backdrop-blur-sm sm:text-xs"
                    style={{ color: "#236193" }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* ── Content ── */}
                <div className="relative p-5 sm:p-6">
                  <h3
                    className="text-base font-bold leading-snug sm:text-lg md:text-xl"
                    style={{ color: "#133653" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed sm:text-[15px]"
                    style={{ color: "rgba(35, 97, 147, 0.75)" }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <span
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                  style={{
                    background: "linear-gradient(90deg, #4f88c2, #236193)",
                  }}
                />
              </article>
            );
          })}
        </div>

        {/* ── Fixed vs ARM Comparison (with image banner) ── */}
        <FixedVsARM />

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center animate-fade-up sm:mt-16">
          <p
            className="mx-auto max-w-xl text-sm sm:text-base"
            style={{ color: "rgba(35, 97, 147, 0.75)" }}
          >
            We don't just lend. We look out for you.
          </p>
          <Link
            href="/tools/calculator"
            className="group relative mt-5 inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 sm:px-8 sm:py-4 sm:text-base"
            style={{
              backgroundColor: "#236193",
              boxShadow: "0 15px 35px -10px rgba(35, 97, 147, 0.55)",
            }}
          >
            <Calculator className="relative z-10 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="relative z-10">Use Our Calculator</span>
            <svg
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SUB-COMPONENT: Fixed vs ARM with images
// ─────────────────────────────────────────────
function FixedVsARM() {
  const fixed = [
    "Consistent monthly payments",
    "Protection from rate increases",
    "Ideal for long-term homeowners",
  ];

  const arm = [
    "Lower initial interest rate",
    "Rate adjusts periodically",
    "Good for shorter-term plans",
  ];

  return (
    <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 md:gap-8">
      {/* Fixed Rate Card */}
      <div
        className="group relative overflow-hidden rounded-3xl border bg-white animate-fade-up"
        style={{
          borderColor: "rgba(35, 97, 147, 0.2)",
          boxShadow: "0 20px 50px -20px rgba(35, 97, 147, 0.2)",
        }}
      >
        {/* Image banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
            alt="Stable family home representing fixed-rate mortgage"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#133653]/70 via-transparent to-transparent" />

          <span
            className="absolute bottom-4 left-4 inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm sm:text-xs"
            style={{ backgroundColor: "rgba(35, 97, 147, 0.85)" }}
          >
            FIXED RATE
          </span>
        </div>

        {/* Body */}
        <div className="relative p-6 sm:p-7">
          <h3
            className="text-xl font-bold sm:text-2xl"
            style={{ color: "#133653" }}
          >
            Predictable payments, long-term stability
          </h3>

          <ul className="mt-5 space-y-3">
            {fixed.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(35, 97, 147, 0.1)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#236193"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span
                  className="text-sm sm:text-[15px]"
                  style={{ color: "rgba(35, 97, 147, 0.85)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ARM Card */}
      <div
        className="group relative overflow-hidden rounded-3xl border bg-white animate-fade-up"
        style={{
          borderColor: "rgba(35, 97, 147, 0.2)",
          boxShadow: "0 20px 50px -20px rgba(35, 97, 147, 0.2)",
          animationDelay: "120ms",
        }}
      >
        {/* Image banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80"
            alt="Modern flexible home representing adjustable-rate mortgage"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#133653]/70 via-transparent to-transparent" />

          <span
            className="absolute bottom-4 left-4 inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm sm:text-xs"
            style={{ backgroundColor: "rgba(35, 97, 147, 0.85)" }}
          >
            ADJUSTABLE RATE
          </span>
        </div>

        {/* Body */}
        <div className="relative p-6 sm:p-7">
          <h3
            className="text-xl font-bold sm:text-2xl"
            style={{ color: "#133653" }}
          >
            Lower initial rate, flexible terms
          </h3>

          <ul className="mt-5 space-y-3">
            {arm.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(35, 97, 147, 0.1)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#236193"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span
                  className="text-sm sm:text-[15px]"
                  style={{ color: "rgba(35, 97, 147, 0.85)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}