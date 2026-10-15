import type { Metadata } from "next";
import MortgageCalculator3D from "@/components/MortgageCalculator3D";
import LeadCaptureSection from "@/components/LeadCaptureSection";

// ─────────────────────────────────────────────
// SEO — neutral, educational tone (no branding)
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Construction Loan Calculator | Estimate Your Financing",
  description:
    "Estimate construction loan costs, monthly interest payments, loan amount, cash required, and long-term mortgage payments. Free educational tool.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Construction Loan Calculator",
    description:
      "Free educational calculator for estimating construction financing.",
    type: "website",
  },
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Page Header ── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#eef4fa] to-white pt-12 pb-8 sm:pt-16 sm:pb-10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {/* State Availability Notice — required by spec */}
          <div
            className="mx-auto mb-6 max-w-2xl rounded-xl border px-4 py-3 text-xs leading-relaxed sm:text-sm"
            style={{
              borderColor: "rgba(35, 97, 147, 0.2)",
              backgroundColor: "rgba(35, 97, 147, 0.04)",
              color: "rgba(35, 97, 147, 0.85)",
            }}
          >
            Construction financing programs and maximum financing levels vary by
            state, property type, and borrower qualifications.
          </div>

          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: "#133653" }}
          >
            Construction Loan Calculator
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg"
            style={{ color: "rgba(35, 97, 147, 0.75)" }}
          >
            Estimate construction financing, monthly interest payments, loan
            amount, cash required, and long-term mortgage payment.
          </p>
        </div>
      </section>

      {/* ── Calculator ── */}
      <MortgageCalculator3D />

      {/* ── Lead Capture ── */}
      <LeadCaptureSection />

      {/* ── Educational / Trust Section ── */}
      <EducationalNotes />
    </main>
  );
}

// ─────────────────────────────────────────────
// Sub-component: Educational notes (neutral, no branding)
// ─────────────────────────────────────────────
function EducationalNotes() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl font-bold sm:text-3xl"
          style={{ color: "#133653" }}
        >
          How to use this estimate
        </h2>
        <div
          className="mt-6 space-y-4 text-sm leading-relaxed sm:text-base"
          style={{ color: "rgba(35, 97, 147, 0.8)" }}
        >
          <p>
            This calculator estimates the key figures in a construction-to-permanent
            loan: how much you can borrow, what your interest-only payments will be
            during the build, how much cash you'll need upfront, and what your
            long-term mortgage payment will look like once construction is complete.
          </p>
          <p>
            Enter your property details, construction budget, and anticipated draw
            schedule. All results update live — no signup required to see your
            estimate. To receive a PDF copy of your results, provide your contact
            information at the bottom of the calculator.
          </p>
          <p>
            The numbers here are estimates for educational purposes only. Actual
            rates, payments, and program availability depend on your qualifications,
            property type, and market conditions. Speak with a licensed mortgage
            professional before making any financing decisions.
          </p>
        </div>
      </div>
    </section>
  );
}