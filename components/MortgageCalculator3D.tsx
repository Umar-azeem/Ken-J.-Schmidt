"use client";

import { useState, useMemo, useEffect } from "react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type LoanType = "purchase" | "refinance";

interface CalculatorState {
  loanType: LoanType;
  purchasePrice: number;
  downPayment: number;
  downPaymentType: "percent" | "dollar";
  interestRate: number;
  loanTerm: number;
  propertyTax: number;
  insurance: number;
  hoa: number;
  closingCosts: number;
  existingLoanBalance: number;
  appraisedValue: number;
}

interface Results {
  loanAmount: number;
  monthlyPI: number;
  monthlyTax: number;
  monthlyInsurance: number;
  monthlyHOA: number;
  totalMonthly: number;
  interestOnly: number;
  totalInterest: number;
  totalPayments: number;
  ltv: number;
  downPaymentAmount: number;
  equity: number;
  cashNeeded: number;
  amortization: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
    equity: number;
  }>;
}

// ─────────────────────────────────────────────
// FORMULAS (Real Market Standard)
// ─────────────────────────────────────────────
function calculateMortgage(state: CalculatorState): Results {
  const {
    purchasePrice,
    downPayment,
    downPaymentType,
    interestRate,
    loanTerm,
    propertyTax,
    insurance,
    hoa,
    closingCosts,
    existingLoanBalance,
    appraisedValue,
    loanType,
  } = state;

  const downPaymentAmount =
    downPaymentType === "percent"
      ? purchasePrice * (downPayment / 100)
      : downPayment;

  const loanAmount = Math.max(0, purchasePrice - downPaymentAmount);
  const ltv = purchasePrice > 0 ? (loanAmount / purchasePrice) * 100 : 0;
  const r = interestRate / 100 / 12;
  const n = loanTerm * 12;

  const monthlyPI =
    r > 0 && n > 0
      ? (loanAmount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1)
      : loanAmount / n;

  const interestOnly = loanAmount * (interestRate / 100 / 12);
  const monthlyTax = propertyTax / 12;
  const monthlyInsurance = insurance / 12;
  const monthlyHOA = hoa;
  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyHOA;

  const totalPayments = monthlyPI * n;
  const totalInterest = totalPayments - loanAmount;

  const equity =
    loanType === "refinance"
      ? appraisedValue - existingLoanBalance
      : downPaymentAmount;

  const cashNeeded =
    loanType === "refinance"
      ? Math.max(0, closingCosts + existingLoanBalance - loanAmount)
      : Math.max(0, downPaymentAmount + closingCosts);

  const amortization = [];
  let balance = loanAmount;
  for (let month = 1; month <= 12; month++) {
    const interestPayment = balance * r;
    const principalPayment = monthlyPI - interestPayment;
    balance = Math.max(0, balance - principalPayment);

    amortization.push({
      month,
      payment: monthlyPI,
      principal: principalPayment,
      interest: interestPayment,
      balance,
      equity: downPaymentAmount + (loanAmount - balance),
    });
  }

  return {
    loanAmount,
    monthlyPI,
    monthlyTax,
    monthlyInsurance,
    monthlyHOA,
    totalMonthly,
    interestOnly,
    totalInterest,
    totalPayments,
    ltv,
    downPaymentAmount,
    equity,
    cashNeeded,
    amortization,
  };
}

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const fmtPct = (n: number) => `${n.toFixed(2)}%`;

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function MortgageCalculator3D() {
  const [state, setState] = useState<CalculatorState>({
    loanType: "purchase",
    purchasePrice: 450000,
    downPayment: 20,
    downPaymentType: "percent",
    interestRate: 6.75,
    loanTerm: 30,
    propertyTax: 6000,
    insurance: 1800,
    hoa: 0,
    closingCosts: 8000,
    existingLoanBalance: 0,
    appraisedValue: 450000,
  });

  const [animatedTotal, setAnimatedTotal] = useState(0);
  const results = useMemo(() => calculateMortgage(state), [state]);

  useEffect(() => {
    let start = animatedTotal;
    const end = results.totalMonthly;
    const duration = 600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedTotal(start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results.totalMonthly]);

  const update = (key: keyof CalculatorState, value: any) =>
    setState((s) => ({ ...s, [key]: value }));

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#eef4fa] to-white py-12 sm:py-16 md:py-20">
      {/* Floating 3D orbs — smaller on mobile */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-16 -left-16 h-48 w-48 rounded-full blur-3xl animate-float-slow sm:-top-32 sm:-left-24 sm:h-96 sm:w-96"
          style={{ backgroundColor: "rgba(35, 97, 147, 0.12)" }}
        />
        <div
          className="absolute top-1/4 -right-20 h-64 w-64 rounded-full blur-3xl animate-float-slow sm:-right-32 sm:h-[500px] sm:w-[500px]"
          style={{
            backgroundColor: "rgba(35, 97, 147, 0.08)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full blur-3xl animate-float-slow sm:h-80 sm:w-80"
          style={{
            backgroundColor: "rgba(35, 97, 147, 0.06)",
            animationDelay: "4s",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center animate-fade-up sm:mb-12">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide sm:px-4 sm:py-1.5 sm:text-sm"
            style={{ backgroundColor: "rgba(35, 97, 147, 0.1)", color: "#236193" }}
          >
            SMART FINANCING TOOL
          </span>
          <h2
            className="mt-3 text-2xl font-bold tracking-tight sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#133653" }}
          >
            Estimate Your Mortgage in Real Time
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-sm sm:mt-4 sm:text-base md:text-lg"
            style={{ color: "rgba(35, 97, 147, 0.75)" }}
          >
            Adjust any field and watch your payment, equity, and cash needed update
            instantly — using the same formulas lenders use.
          </p>
        </div>

        {/* Grid — stacks on mobile, side-by-side on lg */}
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* ── LEFT: INPUTS ── */}
          <div
            className="rounded-2xl border bg-white/70 p-4 backdrop-blur-xl shadow-xl animate-fade-up sm:rounded-3xl sm:p-6 md:p-8 lg:col-span-3"
            style={{
              borderColor: "rgba(35, 97, 147, 0.1)",
              boxShadow: "0 20px 60px -20px rgba(35, 97, 147, 0.2)",
            }}
          >
            {/* Loan Type Toggle */}
            <div className="mb-5 sm:mb-6">
              <label
                className="mb-2 block text-xs font-semibold sm:text-sm"
                style={{ color: "#133653" }}
              >
                Loan Purpose
              </label>
              <div
                className="inline-flex w-full rounded-xl border p-1 sm:w-auto"
                style={{ borderColor: "rgba(35,97,147,0.15)" }}
              >
                {(["purchase", "refinance"] as LoanType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => update("loanType", t)}
                    className="flex-1 rounded-lg px-3 py-2 text-xs font-semibold capitalize transition-all duration-300 sm:flex-none sm:px-5 sm:text-sm"
                    style={{
                      backgroundColor:
                        state.loanType === t ? "#236193" : "transparent",
                      color: state.loanType === t ? "#ffffff" : "#236193",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Grid — 1 col mobile, 2 col md+ */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {state.loanType === "purchase" ? (
                <InputField
                  label="Purchase Price"
                  value={state.purchasePrice}
                  onChange={(v) => update("purchasePrice", v)}
                  prefix="$"
                  step={5000}
                />
              ) : (
                <>
                  <InputField
                    label="Appraised Value"
                    value={state.appraisedValue}
                    onChange={(v) => update("appraisedValue", v)}
                    prefix="$"
                    step={5000}
                  />
                  <InputField
                    label="Existing Loan Balance"
                    value={state.existingLoanBalance}
                    onChange={(v) => update("existingLoanBalance", v)}
                    prefix="$"
                    step={5000}
                  />
                </>
              )}

              {state.loanType === "purchase" && (
                <div>
                  <label
                    className="mb-1.5 block text-xs font-semibold sm:text-sm"
                    style={{ color: "#133653" }}
                  >
                    Down Payment
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        value={state.downPayment}
                        onChange={(e) =>
                          update("downPayment", Number(e.target.value))
                        }
                        className="w-full rounded-xl border px-3 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 sm:px-4 sm:py-3"
                        style={{
                          borderColor: "rgba(35,97,147,0.2)",
                          color: "#133653",
                        }}
                      />
                      <span
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm"
                        style={{ color: "#236193" }}
                      >
                        {state.downPaymentType === "percent" ? "%" : "$"}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        update(
                          "downPaymentType",
                          state.downPaymentType === "percent" ? "dollar" : "percent"
                        )
                      }
                      className="rounded-xl border px-3 text-xs font-semibold transition-colors hover:bg-[#236193]/5"
                      style={{
                        borderColor: "rgba(35,97,147,0.2)",
                        color: "#236193",
                      }}
                    >
                      {state.downPaymentType === "percent" ? "%" : "$"}
                    </button>
                  </div>
                </div>
              )}

              <InputField
                label="Interest Rate"
                value={state.interestRate}
                onChange={(v) => update("interestRate", v)}
                suffix="%"
                step={0.125}
              />

              <div>
                <label
                  className="mb-1.5 block text-xs font-semibold sm:text-sm"
                  style={{ color: "#133653" }}
                >
                  Loan Term
                </label>
                <select
                  value={state.loanTerm}
                  onChange={(e) => update("loanTerm", Number(e.target.value))}
                  className="w-full rounded-xl border px-3 py-2.5 text-sm font-medium outline-none sm:px-4 sm:py-3"
                  style={{
                    borderColor: "rgba(35,97,147,0.2)",
                    color: "#133653",
                  }}
                >
                  {[10, 15, 20, 25, 30].map((y) => (
                    <option key={y} value={y}>
                      {y} Years
                    </option>
                  ))}
                </select>
              </div>

              <InputField
                label="Annual Property Tax"
                value={state.propertyTax}
                onChange={(v) => update("propertyTax", v)}
                prefix="$"
                step={500}
              />

              <InputField
                label="Annual Insurance"
                value={state.insurance}
                onChange={(v) => update("insurance", v)}
                prefix="$"
                step={100}
              />

              <InputField
                label="Monthly HOA"
                value={state.hoa}
                onChange={(v) => update("hoa", v)}
                prefix="$"
                step={25}
              />

              <InputField
                label="Closing Costs"
                value={state.closingCosts}
                onChange={(v) => update("closingCosts", v)}
                prefix="$"
                step={500}
              />
            </div>

            {/* LTV Bar */}
            <div className="mt-5 sm:mt-6">
              <div className="mb-2 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold" style={{ color: "#133653" }}>
                  Loan-to-Value (LTV)
                </span>
                <span className="font-bold" style={{ color: "#236193" }}>
                  {fmtPct(results.ltv)}
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[#eef4fa]">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.min(results.ltv, 100)}%`,
                    background: "linear-gradient(90deg, #4f88c2, #236193)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT: RESULTS ── */}
          <div className="space-y-4 sm:space-y-5 lg:col-span-2">
            {/* Total Monthly Payment Card */}
            <div
              className="relative overflow-hidden rounded-2xl p-5 text-white animate-fade-up shadow-2xl sm:rounded-3xl sm:p-7"
              style={{
                background: "linear-gradient(135deg, #236193 0%, #133653 100%)",
                boxShadow: "0 25px 60px -15px rgba(35, 97, 147, 0.5)",
                animationDelay: "100ms",
              }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              />

              <p className="text-xs font-medium uppercase tracking-wider opacity-80 sm:text-sm">
                Estimated Monthly Payment
              </p>
              <p className="mt-1.5 text-3xl font-bold tabular-nums sm:mt-2 sm:text-4xl md:text-5xl">
                {fmt(animatedTotal)}
              </p>
              <p className="mt-1 text-xs opacity-70 sm:text-sm">
                P&I + Taxes + Insurance + HOA
              </p>

              <div className="mt-4 space-y-1.5 border-t border-white/20 pt-4 text-xs sm:mt-6 sm:space-y-2 sm:pt-5 sm:text-sm">
                <BreakdownRow
                  label="Principal & Interest"
                  value={fmt(results.monthlyPI)}
                />
                <BreakdownRow
                  label="Property Tax"
                  value={fmt(results.monthlyTax)}
                />
                <BreakdownRow
                  label="Insurance"
                  value={fmt(results.monthlyInsurance)}
                />
                <BreakdownRow label="HOA" value={fmt(results.monthlyHOA)} />
              </div>
            </div>

            {/* Quick Stats Grid — 1 col on very small, 2 col from 400px+ */}
            <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
              <StatCard
                label="Loan Amount"
                value={fmt(results.loanAmount)}
                delay={200}
              />
              <StatCard
                label="Interest-Only Payment"
                value={fmt(results.interestOnly)}
                delay={250}
              />
              <StatCard
                label="Total Interest (Life)"
                value={fmt(results.totalInterest)}
                delay={300}
              />
              <StatCard
                label={
                  state.loanType === "refinance"
                    ? "Cash Out Available"
                    : "Cash Needed to Close"
                }
                value={fmt(results.cashNeeded)}
                delay={350}
                highlight
              />
            </div>

            {/* Equity Card */}
            <div
              className="rounded-2xl border bg-white/80 p-4 backdrop-blur-sm animate-fade-up sm:p-5"
              style={{
                borderColor: "rgba(35,97,147,0.15)",
                animationDelay: "400ms",
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span
                  className="text-xs font-semibold sm:text-sm"
                  style={{ color: "#133653" }}
                >
                  Estimated Equity
                </span>
                <span
                  className="text-base font-bold sm:text-lg"
                  style={{ color: "#236193" }}
                >
                  {fmt(results.equity)}
                </span>
              </div>
              <p
                className="mt-1 text-[11px] sm:text-xs"
                style={{ color: "rgba(35,97,147,0.6)" }}
              >
                {state.loanType === "refinance"
                  ? "Appraised value minus existing balance"
                  : "Down payment + principal paid"}
              </p>
            </div>

            {/* Amortization Preview */}
            <div
              className="rounded-2xl border bg-white/80 p-4 backdrop-blur-sm animate-fade-up sm:p-5"
              style={{
                borderColor: "rgba(35,97,147,0.15)",
                animationDelay: "450ms",
              }}
            >
              <p
                className="mb-3 text-xs font-semibold sm:text-sm"
                style={{ color: "#133653" }}
              >
                First 6 Months (Principal vs Interest)
              </p>
              <div className="space-y-1.5">
                {results.amortization.slice(0, 6).map((row) => {
                  const principalPct = (row.principal / row.payment) * 100;
                  return (
                    <div
                      key={row.month}
                      className="flex items-center gap-2 text-[11px] sm:gap-3 sm:text-xs"
                    >
                      <span
                        className="w-7 tabular-nums sm:w-8"
                        style={{ color: "rgba(35,97,147,0.6)" }}
                      >
                        M{row.month}
                      </span>
                      <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#eef4fa]">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: `${principalPct}%`,
                            backgroundColor: "#236193",
                          }}
                        />
                        <div
                          className="h-full flex-1 transition-all duration-500"
                          style={{ backgroundColor: "rgba(35,97,147,0.2)" }}
                        />
                      </div>
                      <span
                        className="w-14 text-right tabular-nums sm:w-16"
                        style={{ color: "#133653" }}
                      >
                        {fmt(row.balance)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Disclosure */}
        <p
          className="mx-auto mt-8 max-w-4xl text-center text-[11px] leading-relaxed sm:mt-10 sm:text-xs"
          style={{ color: "rgba(35,97,147,0.55)" }}
        >
          This calculator provides estimates based on user inputs and standard
          formulas. Results are not a Loan Estimate, commitment to lend, or credit
          decision. Actual rates and payments depend on borrower qualifications,
          underwriting, and program guidelines. All loans subject to credit approval.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────
function InputField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
}) {
  return (
    <div>
      <label
        className="mb-1.5 block text-xs font-semibold sm:text-sm"
        style={{ color: "#133653" }}
      >
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm sm:left-3.5"
            style={{ color: "#236193" }}
          >
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          step={step}
          inputMode="decimal"
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full rounded-xl border py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 sm:py-3 ${
            prefix ? "pl-7 sm:pl-8" : "pl-3 sm:pl-4"
          } ${suffix ? "pr-7 sm:pr-8" : "pr-3 sm:pr-4"}`}
          style={{
            borderColor: "rgba(35,97,147,0.2)",
            color: "#133653",
          }}
        />
        {suffix && (
          <span
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm sm:right-3.5"
            style={{ color: "#236193" }}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function BreakdownRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="opacity-80">{label}</span>
      <span className="font-semibold tabular-nums">{value}</span>
    </div>
  );
}

function StatCard({
  label,
  value,
  delay,
  highlight,
}: {
  label: string;
  value: string;
  delay: number;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-2xl border bg-white/80 p-3.5 backdrop-blur-sm animate-fade-up sm:p-4"
      style={{
        borderColor: highlight ? "rgba(35,97,147,0.35)" : "rgba(35,97,147,0.15)",
        animationDelay: `${delay}ms`,
        boxShadow: highlight
          ? "0 8px 30px -10px rgba(35, 97, 147, 0.3)"
          : undefined,
      }}
    >
      <p
        className="text-[11px] font-medium sm:text-xs"
        style={{ color: "rgba(35,97,147,0.65)" }}
      >
        {label}
      </p>
      <p
        className="mt-1 text-base font-bold tabular-nums sm:mt-1.5 sm:text-lg"
        style={{ color: "#133653" }}
      >
        {value}
      </p>
    </div>
  );
}