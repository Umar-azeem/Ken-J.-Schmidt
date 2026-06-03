// app/insurance/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Home,
  Car,
  Heart,
  Umbrella,
  FileText,
  Landmark,
  Building2,
  Phone,
  Users,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  ChevronRight,
  Truck,
  Bike,
  Ship,
  Briefcase,
  Clock,
  DollarSign,
  Scale,
  Fingerprint,
  FileSearch
} from "lucide-react";

export default function InsuranceSection() {
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
            <Shield className="w-4 h-4 text-[#236193]" />
            <span className="text-[#236193] font-semibold text-sm">Personal Insurance</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Cover Your Most <span className="text-[#236193]">Precious Assets</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            From your daily driver, to your home, and the loved ones in it, we'll tailor your coverage to your needs and budget.
          </p>

          <div className="mt-8">
            <Button className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8 py-6 text-lg">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500 text-center">
            Insurance Products: Are Not a Deposit • Are Not FDIC Insured • Are Not Bank Guaranteed • 
            Not Insured By Any Federal Government Agency • May Lose Value
          </p>
        </div>
      </div>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="home">Home Insurance</TabsTrigger>
              <TabsTrigger value="life">Life Insurance</TabsTrigger>
              <TabsTrigger value="motor">Motor Vehicle</TabsTrigger>
              <TabsTrigger value="title">Title Insurance</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Main Insurance Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="#home" className="group">
                  <Card className="text-center hover:shadow-xl transition-all hover:border-[#236193] h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#236193] transition-colors">
                        <Home className="w-8 h-8 text-[#236193] group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle>Home Insurance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">Protect your home and everything inside it</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="#auto" className="group">
                  <Card className="text-center hover:shadow-xl transition-all hover:border-[#236193] h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#236193] transition-colors">
                        <Car className="w-8 h-8 text-[#236193] group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle>Auto Insurance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">Coverage that moves with you</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="#life" className="group">
                  <Card className="text-center hover:shadow-xl transition-all hover:border-[#236193] h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#236193] transition-colors">
                        <Heart className="w-8 h-8 text-[#236193] group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle>Life Insurance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">Plan with care for the people who matter most</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              {/* Umbrella Insurance Highlight */}
              <Card className="border-[#236193]/20 bg-gradient-to-r from-[#236193]/5 to-transparent">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Umbrella className="w-8 h-8 text-[#236193]" />
                    <CardTitle className="text-2xl text-[#236193]">Umbrella Insurance</CardTitle>
                  </div>
                  <CardDescription className="text-lg">More protection, less liability</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    When it comes to lawsuits and legal disputes, it pays to be prepared. Umbrella insurance extends your 
                    coverage beyond personal insurance policies to protect your biggest assets, with standard policies covering 
                    up to $1,000,000 in claims.
                  </p>
                  <Button variant="outline" className="border-[#236193] text-[#236193] hover:bg-[#236193] hover:text-white">
                    Call (800) 628-7064 for a quote
                  </Button>
                </CardContent>
              </Card>

              {/* Residential Title Insurance */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Residential Title Insurance</CardTitle>
                  <CardDescription>Secure one of your most valuable investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Insure against losses due to legal claims affecting your home. We provide convenient closing and title 
                    clearing with reputable underwriters to protect against title defects such as forgery, fraud, and impersonation.
                  </p>
                </CardContent>
              </Card>

              {/* Educational Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Build your financial know-how</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="#" className="group">
                      <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition group-hover:border-[#236193]">
                        <Home className="w-8 h-8 text-[#236193] mb-3" />
                        <h3 className="font-semibold mb-2">Tips for first-time homebuyers</h3>
                        <p className="text-sm text-slate-500 group-hover:text-[#236193]">Read more →</p>
                      </div>
                    </Link>
                    <Link href="#" className="group">
                      <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition group-hover:border-[#236193]">
                        <Heart className="w-8 h-8 text-[#236193] mb-3" />
                        <h3 className="font-semibold mb-2">Life insurance basics</h3>
                        <p className="text-sm text-slate-500 group-hover:text-[#236193]">Read more →</p>
                      </div>
                    </Link>
                    <Link href="#" className="group">
                      <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition group-hover:border-[#236193]">
                        <Car className="w-8 h-8 text-[#236193] mb-3" />
                        <h3 className="font-semibold mb-2">How much should I spend on a car?</h3>
                        <p className="text-sm text-slate-500 group-hover:text-[#236193]">Read more →</p>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Home Insurance Tab */}
            <TabsContent value="home" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Homeowners Insurance</CardTitle>
                  <CardDescription>Coverage that cares for more than just walls and windows</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Your home holds more than your belongings—it holds your life. Huntington offers homeowners insurance 
                    that helps protect it from the unexpected, so you can feel confident in what you've built and what's ahead.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <Building2 className="w-8 h-8 text-[#236193] mx-auto mb-2" />
                      <h3 className="font-semibold">Home and Condo Insurance</h3>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <Users className="w-8 h-8 text-[#236193] mx-auto mb-2" />
                      <h3 className="font-semibold">Renters Insurance</h3>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <Diamond className="w-8 h-8 text-[#236193] mx-auto mb-2" />
                      <h3 className="font-semibold">Scheduled Personal Property</h3>
                    </div>
                  </div>

                  <div className="bg-[#236193]/5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Get a home insurance quote</h3>
                    <p className="text-slate-700 mb-2">Connect with our personal insurance professionals to compare rates and explore your options.</p>
                    <div className="flex flex-wrap gap-4 items-center mt-4">
                      <Clock className="w-4 h-4 text-[#236193]" />
                      <span className="text-sm">Weekdays 8:00 a.m. to 7:00 p.m. ET</span>
                      <span className="text-sm">Saturday 10:00 a.m. to 2:00 p.m. ET</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Home Insurance FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#236193]">Home and Renter Insurance FAQs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">What does Homeowners Insurance cover?</h4>
                    <p className="text-sm text-slate-600">A homeowner's policy provides coverage for your physical property – both the home and the contents inside. It also provides personal liability for events that policyholders are held liable for, such as accidental injuries to others.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">What does a standard Homeowners Insurance policy NOT cover?</h4>
                    <p className="text-sm text-slate-600">We recommend speaking with a licensed agent regarding your specific needs so that they can tailor a policy that will properly cover your most valued assets.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Is Flood included in my homeowners policy?</h4>
                    <p className="text-sm text-slate-600">Most homeowners policies specifically exclude Flood. A separate policy can be purchased through the National Flood Insurance Program.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Why do I need a Renters policy?</h4>
                    <p className="text-sm text-slate-600">A renters policy provides coverage for your personal belongings, liability protection, and loss of use coverage if you're unable to occupy your rented space due to a covered loss.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Life Insurance Tab */}
            <TabsContent value="life" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Life Insurance</CardTitle>
                  <CardDescription>Protect what matters most</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Life doesn't follow a script. That's why your coverage should be flexible enough to grow with you. 
                    No matter if you're raising kids, building a business, or thinking about retirement, we'll help you 
                    shape a life insurance plan that supports your priorities, now and down the road.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h3 className="font-semibold text-[#236193] mb-2">Long Term Care</h3>
                      <p className="text-sm text-slate-600">Care that lasts, even when you can't give it to yourself</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h3 className="font-semibold text-[#236193] mb-2">Disability Insurance</h3>
                      <p className="text-sm text-slate-600">Income protection for life's unexpected detours</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h3 className="font-semibold text-[#236193] mb-2">Term Life Insurance</h3>
                      <p className="text-sm text-slate-600">Simple, self-guided protection that's always within reach</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <p className="text-center text-slate-700">
                      For a personalized quote, call <strong className="text-[#236193]">(800) 628-7064</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Life Insurance FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#236193]">Life Insurance FAQs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">What is the purpose of life insurance?</h4>
                    <p className="text-sm text-slate-600">Life insurance provides financial protection for your loved ones or business partners in the event of your death, helping cover living expenses, debts, and other financial obligations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">I have life insurance through work. Why would I need more?</h4>
                    <p className="text-sm text-slate-600">Group life insurance from your employer is a helpful start, but it often isn't enough to meet your full financial goals. A personal policy can offer more comprehensive protection and stays with you even if you change jobs.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">How much coverage do I need?</h4>
                    <p className="text-sm text-slate-600">A common starting point is 10 to 15 times your annual income. We'll help you think through what's right for you based on your income, debts, and goals.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Are life insurance payouts taxable?</h4>
                    <p className="text-sm text-slate-600">In most cases, life insurance payouts (death benefits) are not taxable to the beneficiary. A tax advisor can help you understand your specific situation.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Disability Insurance FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#236193]">Disability Insurance FAQs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">What does disability insurance cover?</h4>
                    <p className="text-sm text-slate-600">Individual disability insurance provides income replacement if you're unable to work due to illness or injury, helping you manage living expenses and medical bills.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">How much disability insurance do I need?</h4>
                    <p className="text-sm text-slate-600">A good rule of thumb is to replace 60% to 80% of your after-tax income. Consider your monthly expenses, savings, and any group coverage you already have.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Motor Vehicle Insurance Tab */}
            <TabsContent value="motor" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Auto & Recreational Vehicle Insurance</CardTitle>
                  <CardDescription>Mile by mile, choose vehicle insurance that supports your journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Your vehicle does more than get you from place to place—it lets you live life on your own terms. 
                    With Huntington riding alongside, your policy moves with you, every mile of the way.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <Car className="w-8 h-8 text-[#236193] mx-auto mb-2" />
                      <h3 className="font-semibold">Auto Insurance</h3>
                      <p className="text-xs text-slate-500">For the drives that define your days</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <Bike className="w-8 h-8 text-[#236193] mx-auto mb-2" />
                      <h3 className="font-semibold">Motorcycle & Power Sports</h3>
                      <p className="text-xs text-slate-500">For the rides that recharge you</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <Truck className="w-8 h-8 text-[#236193] mx-auto mb-2" />
                      <h3 className="font-semibold">RV & Motorhome Insurance</h3>
                      <p className="text-xs text-slate-500">For the homes that roll with you</p>
                    </div>
                  </div>

                  <div className="bg-[#236193]/5 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Get a Quote</h3>
                    <p className="text-2xl font-bold text-[#236193] mb-2">(800) 628-7064</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="text-sm">Weekdays 8:00 a.m. to 7:00 p.m. ET</span>
                      <span className="text-sm">Saturday 10:00 a.m. to 2:00 p.m. ET</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-[#236193] mt-0.5" />
                      <p className="text-sm text-slate-600">We don't just insure, we understand</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#236193] mt-0.5" />
                      <p className="text-sm text-slate-600">Vehicle insurance isn't just paperwork</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Auto Insurance FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#236193]">Auto Insurance FAQs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">What does car insurance cover?</h4>
                    <p className="text-sm text-slate-600">Car insurance is financial protection for you after an accident. It can pay for things like medical bills, property damage, and expenses that you could be held financially responsible for after a car crash.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Am I required to have car insurance?</h4>
                    <p className="text-sm text-slate-600">Car insurance is mandatory in almost every state. State laws govern the requirements regarding minimum limits for personal liability and property damage.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Are there discounts available?</h4>
                    <p className="text-sm text-slate-600">Several companies offer discounts that may include Good Driver, Multi-Car, Good Student, Defensive Driver, Telematics, Away from Home, or Multi-Policy.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Title Insurance Tab */}
            <TabsContent value="title" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Residential Title Insurance</CardTitle>
                  <CardDescription>One of your largest investments is your property</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Title insurance provides security should a third party attempt to make a legal claim against your property. 
                    You may never file a claim, but if you need to, Title Insurance will help protect your investment while 
                    saving you from potential legal expenses.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Why title insurance matters</h3>
                      <p className="text-sm text-slate-600">Protects against hidden risks that might not be found during a standard title search.</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Full-service title company</h3>
                      <p className="text-sm text-slate-600">Comprehensive support from order placement through closing.</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-slate-900 mb-3">Title defects include things such as:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {["Forgery", "Fraud in connection with execution of documents", "False impersonation", "Undisclosed or missing heirs", "Wills not properly probated", "Mistaken interpretation of wills and trusts", "Inadequate surveys", "Incorrect legal descriptions"].map((defect) => (
                        <div key={defect} className="flex items-center gap-2 text-sm text-slate-600">
                          <AlertTriangle className="w-3 h-3 text-[#236193]" />
                          <span>{defect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#236193]">Place Your Title Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">Ready to protect your property investment?</p>
                  <Button className="bg-[#236193] hover:bg-[#1a4a70] text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* FAQs Tab */}
            <TabsContent value="faqs" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Frequently Asked Questions</CardTitle>
                  <CardDescription>Find answers to common insurance questions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#236193]" /> Home Insurance
                    </h3>
                    <div className="space-y-3 pl-6">
                      <div>
                        <p className="font-medium text-slate-800">What does Homeowners Insurance cover?</p>
                        <p className="text-sm text-slate-600">A homeowner's policy provides coverage for your physical property – both the home and the contents inside. It also provides personal liability for events that policyholders are held liable for.</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Why do I need a Renters policy?</p>
                        <p className="text-sm text-slate-600">A renters policy provides coverage for your personal belongings, liability protection, and loss of use coverage if you're unable to occupy your rented space due to a covered loss.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#236193]" /> Life Insurance
                    </h3>
                    <div className="space-y-3 pl-6">
                      <div>
                        <p className="font-medium text-slate-800">What is the purpose of life insurance?</p>
                        <p className="text-sm text-slate-600">Life insurance provides financial protection for your loved ones or business partners in the event of your death, helping cover living expenses, debts, and other financial obligations.</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">How much coverage do I need?</p>
                        <p className="text-sm text-slate-600">A common starting point is 10 to 15 times your annual income. We'll help you think through what's right for you based on your income, debts, and goals.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Car className="w-5 h-5 text-[#236193]" /> Auto Insurance
                    </h3>
                    <div className="space-y-3 pl-6">
                      <div>
                        <p className="font-medium text-slate-800">What does car insurance cover?</p>
                        <p className="text-sm text-slate-600">Car insurance can pay for things like medical bills, property damage, and expenses that you could be held financially responsible for after a car crash.</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Are there discounts available?</p>
                        <p className="text-sm text-slate-600">Several companies offer discounts that may include Good Driver, Multi-Car, Good Student, Defensive Driver, and Multi-Policy.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#236193]" /> Umbrella Insurance
                    </h3>
                    <div className="space-y-3 pl-6">
                      <div>
                        <p className="font-medium text-slate-800">What does umbrella insurance cover?</p>
                        <p className="text-sm text-slate-600">Umbrella insurance extends your coverage beyond personal insurance policies to protect your biggest assets, with standard policies covering up to $1,000,000 in claims.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              We're Here for You
            </h2>
            <div className="h-1 w-20 bg-[#236193] rounded-full mx-auto"></div>
            <p className="text-slate-600 mt-4">Online, by phone, or in a branch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Phone className="w-8 h-8 text-[#236193] mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-2xl font-bold text-[#236193]">(800) 628-7064</p>
              <p className="text-sm text-slate-500 mt-2">Weekdays 8am-7pm ET</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Building2 className="w-8 h-8 text-[#236193] mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Find a Branch</h3>
              <p className="text-slate-600">Visit us for in-person support</p>
              <Button variant="outline" className="mt-3 border-[#236193] text-[#236193] hover:bg-[#236193] hover:text-white">
                Branch Locator
              </Button>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <FileText className="w-8 h-8 text-[#236193] mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Get a Quote</h3>
              <p className="text-slate-600">Personalized insurance quotes</p>
              <Button variant="outline" className="mt-3 border-[#236193] text-[#236193] hover:bg-[#236193] hover:text-white">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section className="py-6 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500 text-center">
            Insurance products are offered by Huntington Insurance, Inc., a licensed agency and a wholly-owned subsidiary 
            of Huntington Bancshares Incorporated and underwritten by third party insurance carriers not affiliated with 
            Huntington Insurance, Inc.
          </p>
          <p className="text-xs text-slate-500 text-center mt-2">
            Title Insurance products are offered by HBI Title Services, Inc., a subsidiary of Huntington Bancshares Incorporated 
            and a licensed title agency.
          </p>
        </div>
      </section>
    </div>
  );
}

// Diamond Icon Component (for scheduled personal property)
function Diamond(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
      <path d="M12 2L12 22" />
      <path d="M2 12L22 12" />
      <path d="M12 2L7 7" />
      <path d="M12 2L17 7" />
      <path d="M12 22L7 17" />
      <path d="M12 22L17 17" />
    </svg>
  );
}