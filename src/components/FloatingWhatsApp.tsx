"use client";

import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const checkDrawer = () => {
      setHidden(
        document.body.classList.contains("drawer-open") ||
        document.body.style.overflow === "hidden"
      );
    };

    checkDrawer();

    // Listen to attribute changes on body (e.g. drawer toggle)
    const observer = new MutationObserver(checkDrawer);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div className="floating-whatsapp-container fixed bottom-6 right-6 z-40 flex items-center space-x-2 transition-all duration-300">
      <a
        href="https://wa.me/919876543210?text=Hi%20Sthira%20Team%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20Roofing%2FPEB%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#ff0015] hover:bg-red-700 text-white shadow-2xl shadow-red-600/50 hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#ff0015] opacity-75 animate-ping"></span>
        <MessageSquare className="w-7 h-7 fill-current relative z-10" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-artific font-bold px-3 py-1.5 rounded-lg border border-slate-800 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Instant WhatsApp Quote Desk
        </span>
      </a>
    </div>
  );
}
