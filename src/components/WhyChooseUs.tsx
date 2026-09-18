"use client";

import { CloudRain, ShieldCheck, Zap, Award, DollarSign, MapPin, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <CloudRain className="w-8 h-8 text-blue-600" />,
      title: "Kerala Monsoon Engineering",
      desc: "Custom steep-pitch rafter geometry, extra-wide gutter discharges, and anti-capillary side-lap grooves engineered specifically to tackle Kerala's 3,000+ mm annual rainfall.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: "Certified AZ150 Galvalume Steel",
      desc: "Using prime grade Tata BlueScope and JSW Galvalume sheets with 150g/sq.m aluminum-zinc coating, offering 4x higher corrosion resistance than standard GI sheets.",
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-600" />,
      title: "40% Faster Execution Speed",
      desc: "Computerized off-site fabrication ensures rapid bolt-together assembly on site, cutting project commissioning timelines from 8 months (RCC) to just 60 days.",
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "10-Year Leakproof Guarantee",
      desc: "Every Sthira roof installation and PEB structure comes with a formal 10-Year Workmanship & Weatherproof Warranty for complete peace of mind.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-600" />,
      title: "25% Capital Cost Savings",
      desc: "Lighter dead load reduces heavy foundation excavation costs by up to 30%, making PEB structures far more economical than concrete buildings.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-rose-600" />,
      title: "All-Kerala On-Site Service",
      desc: "Resident engineering teams and erection crews stationed across Ernakulam, Kozhikode, Thiruvananthapuram, Thrissur, Palakkad, and Kannur.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#f2f6fa] text-slate-900 relative overflow-hidden border-t border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span>The Sthira Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why Kerala&apos;s Industrial Leaders Choose Sthira
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We combine high-tensile steel technology, precision CAD design, and localized climate expertise to deliver unmatched building performance.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-red-300 hover:-translate-y-1 transition-all duration-300 space-y-5 group relative"
            >
              <div className="p-4 rounded-2xl bg-slate-50 w-fit border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="pt-2 flex items-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5" /> Verified Quality Standard
              </div>
            </div>
          ))}
        </div>

        {/* Brand Material Trust Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-xl shadow-slate-200/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-red-50 text-red-600 font-black text-lg border border-red-200">
              JSW / TATA
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm sm:text-base">
                Authorized Steel &amp; Sheet Fabrication Standards
              </div>
              <div className="text-xs text-slate-500">
                Guaranteed yield strength certificates provided with every structural batch.
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%20Sthira%20Team%2C%20I%20would%20like%20to%20consult%20on%20material%20specifications%20for%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            Consult Structural Engineers
          </a>
        </div>

      </div>
    </section>
  );
}
