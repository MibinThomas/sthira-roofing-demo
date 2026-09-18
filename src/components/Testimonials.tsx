"use client";

import { Star, Quote, Building, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "K. R. Menon",
      role: "Managing Director, Menon Logistics Parks",
      location: "Ernakulam / Kochi",
      rating: 5,
      comment:
        "Sthira executed our 45,000 sq. ft logistics warehouse in record 45 days. During last year's severe Kerala monsoon, there was zero water seepage or roof vibration. Exceptional PEB engineering standard!",
      project: "Warehouse Clear-Span Structure",
    },
    {
      name: "Dr. Anish Kurup",
      role: "Operations Head, Kerala Food Processing Ltd.",
      location: "Kinfra Park, Palakkad",
      rating: 5,
      comment:
        "We specified 50mm PUF sandwich panel roofing for our food processing plant. Indoor temperatures dropped by almost 7°C immediately, cutting our air conditioning energy bills drastically.",
      project: "PUF Insulated Factory Roof",
    },
    {
      name: "Ar. Harikrishnan V.",
      role: "Principal Architect, Studio Steel Kerala",
      location: "Kozhikode / Calicut",
      rating: 5,
      comment:
        "Partnering with Sthira on our commercial steel building projects is seamless. Their 3D CAD detailing is precise, bolt alignment on site is 100% accurate, and the team handles all structural approvals.",
      project: "Commercial Multi-Story PEB",
    },
    {
      name: "Mathew Joseph",
      role: "Estate Owner",
      location: "Kottayam, Kerala",
      rating: 5,
      comment:
        "Replaced our old leaking tiled roof with Sthira's architectural standing seam metal roofing system. It retains the traditional villa look while providing complete weather protection.",
      project: "Residential Metal Roof System",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f2f6fa] text-slate-900 relative overflow-hidden border-t border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Kerala&apos;s Industrial &amp; Commercial Builders
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Read how Sthira&apos;s engineering precision and weather-resilient structures deliver long-term value to our clients.
          </p>
        </div>

        {/* 2x2 Grid of Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-[32px] bg-white border border-slate-200/80 p-8 space-y-6 relative shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200" />
                </div>

                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-base">
                    {rev.name}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center space-x-1 mt-0.5 font-medium">
                    <Building className="w-3 h-3 text-red-600 mr-1" />
                    <span>{rev.role} • {rev.location}</span>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                    {rev.project}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 font-semibold shadow-md">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Over 500 Successful Structural Projects Completed in All 14 Districts of Kerala</span>
          </div>
        </div>

      </div>
    </section>
  );
}
