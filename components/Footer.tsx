import type React from "react"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#4c0519] text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">M/S. Delhi Lamination</h3>
              <p className="text-white/80 mb-6">Transforming moments into lasting memories</p>
              <div className="flex space-x-4">
                <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
                <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <FooterLink href="#home">Home</FooterLink>
                <FooterLink href="#about">About Us</FooterLink>
                <FooterLink href="#services">Services</FooterLink>
                <FooterLink href="#catalogue">Catalogue</FooterLink>
                <FooterLink href="#reviews">Reviews</FooterLink>
                <FooterLink href="#faq">FAQ</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5" />
                  <span>hs406256@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5" />
                  <span>+91 94783 36731</span>
                </div>
                <address className="not-italic text-white/80 mt-2">
                  841, Kot Khalsa, OPP. RS Building Material,
                  <br />
                  Nivi Patti Road, Amritsar-I(143002),
                  <br />
                  Punjab, India
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20" />

        {/* Copyright */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} M/S. Delhi Lamination. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label={label}>
      {icon}
    </Link>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/80 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}
