"use client";

import Image from "next/image";
import { Headphones, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#f2f6fa] min-h-screen lg:h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-12 overflow-hidden flex items-center justify-center">
      {/* Background Architectural Steel Beam & Animated Video Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Ambient Animated Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-multiply scale-105"
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>

        {/* Light Overlay Gradient to protect legibility & maintain light design style */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2f6fa]/40 via-transparent to-[#f2f6fa]/60 pointer-events-none"></div>

        {/* Giant Diagonal Pinkish Steel I-Beam Watermark */}
        <div className="absolute -bottom-24 -left-32 w-[140%] h-[480px] sm:h-[600px] lg:h-[750px] origin-bottom-left -rotate-[18deg] opacity-[0.22] blur-[0.5px]">
          <svg
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="beamGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e11d48" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#f43f5e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="beamEdgeHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#be123c" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#fb7185" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Top Flange */}
            <polygon points="0,40 1200,40 1200,90 0,90" fill="url(#beamEdgeHighlight)" />
            {/* Inner Web Shadow */}
            <polygon points="0,90 1200,90 1200,310 0,310" fill="url(#beamGradMain)" />
            {/* Rib stiffeners */}
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1={i * 100 + 40}
                y1="90"
                x2={i * 100 + 40}
                y2="310"
                stroke="#9f1239"
                strokeWidth="8"
                strokeOpacity="0.25"
              />
            ))}
            {/* Bottom Flange */}
            <polygon points="0,310 1200,310 1200,360 0,360" fill="url(#beamEdgeHighlight)" />
          </svg>
        </div>

        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 xl:gap-14 items-center">
          
          {/* Left Column - Hero Branding & Intro */}
          <div className="lg:col-span-5 space-y-5 lg:space-y-6 text-left">
            {/* Mobile Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff0015] animate-pulse"></span>
              <span>PEB &amp; Roofing Leaders</span>
            </div>

            {/* Big Brand Title */}
            <div>
              <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 tracking-tight leading-none">
                STHIRA<span className="text-[#ff0015]">.</span>
              </h1>
              <h2 className="text-lg sm:text-2xl lg:text-3xl text-slate-700 font-normal tracking-tight mt-2 sm:mt-3">
                Roofing &amp; PEB structure
              </h2>
            </div>

            {/* Mobile Quote Card */}
            <div className="lg:hidden p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-md backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                &ldquo;Roofing and Pre-Engineered Building Solutions engineered for structural strength, precision, and dependable performance.&rdquo;
              </p>
            </div>

            {/* Clean Description (Desktop) */}
            <p className="hidden lg:block text-slate-600 text-sm sm:text-base leading-relaxed max-w-md font-sans pt-1">
              STHIRA delivers thoughtfully engineered roofing and PEB structures that bring together structural strength, precision, and dependable performance for modern construction needs.
            </p>

            {/* Red Pill CTA Buttons */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://wa.me/919746737474?text=Hi%20Sthira%20Team%2C%20I%20would%20like%20to%20connect%20for%20a%20Roofing%2FPEB%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-7 sm:px-9 py-3.5 rounded-full bg-[#ff0015] hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg shadow-red-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-95 group text-center"
              >
                <span>CONNECT US</span>
              </a>
              <a
                href="#projects"
                className="inline-flex sm:hidden items-center justify-center px-5 py-3.5 rounded-full bg-white text-slate-800 border border-slate-200/90 font-bold text-xs tracking-wider uppercase shadow-sm active:scale-95 transition-all"
              >
                <span>EXPLORE</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-3 sm:pt-4 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-600 border-t border-slate-200/80">
              <div className="flex items-center space-x-1.5 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-200/60 justify-center sm:justify-start">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 flex-shrink-0" />
                <span className="truncate">JSW &amp; Tata</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-200/60 justify-center sm:justify-start">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 flex-shrink-0" />
                <span className="truncate">Monsoon Ok</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-200/60 justify-center sm:justify-start">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 flex-shrink-0" />
                <span className="truncate">ISO Certified</span>
              </div>
            </div>

            {/* Mobile Showcase Cards Deck */}
            <div className="lg:hidden pt-4 grid grid-cols-2 gap-3">
              {/* Main Featured Card */}
              <div className="col-span-2 relative h-48 sm:h-60 rounded-2xl overflow-hidden shadow-lg border border-white/80 group">
                <Image
                  src="/images/hero_tall_structure.jpg"
                  alt="Sthira High-rise Steel Frame Construction"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="text-white space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ff0015] text-[10px] font-extrabold uppercase tracking-wider">
                      Featured Project
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-100">
                      High-Rise Steel Structural PEB Framework
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub Card 1 */}
              <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-md border border-white/80 group">
                <Image
                  src="/images/hero_metal_facade.jpg"
                  alt="Sthira Metallic Corrugated Steel PEB Building"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-bold text-white tracking-wide">PEB Roofing</span>
                </div>
              </div>

              {/* Sub Card 2 */}
              <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-md border border-white/80 group">
                <Image
                  src="/images/hero_illuminated_building.jpg"
                  alt="Sthira Commercial Steel Building Night View"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-bold text-white tracking-wide">Commercial Structure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Showcase Matrix & Quote (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-7 relative pt-0">
            
            {/* Desktop Top Right Statement Quote */}
            <div className="mb-6 lg:mb-8 lg:absolute lg:top-0 lg:right-2 z-20 max-w-sm lg:max-w-[280px] xl:max-w-xs text-left lg:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-normal text-slate-800 leading-snug tracking-tight">
                Roofing and Pre-Engineered Building Solutions by STHIRA.
              </h3>
            </div>

            {/* Image Collage Grid Container */}
            <div className="relative pt-0 lg:pt-20 flex flex-col sm:flex-row items-center sm:items-end justify-center lg:justify-start gap-4 sm:gap-6">
              
              {/* Left Column Stack (Card 1 & Card 2) */}
              <div className="flex items-end space-x-4 sm:space-x-5">
                {/* Card 1 - Tall Left Portrait Image */}
                <div className="relative w-[180px] sm:w-[220px] md:w-[240px] h-[320px] sm:h-[390px] md:h-[420px] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-2xl shadow-slate-400/20 border-2 border-white/60 flex-shrink-0 group">
                  <Image
                    src="/images/hero_tall_structure.jpg"
                    alt="Sthira High-rise Steel Frame Construction"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                </div>

                {/* Card 2 - Bottom Middle Image (Overlapping) */}
                <div className="relative w-[190px] sm:w-[230px] md:w-[260px] h-[220px] sm:h-[260px] md:h-[290px] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-2xl shadow-slate-500/20 border-4 border-[#f2f6fa] flex-shrink-0 -ml-10 sm:-ml-12 z-20 group">
                  <Image
                    src="/images/hero_metal_facade.jpg"
                    alt="Sthira Metallic Corrugated Steel PEB Building"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right Column Stack (Card 3 & Card 4) */}
              <div className="flex flex-col sm:flex-row items-end space-y-4 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
                {/* Card 3 - Top Right Image */}
                <div className="relative w-[170px] sm:w-[200px] md:w-[220px] h-[190px] sm:h-[220px] md:h-[240px] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-xl shadow-slate-400/20 border-2 border-white/60 flex-shrink-0 group">
                  <Image
                    src="/images/hero_illuminated_building.jpg"
                    alt="Sthira Commercial Steel Building Night View"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card 4 - Bottom Right Blue Corner Image (Overlapping Card 3) */}
                <div className="relative w-[160px] sm:w-[190px] md:w-[210px] h-[230px] sm:h-[260px] md:h-[280px] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-2xl shadow-slate-500/20 border-4 border-[#f2f6fa] flex-shrink-0 -ml-8 sm:-ml-12 z-30 group">
                  <Image
                    src="/images/hero_blue_peb.jpg"
                    alt="Sthira Blue Metallic PEB Building Exterior"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
