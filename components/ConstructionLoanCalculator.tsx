'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

type Key = 'owed' | 'cost' | 'val' | 'mo' | 'rate';

const DEFAULTS: Record<Key, number> = { owed: 230000, cost: 240000, val: 240000, mo: 40, rate: 3.0 };
const MONEY_TICKS = ['$0', '$200k', '$500k', '$1m'];

const FIELDS: {
  k: Key; label: string; min: number; max: number; step: number;
  prefix?: string; suffix?: string; ticks: string[]; help: string;
}[] = [
  { k: 'owed', label: 'Amount you owe on home', min: 0, max: 1_000_000, step: 5000, prefix: '$', ticks: MONEY_TICKS,
    help: 'Enter the amount you currently owe on your home. In a refinance this becomes your down payment.' },
  { k: 'cost', label: 'Cost of construction project', min: 0, max: 1_000_000, step: 5000, prefix: '$', ticks: MONEY_TICKS,
    help: 'Please enter the cost of the construction project you are planning.' },
  { k: 'val', label: 'Value of home when complete', min: 0, max: 1_000_000, step: 5000, prefix: '$', ticks: MONEY_TICKS,
    help: 'Enter the estimated appraised value of your home once construction is finished. Lenders base the maximum loan on this number.' },
  { k: 'mo', label: 'Length of project (months)', min: 1, max: 60, step: 1, suffix: 'mo', ticks: ['1', '21', '40', '60'],
    help: 'How many months you expect construction to take. You pay interest only during this time.' },
  { k: 'rate', label: 'Interest rate', min: 0, max: 10, step: 0.125, suffix: '%', ticks: ['0%', '3%', '6%', '10%'],
    help: 'The annual interest rate you expect on the loan. Check current rates with your lender.' },
];

const m0 = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
const m2 = (n: number) =>
  '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/* ---------- Help popup ---------- */
function Help({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <span ref={ref} className="relative inline-flex print:hidden">
      <button
        type="button"
        aria-label={`Help: ${title}`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`h-[22px] w-[22px] shrink-0 rounded-full border-[1.5px] border-[#236193] text-xs font-bold leading-none transition
          hover:bg-[#236193] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000C1C]
          ${open ? 'bg-[#236193] text-white' : 'bg-transparent text-[#236193]'}`}
      >
        ?
      </button>
      {open && (
        <div role="tooltip" className="absolute left-0 top-8 z-20 w-[min(320px,80vw)] rounded-xl bg-[#000C1C] p-3.5 text-[13px] leading-snug text-slate-200 shadow-xl print:hidden">
          <b className="mb-0.5 block text-sm text-white">{title}</b>
          {text}
        </div>
      )}
    </span>
  );
}

/* ---------- Slider + number input ---------- */
function Field({ f, value, onChange, label }: {
  f: (typeof FIELDS)[number]; value: number; onChange: (v: number) => void; label?: string;
}) {
  const title = label ?? f.label;
  const pct = Math.min(100, Math.max(0, ((value - f.min) / (f.max - f.min)) * 100));
  return (
    <div className="mb-6 print:hidden">
      <div className="mb-2.5 flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-sm font-semibold">
          <label htmlFor={`n-${f.k}`}>{title}</label>
          <Help title={title} text={f.help} />
        </span>
        <span className="flex items-center rounded-lg border border-slate-200 bg-white px-2.5 focus-within:outline focus-within:outline-2 focus-within:outline-[#236193]">
          {f.prefix && <i className="text-sm not-italic text-slate-500">{f.prefix}</i>}
          <input
            id={`n-${f.k}`}
            type="number"
            min={0}
            step={f.step}
            inputMode="decimal"
            value={value}
            onChange={(e) => {
              let v = parseFloat(e.target.value);
              if (isNaN(v) || v < 0) v = 0;
              if (f.k === 'mo') v = Math.min(60, Math.max(1, v));
              onChange(v);
            }}
            className="w-[104px] bg-transparent px-1 py-2 text-right font-bold outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          {f.suffix && <i className="text-sm not-italic text-slate-500">{f.suffix}</i>}
        </span>
      </div>
      <input
        type="range"
        aria-label={title}
        min={f.min}
        max={f.max}
        step={f.step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        style={{ background: `linear-gradient(to right,#236193 ${pct}%,#dde4ec ${pct}%)` }}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-md outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#236193]
          [&::-webkit-slider-thumb]:h-[22px] [&::-webkit-slider-thumb]:w-[22px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-[#000C1C] [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_#236193]
          [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:w-[18px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px]
          [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-[#000C1C] [&::-moz-range-thumb]:shadow-[0_0_0_2px_#236193]"
      />
      <div className="mt-1.5 flex justify-between text-xs text-slate-500">
        {f.ticks.map((t) => <span key={t}>{t}</span>)}
      </div>
    </div>
  );
}

/* ---------- Report content ---------- */
type Calc = { loan: number; down: number; initial: number; final: number; pi: number; yearsText: string; ltv: number };

function ReportBody({ r, v, buy }: { r: Calc; v: Record<Key, number>; buy: boolean }) {
  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  const summary: [string, string][] = [
    ['Do you own the property?', buy ? 'No, buying land' : 'Yes, this is a refinance'],
    [buy ? 'Cost of land' : 'Amount you owe on home', m2(v.owed)],
    ['Cost of construction project', m2(v.cost)],
    ['Value of home when complete', m2(v.val)],
    ['Down payment', m2(r.down)],
    ['Loan amount', m2(r.loan)],
    ['Interest rate', `${v.rate}%`],
    ['Length of project (months)', `${v.mo}`],
    ['Initial interest only payment', m2(r.initial)],
    ['Final interest only payment', m2(r.final)],
    ['Principal and interest payment', `${m2(r.pi)} for ${r.yearsText}`],
  ];

  return (
    <>
      <h2 className="mb-1.5 text-[22px] font-bold text-[#000C1C]">Construction loan report</h2>
      <p className="mb-3.5 text-[13px] text-slate-500">Prepared {date}</p>
      <p className="mb-1.5 font-semibold">
        The maximum loan for your project, based on your inputs, is {m2(r.loan)}.
      </p>
      <p className="mb-4 text-[13px] text-slate-500">
        This loan has an initial interest only payment of {m2(r.initial)}. This increases to {m2(r.final)} by the end of construction which is estimated to take {v.mo} months to complete. When construction is complete the principal and interest payment will change to {m2(r.pi)} for {r.yearsText}.
      </p>
      <h3 className="mb-2 border-t border-slate-200 pt-4 text-[17px] font-bold text-[#000C1C]">Results summary</h3>
      <table className="w-full text-sm">
        <tbody>
          {summary.map(([a, b]) => (
            <tr key={a} className="border-b border-slate-200 last:border-0">
              <td className="py-2 text-slate-500">{a}</td>
              <td className="py-2 text-right font-semibold tabular-nums">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3.5 text-xs text-slate-500">
        Estimate only. Not a loan offer. Assumes a loan of up to 80% of the completed value and a 30-year total term.
      </p>
    </>
  );
}

/* ---------- Page ---------- */
export default function ConstructionLoanCalculator() {
  const [own, setOwn] = useState<'refi' | 'buy'>('refi');
  const [v, setV] = useState<Record<Key, number>>(DEFAULTS);
  const [showReport, setShowReport] = useState(false);
  const reportRef = useRef<HTMLElement>(null);

  const set = (k: Key) => (n: number) => setV((p) => ({ ...p, [k]: n }));
  const buy = own === 'buy';

  const r: Calc = useMemo(() => {
    const { owed, cost, val, mo, rate } = v;
    
    // 1. Max Loan is capped at 80% of completed value, OR the cost (whichever is lower)
    const loan = Math.min(cost, 0.8 * val);
    
    // 2. Down Payment (Dinkytown uses total cash needed - loan amount)
    const down = Math.max(0, owed + cost - loan);

    // 3. Interest Rates
    const mr = rate / 100 / 12;

    // 4. Initial Interest Only Payment (Dinkytown logic)
    const initialDraw = Math.max(0, loan - cost);
    const initial = initialDraw * mr;
    
    // 5. Final Interest Only Payment
    const final = loan * mr;
    
    // 6. P&I Payment & Term
    const totalTermMonths = 360 - mo; 
    const pi = mr === 0 ? loan / totalTermMonths : (loan * mr) / (1 - Math.pow(1 + mr, -totalTermMonths));
    
    // Format the term as "X years and Y months"
    const yearsCalc = Math.floor(totalTermMonths / 12);
    const monthsCalc = Math.floor(totalTermMonths % 12);
    const yearsText = `${yearsCalc} years and ${monthsCalc} months`;
    
    // 7. LTV
    const ltv = val ? (loan / val) * 100 : 0;

    return { loan, down, initial, final, pi, yearsText, ltv };
  }, [v, buy]);

  const calcRows: [string, string, string][] = [
    ['Down payment', m0(r.down), 'The amount you put in yourself.'],
    ['Loan amount', m0(r.loan), 'The most you can borrow: up to 80% of the completed value.'],
    ['Term', r.yearsText, 'The years left to repay after construction ends, out of a 30-year total term.'],
    ['Initial interest only payment', m2(r.initial), 'Your monthly payment on the first amount drawn.'],
    ['Final interest only payment', m2(r.final), 'Your monthly payment once the full loan has been drawn.'],
    ['Principal and interest payment', m2(r.pi), 'Your monthly payment after construction.'],
  ];

  const bars = [
    { label: 'Initial interest only', value: r.initial, color: '#000C1C' },
    { label: 'Final interest only', value: r.final, color: '#236193' },
    { label: 'Principal + interest', value: r.pi, color: '#5c9bcf' },
  ];
  const maxBar = Math.max(...bars.map((b) => b.value), 1);

  const openReport = () => {
    setShowReport(true);
    setTimeout(() => reportRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };
  
  const printReport = () => window.print();

  const handleEmailReport = () => {
    const subject = encodeURIComponent("Construction Loan Estimate Report");
    const body = encodeURIComponent(
      `Here is the Construction Loan Estimate summary:\n\n` +
      `- Property Status: ${buy ? 'Buying Land' : 'Refinance'}\n` +
      `- Amount Owed / Cost of Land: ${m2(v.owed)}\n` +
      `- Cost of Construction: ${m2(v.cost)}\n` +
      `- Value When Complete: ${m2(v.val)}\n` +
      `- Down Payment: ${m2(r.down)}\n` +
      `- Max Loan Amount: ${m2(r.loan)}\n` +
      `- Interest Rate: ${v.rate}%\n` +
      `- Project Length: ${v.mo} months\n` +
      `- Initial Payment: ${m2(r.initial)}\n` +
      `- Final Interest Payment: ${m2(r.final)}\n` +
      `- P&I Payment: ${m2(r.pi)} for ${r.yearsText}\n\n` +
      `Estimate only. Not a loan offer.`
    );
    
    window.location.href = `mailto:ken.j.schmidt@huntington.com?subject=${subject}&body=${body}`;
  };

  const card = 'rounded-2xl border border-slate-400 bg-white p-6 shadow-[0_4px_18px_rgba(0,12,28,0.06)]';

  return (
    <div className="min-h-screen bg-white text-[#0b1626]">
      
      {/* ===== Screen UI (Hidden on Print) ===== */}
      <div className="print:hidden">
        <header className="bg-[#000C1C] px-5 pb-24 pt-11 text-white">
          <div className="mx-auto max-w-[1080px]">
            <h1 className="mb-2 text-[clamp(26px,4vw,38px)] font-bold tracking-tight">Construction loan calculator</h1>
            <p className="max-w-[560px] text-[#a9bdd1]">
              Estimate the most you can borrow to build, and what you’ll pay during construction and after.
            </p>
          </div>
        </header>

        <main className="mx-auto -mt-16 mb-12 grid max-w-[1080px] items-start gap-5 px-5 lg:grid-cols-[1.15fr_.85fr]">
          {/* Inputs */}
          <section className={card} aria-label="Inputs ">
            <h2 className="mb-4 text-[17px] font-bold">Project information</h2>

            <div className="mb-6">
              <div className="mb-2.5 flex items-center gap-2 text-sm font-semibold">
                <label htmlFor="own">Do you own the property?</label>
                <Help title="Do you own the property?" text="Choose refinance if you already own the land or a home. Choose buy land if you also need to purchase the lot." />
              </div>
              <select
                id="own"
                value={own}
                onChange={(e) => setOwn(e.target.value as 'refi' | 'buy')}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 focus:outline focus:outline-2 focus:outline-[#236193]"
              >
                <option value="refi">Yes, this is a refinance</option>
                <option value="buy">No, I need to buy land</option>
              </select>
            </div>

            {FIELDS.slice(0, 4).map((f) => (
              <Field key={f.k} f={f} value={v[f.k]} onChange={set(f.k)}
                label={f.k === 'owed' && buy ? 'Cost of land' : undefined} />
            ))}

            <h2 className="mb-4 mt-7 border-t border-slate-200 pt-5 text-[17px] font-bold">Loan information</h2>
            <Field f={FIELDS[4]} value={v.rate} onChange={set('rate')} />

            <div className="mt-1 rounded-xl bg-[#e8f0f7] px-4 py-1.5">
              {calcRows.map(([t, val, help]) => (
                <div key={t} className="flex items-center justify-between border-b border-slate-300/60 py-2.5 last:border-0">
                  <span className="flex items-center gap-2 text-sm font-semibold">{t}<Help title={t} text={help} /></span>
                  <b className="tabular-nums text-[#000C1C]">{val}</b>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-2.5">
              <button onClick={openReport} className="flex-1 rounded-lg border border-[#236193] bg-[#236193] py-2.5 font-semibold text-white hover:bg-[#1c5079]">
                View report
              </button>
              <button onClick={() => { setV(DEFAULTS); setOwn('refi'); }} className="flex-1 rounded-lg border border-[#236193] py-2.5 font-semibold text-[#236193] hover:bg-[#e8f0f7]">
                Reset
              </button>
            </div>
            <p className="mt-3.5 text-xs text-slate-500">
              Estimate only. The loan is capped at 80% of the completed value or the project cost, whichever is lower.
              Total term is 30 years, with funds drawn evenly over the project.
            </p>
          </section>

          <div className="grid gap-5">
            {/* Result hero */}
            <section aria-live="polite" className="rounded-2xl border border-white bg-[#000C1C] p-6 text-white shadow-[0_10px_30px_rgba(0,12,28,0.2)]">
              <small className="text-sm text-[#a9bdd1]">Maximum loan for your project</small>
              <div className="my-0.5 text-[clamp(34px,5vw,46px)] font-extrabold tracking-tight tabular-nums">{m0(r.loan)}</div>
              <div className="text-sm text-[#a9bdd1]">
                {v.val
                  ? r.loan > 0 ? `The loan is ${r.ltv.toFixed(0)}% of the completed value.` : 'Enter a construction cost to see your loan.'
                  : 'Enter your project details to see an estimate.'}
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#12304d]">
                <i className="block h-full bg-[#3b88c7] transition-all duration-300" style={{ width: `${Math.min(100, r.ltv)}%` }} />
              </div>
            </section>

            {/* Chart */}
            <section className={card}>
              <h2 className="mb-4 text-[17px] font-bold">Estimated monthly payments</h2>
              <div className="flex h-[170px] items-end gap-4 border-b border-slate-200 px-2">
                {bars.map((b) => (
                  <div key={b.label} className="flex h-full flex-1 flex-col items-center justify-end">
                    <b className="mb-1 text-[13px] tabular-nums">{m0(b.value)}</b>
                    <span className="w-full max-w-[70px] rounded-t-md transition-all duration-300"
                      style={{ height: Math.max(2, (b.value / maxBar) * 120), background: b.color }} />
                  </div>
                ))}
              </div>
              <div className="mt-2.5 flex gap-4 text-center text-xs text-slate-500">
                {bars.map((b) => <div key={b.label} className="flex-1">{b.label}</div>)}
              </div>
            </section>

            {/* On-screen report */}
            {showReport && (
              <section ref={reportRef} className={card}>
                <div className="mb-4 flex flex-wrap gap-2.5 print:hidden">
                  <button onClick={printReport} className="flex-1 min-w-[100px] rounded-lg border border-[#236193] bg-[#236193] py-2.5 text-sm font-semibold text-white hover:bg-[#1c5079]">
                    Print
                  </button>
                  <button onClick={printReport} className="flex-1 min-w-[100px] rounded-lg border border-[#236193] bg-[#236193] py-2.5 text-sm font-semibold text-white hover:bg-[#1c5079]">
                    Save PDF
                  </button>
                  <button onClick={handleEmailReport} className="flex-1 min-w-[100px] rounded-lg border border-[#236193] bg-[#236193] py-2.5 text-sm font-semibold text-white hover:bg-[#1c5079]">
                    Email Report
                  </button>
                  <button onClick={() => setShowReport(false)} className="flex-1 min-w-[100px] rounded-lg border border-[#236193] py-2.5 text-sm font-semibold text-[#236193] hover:bg-[#e8f0f7]">
                    Hide
                  </button>
                </div>
                <ReportBody r={r} v={v} buy={buy} />
              </section>
            )}
          </div>
        </main>
      </div>

      {/* ===== 3. PRINT-ONLY PDF TEMPLATE ===== */}
      {/* Hidden on screen, beautifully formatted for PDF */}
      <div id="print-container" className="hidden print:block print:text-black">
        
        {/* PDF Header: Logo & Title */}
        <div className="flex items-center justify-between border-b-4 border-[#236193] pb-4 mb-8">
          <div className="flex items-center gap-4">
            <Image 
              src="/img/logo.png" 
              alt="Logo" 
              width={120} 
              height={80} 
              className="object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#000C1C] m-0 p-0">Construction Loan Analysis</h1>
              <p className="text-sm text-gray-500 m-0 p-0 mt-1">Prepared for: Potential Borrower</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-[#000C1C] m-0 p-0">Ken J. Schmidt</p>
            <p className="text-xs text-gray-600 m-0 p-0 mt-0.5">Mortgage Loan Officer</p>
            <p className="text-xs text-gray-600 m-0 p-0 mt-0.5">NMLS #697466</p>
          </div>
        </div>

        {/* Main Report Content */}
        <div className="mb-8">
          <ReportBody r={r} v={v} buy={buy} />
        </div>

        {/* PDF Footer Disclaimer */}
        <div className="mt-12 border-t border-gray-300 pt-4 text-[10px] text-gray-500 text-center">
          <p className="mb-1">
            This is an estimate only and does not constitute a loan offer or commitment to lend. 
            Rates, terms, and fees are subject to change. Program restrictions apply.
          </p>
          <p>
            Generated on {new Date().toLocaleDateString('en-US')}. 
            For questions, contact Ken J. Schmidt at 630-479-8545.
          </p>
        </div>

      </div>
      
    </div>
  );
}