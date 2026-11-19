import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Mail,
  Phone,
  Award,
  Users,
  Home,
  Building2,
} from "lucide-react";

export default function KenSchmidt() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      
      {/* Hero Section with Profile */}
      <section className="relative mx-2 mt-2 rounded-2xl overflow-hidden bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E] px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#236193] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#236193] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            
            {/* Left Column - Profile Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#236193]/20 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-[#5bb8f5]" />
                <span className="text-[#5bb8f5] font-semibold text-xs md:text-sm tracking-wide uppercase">
                  Senior Mortgage Loan Officer
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Ken J. Schmidt
              </h1>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start sm:items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-[#5bb8f5] shrink-0 mt-0.5 sm:mt-0" />
                  <span>Coverage Area: Illinois &amp; additional eligible states</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-300">
                  <span className="font-semibold text-white">NMLS ID:</span>
                  <span>#697466</span>
                </div>
                
                <div className="flex items-start sm:items-center gap-3 text-slate-300">
                  <span className="font-semibold text-white shrink-0">Address:</span>
                  <span>3020 S. Route 59, Naperville, IL 60564</span>
                </div>
              </div>

              <div className="pt-2">
                <Link target="_blank" href="/contact" className="inline-block w-full sm:w-auto">
                  <p className="bg-[#236193] hover:bg-[#1a4a70] text-white text-center px-8 py-3.5 text-lg font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg">
                    Contact Us
                  </p>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/kenschmidtchicago/"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#236193] transition-colors text-white"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <span className="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                </Link>

                <Link 
                  target="_blank" 
                  href="https://www.instagram.com/huntingtonbank/?hl=en" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#236193] transition-colors text-white"
                  aria-label="Instagram"
                >
                  <span className="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </Link>

                <Link 
                  target="_blank" 
                  href="https://www.youtube.com/user/HuntingtonBank" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#236193] transition-colors text-white"
                  aria-label="YouTube"
                >
                  <span className="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </span>
                </Link>

                <Link 
                  target="_blank" 
                  href="https://www.zillow.com/lender-profile/ken%20schmidt12/" 
                  className="w-10 h-10  flex items-center justify-center  transition-colors"
                  aria-label="Zillow"
                >
                  <Image src="/z-logo.svg" alt="Zillow" width={20} height={20} priority className="h-4 m-2 w-auto object-contain" />
                </Link>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image 
                  src="/img/kens.png" 
                  alt="Ken Schmidt" 
                  fill 
                  className="object-cover object-top" 
                  priority 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#236193] rounded-full opacity-20 blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#236193] rounded-full opacity-10 blur-xl -z-10"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#236193] transition-colors">
                <Mail className="w-6 h-6 text-[#236193] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Email</h3>
              <a href="mailto:ken.j.schmidt@huntington.com" className="text-slate-800 hover:text-[#236193] transition break-all font-medium">
                ken.j.schmidt@huntington.com
              </a>
            </div>

            {/* Mobile */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#236193] transition-colors">
                <Phone className="w-6 h-6 text-[#236193] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Mobile</h3>
              <a href="tel:+16304798545" className="text-slate-800 hover:text-[#236193] transition text-lg font-semibold">
                (630) 479-8545
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            
            {/* Main About Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  About Ken Schmidt
                </h2>
                <div className="h-1 w-20 bg-[#236193] rounded-full"></div>
                <p className="mt-4 text-xl font-semibold text-[#236193]">
                  Experience. Expertise. Personalized Mortgage Solutions.
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                With{" "}
                <span className="font-semibold text-[#236193]">
                  more than 25 years of mortgage lending experience
                </span>{" "}
                , Ken Schmidt has built his career helping individuals and families navigate the home financing process with confidence.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Based in <span className="font-semibold">Naperville, Illinois</span>, Ken specializes in{" "}
                <span className="font-semibold">one-time-close construction-to-permanent financing, physician mortgage loans, jumbo mortgages, and traditional home financing solutions</span>.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                His expertise in construction financing helps borrowers understand the unique requirements of building a custom home, including land acquisition, builder approval, construction budgets, financing options, and the transition to permanent financing.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Ken also works extensively with medical professionals, including physicians, dentists, residents, and fellows, helping them understand specialized mortgage programs designed around their unique financial circumstances, student loan obligations, and career transitions.
              </p>

              {/* Proven Record */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  A Proven Record of Excellence
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                  Throughout his career, Ken has earned recognition as a leading mortgage professional, including multiple years as a{" "}
                  <span className="font-semibold text-[#236193]">top-producing loan officer in the Chicago North Region</span>{" "}
                  and recognition by{" "}
                  <span className="font-semibold text-[#236193]">Scotsman Guide as a Top Originator</span>.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  His success is built on strong relationships with clients, builders, real estate professionals, and medical professionals, along with a commitment to providing responsive communication and personalized guidance throughout the mortgage process.
                </p>
              </div>

              {/* Your Mortgage Resource */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Your Mortgage Resource
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                  Whether you're building a custom home, purchasing your first home as a medical professional, relocating for a new position, or exploring jumbo financing, Ken's goal is to help you understand your options and make informed mortgage decisions.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                  <span className="font-semibold">Serving borrowers throughout Illinois and additional eligible states.</span>
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Contact Ken Schmidt to discuss your home financing goals and explore available mortgage options.
                </p>
                <p className="text-lg font-bold text-[#236193] mt-4">
                  Ken Schmidt | NMLS #697466
                </p>
              </div>

              {/* Specialties */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Specialties
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                    <Building2 className="w-5 h-5 text-[#236193] shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">Construction Loans (One-time close)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                    <Users className="w-5 h-5 text-[#236193] shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">Physician Mortgage Loans</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                    <Home className="w-5 h-5 text-[#236193] shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">Jumbo Financing</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                    <Award className="w-5 h-5 text-[#236193] shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">Traditional Home Financing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-6 lg:mt-0 mt-8">
              <div className="bg-gradient-to-br from-[#000D1E] to-[#000A19] rounded-2xl p-8 text-white shadow-xl sticky top-24">
                <div className="text-center space-y-8">
                  <div>
                    <div className="text-4xl font-bold text-[#5bb8f5]">25+</div>
                    <p className="text-slate-300 mt-2 text-sm uppercase tracking-wide">Years of Experience</p>
                  </div>
                  <div className="w-12 h-px bg-white/20 mx-auto"></div>
                  {/* <div>
                    <div className="text-4xl font-bold text-[#5bb8f5]">$1B+</div>
                    <p className="text-slate-300 mt-2 text-sm uppercase tracking-wide">Funded Mortgage Loans</p>
                  </div> */}
                  {/* <div className="w-12 h-px bg-white/20 mx-auto"></div> */}
                  <div>
                    <div className="text-2xl font-bold text-[#5bb8f5]">#697466</div>
                    <p className="text-slate-300 mt-2 text-sm uppercase tracking-wide">NMLS ID</p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-slate-600 mb-6 text-sm">
                  Let's discuss your mortgage needs
                </p>
                <Button asChild className="bg-[#236193] hover:bg-[#1a4a70] text-white w-full py-6 rounded-xl text-lg">
                  <Link href="/contact">
                    Apply Now
                  </Link>
                </Button>
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
            <Link target="_blank" href="/contact" className="w-full sm:w-auto">
              <p className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8 py-3.5 text-lg font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}