"use client";

import { useState } from "react";

// ─────────────────────────────────────────────
// US STATES (2-letter codes for CRM routing)
// ─────────────────────────────────────────────
const US_STATES = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
];

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
interface LeadForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  consent: boolean;
  emailCopy: boolean;
}

interface LeadPayload extends LeadForm {
  consentTimestamp: string;
  pageUrl: string;
  calculatorData?: Record<string, any>;
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function LeadCaptureSection({
  calculatorData,
}: {
  calculatorData?: Record<string, any>;
}) {
  const [form, setForm] = useState<LeadForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    consent: false,
    emailCopy: true,
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadForm, string>>>(
    {}
  );

  const update = <K extends keyof LeadForm>(key: K, value: LeadForm[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  // ── VALIDATION ──
  const validate = (): boolean => {
    const next: Partial<Record<keyof LeadForm, string>> = {};
    if (!form.firstName.trim()) next.firstName = "First name is required";
    if (!form.lastName.trim()) next.lastName = "Last name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length !== 10) next.phone = "Enter a valid 10-digit phone";
    if (!form.state) next.state = "Select your state";
    if (!form.consent)
      next.consent = "You must agree to be contacted to continue";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // ── SUBMIT ──
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    const payload: LeadPayload = {
      ...form,
      consentTimestamp: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      calculatorData,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  // ── SUCCESS STATE ──
  if (status === "success") {
    return (
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#eef4fa] to-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div
            className="rounded-3xl border bg-white/80 p-8 text-center backdrop-blur-xl animate-fade-up sm:p-12"
            style={{
              borderColor: "rgba(35, 97, 147, 0.2)",
              boxShadow: "0 25px 60px -15px rgba(35, 97, 147, 0.25)",
            }}
          >
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(35, 97, 147, 0.1)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#236193"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3
              className="mt-5 text-2xl font-bold sm:text-3xl"
              style={{ color: "#133653" }}
            >
              Your report is on the way
            </h3>
            <p
              className="mx-auto mt-3 max-w-md text-sm sm:text-base"
              style={{ color: "rgba(35, 97, 147, 0.75)" }}
            >
              Check your inbox at <strong>{form.email}</strong> for your
              personalized mortgage estimate PDF. If you don't see it within a
              few minutes, check your spam folder.
            </p>
            <a
              href="#application"
              className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 sm:text-base"
              style={{
                backgroundColor: "#236193",
                boxShadow: "0 10px 25px -8px rgba(35, 97, 147, 0.55)",
              }}
            >
              <span className="relative z-10">
                Continue to Secure Online Application
              </span>
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

  // ── FORM STATE ──
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#eef4fa] to-white py-12 sm:py-16 md:py-20">
      {/* Floating 3D orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-16 -left-16 h-48 w-48 rounded-full blur-3xl animate-float-slow sm:-top-32 sm:-left-24 sm:h-96 sm:w-96"
          style={{ backgroundColor: "rgba(35, 97, 147, 0.12)" }}
        />
        <div
          className="absolute bottom-0 -right-16 h-56 w-56 rounded-full blur-3xl animate-float-slow sm:-right-24 sm:h-80 sm:w-80"
          style={{
            backgroundColor: "rgba(35, 97, 147, 0.08)",
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 text-center animate-fade-up sm:mb-10">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide sm:px-4 sm:py-1.5 sm:text-sm"
            style={{ backgroundColor: "rgba(35, 97, 147, 0.1)", color: "#236193" }}
          >
            YOUR ESTIMATE REPORT
          </span>
          <h2
            className="mt-3 text-2xl font-bold tracking-tight sm:mt-4 sm:text-3xl md:text-4xl"
            style={{ color: "#133653" }}
          >
            Get Your Construction Loan Estimate
          </h2>
          <p
            className="mx-auto mt-3 max-w-xl text-sm sm:mt-4 sm:text-base"
            style={{ color: "rgba(35, 97, 147, 0.75)" }}
          >
            Receive a PDF copy of your estimate and financing summary. No obligation
            — just a clear picture of your numbers.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border bg-white/80 p-5 backdrop-blur-xl shadow-xl animate-fade-up sm:rounded-3xl sm:p-8 md:p-10"
          style={{
            borderColor: "rgba(35, 97, 147, 0.12)",
            boxShadow: "0 25px 60px -20px rgba(35, 97, 147, 0.25)",
          }}
          noValidate
        >
          {/* Name row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <FormField
              label="First Name"
              value={form.firstName}
              onChange={(v) => update("firstName", v)}
              error={errors.firstName}
              autoComplete="given-name"
              required
            />
            <FormField
              label="Last Name"
              value={form.lastName}
              onChange={(v) => update("lastName", v)}
              error={errors.lastName}
              autoComplete="family-name"
              required
            />
          </div>

          {/* Contact row */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5">
            <FormField
              label="Email Address"
              type="email"
              value={form.email}
              onChange={(v) => update("email", v)}
              error={errors.email}
              autoComplete="email"
              inputMode="email"
              required
            />
            <FormField
              label="Phone Number"
              type="tel"
              value={form.phone}
              onChange={(v) => update("phone", v)}
              error={errors.phone}
              autoComplete="tel"
              inputMode="tel"
              placeholder="(555) 123-4567"
              required
            />
          </div>

          {/* State */}
          <div className="mt-4 sm:mt-5">
            <label
              className="mb-1.5 block text-xs font-semibold sm:text-sm"
              style={{ color: "#133653" }}
            >
              Property State <span style={{ color: "#236193" }}>*</span>
            </label>
            <select
              value={form.state}
              onChange={(e) => update("state", e.target.value)}
              className="w-full rounded-xl border px-3 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 sm:px-4 sm:py-3"
              style={{
                borderColor: errors.state
                  ? "#dc2626"
                  : "rgba(35,97,147,0.2)",
                color: form.state ? "#133653" : "rgba(35,97,147,0.5)",
              }}
            >
              <option value="">Select your state</option>
              {US_STATES.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>
                {errors.state}
              </p>
            )}
          </div>

          {/* Email copy checkbox */}
          <div className="mt-5 flex items-start gap-3 sm:mt-6">
            <input
              id="emailCopy"
              type="checkbox"
              checked={form.emailCopy}
              onChange={(e) => update("emailCopy", e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-[#236193] focus:ring-[#236193]"
              style={{ accentColor: "#236193" }}
            />
            <label
              htmlFor="emailCopy"
              className="text-xs leading-relaxed sm:text-sm"
              style={{ color: "rgba(35, 97, 147, 0.85)" }}
            >
              Email me a copy of my estimate
            </label>
          </div>

          {/* TCPA CONSENT — Critical, unchecked by default */}
          <div
            className="mt-5 rounded-xl border p-4 sm:mt-6"
            style={{
              borderColor: errors.consent
                ? "#dc2626"
                : "rgba(35, 97, 147, 0.2)",
              backgroundColor: "rgba(35, 97, 147, 0.03)",
            }}
          >
            <div className="flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 focus:ring-[#236193]"
                style={{ accentColor: "#236193" }}
              />
              <label
                htmlFor="consent"
                className="text-[11px] leading-relaxed sm:text-xs"
                style={{ color: "rgba(35, 97, 147, 0.85)" }}
              >
                By checking this box, I agree to be contacted by phone, text, or
                email at the number and address provided, including via automated
                means, regarding mortgage financing. Consent is not a condition of
                purchase. Message and data rates may apply. Reply STOP to opt out.
                <span style={{ color: "#236193" }}> *</span>
              </label>
            </div>
            {errors.consent && (
              <p className="mt-2 text-xs" style={{ color: "#dc2626" }}>
                {errors.consent}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:mt-7 sm:py-4 sm:text-base"
            style={{
              backgroundColor: "#236193",
              boxShadow: "0 15px 35px -10px rgba(35, 97, 147, 0.55)",
            }}
          >
            {status === "loading" ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                <span className="relative z-10">Generating your report…</span>
              </>
            ) : (
              <>
                <span className="relative z-10">
                  Generate My Construction Loan Estimate
                </span>
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
              </>
            )}
          </button>

          {/* Error message */}
          {status === "error" && (
            <p
              className="mt-4 rounded-lg border px-4 py-3 text-center text-xs sm:text-sm"
              style={{
                borderColor: "#dc2626",
                backgroundColor: "rgba(220, 38, 38, 0.05)",
                color: "#dc2626",
              }}
            >
              Something went wrong. Please try again or call us directly.
            </p>
          )}

          {/* Compliance micro-disclosure */}
          <p
            className="mt-5 text-center text-[10px] leading-relaxed sm:text-[11px]"
            style={{ color: "rgba(35, 97, 147, 0.55)" }}
          >
            Your information is secure and will never be sold. By submitting this
            form, you agree to our Privacy Policy and Terms of Use. This is not a
            Loan Estimate or commitment to lend. All loans subject to credit
            approval.
          </p>
        </form>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SUB-COMPONENT: FormField
// ─────────────────────────────────────────────
function FormField({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "decimal";
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="mb-1.5 block text-xs font-semibold sm:text-sm"
        style={{ color: "#133653" }}
      >
        {label} {required && <span style={{ color: "#236193" }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full rounded-xl border px-3 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 sm:px-4 sm:py-3"
        style={{
          borderColor: error ? "#dc2626" : "rgba(35,97,147,0.2)",
          color: "#133653",
        }}
      />
      {error && (
        <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>
          {error}
        </p>
      )}
    </div>
  );
}