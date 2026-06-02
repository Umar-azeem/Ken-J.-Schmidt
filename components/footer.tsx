// components/footer.tsx
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#236193] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">MARK H. COHEN</h4>
            <p className="text-blue-100 text-sm mb-2">Mortgage Broker</p>
            <div className="flex items-start gap-2 text-blue-100 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                9665 Wilshire Blvd, Suite 260<br />
                Beverly Hills, CA 90212
              </span>
            </div>
            <div className="mt-3 space-y-1 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+13107775401" className="hover:text-white transition">310.777.5401</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:cfg@cohenfinancialgroup.com" className="hover:text-white transition">cfg@cohenfinancialgroup.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Loan Programs */}
          <div>
            <h4 className="font-bold mb-4">Loan Programs</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="/loans/construction" className="hover:text-white transition">Construction Loans</Link></li>
              <li><Link href="/loans/doctors" className="hover:text-white transition">Doctors Only Program</Link></li>
              <li><Link href="/loans/jumbo" className="hover:text-white transition">Jumbo Financing</Link></li>
              <li><Link href="/loans/self-employed" className="hover:text-white transition">Self-Employed Borrowers</Link></li>
              <li><Link href="/loans/fha-va" className="hover:text-white transition">FHA & VA Loans</Link></li>
              <li><Link href="/loans/refinancing" className="hover:text-white transition">Refinancing Solutions</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="/resources/calculator" className="hover:text-white transition">Mortgage Calculator</Link></li>
              <li><Link href="/resources/learning-center" className="hover:text-white transition">Learning Center</Link></li>
              <li><Link href="/resources/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/resources/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8 rounded-lg overflow-hidden border border-blue-400/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.345678901234!2d-118.3965!3d34.0678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b9e8e8e8e8e8%3A0x8e8e8e8e8e8e8e8e!2s9665%20Wilshire%20Blvd%2C%20Beverly%20Hills%2C%20CA%2090212!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cohen Financial Group Location"
            className="w-full"
          />
        </div>

        {/* Legal and Copyright */}
        <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
          <p className="text-sm mb-2">
            © 2026 Cohen, Mark Howard, a mortgage broker, licensed by the CA Bureau of Real Estate, DRE #01016103, NMLS #37230, NMLS #1593077. All rights reserved.
          </p>
          <p className="text-xs">
            Not all applicants will qualify. Rates, programs, and APRs are subject to change without prior notice. All LTVs represented are based on...
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Use</Link>
            <Link href="/licensing" className="hover:text-white transition">Licensing Information</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}