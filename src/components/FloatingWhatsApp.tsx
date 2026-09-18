"use client";

import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2">
      <a
        href="https://wa.me/919876543210?text=Hi%20Sthira%20Team%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20Roofing%2FPEB%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
        <MessageSquare className="w-7 h-7 fill-current relative z-10" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-artific font-bold px-3 py-1.5 rounded-lg border border-slate-800 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Instant WhatsApp Quote Desk
        </span>
      </a>
    </div>
  );
}
