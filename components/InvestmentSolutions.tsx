// app/investments/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Lock,
  TrendingUp,
  Heart,
  Briefcase,
  Home,
  Car,
  Umbrella,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  FileText,
  BookOpen,
  ChevronRight,
  LineChart,
  PieChart,
  Wallet,
  Landmark,
  Scale,
  Leaf,
  Clock,
  AlertTriangle,
  GraduationCap,
  Baby,
  TreePalm,
  Goal,
  BarChart3
} from "lucide-react";

export default function InvestmentSolutions() {
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
            <TrendingUp className="w-4 h-4 text-[#236193]" />
            <span className="text-[#236193] font-semibold text-sm">Investment Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Grow and Manage <span className="text-[#236193]">Your Wealth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            From retirement savings, insurance concerns, and tax strategies, we make sure your interests 
            come first so you can lean into your full potential.
          </p>

          <div className="mt-8">
            <Button className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8 py-6 text-lg">
              Contact an Advisor
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500 text-center">
            Investment and Insurance Products: Are Not a Deposit • Are Not FDIC Insured • Are Not Bank Guaranteed • 
            Not Insured By Any Federal Government Agency • May Lose Value
          </p>
        </div>
      </div>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="investments">Investments</TabsTrigger>
              <TabsTrigger value="insurance">Insurance</TabsTrigger>
              <TabsTrigger value="retirement">Retirement</TabsTrigger>
              <TabsTrigger value="estate">Estate & Trust</TabsTrigger>
              <TabsTrigger value="disclosures">Disclosures</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Advisory Satisfaction Promise */}
              <Card className="border-[#236193]/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#236193]/5 to-transparent">
                  <CardTitle className="text-2xl text-[#236193]">Advisory Satisfaction Promise℠</CardTitle>
                  <CardDescription className="text-lg">Advisory services backed by a promise</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-slate-700 mb-6">
                    Transparent, responsive and objective. A Huntington advisor can help put your future in perspective. 
                    And we back it all with a promise—if you're not satisfied with our advisory service, we'll refund your 
                    last 90 days of account fees.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {["Prompt service", "Proactive advice", "Financial planning", "Transparency", "Custom solutions", "Your needs first"].map((item) => (
                      <div key={item} className="text-center p-3 bg-slate-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#236193] mx-auto mb-2" />
                        <span className="text-xs font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Life and Income Planning */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Goal className="w-6 h-6 text-[#236193]" />
                    </div>
                    <CardTitle>Life and Income Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">Comprehensive planning for your financial future</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <LineChart className="w-6 h-6 text-[#236193]" />
                    </div>
                    <CardTitle>Investments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">Diversified portfolios for every goal</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#236193]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-[#236193]" />
                    </div>
                    <CardTitle>Insurance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">Protect what matters most</p>
                  </CardContent>
                </Card>
              </div>

              {/* Educational Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Build your financial know-how</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="#" className="group">
                      <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition group-hover:border-[#236193]">
                        <BookOpen className="w-8 h-8 text-[#236193] mb-3" />
                        <h3 className="font-semibold mb-2">What is a financial advisor and what do they do?</h3>
                        <p className="text-sm text-slate-500 group-hover:text-[#236193]">Read more →</p>
                      </div>
                    </Link>
                    <Link href="#" className="group">
                      <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition group-hover:border-[#236193]">
                        <BarChart3 className="w-8 h-8 text-[#236193] mb-3" />
                        <h3 className="font-semibold mb-2">Basics of investing in four simple ideas</h3>
                        <p className="text-sm text-slate-500 group-hover:text-[#236193]">Read more →</p>
                      </div>
                    </Link>
                    <Link href="#" className="group">
                      <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition group-hover:border-[#236193]">
                        <Wallet className="w-8 h-8 text-[#236193] mb-3" />
                        <h3 className="font-semibold mb-2">What is an IRA?</h3>
                        <p className="text-sm text-slate-500 group-hover:text-[#236193]">Read more →</p>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Investments Tab */}
            <TabsContent value="investments" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Investment Products and Services</CardTitle>
                  <CardDescription>Grow and manage your wealth</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Not everyone is alike, nor are everyone's investment needs the same. By taking time to listen to you 
                    so that we truly understand your aspirations, priorities and needs, we can assist you in developing a 
                    diversified, risk-based portfolio, that reflects your personal investment strategy.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">A full range of investment options</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {["Stocks", "Taxable and tax-free bonds", "Fixed, indexed and variable annuities", "Mutual funds", 
                      "Exchange-traded funds", "Structured notes", "Traditional and Roth IRAs", "529 plans", "Managed investment accounts"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#236193]" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">It all begins with you</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    We all have different perspectives of what we expect from our investments and savings as well as 
                    what kind of risk we are willing to take to pursue potential returns. Life experiences, personal values, 
                    financial goals and resources all come together to determine which investment mix is right for you.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Insurance Tab */}
            <TabsContent value="insurance" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Manage Your Risks</CardTitle>
                  <CardDescription>Preserve What You've Earned for a Better Future</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Holding on to what you've worked so hard to achieve means being smart about protecting it. 
                    For many clients, that means managing risks like property damage, accidents, and becoming ill 
                    or disabled with insurance.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-[#236193]" /> For You and Your Family
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {["Life Insurance", "Disability Insurance", "Long-term Care Insurance", "Insurance for Estate Planning", 
                          "Personal Umbrella Insurance", "Health Insurance", "Vehicle Insurance", "Home, Auto, and Rental Insurance"].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-3 h-3 text-[#236193]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-[#236193]" /> For Your Business
                      </h3>
                      <div className="space-y-2">
                        {["Business Insurance", "Key Person Insurance", "Business Succession Planning"].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-3 h-3 text-[#236193]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Life Insurance Highlight */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Life and term life insurance</CardTitle>
                  <CardDescription>There for whatever comes next</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Help provide you, your family, and even your business a financial safety net. 
                    Choose comprehensive lifelong coverage, or set term of 10 to 30 years.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Retirement Tab */}
            <TabsContent value="retirement" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Retirement Planning</CardTitle>
                  <CardDescription>Plan for the future you deserve</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Retirement Solutions</h3>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#236193]" />Traditional and Roth IRAs</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#236193]" />401(k) Rollovers</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#236193]" />Annuities for guaranteed income</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#236193]" />Required Minimum Distribution (RMD) planning</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h3 className="font-semibold text-slate-900 mb-2">Heading towards retirement?</h3>
                      <p className="text-sm text-slate-600">
                        Innovative ways to help keep money coming in during your retirement years.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Estate & Trust Tab */}
            <TabsContent value="estate" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Estate Planning and Trust Services</CardTitle>
                  <CardDescription>Plan with care, and protect what matters</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    For more than 100 years, Huntington Private Bank® has helped individuals shape their legacy with 
                    thoughtful trust and estate planning. Our specialists bring the experience and care to help you 
                    manage wealth transfer now and for generations to come.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4">
                      <Scale className="w-8 h-8 text-[#236193] mx-auto mb-2" />
                      <h3 className="font-semibold">Wills & Trusts</h3>
                    </div>
                    <div className="text-center p-4">
                      <Leaf className="w-8 h-8 text-[#236193] mx-auto mb-2" />
                      <h3 className="font-semibold">Legacy Planning</h3>
                    </div>
                    <div className="text-center p-4">
                      <Users className="w-8 h-8 text-[#236193] mx-auto mb-2" />
                      <h3 className="font-semibold">Trustee Services</h3>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">What is estate planning?</h3>
                    <p className="text-slate-700">
                      Estate planning is the process of organizing your financial life so your assets are protected and 
                      passed on according to your wishes. It brings together tools like wills, trusts, and tax-efficient 
                      strategies to help care for the people and causes that matter most to you.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Learn more about estate planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link href="#" className="block p-4 border border-slate-200 rounded-lg hover:shadow-md transition">
                      <h3 className="font-semibold text-[#236193]">Preparing a successor</h3>
                      <p className="text-sm text-slate-600 mt-1">Build on your legacy</p>
                    </Link>
                    <Link href="#" className="block p-4 border border-slate-200 rounded-lg hover:shadow-md transition">
                      <h3 className="font-semibold text-[#236193]">Creating an estate plan</h3>
                      <p className="text-sm text-slate-600 mt-1">For your wealth</p>
                    </Link>
                    <Link href="#" className="block p-4 border border-slate-200 rounded-lg hover:shadow-md transition">
                      <h3 className="font-semibold text-[#236193]">Understanding trustee responsibilities</h3>
                      <p className="text-sm text-slate-600 mt-1">Fiduciary duties explained</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Disclosures Tab */}
            <TabsContent value="disclosures" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">HFA Regulatory Disclosures</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Important Information</h3>
                    <p className="text-slate-700 text-sm mb-4">
                      Huntington Financial Advisors® (HFA) strives to look out for our clients. We believe it's important 
                      for you to have the information you need to make decisions about how to save and invest for the future.
                    </p>
                    <div className="bg-slate-100 p-4 rounded-lg">
                      <p className="text-sm text-slate-600">
                        <strong>Investment, Insurance and Non-deposit Trust products are:</strong><br />
                        NOT A DEPOSIT • NOT FDIC INSURED • NOT GUARANTEED BY THE BANK • 
                        NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY • MAY LOSE VALUE
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Huntington Financial Services Structure</h3>
                    <div className="space-y-3 text-sm text-slate-700">
                      <p>Huntington offers a full range of wealth management and financial services through dedicated teams:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Banking solutions are provided by The Huntington National Bank</li>
                        <li>Trust and investment management services are provided by The Huntington National Bank</li>
                        <li>Investment advisory solutions, securities, and insurance products are provided by Huntington Financial Advisors®</li>
                        <li>Certain insurance products are offered by Huntington Insurance, Inc.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Contact Information</h3>
                    <p className="text-slate-700 text-sm">
                      Client Services Team: <strong>(800) 322-4600</strong><br />
                      Monday through Friday, 8:00 a.m. to 5:00 p.m. ET
                    </p>
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
              Ready to Talk to an Advisor?
            </h2>
            <div className="h-1 w-20 bg-[#236193] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Phone className="w-8 h-8 text-[#236193] mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Call the National Advice Center</h3>
              <p className="text-2xl font-bold text-[#236193]">(877) 587-8049</p>
              <p className="text-sm text-slate-500 mt-2">Monday-Friday 8am-5pm ET</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Building2 className="w-8 h-8 text-[#236193] mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Visit a Branch</h3>
              <p className="text-slate-600">Find your nearest Huntington location</p>
              <Button variant="outline" className="mt-3 border-[#236193] text-[#236193] hover:bg-[#236193] hover:text-white">
                Find a Branch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Disclosures */}
      <section className="py-6 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500 text-center">
            Huntington Financial Advisors® is a federally registered service mark and a trade name under which 
            The Huntington Investment Company does business as a registered broker-dealer, member FINRA and SIPC, 
            a registered investment advisor with the U.S. Securities and Exchange Commission (SEC), and a licensed 
            insurance agency. The Huntington National Bank, The Huntington Investment Company, and Huntington Insurance, Inc., 
            are wholly-owned subsidiaries of Huntington Bancshares Incorporated.
          </p>
        </div>
      </section>
    </div>
  );
}