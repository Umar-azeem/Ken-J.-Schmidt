'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navigation } from '@/components/navigation';

export default function KenSchmidtProfile() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="space-y-2">
                <p className="text-[#236193] font-semibold">Welcome to Your Trusted Advisor</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Ken J. Schmidt
                </h1>
                <p className="text-xl text-slate-300">
                  Premier Mortgage Lending Professional
                </p>
              </div>
              
              <div className="space-y-4 text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#236193] flex-shrink-0 mt-1" />
                  <span>Chicago, Illinois | NMLS ID: #697466</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236193] flex-shrink-0 mt-1" />
                  <span>25+ Years of Mortgage Lending Experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236193] flex-shrink-0 mt-1" />
                  <span>Over $750 Million in Funded Loans</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8">
                  Apply for a Loan
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/hero-image.png"
                  alt="Ken J Schmidt"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#236193] rounded-lg opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/headshot.png"
                  alt="Ken J Schmidt Headshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  About Ken
                </h2>
                <div className="h-1 w-16 bg-[#236193] rounded-full"></div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                With over 25 years of experience in mortgage lending, Ken Schmidt has built a reputation as a dedicated and knowledgeable professional. He understands that mortgage decisions are deeply personal and takes the time to listen to each client's unique situation.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Ken has originated and funded over $750 million in mortgages throughout his career. His expertise spans residential and commercial lending, with a particular focus on complex financing situations that challenge other lenders.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236193] flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Personalized loan structuring</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236193] flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Smooth and efficient loan process</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236193] flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Experienced processing & underwriting team</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236193] flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Commitment to timely closings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-slate-600">
              Specialized lending solutions for every borrower
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Construction Loans */}
            <Card className="p-8 hover:shadow-lg transition border-slate-200">
              <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-xl font-bold">🏗</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Construction Loans
              </h3>
              <p className="text-slate-600 mb-4">
                One-time close construction to permanent loans with a wide array of financing products.
              </p>
              <a href="#contact" className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </Card>

            {/* Doctors Only Program */}
            <Card className="p-8 hover:shadow-lg transition border-slate-200">
              <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-xl font-bold">👨‍⚕️</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Doctors Only Program
              </h3>
              <p className="text-slate-600 mb-4">
                Specialized financing options designed specifically for physicians with favorable terms.
              </p>
              <a href="#contact" className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </Card>

            {/* Jumbo Financing */}
            <Card className="p-8 hover:shadow-lg transition border-slate-200">
              <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-xl font-bold">💰</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Jumbo Financing
              </h3>
              <p className="text-slate-600 mb-4">
                High-value mortgage solutions with competitive rates and flexible terms for jumbo loans.
              </p>
              <a href="#contact" className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </Card>

            {/* Self-Employed Borrowers */}
            <Card className="p-8 hover:shadow-lg transition border-slate-200">
              <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-xl font-bold">🚀</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Self-Employed Borrowers
              </h3>
              <p className="text-slate-600 mb-4">
                Alternative documentation options for self-employed professionals and entrepreneurs.
              </p>
              <a href="#contact" className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </Card>

            {/* FHA Loans */}
            <Card className="p-8 hover:shadow-lg transition border-slate-200">
              <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-xl font-bold">🏠</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                FHA & VA Loans
              </h3>
              <p className="text-slate-600 mb-4">
                Expert guidance on government-backed loans with specialized knowledge and support.
              </p>
              <a href="#contact" className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </Card>

            {/* Refinancing */}
            <Card className="p-8 hover:shadow-lg transition border-slate-200">
              <div className="w-12 h-12 bg-[#236193] rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-xl font-bold">📈</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Refinancing Solutions
              </h3>
              <p className="text-slate-600 mb-4">
                Explore refinancing options to improve your mortgage terms or access home equity.
              </p>
              <a href="#contact" className="text-[#236193] font-semibold flex items-center gap-2 hover:gap-3 transition">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#236193] to-[#1a4a70] rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Whether you're a first-time buyer, refinancing, or navigating a complex lending situation, Ken is ready to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#236193] hover:bg-blue-50 font-semibold px-8 py-6">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600">
              Reach out to discuss your mortgage needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <Card className="p-8 text-center border-slate-200">
              <div className="w-16 h-16 bg-[#236193] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
              <a href="mailto:ken@example.com" className="text-[#236193] hover:underline text-lg">
                ken.schmidt@lender.com
              </a>
            </Card>

            {/* Phone */}
            <Card className="p-8 text-center border-slate-200">
              <div className="w-16 h-16 bg-[#236193] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
              <a href="tel:+13125551234" className="text-[#236193] hover:underline text-lg">
                (312) 555-1234
              </a>
            </Card>

            {/* Location */}
            <Card className="p-8 text-center border-slate-200">
              <div className="w-16 h-16 bg-[#236193] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">
                Chicago, Illinois<br />
                Service Area: Illinois
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    First Name *
                  </label>
                  <input
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
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193] resize-none"
                  placeholder="Tell me about your mortgage needs..."
                ></textarea>
              </div>

              <Button className="w-full bg-[#236193] hover:bg-[#1a4a70] text-white font-semibold py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#236193] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#about" className="hover:text-white transition">About Ken</a></li>
                <li><a href="#specialties" className="hover:text-white transition">Specialties</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Loan Types</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition">Construction Loans</a></li>
                <li><a href="#" className="hover:text-white transition">Jumbo Financing</a></li>
                <li><a href="#" className="hover:text-white transition">Refinancing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition">Mortgage Calculator</a></li>
                <li><a href="#" className="hover:text-white transition">Learning Center</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-blue-100">
                <li>Ken J Schmidt</li>
                <li>Chicago, Illinois</li>
                <li>NMLS ID: #697466</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
            <p className="text-sm mb-2">
              © 2024 Ken J Schmidt - Mortgage Broker. All rights reserved.
            </p>
            <p className="text-xs">
              This is not an offer to enter into an agreement. Not all customers will qualify. Information, rates and programs are subject to change without notice. All products are subject to credit and property approval. Other restrictions and limitations may apply. © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
