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
  Building2,
} from "lucide-react";

export default function kenSchmidt() {
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
                <span className="text-[#236193] font-semibold text-sm">
                  Premier Mortgage Professional
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ken J. Schmidt
              </h1>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-[#236193]" />
                  <span>Coverage Area: Illinois</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300"></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <Link
                    target="_blank"
                    href="https://www.zillow.com/lender-profile/diana%20keenan1/"
                    className="underline"
                  >
                    {" "}
                    <span></span>
                  </Link>
                </div>
               
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="font-semibold">
                    Assistant VP, Senior Mortgage :{" "}
                  </span>
                  <span>NMLS# </span>
                </div>
                 <div className="flex items-center gap-3 text-slate-300">
                  <span className="font-semibold">Loan officer :</span>
                  <span>#697466</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="font-semibold">Address</span>
                  <span>3020 S. Route 59 :</span>
                  <span>Naperville, IL 60564</span>
                </div>
              </div>

              <div className="flex items-start flex-wrap gap-4 pt-4">
              <Link
                target="_blank" href="/contact">
                  <p className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8 py-3 text-lg rounded-2xl">
                    Contact us
                  </p>
                </Link>
              </div>
              <div className="mt-4 flex  gap-4">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/kenschmidtchicago/"
                className="flex items-center gap-2 text-white"
                rel="noopener noreferrer"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </Link>
             
              <Link
                target="_blank"
                href="https://www.facebook.com/HuntingtonBank"
                className="flex items-center text-white gap-2"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/huntingtonbank/?hl=en"
                className="flex items-center text-white gap-2"
              >
                {" "}
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </Link>
              <Link  target="_blank"
                href="https://www.youtube.com/user/HuntingtonBank"
                className="flex items-center  text-white gap-2">
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </span>
              </Link>
              <Link  target="_blank"
                href="https://twitter.com/Huntington_Bank"
                className="flex items-center text-white gap-2">
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </Link>
               <Link
                target="_blank"
                href="https://www.zillow.com/lender-profile/ken%20schmidt12/"
                className="flex text-white items-center gap-2"
              >
                <Image
                  src="zil.png"
                  alt="Ken J. Schmidt"
                  width={30}
                  height={30}
                  priority
                  className="h-12 w-20 object-contain"
                />
              </Link>
            </div>
              <div>
                
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/img/kens.png"
                  alt="Ken J. Schmidt"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32  bg-[#236193] rounded-full opacity-20 blur-2xl"></div>
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
              <h3 className="text-sm font-semibold text-slate-500 mb-2">
                Email
              </h3>
              <a
                href="mailto:ken.j.schmidt@huntington.com"
                className="text-slate-800 hover:text-[#236193] transition break-all"
              >
                ken.j.schmidt@huntington.com
              </a>
            </div>

            {/* Mobile */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#236193] transition-colors">
                <Phone className="w-6 h-6 text-[#236193] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2">
                Mobile
              </h3>
              <a
                href="tel:+16304798545"
                className="text-slate-800 hover:text-[#236193] transition text-lg font-semibold"
              >
                (630) 479-8545
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#236193] transition-colors">
                <Phone className="w-6 h-6 text-[#236193] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2">
                Phone
              </h3>
              <a
                href="tel:+13317027422"
                className="text-slate-800 hover:text-[#236193] transition text-lg font-semibold"
              >
                (331) 702-7422
              </a>
            </div>

            {/* Fax */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#236193]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#236193] transition-colors">
                {/* <Fax className="w-6 h-6 text-[#236193] group-hover:text-white transition-colors" /> */}
              </div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2">Fax</h3>
              <p className="text-slate-800 text-lg font-semibold">
                (877) 230-9441
              </p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-[#236193] rounded-full"></div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">
                Premier mortgage lending professional with{" "}
                <span className="font-semibold text-[#236193]">
                  more than 20 years of expertise
                </span>{" "}
                in the home financing industry,
                <span className="font-semibold text-[#236193]">
                  {" "}
                  dedicated to building the home loan that meets your needs.
                </span>
                Whether you are new to the process or an old pro, a
                knowledgeable, trustworthy and patient loan officer is an
                invaluable resource.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed"></p>
              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Contact me if you have any questions or would like a
                  complimentary loan pre-approval.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {" "}
                  Offering conforming, jumbo, construction and physician
                  mortgages.{" "}
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {" "}
                  Look forward to providing a five star mortgage experience.
                </p>
              </div>
              {/* Specialties */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Specialties
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Building2 className="w-5 h-5 text-[#236193]" />
                    <span className="text-slate-700">
                      Construction Loans (One-time close)
                    </span>
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
                    <span className="text-slate-700">
                      Self Employed Borrowers
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#000D1E] to-[#000A19] rounded-2xl p-8 text-white">
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-[#236193]">20+</div>
                    <p className="text-slate-300 mt-2">Years of Experience</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#236193]">
                      697465+
                    </div>
                    <p className="text-slate-300 mt-2">Loan officer </p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-slate-600 mb-6">
                  Let's discuss your mortgage needs
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Related Links
            </h2>
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Mortgage Education and Tools
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Confused by the world of mortgages and home loans?
                    ken can help. Get smart with our mortgage education
                    and tools.
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Home Buying Calculators
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Check out ken's home calculators for help determining
                    the financial decisions that best meet your needs.
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
            <Link
                target="_blank" href="/contact">
                  <p className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8 py-3 text-lg rounded-2xl">
                    Contact us
                  </p>
                </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
