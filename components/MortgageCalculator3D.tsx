"use client";

import { useState, useMemo, useEffect } from "react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type CalcMode = "dimensions" | "concrete" | "roofing" | "stairs" | "materials";

interface ConstructionState {
  mode: CalcMode;

  // Dimensional math
  feetA: number;
  inchesA: number;
  fracA: number;
  feetB: number;
  inchesB: number;
  fracB: number;
  operation: "add" | "subtract" | "multiply" | "divide";

  // Concrete
  slabLengthFt: number;
  slabWidthFt: number;
  slabThicknessIn: number;
  wastePct: number;

  // Roofing
  roofRunFt: number;
  roofPitch: number; // rise per 12
  roofOverhangIn: number;

  // Stairs
  totalRiseIn: number;
  maxRiserIn: number;
  treadDepthIn: number;

  // Materials
  areaSqFt: number;
  coveragePerUnit: number; // sq ft per sheet/gallon/etc
  unitLabel: string;
  pricePerUnit: number;

  // Board feet
  bfThicknessIn: number;
  bfWidthIn: number;
  bfLengthFt: number;
  bfQty: number;
  bfPricePerBf: number;
}

interface Results {
  // Dimensions
  dimTotalInches: number;
  dimFeet: number;
  dimInches: number;
  dimFraction: string;
  dimDecimalFt: number;

  // Concrete
  concreteCuFt: number;
  concreteCuYd: number;
  concreteBags80: number;
  concreteBags60: number;

  // Roofing
  rafterLengthFt: number;
  roofAngleDeg: number;
  roofSlopePct: number;
  roofAreaSqFt: number;

  // Stairs
  riserCount: number;
  actualRiserIn: number;
  totalRunIn: number;
  stringerLengthFt: number;
  stairAngleDeg: number;

  // Materials
  unitsNeeded: number;
  totalCost: number;

  // Board feet
  boardFeet: number;
  bfCost: number;
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const FRACTIONS: Array<[number, string]> = [
  [0, ""],
  [1 / 16, "1/16"],
  [1 / 8, "1/8"],
  [3 / 16, "3/16"],
  [1 / 4, "1/4"],
  [5 / 16, "5/16"],
  [3 / 8, "3/8"],
  [7 / 16, "7/16"],
  [1 / 2, "1/2"],
  [9 / 16, "9/16"],
  [5 / 8, "5/8"],
  [11 / 16, "11/16"],
  [3 / 4, "3/4"],
  [13 / 16, "13/16"],
  [7 / 8, "7/8"],
  [15 / 16, "15/16"],
];

function inchesToFeetInchesFrac(totalInches: number) {
  const sign = totalInches < 0 ? -1 : 1;
  const abs = Math.abs(totalInches);
  const feet = Math.floor(abs / 12);
  const remaining = abs - feet * 12;
  const wholeInches = Math.floor(remaining);
  const fracRemainder = remaining - wholeInches;

  // Snap to nearest 1/16
  let best = FRACTIONS[0];
  let bestDiff = Infinity;
  for (const f of FRACTIONS) {
    const diff = Math.abs(f[0] - fracRemainder);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = f;
    }
  }

  let inches = wholeInches;
  let fracStr = best[1];
  if (best[0] === 1) {
    inches += 1;
    fracStr = "";
  }

  return { sign, feet, inches, fraction: fracStr };
}

function formatFeetInches(totalInches: number): string {
  if (!isFinite(totalInches)) return "—";
  const { sign, feet, inches, fraction } = inchesToFeetInchesFrac(totalInches);
  const parts: string[] = [];
  if (feet > 0) parts.push(`${feet}'`);
  if (inches > 0 || fraction) parts.push(`${inches}${fraction ? ` ${fraction}` : ""}"`);
  if (parts.length === 0) parts.push(`0"`);
  return `${sign < 0 ? "-" : ""}${parts.join(" ")}`;
}

// ─────────────────────────────────────────────
// CORE CALCULATION
// ─────────────────────────────────────────────
function calculate(s: ConstructionState): Results {
  // ── Dimensional math ──
  const aIn = s.feetA * 12 + s.inchesA + s.fracA;
  const bIn = s.feetB * 12 + s.inchesB + s.fracB;
  let dimTotalInches = 0;
  if (s.operation === "add") dimTotalInches = aIn + bIn;
  else if (s.operation === "subtract") dimTotalInches = aIn - bIn;
  else if (s.operation === "multiply") dimTotalInches = aIn * bIn;
  else dimTotalInches = bIn !== 0 ? aIn / bIn : 0;

  const { feet: dimFeet, inches: dimInches, fraction: dimFraction } =
    inchesToFeetInchesFrac(dimTotalInches);

  // ── Concrete ──
  const thicknessFt = s.slabThicknessIn / 12;
  const slabCuFt = s.slabLengthFt * s.slabWidthFt * thicknessFt;
  const wasteMultiplier = 1 + s.wastePct / 100;
  const concreteCuFt = slabCuFt * wasteMultiplier;
  const concreteCuYd = concreteCuFt / 27;
  const concreteBags80 = Math.ceil(concreteCuFt / 0.6);
  const concreteBags60 = Math.ceil(concreteCuFt / 0.45);

  // ── Roofing ──
  const runWithOverhang = s.roofRunFt + s.roofOverhangIn / 12;
  const risePerFt = s.roofPitch / 12;
  const rafterLengthFt = Math.sqrt(
    runWithOverhang * runWithOverhang +
      (runWithOverhang * risePerFt) * (runWithOverhang * risePerFt)
  );
  const roofAngleDeg = (Math.atan(risePerFt) * 180) / Math.PI;
  const roofSlopePct = risePerFt * 100;
  const roofAreaSqFt = rafterLengthFt * (runWithOverhang * 2); // both slopes

  // ── Stairs ──
  const riserCount = Math.max(1, Math.ceil(s.totalRiseIn / s.maxRiserIn));
  const actualRiserIn = s.totalRiseIn / riserCount;
  const treadCount = Math.max(1, riserCount - 1);
  const totalRunIn = treadCount * s.treadDepthIn;
  const stringerLengthIn = Math.sqrt(
    s.totalRiseIn * s.totalRiseIn + totalRunIn * totalRunIn
  );
  const stringerLengthFt = stringerLengthIn / 12;
  const stairAngleDeg = (Math.atan(s.totalRiseIn / totalRunIn) * 180) / Math.PI;

  // ── Materials ──
  const unitsNeeded =
    s.coveragePerUnit > 0 ? Math.ceil(s.areaSqFt / s.coveragePerUnit) : 0;
  const totalCost = unitsNeeded * s.pricePerUnit;

  // ── Board feet ──
  const bfPerPiece =
    (s.bfThicknessIn * s.bfWidthIn * s.bfLengthFt) / 12;
  const boardFeet = bfPerPiece * s.bfQty;
  const bfCost = boardFeet * s.bfPricePerBf;

  return {
    dimTotalInches,
    dimFeet,
    dimInches,
    dimFraction,
    dimDecimalFt: dimTotalInches / 12,
    concreteCuFt,
    concreteCuYd,
    concreteBags80,
    concreteBags60,
    rafterLengthFt,
    roofAngleDeg,
    roofSlopePct,
    roofAreaSqFt,
    riserCount,
    actualRiserIn,
    totalRunIn,
    stringerLengthFt,
    stairAngleDeg,
    unitsNeeded,
    totalCost,
    boardFeet,
    bfCost,
  };
}

const fmt = (n: number, digits = 2) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0,
  }).format(n);

const fmtCur = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function ConstructionCalculator3D() {
  const [state, setState] = useState<ConstructionState>({
    mode: "dimensions",

    feetA: 10,
    inchesA: 6,
    fracA: 0.5,
    feetB: 4,
    inchesB: 3,
    fracB: 0.25,
    operation: "add",

    slabLengthFt: 20,
    slabWidthFt: 12,
    slabThicknessIn: 4,
    wastePct: 10,

    roofRunFt: 12,
    roofPitch: 6,
    roofOverhangIn: 12,

    totalRiseIn: 108,
    maxRiserIn: 7.5,
    treadDepthIn: 10.5,

    areaSqFt: 500,
    coveragePerUnit: 32, // drywall sheet (4x8)
    unitLabel: "sheets",
    pricePerUnit: 18,

    bfThicknessIn: 2,
    bfWidthIn: 6,
    bfLengthFt: 10,
    bfQty: 10,
    bfPricePerBf: 4.5,
  });

  const results = useMemo(() => calculate(state), [state]);

  const [animatedValue, setAnimatedValue] = useState(0);

  // animated "hero" number depending on mode
  const heroValue = useMemo(() => {
    switch (state.mode) {
      case "dimensions":
        return results.dimDecimalFt;
      case "concrete":
        return results.concreteCuYd;
      case "roofing":
        return results.rafterLengthFt;
      case "stairs":
        return results.stringerLengthFt;
      case "materials":
        return results.unitsNeeded;
      default:
        return 0;
    }
  }, [state.mode, results]);

  useEffect(() => {
    const start = animatedValue;
    const end = heroValue;
    const duration = 500;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedValue(start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroValue]);

  const update = <K extends keyof ConstructionState>(
    key: K,
    value: ConstructionState[K]
  ) => setState((s) => ({ ...s, [key]: value }));

  const heroLabel = {
    dimensions: "Total (decimal feet)",
    concrete: "Concrete Volume (cubic yards)",
    roofing: "Rafter Length (feet)",
    stairs: "Stringer Length (feet)",
    materials: "Units Needed",
  }[state.mode];

  const heroSuffix = {
    dimensions: " ft",
    concrete: " yd³",
    roofing: " ft",
    stairs: " ft",
    materials: "",
  }[state.mode];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#eef4fa] to-white py-12 sm:py-16 md:py-20">
      {/* Floating orbs */}
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
            JOBSITE MATH, INSTANTLY
          </span>
          <h2
            className="mt-3 text-2xl font-bold tracking-tight sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#133653" }}
          >
            The Construction Calculator
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-sm sm:mt-4 sm:text-base md:text-lg"
            style={{ color: "rgba(35, 97, 147, 0.75)" }}
          >
            Feet-inch-fractions, concrete, rafters, stairs, and material takeoffs —
            all in one place, with real trade formulas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* ── LEFT: INPUTS ── */}
          <div
            className="rounded-2xl border bg-white/70 p-4 backdrop-blur-xl shadow-xl animate-fade-up sm:rounded-3xl sm:p-6 md:p-8 lg:col-span-3"
            style={{
              borderColor: "rgba(35, 97, 147, 0.1)",
              boxShadow: "0 20px 60px -20px rgba(35, 97, 147, 0.2)",
            }}
          >
            {/* Mode tabs */}
            <div className="mb-5 sm:mb-6">
              <label
                className="mb-2 block text-xs font-semibold sm:text-sm"
                style={{ color: "#133653" }}
              >
                Calculator Mode
              </label>
              <div
                className="grid grid-cols-2 gap-1 rounded-xl border p-1 sm:grid-cols-5"
                style={{ borderColor: "rgba(35,97,147,0.15)" }}
              >
                {(
                  [
                    ["dimensions", "Dimensions"],
                    ["concrete", "Concrete"],
                    ["roofing", "Roofing"],
                    ["stairs", "Stairs"],
                    ["materials", "Materials"],
                  ] as Array<[CalcMode, string]>
                ).map(([m, label]) => (
                  <button
                    key={m}
                    onClick={() => update("mode", m)}
                    className="rounded-lg px-2 py-2 text-[11px] font-semibold transition-all duration-300 sm:text-xs"
                    style={{
                      backgroundColor:
                        state.mode === m ? "#236193" : "transparent",
                      color: state.mode === m ? "#ffffff" : "#236193",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mode-specific inputs */}
            {state.mode === "dimensions" && (
              <DimensionsInputs state={state} update={update} results={results} />
            )}
            {state.mode === "concrete" && (
              <ConcreteInputs state={state} update={update} />
            )}
            {state.mode === "roofing" && (
              <RoofingInputs state={state} update={update} />
            )}
            {state.mode === "stairs" && (
              <StairsInputs state={state} update={update} />
            )}
            {state.mode === "materials" && (
              <MaterialsInputs state={state} update={update} />
            )}

            {/* Board feet (always shown) */}
            <div className="mt-6 border-t pt-5" style={{ borderColor: "rgba(35,97,147,0.1)" }}>
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-wide sm:text-sm"
                style={{ color: "#133653" }}
              >
                Board Feet (Lumber)
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <InputField
                  label="Thickness"
                  value={state.bfThicknessIn}
                  onChange={(v) => update("bfThicknessIn", v)}
                  suffix="in"
                  step={0.25}
                />
                <InputField
                  label="Width"
                  value={state.bfWidthIn}
                  onChange={(v) => update("bfWidthIn", v)}
                  suffix="in"
                  step={0.5}
                />
                <InputField
                  label="Length"
                  value={state.bfLengthFt}
                  onChange={(v) => update("bfLengthFt", v)}
                  suffix="ft"
                  step={1}
                />
                <InputField
                  label="Qty"
                  value={state.bfQty}
                  onChange={(v) => update("bfQty", v)}
                  step={1}
                />
                <InputField
                  label="Price / BF"
                  value={state.bfPricePerBf}
                  onChange={(v) => update("bfPricePerBf", v)}
                  prefix="$"
                  step={0.25}
                />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <span style={{ color: "rgba(35,97,147,0.7)" }}>
                  Board feet:{" "}
                  <strong style={{ color: "#133653" }}>
                    {fmt(results.boardFeet, 2)} bf
                  </strong>
                </span>
                <span style={{ color: "rgba(35,97,147,0.7)" }}>
                  Cost:{" "}
                  <strong style={{ color: "#133653" }}>
                    {fmtCur(results.bfCost)}
                  </strong>
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: RESULTS ── */}
          <div className="space-y-4 sm:space-y-5 lg:col-span-2">
            {/* Hero card */}
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
                {heroLabel}
              </p>
              <p className="mt-1.5 text-3xl font-bold tabular-nums sm:mt-2 sm:text-4xl md:text-5xl">
                {fmt(animatedValue, state.mode === "materials" ? 0 : 2)}
                {heroSuffix}
              </p>
              {state.mode === "dimensions" && (
                <p className="mt-1 text-xs opacity-80 sm:text-sm">
                  {formatFeetInches(results.dimTotalInches)}
                </p>
              )}
            </div>

            {/* Mode-specific stats */}
            {state.mode === "dimensions" && (
              <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
                <StatCard
                  label="Feet-Inch-Fraction"
                  value={formatFeetInches(results.dimTotalInches)}
                  delay={200}
                  highlight
                />
                <StatCard
                  label="Total Inches"
                  value={`${fmt(results.dimTotalInches, 3)}"`}
                  delay={250}
                />
                <StatCard
                  label="Decimal Feet"
                  value={`${fmt(results.dimDecimalFt, 3)} ft`}
                  delay={300}
                />
                <StatCard
                  label="Meters"
                  value={`${fmt((results.dimTotalInches * 0.0254), 3)} m`}
                  delay={350}
                />
              </div>
            )}

            {state.mode === "concrete" && (
              <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
                <StatCard
                  label="Volume (cu yd)"
                  value={`${fmt(results.concreteCuYd, 2)} yd³`}
                  delay={200}
                  highlight
                />
                <StatCard
                  label="Volume (cu ft)"
                  value={`${fmt(results.concreteCuFt, 2)} ft³`}
                  delay={250}
                />
                <StatCard
                  label="80 lb Bags"
                  value={fmt(results.concreteBags80, 0)}
                  delay={300}
                />
                <StatCard
                  label="60 lb Bags"
                  value={fmt(results.concreteBags60, 0)}
                  delay={350}
                />
              </div>
            )}

            {state.mode === "roofing" && (
              <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
                <StatCard
                  label="Rafter Length"
                  value={`${fmt(results.rafterLengthFt, 2)} ft`}
                  delay={200}
                  highlight
                />
                <StatCard
                  label="Roof Angle"
                  value={`${fmt(results.roofAngleDeg, 2)}°`}
                  delay={250}
                />
                <StatCard
                  label="Slope"
                  value={`${fmt(results.roofSlopePct, 1)}%`}
                  delay={300}
                />
                <StatCard
                  label="Roof Area (est.)"
                  value={`${fmt(results.roofAreaSqFt, 0)} ft²`}
                  delay={350}
                />
              </div>
            )}

            {state.mode === "stairs" && (
              <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
                <StatCard
                  label="Risers"
                  value={fmt(results.riserCount, 0)}
                  delay={200}
                  highlight
                />
                <StatCard
                  label="Actual Riser"
                  value={`${fmt(results.actualRiserIn, 3)}"`}
                  delay={250}
                />
                <StatCard
                  label="Total Run"
                  value={formatFeetInches(results.totalRunIn)}
                  delay={300}
                />
                <StatCard
                  label="Stair Angle"
                  value={`${fmt(results.stairAngleDeg, 1)}°`}
                  delay={350}
                />
              </div>
            )}

            {state.mode === "materials" && (
              <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
                <StatCard
                  label={`Units (${state.unitLabel})`}
                  value={fmt(results.unitsNeeded, 0)}
                  delay={200}
                  highlight
                />
                <StatCard
                  label="Total Cost"
                  value={fmtCur(results.totalCost)}
                  delay={250}
                />
                <StatCard
                  label="Area"
                  value={`${fmt(state.areaSqFt, 0)} ft²`}
                  delay={300}
                />
                <StatCard
                  label="Coverage / Unit"
                  value={`${fmt(state.coveragePerUnit, 2)} ft²`}
                  delay={350}
                />
              </div>
            )}

            {/* Quick reference card */}
            <div
              className="rounded-2xl border bg-white/80 p-4 backdrop-blur-sm animate-fade-up sm:p-5"
              style={{
                borderColor: "rgba(35,97,147,0.15)",
                animationDelay: "400ms",
              }}
            >
              <p
                className="mb-2 text-xs font-semibold sm:text-sm"
                style={{ color: "#133653" }}
              >
                Quick Reference
              </p>
              <div
                className="space-y-1 text-[11px] sm:text-xs"
                style={{ color: "rgba(35,97,147,0.75)" }}
              >
                <p>• 1 yd³ = 27 ft³ &nbsp;|&nbsp; 80 lb bag ≈ 0.6 ft³</p>
                <p>• Board feet = (T × W × L) / 12 &nbsp;(inches/feet)</p>
                <p>• Rafter = √(run² + rise²) &nbsp;|&nbsp; rise = run × pitch/12</p>
                <p>• Stair: risers = ⌈total rise ÷ max riser⌉</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p
          className="mx-auto mt-8 max-w-4xl text-center text-[11px] leading-relaxed sm:mt-10 sm:text-xs"
          style={{ color: "rgba(35,97,147,0.55)" }}
        >
          Estimates only. Always verify measurements, local code requirements, and
          manufacturer coverage before ordering materials or cutting lumber. Bag
          yields and coverage vary by product.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// MODE-SPECIFIC INPUT PANELS
// ─────────────────────────────────────────────
function DimensionsInputs({
  state,
  update,
  results,
}: {
  state: ConstructionState;
  update: <K extends keyof ConstructionState>(k: K, v: ConstructionState[K]) => void;
  results: Results;
}) {
  return (
    <div className="space-y-4">
      {/* Measurement A */}
      <div>
        <label
          className="mb-1.5 block text-xs font-semibold sm:text-sm"
          style={{ color: "#133653" }}
        >
          Measurement A
        </label>
        <div className="grid grid-cols-3 gap-2">
          <InputField
            label="Feet"
            value={state.feetA}
            onChange={(v) => update("feetA", v)}
            suffix="ft"
            step={1}
          />
          <InputField
            label="Inches"
            value={state.inchesA}
            onChange={(v) => update("inchesA", v)}
            suffix="in"
            step={1}
          />
          <FractionSelect
            label="Fraction"
            value={state.fracA}
            onChange={(v) => update("fracA", v)}
          />
        </div>
      </div>

      {/* Operation */}
      <div>
        <label
          className="mb-1.5 block text-xs font-semibold sm:text-sm"
          style={{ color: "#133653" }}
        >
          Operation
        </label>
        <div
          className="inline-flex w-full rounded-xl border p-1"
          style={{ borderColor: "rgba(35,97,147,0.15)" }}
        >
          {(
            [
              ["add", "+"],
              ["subtract", "−"],
              ["multiply", "×"],
              ["divide", "÷"],
            ] as Array<[ConstructionState["operation"], string]>
          ).map(([op, sym]) => (
            <button
              key={op}
              onClick={() => update("operation", op)}
              className="flex-1 rounded-lg px-3 py-2 text-sm font-bold transition-all duration-300"
              style={{
                backgroundColor:
                  state.operation === op ? "#236193" : "transparent",
                color: state.operation === op ? "#ffffff" : "#236193",
              }}
            >
              {sym}
            </button>
          ))}
        </div>
      </div>

      {/* Measurement B */}
      <div>
        <label
          className="mb-1.5 block text-xs font-semibold sm:text-sm"
          style={{ color: "#133653" }}
        >
          Measurement B
        </label>
        <div className="grid grid-cols-3 gap-2">
          <InputField
            label="Feet"
            value={state.feetB}
            onChange={(v) => update("feetB", v)}
            suffix="ft"
            step={1}
          />
          <InputField
            label="Inches"
            value={state.inchesB}
            onChange={(v) => update("inchesB", v)}
            suffix="in"
            step={1}
          />
          <FractionSelect
            label="Fraction"
            value={state.fracB}
            onChange={(v) => update("fracB", v)}
          />
        </div>
      </div>

      {/* Result preview */}
      <div
        className="rounded-xl border p-3 text-center"
        style={{ borderColor: "rgba(35,97,147,0.2)", backgroundColor: "rgba(35,97,147,0.04)" }}
      >
        <p className="text-[11px] sm:text-xs" style={{ color: "rgba(35,97,147,0.7)" }}>
          Result
        </p>
        <p className="text-lg font-bold sm:text-xl" style={{ color: "#133653" }}>
          {formatFeetInches(results.dimTotalInches)}
        </p>
      </div>
    </div>
  );
}

function ConcreteInputs({
  state,
  update,
}: {
  state: ConstructionState;
  update: <K extends keyof ConstructionState>(k: K, v: ConstructionState[K]) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      <InputField
        label="Slab Length"
        value={state.slabLengthFt}
        onChange={(v) => update("slabLengthFt", v)}
        suffix="ft"
        step={1}
      />
      <InputField
        label="Slab Width"
        value={state.slabWidthFt}
        onChange={(v) => update("slabWidthFt", v)}
        suffix="ft"
        step={1}
      />
      <InputField
        label="Thickness"
        value={state.slabThicknessIn}
        onChange={(v) => update("slabThicknessIn", v)}
        suffix="in"
        step={0.5}
      />
      <InputField
        label="Waste"
        value={state.wastePct}
        onChange={(v) => update("wastePct", v)}
        suffix="%"
        step={1}
      />
    </div>
  );
}

function RoofingInputs({
  state,
  update,
}: {
  state: ConstructionState;
  update: <K extends keyof ConstructionState>(k: K, v: ConstructionState[K]) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      <InputField
        label="Run (half-span)"
        value={state.roofRunFt}
        onChange={(v) => update("roofRunFt", v)}
        suffix="ft"
        step={0.5}
      />
      <InputField
        label="Pitch (rise / 12)"
        value={state.roofPitch}
        onChange={(v) => update("roofPitch", v)}
        suffix="/12"
        step={0.5}
      />
      <InputField
        label="Overhang"
        value={state.roofOverhangIn}
        onChange={(v) => update("roofOverhangIn", v)}
        suffix="in"
        step={1}
      />
    </div>
  );
}

function StairsInputs({
  state,
  update,
}: {
  state: ConstructionState;
  update: <K extends keyof ConstructionState>(k: K, v: ConstructionState[K]) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      <InputField
        label="Total Rise"
        value={state.totalRiseIn}
        onChange={(v) => update("totalRiseIn", v)}
        suffix="in"
        step={1}
      />
      <InputField
        label="Max Riser"
        value={state.maxRiserIn}
        onChange={(v) => update("maxRiserIn", v)}
        suffix="in"
        step={0.25}
      />
      <InputField
        label="Tread Depth"
        value={state.treadDepthIn}
        onChange={(v) => update("treadDepthIn", v)}
        suffix="in"
        step={0.25}
      />
    </div>
  );
}

function MaterialsInputs({
  state,
  update,
}: {
  state: ConstructionState;
  update: <K extends keyof ConstructionState>(k: K, v: ConstructionState[K]) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      <InputField
        label="Area to Cover"
        value={state.areaSqFt}
        onChange={(v) => update("areaSqFt", v)}
        suffix="ft²"
        step={10}
      />
      <InputField
        label="Coverage / Unit"
        value={state.coveragePerUnit}
        onChange={(v) => update("coveragePerUnit", v)}
        suffix="ft²"
        step={1}
      />
      <InputField
        label="Price / Unit"
        value={state.pricePerUnit}
        onChange={(v) => update("pricePerUnit", v)}
        prefix="$"
        step={1}
      />
      <div>
        <label
          className="mb-1.5 block text-xs font-semibold sm:text-sm"
          style={{ color: "#133653" }}
        >
          Unit Label
        </label>
        <input
          type="text"
          value={state.unitLabel}
          onChange={(e) => update("unitLabel", e.target.value)}
          className="w-full rounded-xl border px-3 py-2.5 text-sm font-medium outline-none sm:px-4 sm:py-3"
          style={{ borderColor: "rgba(35,97,147,0.2)", color: "#133653" }}
        />
      </div>
    </div>
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
        className="mb-1.5 block text-[11px] font-semibold sm:text-xs"
        style={{ color: "#133653" }}
      >
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm"
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
          } ${suffix ? "pr-9 sm:pr-11" : "pr-3 sm:pr-4"}`}
          style={{ borderColor: "rgba(35,97,147,0.2)", color: "#133653" }}
        />
        {suffix && (
          <span
            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] sm:right-3 sm:text-xs"
            style={{ color: "#236193" }}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function FractionSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label
        className="mb-1.5 block text-[11px] font-semibold sm:text-xs"
        style={{ color: "#133653" }}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-xl border px-2 py-2.5 text-sm font-medium outline-none sm:px-3 sm:py-3"
        style={{ borderColor: "rgba(35,97,147,0.2)", color: "#133653" }}
      >
        {FRACTIONS.map(([val, lbl]) => (
          <option key={val} value={val}>
            {lbl || "0"}
          </option>
        ))}
      </select>
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