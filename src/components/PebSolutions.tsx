"use client";

import Image from "next/image";
import { Factory, Warehouse, ShoppingBag, Layers, ArrowUpRight, CheckCircle, ShieldCheck } from "lucide-react";

export default function PebSolutions() {
  const pebCategories = [
    {
      title: "Industrial Warehouses & Logistics Hubs",
      icon: <Warehouse className="w-6 h-6 text-red-600" />,
      desc: "Column-free clear span buildings designed for maximum volumetric storage capacity, forklift movement, and high bay loading docks.",
      features: ["Up to 60m Clear Span", "EOT Crane Provision", "High Eave Height Options"],
      img: "/images/peb_warehouse_kerala.jpg",
    },
    {
      title: "Factory Sheds & Manufacturing Plants",
      icon: <Factory className="w-6 h-6 text-emerald-600" />,
      desc: "Heavy structural steel frames built to handle heavy machinery vibration, crane loads (5T to 50T capacity), and automated ventilation systems.",
      features: ["Crane Runway Girders", "Continuous Ridge Vents", "Anti-Corrosion Primers"],
      img: "/images/factory_structure_steel.jpg",
    },
    {
      title: "Commercial Outlets & Showrooms",
      icon: <ShoppingBag className="w-6 h-6 text-amber-600" />,
      desc: "Architecturally striking glass-and-steel facade integrations with fast-track construction timetables for commercial retail spaces across Kerala.",
      features: ["Mezzanine Showroom Space", "Custom Architectural Facades", "Rapid Commissioning"],
      img: "/images/hero_peb_roofing.jpg",
    },
    {
      title: "Multi-Story Steel Buildings & Mezzanines",
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      desc: "Engineered deck panel mezzanine floor slabs providing 2x or 3x usable floor area inside existing or new industrial facilities.",
      features: ["Heavy Load Carrying Slabs", "Modular Decking Panels", "Seismic Class 3 Compliant"],
      img: "/images/roofing_materials_showcase.jpg",
    },
  ];

  return (
    <section id="peb" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 relative overflow-hidden border-t border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            <ShieldCheck className="w-4 h-4 mr-1" />
            <span>Pre-Engineered Building (PEB) Division</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Turnkey Pre-Engineered Steel Structures
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Custom-designed, factory-fabricated, and rapidly assembled steel buildings tailored to Kerala&apos;s industrial growth demands.
          </p>
        </div>

        {/* 2x2 Grid of Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {pebCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-[32px] bg-white border border-slate-200/80 overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-red-300 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-slate-100">
                  {cat.icon}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {cat.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="pt-2 space-y-2">
                    {cat.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-700 font-semibold">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Custom Engineering &amp; Erection</span>
                  <a
                    href={`https://wa.me/919876543210?text=Hi%20Sthira%20Team%2C%20I%20am%20looking%20for%20a%20quote%20on%20${encodeURIComponent(cat.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Structural Steel Specifications Bar */}
        <div className="mt-16 p-6 sm:p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-xl shadow-slate-200/30 grid sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Primary Framing</div>
            <div className="text-base font-bold text-slate-900">Built-Up Tapered Columns &amp; Rafters</div>
            <div className="text-xs text-slate-500">High Strength Grade S350 / IS 2062 E350</div>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-6">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Secondary Framing</div>
            <div className="text-base font-bold text-red-600">Cold-Formed Z &amp; C Purlins</div>
            <div className="text-xs text-slate-500">Pre-Galvanized 275 GSM Zinc Coating</div>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-6">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Design Standards</div>
            <div className="text-base font-bold text-emerald-600">IS 800:2007 &amp; MBMA Compliant</div>
            <div className="text-xs text-slate-500">Seismic Zone III &amp; IV Structural Calculations</div>
          </div>
        </div>

      </div>
    </section>
  );
}
