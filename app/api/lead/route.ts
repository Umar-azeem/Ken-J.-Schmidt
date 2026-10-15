import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ── SERVER-SIDE VALIDATION (never trust client) ──
    const { firstName, lastName, email, phone, state, consent } = body;

    if (!firstName || !lastName || !email || !phone || !state) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!consent) {
      return NextResponse.json(
        { error: "Consent is required" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }
    const digits = String(phone).replace(/\D/g, "");
    if (digits.length !== 10) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    // ── BUILD AUDITABLE LEAD RECORD (TCPA defense) ──
    const leadRecord = {
      firstName,
      lastName,
      email,
      phone: digits,
      state,
      consent,
      consentTimestamp: body.consentTimestamp || new Date().toISOString(),
      pageUrl: body.pageUrl || "",
      ipAddress:
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown",
      userAgent: req.headers.get("user-agent") || "",
      calculatorData: body.calculatorData || {},
      createdAt: new Date().toISOString(),
    };

    // ── PERSIST LEAD ──
    // Option A: Save to database (Postgres, Mongo, etc.)
    // await db.leads.create({ data: leadRecord });

    // Option B: Forward to CRM via webhook
    // await fetch(process.env.CRM_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(leadRecord),
    // });

    // Option C: Email notification to broker
    // await sendEmail({ to: "ken@example.com", subject: "New Lead", html: ... });

    // ── GENERATE PDF (using pdf-lib, puppeteer, or react-pdf) ──
    // const pdfBuffer = await generateEstimatePDF(leadRecord);

    // ── EMAIL PDF TO USER (if emailCopy is true) ──
    // await sendEmail({
    //   to: email,
    //   subject: "Your Construction Loan Estimate",
    //   attachments: [{ filename: "estimate.pdf", content: pdfBuffer }],
    // });

    console.log("✅ Lead captured:", leadRecord);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Lead submission error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}