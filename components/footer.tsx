// components/footer.tsx
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#000C1C] text-white">
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
              <Link
                target="_blank"
                href="https://www.youtube.com/user/HuntingtonBank"
                className="flex items-center gap-2"
              >
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
              {/* <Link
                target="_blank"
                href="https://twitter.com/Huntington_Bank"
                className="flex items-center gap-2"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </Link> */}
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
            <p className="text-blue-100 text-sm mb-2">loan officer</p>
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
                
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Map Section */}
    
<div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white/80  p-6 relative">
  {/* Google icon background image */}
  <div
  className="absolute inset-0 pointer-events-none opacity-60 bg-no-repeat"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' fill='%234285F4'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' fill='%2334A853'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' fill='%23FBBC05'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' fill='%23EA4335'/%3E%3C/svg%3E")`,
    backgroundSize: "180px",
    backgroundPosition: "center",
  }}
/>

  {/* Content wrapper — add relative z-10 so content sits above the background */}
  <div className="relative z-10">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="font-bold text-lg text-[#000C1C]">Ken J. Schmidt - Huntington Mortgage</h3>
        <p className="text-sm text-slate-500">NMLS #697466</p>
      </div>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    </div>

    <div className="flex items-center gap-2 mb-4">
      <div className="flex text-yellow-400 text-lg">★★★★★</div>
      <span className="font-bold text-slate-700">4.58</span>
      <span className="text-slate-500 text-sm">(12 Google Reviews)</span>
    </div>

    <div className="space-y-2 text-sm text-slate-600 mb-6">
      <p>3020 S Route 59, Naperville, IL 60564</p>
      <p>(630) 479-8545</p>
    </div>

    <div className="flex gap-3 bg-">
      <Link
        href="https://www.google.com/search?q=Ken+J+Schmidt+-+Huntington+Mortgage+-+NMLS+697466%2C+3020+S+Rte+59%2C+Naperville%2C+IL+60564%2C+United+States&oq=Ken+J+Schmidt+-+Huntington+Mortgage+-+NMLS+697466%2C+3020+S+Rte+59%2C+Naperville%2C+IL+60564%2C+United+States&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDzSAQc3ODdqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8&sec_src=gmail"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center border bg-[#236193] border-slate-300 hover:bg-[#1a4a70] text-white group-hover:text-[#000000] px-4 py-2.5 rounded-lg font-semibold text-sm transition"
      >
        View Profile
      </Link>
    </div>
  </div>
</div>
        {/* Legal and Copyright */}
       
      </div>
    </footer>
  );
}
