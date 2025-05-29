"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MapPin, Phone } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Offer bar */}
      <div className="bg-[#4c0519] text-white py-1.5 px-4 flex justify-between items-center text-sm">
        <div className="flex-1 text-center font-serif">
          <p className="animate-pulse"></p>
        </div>
        <div className="hidden sm:flex space-x-4">
          <a href="#contact">
          <button className="flex items-center hover:text-white/80 transition-colors">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>Location</span>
          </button>
          </a>
          <a href="#contact">
          <button className="flex items-center hover:text-white/80 transition-colors">
            <Phone className="h-3.5 w-3.5 mr-1" />
            <span>Contact us</span>
          </button>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-md text-black py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="font-serif font-bold text-2xl">
            <a href="#home">
            <h2>M/S. Delhi Lamination</h2>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#catalogue">Catalogue</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-2 pb-3 px-4 space-y-1 border-t mt-3">
            <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#catalogue" onClick={() => setMobileMenuOpen(false)}>
              Catalogue
            </MobileNavLink>
            <MobileNavLink href="#reviews" onClick={() => setMobileMenuOpen(false)}>
              Reviews
            </MobileNavLink>
            <MobileNavLink href="#faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="px-4 py-2 font-medium hover:text-[#4c0519] transition-colors rounded-md">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} className="block px-3 py-2 font-medium hover:bg-gray-100 rounded-md" onClick={onClick}>
      {children}
    </Link>
  )
}
