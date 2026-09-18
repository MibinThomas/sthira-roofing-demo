"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, Menu, X, ArrowRight, Phone, MessageSquare, MapPin } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when drawer is open & toggle drawer-open class
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("drawer-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("drawer-open");
    }
  }, [menuOpen]);

  const navLinks = [
    { name: "LAUNCHED NOW", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "ROOFING", href: "#roofing" },
    { name: "PEB STRUCTURES", href: "#peb" },
    { name: "PROJECTS", href: "#projects" },
    { name: "WHY STHIRA", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <nav
          className={`w-full transition-all duration-300 ${
            scrolled
              ? "bg-[#f2f6fa]/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80"
              : "bg-[#f2f6fa]/80 backdrop-blur-sm py-5 border-b border-slate-200/40"
          }`}
        >
          <div className="w-full px-6 sm:px-8 lg:px-10 flex justify-between items-center">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative h-10 w-40 sm:w-48 sm:h-12">
                <Image
                  src="/logo/sthira logo website.webp"
                  alt="Sthira Roofing & PEB Structure Logo"
                  fill
                  priority
                  className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Center: Wide Tracked Status Text */}
            <div className="hidden md:flex items-center">
              <div className="text-xs sm:text-sm font-bold text-slate-800 tracking-[0.4em] uppercase">
                L A U N C H E D &nbsp;&nbsp; N O W
              </div>
            </div>

            {/* Right: Connect Us CTA + Hamburger Drawer Button */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Connect Us Button */}
              <a
                href="https://wa.me/919876543210?text=Hi%20Sthira%20Team%2C%20I%20would%20like%20to%20connect%20for%20a%20Roofing%2FPEB%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 sm:space-x-2.5 transition-transform hover:scale-105"
              >
                <span className="text-xs font-black tracking-wider text-slate-900 uppercase">
                  CONNECT US
                </span>
                <div className="w-9 h-9 rounded-full bg-[#ff0015] flex items-center justify-center text-white shadow-md shadow-red-500/30 group-hover:bg-red-700 transition-colors">
                  <Headphones className="w-4 h-4 fill-white/20 stroke-[2.5]" />
                </div>
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-11 h-11 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-red-400/50 transition-all duration-300 focus:outline-none flex flex-col items-center justify-center space-y-1.5 group cursor-pointer"
                aria-label="Toggle Navigation Drawer"
              >
                {/* Modern Animated Hamburger Lines */}
                <span
                  className={`h-[2.5px] rounded-full transition-all duration-300 ${
                    menuOpen
                      ? "w-5 rotate-45 translate-y-[8px] bg-[#ff0015]"
                      : "w-5 bg-slate-900 group-hover:w-4 group-hover:bg-[#ff0015]"
                  }`}
                />
                <span
                  className={`h-[2.5px] rounded-full transition-all duration-300 ${
                    menuOpen
                      ? "w-0 opacity-0"
                      : "w-3 bg-[#ff0015] group-hover:w-5"
                  }`}
                />
                <span
                  className={`h-[2.5px] rounded-full transition-all duration-300 ${
                    menuOpen
                      ? "w-5 -rotate-45 -translate-y-[8px] bg-[#ff0015]"
                      : "w-5 bg-slate-900 group-hover:w-3 group-hover:bg-[#ff0015]"
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Navigation Drawer Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-300"
          ></div>

          {/* Drawer Content Panel */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between p-8 sm:p-10 animate-in slide-in-from-right duration-300 border-l border-slate-200">
            {/* Drawer Top Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="relative h-10 w-40">
                  <Image
                    src="/logo/sthira logo website.webp"
                    alt="Sthira Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="py-8 flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between py-2 text-base font-bold text-slate-900 hover:text-red-600 tracking-wider transition-colors border-b border-slate-50 uppercase"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-red-600 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Drawer Footer Contact Info */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <div className="space-y-2 text-xs text-slate-600 font-medium">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Kochi, Ernakulam, Kerala - 682024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210?text=Hi%20Sthira%20Team%2C%20I%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#ff0015] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-lg shadow-red-500/25 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
