// app/loans/comparison/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Calculator, 
  CheckCircle2, 
  ChevronRight, 
  Coffee, 
  Heart, 
  Home, 
  LineChart, 
  MessageCircle, 
  Phone, 
  Shield, 
  Smartphone, 
  Users 
} from "lucide-react";

export default function LoanComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#236193]/10 px-4 py-2 rounded-full mb-6">
            <Home className="w-4 h-4 text-[#236193]" />
            <span className="text-[#236193] font-semibold text-sm">Mortgage Options</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Compare Mortgage <br />
            <span className="text-[#236193]">Loan Options</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Your home. Your story. Your mortgage, crafted with care.
          </p>
        </div>
      </section>

      {/* Your Story Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your home. Your story.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Every home has a story, and your mortgage should support the one you're creating. 
              At ken, we don't just offer loans. We offer guidance, built around your goals, 
              your timeline and your life.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Banking Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              It's not just a home loan, it's personal
            </h2>
            <div className="h-1 w-20 bg-[#236193] rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-[#236193]" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Clarity, not complexity</h3>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#236193]" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">People who listen first</h3>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-[#236193]" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Get the mobile app</h3>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#236193]" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Pre-approval that prepares you</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed vs Adjustable Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Fixed or adjustable?
              </h2>
              <div className="h-1 w-20 bg-[#236193] rounded-full mb-6"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Let's find what fits. A fixed-rate mortgage gives you steady monthly payments and long-term support. 
                An adjustable-rate mortgage (ARM) starts with a lower rate that may change over time. 
                One offers predictability. The other offers flexibility.
              </p>
              <Button className="bg-[#236193] hover:bg-[#1a4a70] text-white">
                Use our calculator <Calculator className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-slate-200 shadow-lg hover:shadow-xl transition">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Fixed Rate Loans</CardTitle>
                  <CardDescription>Predictable payments, long-term stability</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-[#236193]" /> Consistent monthly payments</li>
                    <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-[#236193]" /> Protection from rate increases</li>
                    <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-[#236193]" /> Ideal for long-term homeowners</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-lg hover:shadow-xl transition">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">ARM Loans</CardTitle>
                  <CardDescription>Lower initial rate, flexible terms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-[#236193]" /> Lower initial interest rate</li>
                    <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-[#236193]" /> Rate adjusts periodically</li>
                    <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-[#236193]" /> Good for shorter-term plans</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* First-time Buyer Support */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-[#236193] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">First-time buyer support</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We don't just lend. We look out for you. Buying a home is more than a transaction. 
            It's a turning point. That's why we take the time to understand your goals, your timeline, 
            and your story. Because your mortgage should support your life, not complicate it.
          </p>
        </div>
      </section>

      {/* More Ways We Look Out For You */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">More ways we look out for you</h2>
            <div className="h-1 w-20 bg-[#236193] rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#000D1E] to-[#000A19] text-white border-0 shadow-xl">
              <CardHeader>
                <Coffee className="w-10 h-10 text-[#236193] mb-2" />
                <CardTitle className="text-2xl">Caregiver Banking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Specialized support for those caring for loved ones, with flexible solutions 
                  that adapt to your unique situation.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#000D1E] to-[#000A19] text-white border-0 shadow-xl">
              <CardHeader>
                <LineChart className="w-10 h-10 text-[#236193] mb-2" />
                <CardTitle className="text-2xl">Informed home buying</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Educational resources and tools to help you make confident, informed decisions 
                  throughout your home buying journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Let's Get More From Money */}
      <section className="py-20 bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's get more from money
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
             we believe money is a craft. Mortgages are no exception. We're not just here to help you buy a house. 
            We're here to help you build a life with tools, guidance, and people who care. From your first payment to your last, 
            we're with you. Because when your mortgage fits your life, you can focus on what matters most.
          </p>
          <Button className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8 py-6 text-lg">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Home Financing Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Home financing built around you
            </h2>
            <div className="h-1 w-20 bg-[#236193] rounded-full mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
              Whether you prefer to manage your loan in our mobile app or sit down with a local banker, 
              we're here to support you with tools and people you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Mortgage Tips */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Mortgage tips for thoughtful decision-making
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition border-slate-200">
              <CardHeader>
                <CardTitle>What should my budget be for buying a house?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Learn how to calculate a realistic home buying budget that works with your financial goals.
                </p>
                <Link href="#" className="text-[#236193] font-semibold inline-flex items-center gap-1 hover:gap-2 transition">
                  Read More <ChevronRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition border-slate-200">
              <CardHeader>
                <CardTitle>Documents you'll need when buying a home</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Get organized with our comprehensive checklist of required documents for mortgage approval.
                </p>
                <Link href="#" className="text-[#236193] font-semibold inline-flex items-center gap-1 hover:gap-2 transition">
                  Read More <ChevronRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition border-slate-200">
              <CardHeader>
                <CardTitle>Mortgage education tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Explore our calculators, guides, and resources to become a confident home buyer.
                </p>
                <Link href="#" className="text-[#236193] font-semibold inline-flex items-center gap-1 hover:gap-2 transition">
                  Read More <ChevronRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lending Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Lending support comes in all different shapes and sizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-slate-200 hover:shadow-xl transition">
              <CardHeader>
                <div className="w-16 h-16 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#236193]" />
                </div>
                <CardTitle>Connect with a loan officer</CardTitle>
                <CardDescription>Just getting started?</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Talk one-on-one with a mortgage expert who can answer your questions and guide your next steps.
                </p>
                <Button variant="outline" className="border-[#236193] text-[#236193] hover:bg-[#236193] hover:text-white">
                  Get Connected
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-slate-200 hover:shadow-xl transition">
              <CardHeader>
                <div className="w-16 h-16 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-[#236193]" />
                </div>
                <CardTitle>Let's talk homeownership</CardTitle>
                <CardDescription>Person-to-person</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Big decisions deserve real conversation. Schedule time to discuss your homeownership goals.
                </p>
                <Button variant="outline" className="border-[#236193] text-[#236193] hover:bg-[#236193] hover:text-white">
                  Schedule a Chat
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-slate-200 hover:shadow-xl transition">
              <CardHeader>
                <div className="w-16 h-16 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#236193]" />
                </div>
                <CardTitle>Come see us</CardTitle>
                <CardDescription>The kind of help you can look in the eye</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Visit a local branch to meet with a banker face-to-face for personalized mortgage guidance.
                </p>
                <Button variant="outline" className="border-[#236193] text-[#236193] hover:bg-[#236193] hover:text-white">
                  Find a Branch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500 text-center">
            VA loans require a VA certificate of eligibility. ken is not acting on behalf of, or at the direction of 
            the FHA, VA, the USDA or the Federal Government. All lending products are subject to application and credit approval. 
            Home equity loans and lines also subject to acceptable appraisal and title search.
          </p>
        </div>
      </section>
    </div>
  );
}