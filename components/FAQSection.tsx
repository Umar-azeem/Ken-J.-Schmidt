"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How much does it cost to refinance?",
    answer:
      "Refinancing costs typically range from 2% to 6% of the loan amount and include fees such as appraisal, title insurance, and closing costs. Factors like your loan type, location, and credit score can significantly impact these expenses. Our team can help provide strategies that can help minimize costs.",
  },
  {
    question: "How much house can I afford?",
    answer:
      "We'll review your income, debts, down payment, and financial goals to establish a clear, comfortable budget before you start looking for a home. This helps you shop with confidence.",
  },
  {
    question: "What is a good credit score?",
    answer:
      "While this is program-dependent, many conventional loan options look for a score of 620 or higher. Government-backed loans like FHA and VA are often more flexible.",
  },
  {
    question: "What is a HELOC?",
    answer:
      "A Home Equity Line of Credit (HELOC) is a revolving line of credit that uses your home's equity as collateral. It offers flexibility, allowing you to borrow what you need, when you need it, and typically features interest-only payments during the draw period.",
  },
  {
    question: "How do I calculate mortgage payments?",
    answer:
      "You can use our comprehensive mortgage calculator on the Tools page. It allows you to factor in the home price, down payment, interest rate, loan term, and other costs to estimate your monthly payment. You can even download an amortization schedule.",
  },
  {
    question: "What cash-out option is better for me?",
    answer:
      "A HELOC (Home Equity Line of Credit) and a HELOAN (Home Equity Loan) are both great options to access your home equity as cash, but what's the difference? Here is the high-level breakdown, but give us a call and we will help you choose the right option, with side-by-side comparisons and advice from a dedicated mortgage professional.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#eef4fa] to-white py-24">
      {/* Floating decorative orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl animate-float-slow"
          style={{ backgroundColor: "rgba(35, 97, 147, 0.15)" }}
        />
        <div
          className="absolute top-1/3 -right-24 h-80 w-80 rounded-full blur-3xl animate-float-slow"
          style={{ backgroundColor: "rgba(35, 97, 147, 0.12)", animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full blur-3xl animate-float-slow"
          style={{ backgroundColor: "rgba(35, 97, 147, 0.10)", animationDelay: "3s" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center animate-fade-up">
          <span
            className="inline-block rounded-full px-4 py-1 text-sm font-medium tracking-wide"
            style={{ backgroundColor: "rgba(35, 97, 147, 0.10)", color: "#236193" }}
          >
            FREQUENTLY ASKED
          </span>
          <h2
            className="mt-4 text-4xl font-bold  text-[#236193] tracking-tight md:text-5xl"
            style={{ color: "#133653" }}
          >
            Questions, answered.
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-lg text-[#133d5f] ">
            Straight answers on refinancing, affordability, credit, and using your
            home's equity — with guidance from a dedicated mortgage professional.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="group animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="relative overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300"
                  style={{
                    borderColor: isOpen ? "#236193" : "rgba(35, 97, 147, 0.15)",
                    boxShadow: isOpen
                      ? "0 10px 30px -10px rgba(35, 97, 147, 0.35)"
                      : undefined,
                  }}
                >
                  {/* Left accent bar */}
                  <span
                    className={`absolute left-0 top-0 h-full w-1 origin-top transition-transform duration-500 ${
                      isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to bottom, #4f88c2, #236193)",
                    }}
                  />

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="text-lg font-semibold"
                      style={{ color: "#133653" }}
                    >
                      {faq.question}
                    </span>

                    {/* Animated plus/minus icon with 3D rotateX */}
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500"
                      style={{
                        borderColor: isOpen ? "#236193" : "rgba(35, 97, 147, 0.35)",
                        backgroundColor: isOpen ? "#236193" : "transparent",
                        color: isOpen ? "#ffffff" : "#236193",
                        transformStyle: "preserve-3d",
                        transform: isOpen
                          ? "rotateX(180deg)"
                          : "rotateX(0deg)",
                      }}
                    >
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Answer — max-height transition */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className="px-6 pb-6 pr-16 leading-relaxed"
                      style={{ color: "rgba(35, 97, 147, 0.85)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center animate-fade-up [animation-delay:600ms]">
          <p style={{ color: "rgba(35, 97, 147, 0.85)" }}>
            Still have questions? Let's talk through your situation.
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 font-semibold text-white transition-all duration-300 hover:brightness-110"
            style={{
              backgroundColor: "#236193",
              boxShadow: "0 10px 25px -8px rgba(35, 97, 147, 0.55)",
            }}
          >
            <span className="relative z-10">Get in Touch</span>
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
          </a>
        </div>
      </div>
    </section>
  );
}