"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#eef4f8] text-slate-600 border-t border-slate-200/80 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-56">
                <Image
                  src="/logo/sthira logo website.webp"
                  alt="Sthira Roofing & PEB Structure Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Sthira is Kerala&apos;s premier building solutions provider specializing in turnkey Pre-Engineered Buildings (PEB), industrial steel fabrication, Galvalume roofing sheets, and PUF insulated panel installations.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-slate-200 text-emerald-600 hover:bg-emerald-50 transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="p-2.5 rounded-full bg-white border border-slate-200 text-red-600 hover:bg-red-50 transition-colors shadow-sm"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@sthiraroofing.com"
                className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
                aria-label="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Roofing Solutions
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#roofing" className="hover:text-red-600 transition-colors">Industrial Galvalume Sheets</a></li>
              <li><a href="#roofing" className="hover:text-red-600 transition-colors">PUF Insulated Roof Panels</a></li>
              <li><a href="#roofing" className="hover:text-red-600 transition-colors">Standing Seam Roof Systems</a></li>
              <li><a href="#roofing" className="hover:text-red-600 transition-colors">Polycarbonate Skylights</a></li>
              <li><a href="#roofing" className="hover:text-red-600 transition-colors">Residential Metal Tile Roofs</a></li>
              <li><a href="#roofing" className="hover:text-red-600 transition-colors">Monsoon Leakproofing &amp; Repair</a></li>
            </ul>
          </div>

          {/* Col 3: PEB Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              PEB Steel Structures
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#peb" className="hover:text-red-600 transition-colors">Industrial Warehouses</a></li>
              <li><a href="#peb" className="hover:text-red-600 transition-colors">Factory Manufacturing Sheds</a></li>
              <li><a href="#peb" className="hover:text-red-600 transition-colors">Commercial Steel Buildings</a></li>
              <li><a href="#peb" className="hover:text-red-600 transition-colors">Multi-Story Mezzanine Slabs</a></li>
              <li><a href="#why-us" className="hover:text-red-600 transition-colors">Why Sthira Engineering</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Corporate Office
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Edappally, Kochi, Ernakulam, Kerala - 682024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>info@sthiraroofing.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Sthira Building Solutions. All rights reserved. Registered Roofing &amp; PEB Contractors, Kerala.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-600" />
          </button>
        </div>

      </div>
    </footer>
  );
}
