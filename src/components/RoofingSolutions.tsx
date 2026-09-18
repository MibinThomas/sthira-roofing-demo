"use client";

import { useState } from "react";
import Image from "next/image";
import { Wrench, Shield, Thermometer, Sun, Home, Check, MessageSquare } from "lucide-react";

export default function RoofingSolutions() {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: "puf",
      title: "PUF Insulated Sandwich Panels",
      icon: <Thermometer className="w-5 h-5 text-red-600" />,
      tag: "Top Choice for Kerala Climate",
      desc: "High-density Polyurethane Foam (PUF) core sandwiched between Galvalume steel sheets. Provides exceptional heat insulation (cuts temperature up to 8°C) and dampens heavy monsoon rain noise.",
      specs: [
        "Thickness Options: 30mm, 50mm, 80mm, 100mm",
        "Thermal Conductivity: 0.022 W/mK",
        "Rain Sound Dampening: Reduced by up to 25 dB",
        "Lifespan: 25+ Years Zero Maintenance",
      ],
      suitableFor: "Cold Storages, Factories, Modern Homes, Commercial Hubs",
      img: "/images/roofing_materials_showcase.jpg",
    },
    {
      id: "industrial",
      title: "Galvalume Industrial Roofing Sheets",
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
      tag: "Heavy-Duty Industrial",
      desc: "High-tensile bare or color-coated Galvalume trapezoidal sheets (AZ150 coating). Designed for wide purlin spacing, maximum water discharge rate during Kerala monsoons, and high wind load durability.",
      specs: [
        "Sheet Thickness: 0.47mm to 0.60mm TCT",
        "Substrate: 55% Al-Zn Alloy Coating (AZ150)",
        "Yield Strength: 550 MPa High Tensile",
        "Color Options: Slate Blue, Signal Red, Tile Red, Light Grey",
      ],
      suitableFor: "Warehouses, Manufacturing Plants, Bus Terminals, Agro Sheds",
      img: "/images/hero_peb_roofing.jpg",
    },
    {
      id: "standing-seam",
      title: "Standing Seam Leak-Proof Systems",
      icon: <Wrench className="w-5 h-5 text-blue-600" />,
      tag: "100% Concealed Fasteners",
      desc: "Premium double-lock standing seam technology with zero exposed screws or puncture holes. Eliminates potential leak points entirely, making it ideal for low-slope roofs in high-rainfall regions.",
      specs: [
        "Seam Height: 38mm / 50mm Double Lock",
        "Fastening: Concealed stainless steel expansion clips",
        "Minimum Slope: 1.5 degrees",
        "Warranty: 15-Year Weatherproof Guarantee",
      ],
      suitableFor: "Luxury Resorts, Airports, Stadiums, High-End Commercials",
      img: "/images/peb_warehouse_kerala.jpg",
    },
    {
      id: "skylight",
      title: "Polycarbonate Skylight Roofing",
      icon: <Sun className="w-5 h-5 text-amber-600" />,
      tag: "Daylight Harvesting",
      desc: "UV-coated multi-wall polycarbonate daylight panels integrated seamlessly into steel roofing profile. Reduces daytime electrical lighting costs by up to 60%.",
      specs: [
        "Light Transmission: Up to 80% Natural Light",
        "UV Protection: Dual side 50 micron UV coat",
        "Impact Resistance: 250x stronger than glass",
        "Fire Rating: Self-extinguishing Class B1",
      ],
      suitableFor: "Industrial Plants, Workshop Sheds, Atriums, Indoor Courts",
      img: "/images/factory_structure_steel.jpg",
    },
    {
      id: "residential",
      title: "Architectural Residential Roof Tiles",
      icon: <Home className="w-5 h-5 text-rose-600" />,
      tag: "Traditional Aesthetic & Steel Strength",
      desc: "Stone-coated and pre-painted metal roof tiles replicating traditional Kerala clay tiles with lightweight steel durability. Resists moss, algae, and thermal cracking.",
      specs: [
        "Weight: 80% lighter than clay tiles",
        "Interlocking: Wind uplift resistant design",
        "Coating: Stone granules or PVDF paint finish",
        "Aesthetic: Heritage Charcoal, Brick Red, Deep Green",
      ],
      suitableFor: "Kerala Villas, Independent Houses, Homestays, Bungalows",
      img: "/images/residential_metal_roof.jpg",
    },
  ];

  const current = solutions[activeTab];

  return (
    <section id="roofing" className="py-20 lg:py-28 bg-[#f2f6fa] text-slate-900 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span>Sthira Roofing Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            High-Performance Metal &amp; Insulated Roofing Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineered for high water discharge, heat insulation, and zero leakage under Kerala&apos;s extreme rainfall conditions.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutions.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center space-x-2.5 px-5 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 border ${
                activeTab === idx
                  ? "bg-[#ff0015] text-white border-red-600 shadow-lg shadow-red-500/25 scale-105"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Tab Content Showcase Box */}
        <div className="rounded-[36px] bg-white border border-slate-200/80 p-6 sm:p-10 shadow-2xl shadow-slate-300/30 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-6 relative rounded-[28px] overflow-hidden aspect-[4/3] border border-slate-100 shadow-md group">
              <Image
                src={current.img}
                alt={current.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-[#ff0015] text-white font-bold text-xs uppercase tracking-wider shadow-md">
                  {current.tag}
                </span>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2.5">
                  {current.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {current.desc}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-red-600 uppercase tracking-widest">
                  Technical Specifications &amp; Performance
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {current.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Application */}
              <div className="p-4 rounded-[20px] bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500 font-medium">Recommended Application:</span>
                <span className="font-bold text-slate-900 text-right ml-2">{current.suitableFor}</span>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919876543210?text=Hi%20Sthira%20Team%2C%20I%20am%20interested%20in%20${encodeURIComponent(current.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire for {current.title}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
