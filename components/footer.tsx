// components/footer.tsx
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#236193] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/img/logo.png"
                alt="Shopique"
                width={100}
                height={100}
                priority
                className="h-42 w-68 object-contain"
              />
            </Link>
            <div className="mt-4 flex items-center justify-center gap-4">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/kenschmidtchicago/"
                className="flex items-center gap-2"
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
                className="flex items-center gap-2"
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
                className="flex items-center gap-2"
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
                className="flex items-center gap-2">
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
                className="flex items-center gap-2">
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
                className="flex items-center gap-2"
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
          </div>
          {/* Company Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Ken J. Schmidt</h4>
            <p className="text-blue-100 text-sm mb-2">Mortgage Broker</p>
            <div className="flex items-start gap-2 text-blue-100 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>Coverage Area: Illinois</span>
            </div>
            <div className="mt-3 space-y-1 text-blue-100 text-sm">
              <div className="flex flex-col gap-2">
                <div className="flex  gap-2">
                  <Phone className="w-4 h-4" />
                  <a className="hover:text-white transition">(630) 479-8545 </a>
                </div>
                <div className="flex  gap-2">
                  <Phone className="w-4 h-4" />
                  <a className="hover:text-white transition">(331) 702-7422 </a>
                </div>
                <div className="flex  gap-2">
                  <Phone className="w-4 h-4" />
                  <a className="hover:text-white transition">(877) 230-9441 </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:ken.j.schmidt@huntington.com"
                  className="hover:text-white transition"
                >
                  ken.j.schmidt@huntington.com{" "}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/kenSchmidt"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Loan Programs */}
          {/* <div>
            <h4 className="font-bold mb-4">Loan Programs</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link
                  href="/loans/construction"
                  className="hover:text-white transition"
                >
                  Construction Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/loans/doctors"
                  className="hover:text-white transition"
                >
                  Doctors Only Program
                </Link>
              </li>
              <li>
                <Link
                  href="/loans/jumbo"
                  className="hover:text-white transition"
                >
                  Jumbo Financing
                </Link>
              </li>
              <li>
                <Link
                  href="/loans/self-employed"
                  className="hover:text-white transition"
                >
                  Self-Employed Borrowers
                </Link>
              </li>
              <li>
                <Link
                  href="/loans/fha-va"
                  className="hover:text-white transition"
                >
                  FHA & VA Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/loans/refinancing"
                  className="hover:text-white transition"
                >
                  Refinancing Solutions
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Resources */}
          {/* <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link
                  href="/resources/calculator"
                  className="hover:text-white transition"
                >
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/learning-center"
                  className="hover:text-white transition"
                >
                  Learning Center
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/faq"
                  className="hover:text-white transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/blog"
                  className="hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Map Section */}
        <div className="mb-8 rounded-lg overflow-hidden border border-blue-400/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33850037026!2d-87.8602826!3d41.8348739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0b3ab5f0a3c1e!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Coverage Area Map - Illinois"
            className="w-full"
          />
        </div>

        {/* Legal and Copyright */}
        <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
          <p className="text-sm mb-2">
           
          </p>
          <p className="text-xs">
            © Lending products are subject to credit application and approval.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Use
            </Link>
            <Link href="/licensing" className="hover:text-white transition">
              VA loans require a VA certificate of eligibility. not acting on behalf of, or at the direction of, the VA, FHA, or
              the Federal Government.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
