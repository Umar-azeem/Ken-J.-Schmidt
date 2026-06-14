// app/contact/page.tsx
"use client";

import React, { useRef } from 'react';
import Email from '@/components/email';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  HelpCircle, 
  CreditCard, 
  Home, 
  Car, 
  FileText, 
  Calendar,
  ChevronRight,
  Building2,
  Clock,
  Globe,
  FileQuestion,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

export default function ContactPage() {
  const emailSectionRef = useRef<HTMLDivElement>(null);

  const scrollToEmailSection = () => {
    emailSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#236193]/10 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-[#236193]" />
            <span className="text-[#236193] font-semibold text-sm">Get in Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Whether your money questions are large or small, you deserve answers that can help you make informed decisions. 
            We're always ready to help.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button 
              onClick={scrollToEmailSection}
              className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8 py-6 text-lg cursor-pointer"
            >
              Contact Us
            </Button>
            
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#236193] transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#236193] font-medium">Customer Service</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - FAQ Section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <div className="h-1 w-20 bg-[#236193] rounded-full"></div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-6">
              {/* Branch & Notary Services */}
              <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-[#000D1E] to-[#000A19] px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">Branch & Notary Services</h3>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="p-6 hover:bg-slate-50 transition group">
                    <div className="flex items-start justify-between cursor-pointer">
                      <div className="flex gap-3">
                        <FileText className="w-5 h-5 text-[#236193] mt-1 flex-shrink-0" />
                        <p className="text-slate-700 font-medium">Where can I find notary services ken?</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#236193] transition" />
                    </div>
                  </div>
                  <div className="p-6 hover:bg-slate-50 transition group">
                    <div className="flex items-start justify-between cursor-pointer">
                      <div className="flex gap-3">
                        <FileQuestion className="w-5 h-5 text-[#236193] mt-1 flex-shrink-0" />
                        <p className="text-slate-700 font-medium">Where can I find tax information and forms?</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#236193] transition" />
                    </div>
                  </div>
                  <div className="p-6 hover:bg-slate-50 transition group">
                    <div className="flex items-start justify-between cursor-pointer">
                      <div className="flex gap-3">
                        <MapPin className="w-5 h-5 text-[#236193] mt-1 flex-shrink-0" />
                        <p className="text-slate-700 font-medium">Where can I find branch information and hours?</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#236193] transition" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Loans & Payments */}
              <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-[#000D1E] to-[#000A19] px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">Loans & Payments</h3>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="p-6 hover:bg-slate-50 transition group">
                    <div className="flex items-start justify-between cursor-pointer">
                      <div className="flex gap-3">
                        <Home className="w-5 h-5 text-[#236193] mt-1 flex-shrink-0" />
                        <p className="text-slate-700 font-medium">Where can I find information on loans?</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#236193] transition" />
                    </div>
                  </div>
                  <div className="p-6 hover:bg-slate-50 transition group">
                    <div className="flex items-start justify-between cursor-pointer">
                      <div className="flex gap-3">
                        <CreditCard className="w-5 h-5 text-[#236193] mt-1 flex-shrink-0" />
                        <p className="text-slate-700 font-medium">
                          How do I make a payment to my ken j. Auto Loan, Credit Card, Mortgage, 
                          Personal Credit Line or Personal Loan?
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#236193] transition" />
                    </div>
                  </div>
                  <div className="p-6 hover:bg-slate-50 transition group">
                    <div className="flex items-start justify-between cursor-pointer">
                      <div className="flex gap-3">
                        <Car className="w-5 h-5 text-[#236193] mt-1 flex-shrink-0" />
                        <p className="text-slate-700 font-medium">How do I make an auto loan payment?</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#236193] transition" />
                    </div>
                  </div>
                  <div className="p-6 hover:bg-slate-50 transition group">
                    <div className="flex items-start justify-between cursor-pointer">
                      <div className="flex gap-3">
                        <CreditCard className="w-5 h-5 text-[#236193] mt-1 flex-shrink-0" />
                        <p className="text-slate-700 font-medium">How do I make a bill payment?</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#236193] transition" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Opening */}
              <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-[#000D1E] to-[#000A19] px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">Account Management</h3>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="p-6 hover:bg-slate-50 transition group">
                    <div className="flex items-start justify-between cursor-pointer">
                      <div className="flex gap-3">
                        <Building2 className="w-5 h-5 text-[#236193] mt-1 flex-shrink-0" />
                        <p className="text-slate-700 font-medium">How do I open an account?</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#236193] transition" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Help Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Featured Help Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-[#236193]" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">CHECKING BASICS</h4>
                  <p className="text-slate-600 text-sm mb-3">How to activate a debit card</p>
                  <p className="text-slate-500 text-sm mb-4">
                    You just received your new ken j debit card but before you can start using it, 
                    you need to activate it. Here's how.
                  </p>
                  <Link href="#" className="text-[#236193] font-semibold text-sm hover:underline">
                    Read More →
                  </Link>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-[#236193]" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">CHECKING BASICS</h4>
                  <p className="text-slate-600 text-sm mb-3">How to check your routing number</p>
                  <p className="text-slate-500 text-sm mb-4">
                    Have you ever wondered how and where you can find your routing number? 
                    We detail four ways to find your routing number.
                  </p>
                  <Link href="#" className="text-[#236193] font-semibold text-sm hover:underline">
                    Read More →
                  </Link>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-[#236193]" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">CHECKING BASICS</h4>
                  <p className="text-slate-600 text-sm mb-3">How to order checks and checkbooks online</p>
                  <p className="text-slate-500 text-sm mb-4">
                    Need to order checks? It's easy. You can do it online, by phone, or at your local 
                    branch—whatever works best for you.
                  </p>
                  <Link href="#" className="text-[#236193] font-semibold text-sm hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Options */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-[#000D1E] to-[#000A19] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Options</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#236193]/20 rounded-lg">
                    <Phone className="w-6 h-6 text-[#236193]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Speak with us</h4>
                    <p className="text-slate-300 text-sm mb-2">We're here to help</p>
                    <a href="tel:+13317027422" className="text-[#236193] font-bold text-lg">(331) 702-7422</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#236193]/20 rounded-lg">
                    <Building2 className="w-6 h-6 text-[#236193]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Find a branch</h4>
                    <p className="text-slate-300 text-sm mb-2">Find your nearest ken j branch</p>
                    <Button variant="outline" className="border-[#236193] text-[#236193] hover:bg-[#236193] hover:text-white mt-2">
                      Branch Locator
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#236193]/20 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-[#236193]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Automated assistance</h4>
                    <p className="text-slate-300 text-sm">Quick answers when you need them</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Help</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Clock className="w-5 h-5 text-[#236193]" />
                  <span className="text-slate-700">24/7 Customer Support</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Globe className="w-5 h-5 text-[#236193]" />
                  <span className="text-slate-700">Online Banking Available</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#236193]" />
                  <span className="text-slate-700">Secure Messaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Contact Form Section with Ref */}
      <div ref={emailSectionRef}>
        <Email />
      </div>
    </div>
  );
}