"use client";

import { useState } from "react";
import { MessageSquare, Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactCta() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "Ernakulam / Kochi",
    scope: "Pre-Engineered Building (PEB)",
    area: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const districts = [
    "Ernakulam / Kochi",
    "Kozhikode / Calicut",
    "Thiruvananthapuram",
    "Thrissur",
    "Palakkad",
    "Kottayam",
    "Malappuram",
    "Kannur",
    "Kollam",
    "Alappuzha",
    "Idukki",
    "Wayanad",
    "Pathanamthitta",
    "Kasaragod",
  ];

  const scopes = [
    "Pre-Engineered Building (PEB)",
    "Industrial Roofing Sheets",
    "PUF Insulated Sandwich Panels",
    "Standing Seam Roofing",
    "Residential Metal Tile Roof",
    "Roof Repair & Retrofitting",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waPayload = encodeURIComponent(
      `Hi Sthira Team, I submitted an inquiry on your website:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Location: ${formData.district}, Kerala\n` +
      `• Project Type: ${formData.scope}\n` +
      `• Estimated Area: ${formData.area || "N/A"} sq.ft\n` +
      `• Note: ${formData.message || "Please provide quotation & site inspection details."}`
    );

    window.open(`https://wa.me/919876543210?text=${waPayload}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f2f6fa] text-slate-900 relative overflow-hidden border-t border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-widest shadow-sm">
                <Send className="w-3.5 h-3.5 mr-1" />
                <span>Get Project Estimate</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Request a Free Quote &amp; Site Inspection
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Planning a new warehouse, factory shed, commercial roof, or residential metal roof in Kerala? Fill in your project details to connect directly with our structural engineers.
              </p>
            </div>

            {/* Direct Details Card */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-4 p-4.5 rounded-[24px] bg-white border border-slate-200/80 shadow-md">
                <div className="p-3 rounded-2xl bg-red-50 text-red-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Phone / Direct Hotline</div>
                  <div className="font-bold text-slate-900 text-base">+91 98765 43210</div>
                  <div className="text-xs text-slate-500">Mon - Sat: 8:30 AM - 6:30 PM</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4.5 rounded-[24px] bg-white border border-slate-200/80 shadow-md">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">WhatsApp Priority Line</div>
                  <div className="font-bold text-emerald-600 text-base">+91 98765 43210</div>
                  <div className="text-xs text-slate-500">Instant PDF Quotation &amp; Engineering Drawings</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4.5 rounded-[24px] bg-white border border-slate-200/80 shadow-md">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Head Office</div>
                  <div className="font-bold text-slate-900 text-sm">
                    Sthira Roofing &amp; PEB Building Solutions
                  </div>
                  <div className="text-xs text-slate-500">
                    Industrial Development Plot, Edappally, Kochi, Kerala - 682024
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Free On-Site Measurement &amp; Preliminary Structural Calculation</span>
            </div>

          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-[36px] bg-white border border-slate-200/80 p-6 sm:p-10 shadow-2xl shadow-slate-200/40 space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-black text-slate-900">
                  Quick Quote Request Form
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below to get an instant calculation sent to your WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-slate-50 rounded-[24px] border border-slate-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-slate-900">Inquiry Sent Successfully!</h4>
                  <p className="text-sm text-slate-600">
                    Opening WhatsApp with your project parameters. Our Kerala engineering desk will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="full-name-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name *</label>
                      <input
                        id="full-name-input"
                        type="text"
                        required
                        placeholder="e.g. Rahul Nair"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3.5 rounded-[16px] bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-red-500 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone-number-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                      <input
                        id="phone-number-input"
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3.5 rounded-[16px] bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-red-500 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="district-select" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Kerala District *</label>
                      <select
                        id="district-select"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full p-3.5 rounded-[16px] bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-red-500 focus:bg-white focus:outline-none transition-colors"
                      >
                        {districts.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="scope-select" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Project Type *</label>
                      <select
                        id="scope-select"
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full p-3.5 rounded-[16px] bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-red-500 focus:bg-white focus:outline-none transition-colors"
                      >
                        {scopes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="approx-area-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Approximate Area (Sq. Ft)</label>
                    <input
                      id="approx-area-input"
                      type="text"
                      placeholder="e.g. 10,000 sq ft"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full p-3.5 rounded-[16px] bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-red-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="project-details-textarea" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Project Notes / Requirements</label>
                    <textarea
                      id="project-details-textarea"
                      rows={3}
                      placeholder="Mention building height, site location, or specific roofing sheet preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-[16px] bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-red-500 focus:bg-white focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#ff0015] hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center space-x-2 shadow-lg shadow-red-500/25 transition-all duration-200"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    <span>Submit &amp; Chat on WhatsApp</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
