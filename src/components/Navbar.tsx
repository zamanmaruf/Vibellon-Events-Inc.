"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md py-3 px-6 flex items-center justify-between font-sans">
      <a href="#hero" className="flex items-center">
        <Image src="/logo.png" alt="Vibellion Events Inc. Logo" width={64} height={64} className="max-h-16 w-auto" priority />
      </a>
      <div className="hidden md:flex gap-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-6 py-2 rounded-full text-white/90 hover:bg-accent/20 hover:text-accent transition-all font-semibold text-sm tracking-wide"
          >
            {link.label}
          </a>
        ))}
      </div>
      <button
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
      >
        <span className={`block w-7 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-2xl text-white font-semibold tracking-widest hover:text-accent transition-all"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
} 