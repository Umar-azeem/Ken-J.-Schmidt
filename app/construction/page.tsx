"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────
// ICONS (inline SVG — no dependency)
// ─────────────────────────────────────────────
const Icons = {
  HardHat: (p: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path
        d="M2 18h20M4 18a8 8 0 0 1 16 0M12 4v6M8 5.5A8 8 0 0 1 12 4m4 1.5A8 8 0 0 0 12 4"
        strokeLinecap="round"
      />
    </svg>
  ),
  Crane: (p: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path
        d="M4 21V5l14 3M4 8h14M18 8v4M18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 21h6" strokeLinecap="round" />
    </svg>
  ),
  Blueprint: (p: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 3v18M14 12h4M14 16h4" strokeLinecap="round" />
    </svg>
  ),
  Ruler: (p: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path d="M3 17 17 3l4 4L7 21l-4-4Z" strokeLinejoin="round" />
      <path d="M8 8l2 2M11 5l2 2M5 11l2 2" strokeLinecap="round" />
    </svg>
  ),
  Building: (p: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path d="M4 21V7l8-4 8 4v14M4 21h16M9 21v-6h6v6" strokeLinejoin="round" />
      <path d="M8 10h1M8 13h1M15 10h1M15 13h1" strokeLinecap="round" />
    </svg>
  ),
  Truck: (p: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path d="M1 16V6h12v10M13 10h4l4 4v2h-8" strokeLinejoin="round" />
      <circle cx="5.5" cy="18.5" r="2" />
      <circle cx="17.5" cy="18.5" r="2" />
    </svg>
  ),
  Shield: (p: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path
        d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Arrow: (p: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Clock: (p: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  ),
};

// ─────────────────────────────────────────────
// SCROLL REVEAL HOOK
// ─────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("is-visible"),
        ),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const BLOGS = [
  {
    tag: "Project Spotlight",
    title: "How We Build a Home from the Ground Up",
    excerpt:
      "From foundation pour to final walkthrough — a step-by-step look at our 12-week build sequence.",
    image: "/img/c1.png",
    alt: "Crew framing a new residential home",
    readTime: "6 min",
    date: "Jan 2026",
  },
  {
    tag: "Materials",
    title: "Choosing the Right Concrete Mix for Your Slab",
    excerpt:
      "PSI, aggregate size, and cure time — the numbers that actually matter for durability.",
    image: "/img/c2.png",
    alt: "Concrete being poured into slab formwork",
    readTime: "4 min",
    date: "Feb 2026",
  },
  {
    tag: "Safety",
    title: "OSHA Compliance: A Field Guide for Small Crews",
    excerpt:
      "Practical checklists for fall protection, trenching, and PPE that keep your team safe.",
    image: "/img/c3.png",
    alt: "Worker wearing hard hat and harness",
    readTime: "8 min",
    date: "Mar 2026",
  },
];

const SERVICES = [
  {
    icon: Icons.Blueprint,
    title: "Design & Planning",
    text: "Blueprint development, permit coordination, and 3D modeling before we ever break ground.",
  },
  {
    icon: Icons.Building,
    title: "Residential Builds",
    text: "Custom homes, additions, and remodels built to spec and on schedule.",
  },
  {
    icon: Icons.Crane,
    title: "Commercial Construction",
    text: "Ground-up commercial builds and tenant improvements for growing businesses.",
  },
  {
    icon: Icons.Ruler,
    title: "Renovation & Remodel",
    text: "Kitchens, baths, and whole-home transformations with clear milestones.",
  },
  {
    icon: Icons.Shield,
    title: "Safety & Compliance",
    text: "Full OSHA compliance, licensed subs, and insured crews on every jobsite.",
  },
  {
    icon: Icons.Truck,
    title: "Material Logistics",
    text: "Direct-from-supplier sourcing and just-in-time delivery to reduce waste.",
  },
];

const STATS = [
  { value: 240, suffix: "+", label: "Projects Completed" },
  { value: 18, suffix: "yrs", label: "Years Building" },
  { value: 98, suffix: "%", label: "On-Time Delivery" },
  { value: 45, suffix: "+", label: "Licensed Crew" },
];

// ─────────────────────────────────────────────
// ANIMATED COUNTER
// ─────────────────────────────────────────────
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const dur = 1200;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function ConstructionPage() {
  const blogReveal = useReveal();
  const svcReveal = useReveal();

  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#eef4fa] to-white">
      {/* ─────────── HERO with 3D scene ─────────── */}
      <section className="relative min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-8">
        {/* Floating orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl animate-float-slow"
            style={{ backgroundColor: "rgba(35,97,147,0.14)" }}
          />
          <div
            className="absolute top-1/3 -right-24 h-96 w-96 rounded-full blur-3xl animate-float-slow"
            style={{
              backgroundColor: "rgba(35,97,147,0.10)",
              animationDelay: "2s",
            }}
          />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div className="animate-fade-up">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide sm:px-4 sm:py-1.5 sm:text-sm"
              style={{
                backgroundColor: "rgba(35,97,147,0.10)",
                color: "#236193",
              }}
            >
              BUILD WITH CONFIDENCE
            </span>
            <h1
              className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
              style={{ color: "#133653" }}
            >
              We Build.
              <br />
              <span style={{ color: "#236193" }}>You Live.</span>
            </h1>
            <p
              className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(35,97,147,0.75)" }}
            >
              From foundation to finish, our crews deliver residential and
              commercial construction that stands the test of time — on
              schedule, on budget, and built to code.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#236193",
                  boxShadow: "0 15px 35px -10px rgba(35,97,147,0.55)",
                }}
              >
                Request a Quote <Icons.Arrow className="h-4 w-4" />
              </Link>
              <Link
                href="/security"
                className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-colors hover:bg-white"
                style={{
                  borderColor: "rgba(35,97,147,0.25)",
                  color: "#133653",
                }}
              >
                View Services
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border bg-white/70 p-3 backdrop-blur-sm"
                  style={{ borderColor: "rgba(35,97,147,0.12)" }}
                >
                  <dt
                    className="text-[11px] font-medium uppercase tracking-wide"
                    style={{ color: "rgba(35,97,147,0.6)" }}
                  >
                    {s.label}
                  </dt>
                  <dd
                    className="mt-1 text-xl font-bold sm:text-2xl"
                    style={{ color: "#133653" }}
                  >
                    <Counter target={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 3D animated scene */}
          <Hero3D />
        </div>
      </section>

      {/* ─────────── SERVICES (icon cards) ─────────── */}
      <section
        id="services"
        className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center animate-fade-up">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold sm:px-4 sm:py-1.5 sm:text-sm"
              style={{
                backgroundColor: "rgba(35,97,147,0.10)",
                color: "#236193",
              }}
            >
              WHAT WE DO
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "#133653" }}
            >
              Full-Service Construction
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl text-sm sm:text-base"
              style={{ color: "rgba(35,97,147,0.75)" }}
            >
              One team from concept to keys — planning, permits, crews, and
              cleanup.
            </p>
          </div>

          <div
            ref={svcReveal}
            className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map(({ icon: Icon, title, text }, i) => (
              <article
                key={title}
                className="group rounded-2xl border bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  borderColor: "rgba(35,97,147,0.12)",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "rgba(35,97,147,0.10)",
                    color: "#236193",
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold" style={{ color: "#133653" }}>
                  {title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "rgba(35,97,147,0.7)" }}
                >
                  {text}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1"
                  style={{ color: "#236193" }}
                >
                  <Link
                    href="/kenSchmidt"
                    className="flex justify-center items-center gap-2"
                  >
                    {" "}
                    Learn more <Icons.Arrow className="h-4 w-4" />{" "}
                  </Link>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── BLOG (image cards) ─────────── */}
      <section
        id="blog"
        className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold sm:px-4 sm:py-1.5 sm:text-sm"
                style={{
                  backgroundColor: "rgba(35,97,147,0.10)",
                  color: "#236193",
                }}
              >
                FROM THE JOBSITE
              </span>
              <h2
                className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                style={{ color: "#133653" }}
              >
                Construction Insights
              </h2>
              <p
                className="mt-3 max-w-xl text-sm sm:text-base"
                style={{ color: "rgba(35,97,147,0.75)" }}
              >
                Field notes, material guides, and safety tips from our crew.
              </p>
            </div>
          </div>

          <div
            ref={blogReveal}
            className="reveal grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {BLOGS.map((b, i) => (
              <article
                key={b.title}
                className="group overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  borderColor: "rgba(35,97,147,0.12)",
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {/* Image w/ zoom-on-hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#eef4fa]">
                  <img
                    src={b.image}
                    alt={b.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold backdrop-blur"
                    style={{ color: "#236193" }}
                  >
                    {b.tag}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div
                    className="mb-2 flex items-center gap-3 text-[11px] sm:text-xs"
                    style={{ color: "rgba(35,97,147,0.55)" }}
                  >
                    <span>{b.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Icons.Clock className="h-3.5 w-3.5" /> {b.readTime}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold leading-snug transition-colors group-hover:text-[#236193]"
                    style={{ color: "#133653" }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="mt-2 line-clamp-3 text-sm leading-relaxed"
                    style={{ color: "rgba(35,97,147,0.7)" }}
                  >
                    {b.excerpt}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1"
                    style={{ color: "#236193" }}
                  >
                    <Link
                      href="/contact"
                      className="flex gap-2 justify-center items-center"
                    >
                      {" "}
                      contact us <Icons.Arrow className="h-4 w-4" />{" "}
                    </Link>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section id="contact" className="relative px-4 pb-20 sm:px-6 lg:px-8">
        <div
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl p-8 text-center text-white sm:p-12"
          style={{
            background: "linear-gradient(135deg, #236193 0%, #133653 100%)",
            boxShadow: "0 30px 70px -20px rgba(35,97,147,0.6)",
          }}
        >
          <Icons.HardHat className="mx-auto h-10 w-10 opacity-90" />
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Ready to break ground?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-85 sm:text-base">
            Tell us about your project — we'll send a free estimate within 48
            hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:ken.j.schmidt@huntington.com"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ color: "#133653" }}
            >
              Get a Free Quote <Icons.Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─────────────────────────────────────────────
// 3D ANIMATED HERO SCENE (pure CSS)
// ─────────────────────────────────────────────
function Hero3D() {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[480px]">
      {/* Glow base */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgba(35,97,147,0.15), transparent 70%)",
        }}
      />

      {/* 3D scene container */}
      <div className="scene absolute inset-0 flex items-center justify-center">
        <div className="cube-wrap">
          {/* Ground plate */}
          <div className="ground" />
          {/* Crane */}
          <div className="crane">
            <div className="crane-mast" />
            <div className="crane-jib" />
            <div className="crane-cable" />
            <div className="crane-hook" />
          </div>

          {/* Building blocks */}
          <div className="block b1" />
          <div className="block b2" />
          <div className="block b3" />
          <div className="block b4" />

          {/* Floating blueprint card */}
          <div className="blueprint-card">
            <div className="bp-line w-3/4" />
            <div className="bp-line w-1/2" />
            <div className="bp-line w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
