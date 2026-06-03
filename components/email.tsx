"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Email() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    // ── 1. SEND EMAIL via mailto ──
    const emailSubject = encodeURIComponent(
      `Mortgage Inquiry from ${firstName} ${lastName}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:ken.j.schmidt@huntington.com?subject=${emailSubject}&body=${emailBody}`,
      "_blank"
    );

    // ── 2. SEND WHATSAPP MESSAGE ──
    const whatsappNumber = "16304798545"; // E.164 format (no + or spaces)
    const whatsappText = encodeURIComponent(
      `Hi Ken! I'm ${firstName} ${lastName}.\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage: ${message}`
    );
    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappText}`,
        "_blank"
      );
    }, 500); // slight delay so both windows open cleanly

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-slate-200 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-600 mb-2">Your email client and WhatsApp have been opened.</p>
        <p className="text-slate-500 text-sm mb-6">
          If they didn't open, please contact Ken directly at{" "}
          <a href="mailto:ken.j.schmidt@huntington.com" className="text-[#236193] underline">
            ken.j.schmidt@huntington.com
          </a>{" "}
          or WhatsApp{" "}
          <a href="https://wa.me/16304798545" target="_blank" className="text-[#236193] underline">
            (630) 479-8545
          </a>
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          className="bg-[#236193] hover:bg-[#1a4a70] text-white"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>

      {/* Contact badges */}
      <div className="flex flex-wrap gap-3 mb-6">
        <a
          href="mailto:ken.j.schmidt@huntington.com"
          className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          ken.j.schmidt@huntington.com
        </a>
        <a
          href="https://wa.me/16304798545"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-white bg-[#25D366] hover:bg-[#1ebe5d] px-3 py-1.5 rounded-full transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          (630) 479-8545
        </a>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              First Name *
            </label>
            <input
              name="firstName"
              type="text"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Last Name *
            </label>
            <input
              name="lastName"
              type="text"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Email Address *
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
            placeholder="(312) 555-1234"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193] resize-none"
            placeholder="Tell me about your mortgage needs..."
          ></textarea>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#236193] hover:bg-[#1a4a70] text-white font-semibold py-3 disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        <p className="text-xs text-center text-slate-400">
          Submitting will open your email client and WhatsApp with your message pre-filled.
        </p>
      </form>
    </div>
  );
}