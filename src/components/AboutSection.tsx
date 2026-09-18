"use client";

import Image from "next/image";
import { ShieldCheck, Cpu, HardHat, Compass, Sparkles, CheckCircle2, Award } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: <HardHat className="w-6 h-6 text-red-600" />,
      title: "Turnkey Structural Engineering",
      desc: "Complete end-to-end design, high-precision fabrication, foundation anchor positioning, and rapid site erection across Kerala.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Heavy Monsoon Resilience",
      desc: "Engineered specifically to endure Kerala's torrential rainfall, high wind loads (up to 180 km/h), and coastal salt air corrosion.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "CAD/CAM Precision Steel",
      desc: "Computer-automated detailing ensuring exact bolt alignments, zero site-welding flaws, and high structural safety factors.",
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-600" />,
      title: "40% Faster Execution",
      desc: "Save up to 40% construction time compared to traditional RCC concrete construction, allowing faster commercial ROI.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden text-slate-900 border-t border-slate-200/60">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Sthira Building Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Pioneering Advanced PEB &amp; Metal Roofing Across Kerala
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Sthira is a leading structural engineering company specializing in Pre-Engineered Steel Buildings (PEB) and high-performance roofing systems engineered for extreme strength and longevity.
          </p>
        </div>

        {/* 2-Column Grid: Image Showcase & Company Story */}
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-center mb-20">
          
          {/* Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-300/40 border-4 border-white aspect-[4/3] group">
              <Image
                src="/images/factory_structure_steel.jpg"
                alt="Sthira Steel PEB Factory & Industrial Structure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              
              {/* Floating Quality Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[24px] bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Primary Materials
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Tata BlueScope, JSW Steel &amp; Jindal Certified
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-red-500/30">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Story & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Engineered for High Structural Integrity &amp; Zero Leakage
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                With Kerala’s unique tropical environment—characterized by heavy monsoon rainfalls, high humidity, and coastal atmosphere—traditional roofs and standard concrete sheds often suffer from corrosion, leakage, and high maintenance costs.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Sthira addresses these challenges by introducing customized Pre-Engineered Building (PEB) frameworks and AZ150 Galvalume / PUF insulated sandwich roofing panels. Our structures provide superior thermal insulation, sound dampening, zero leak guarantees, and lifelong durability.
              </p>
            </div>

            {/* Checklist items */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 p-4 rounded-[20px] bg-white border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">Clear-Span Layouts</div>
                  <div className="text-xs text-slate-500 mt-0.5">Up to 60 meters column-free span</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-[20px] bg-white border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">Thermal Comfort</div>
                  <div className="text-xs text-slate-500 mt-0.5">PUF panels cut indoor heat by 6-8°C</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 rounded-[28px] bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group"
            >
              <div className="p-3.5 rounded-2xl bg-slate-50 w-fit border border-slate-200 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
