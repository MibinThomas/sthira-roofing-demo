"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does a typical PEB building project take to fabricate & erect in Kerala?",
      a: "A standard 10,000 to 30,000 sq. ft industrial warehouse or factory PEB building takes approximately 30 to 45 days from engineering design approval to final site handover. Off-site CNC fabrication runs parallel with site foundation preparation.",
    },
    {
      q: "How do Sthira metal roofs handle Kerala's heavy monsoons and coastal corrosion?",
      a: "We exclusively utilize high-grade AZ150 Galvalume steel (55% Aluminum-Zinc alloy coating) and standing seam concealed fastener systems. This provides 4x higher corrosion resistance against coastal salinity compared to traditional zinc sheets, guaranteed leak-proof for 10+ years.",
    },
    {
      q: "What is the cost comparison between PEB steel structure and traditional RCC concrete?",
      a: "PEB structures offer 20% to 30% direct savings on overall capital cost, primarily due to reduced heavy foundation requirements (lightweight structural dead load) and 40% faster execution speed which dramatically cuts financing interest and labor costs.",
    },
    {
      q: "What are the benefits of PUF Insulated Sandwich Panel roofing in Kerala?",
      a: "PUF (Polyurethane Foam) panels combine steel strength with thermal insulation. In Kerala's hot summers, PUF panels reduce indoor temperatures by up to 8°C. During monsoon downpours, they absorb rain impact noise by up to 25 dB.",
    },
    {
      q: "Are Sthira PEB structures compliant with Indian Structural Codes?",
      a: "Yes, 100%. All our structural designs adhere strictly to IS 800:2007 (Code of Practice for General Construction in Steel), IS 875 (Wind Load calculations up to 180 km/h), and MBMA international standards with seismic zone classification.",
    },
    {
      q: "Do you provide complete turnkey design, fabrication, and erection services across Kerala?",
      a: "Yes. Sthira handles turnkey execution starting from architectural 3D layout design, structural engineering calculations, anchor bolt layout positioning, factory fabrication, to final site bolt assembly across all 14 districts in Kerala.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 relative border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            <HelpCircle className="w-4 h-4 mr-1" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Got Questions About Roofing &amp; PEB?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Clear answers to common questions about engineering, timelines, pricing, and monsoon resilience.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[24px] bg-white border border-slate-200/80 overflow-hidden shadow-sm transition-all duration-200 hover:border-slate-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:bg-slate-50/80 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-red-50 text-red-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-xl shadow-slate-200/30 text-center space-y-3">
          <h3 className="font-bold text-slate-900 text-lg sm:text-xl">
            Have a custom requirement or site layout question?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Our certified structural engineers are ready to assist you on WhatsApp.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919876543210?text=Hi%20Sthira%20Team%2C%20I%20have%20a%20specific%20question%20regarding%20my%20building%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask Engineer on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
