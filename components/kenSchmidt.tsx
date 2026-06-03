
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Mail, 
  Phone,  
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Calculator,
  Award,
  Users,
  Home,
  Building2
} from "lucide-react";

export default function  kenSchmidt() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section with Profile */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#236193]/10 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-[#236193]" />
                <span className="text-[#236193] font-semibold text-sm">Premier Mortgage Professional</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ken J. Schmidt
              </h1>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-[#236193]" />
                  <span>Coverage Area: Illinois</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="font-semibold">NMLS ID:</span>
                  <span>#697466</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8 py-6 text-lg">
                  Apply Now
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/img/ken.png"
                  alt="Ken J. Schmidt"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#236193] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#236193] rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#236193] transition-colors">
                <Mail className="w-6 h-6 text-[#236193] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2">Email</h3>
              <a href="mailto:ken.j.schmidt@huntington.com" className="text-slate-800 hover:text-[#236193] transition break-all">
                ken.j.schmidt@huntington.com
              </a>
            </div>

            {/* Mobile */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#236193] transition-colors">
                <Phone className="w-6 h-6 text-[#236193] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2">Mobile</h3>
              <a href="tel:+16304798545" className="text-slate-800 hover:text-[#236193] transition text-lg font-semibold">
                (630) 479-8545
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#236193] transition-colors">
                <Phone className="w-6 h-6 text-[#236193] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2">Phone</h3>
              <a href="tel:+13317027422" className="text-slate-800 hover:text-[#236193] transition text-lg font-semibold">
                (331) 702-7422
              </a>
            </div>

            {/* Fax */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#236193] transition-colors">
                {/* <Fax className="w-6 h-6 text-[#236193] group-hover:text-white transition-colors" /> */}
              </div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2">Fax</h3>
              <p className="text-slate-800 text-lg font-semibold">(877) 230-9441</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main About Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
                <div className="h-1 w-20 bg-[#236193] rounded-full"></div>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Premier mortgage lending professional with <span className="font-semibold text-[#236193]">25+ years of experience</span> and over 
                <span className="font-semibold text-[#236193]"> three quarters of a billion dollars in funded loans</span>. I understand that 
                listening to short term and long term goals is essential in structuring a loan that will help 
                meet your individual mortgage needs.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether new to the process or an old pro, as a knowledgeable professional, I'm here to work 
                with you towards a successful and timely loan closing. My team works with experienced 
                processors, underwriters and closers to make the financing process a smooth and pleasurable 
                experience. Welcome to Huntington, we're here to help!
              </p>

              {/* Specialties */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Specialties</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Building2 className="w-5 h-5 text-[#236193]" />
                    <span className="text-slate-700">Construction Loans (One-time close)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Users className="w-5 h-5 text-[#236193]" />
                    <span className="text-slate-700">Doctors Only Program</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Home className="w-5 h-5 text-[#236193]" />
                    <span className="text-slate-700">Jumbo Financing</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Award className="w-5 h-5 text-[#236193]" />
                    <span className="text-slate-700">Self Employed Borrowers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#000D1E] to-[#000A19] rounded-2xl p-8 text-white">
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-[#236193]">25+</div>
                    <p className="text-slate-300 mt-2">Years of Experience</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#236193">$750M+</div>
                    <p className="text-slate-300 mt-2">Funded Loans</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#236193]">1000+</div>
                    <p className="text-slate-300 mt-2">Happy Clients</p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Get Started?</h3>
                <p className="text-slate-600 mb-6">Let's discuss your mortgage needs</p>
                <Button className="bg-[#236193] hover:bg-[#1a4a70] text-white w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Related Links</h2>
            <div className="h-1 w-20 bg-[#236193] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mortgage Education Card */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-[#236193]/10 rounded-xl group-hover:bg-[#236193] transition-colors">
                  <BookOpen className="w-8 h-8 text-[#236193] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Mortgage Education and Tools</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Confused by the world of mortgages and home loans? Huntington can help. 
                    Get smart with our mortgage education and tools.
                  </p>
                  <Link 
                    href="/resources" 
                    className="inline-flex items-center gap-2 text-[#236193] font-semibold hover:gap-3 transition-all"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Home Buying Calculators Card */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-[#236193]/10 rounded-xl group-hover:bg-[#236193] transition-colors">
                  <Calculator className="w-8 h-8 text-[#236193] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Home Buying Calculators</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Check out Huntington's home calculators for help determining the financial 
                    decisions that best meet your needs.
                  </p>
                  <Link 
                    href="/calculators" 
                    className="inline-flex items-center gap-2 text-[#236193] font-semibold hover:gap-3 transition-all"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#000D1E] to-[#000A19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Start Your Home Journey Today
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Get in touch with Ken to discuss your mortgage options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8 py-6 text-lg">
              Apply Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Contact Ken
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}