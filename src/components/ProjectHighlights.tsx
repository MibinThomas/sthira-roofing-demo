"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Layers, Eye, X, MessageSquare } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  area: string;
  tonnage: string;
  duration: string;
  img: string;
  desc: string;
}

export default function ProjectHighlights() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Kerala Central Logistics Hub",
      category: "Warehouses",
      location: "Ernakulam / Kochi, Kerala",
      area: "45,000 sq. ft",
      tonnage: "210 Metric Tons",
      duration: "45 Days",
      img: "/images/peb_warehouse_kerala.jpg",
      desc: "Massive 36-meter clear span warehouse built for a leading logistics operator in Kalamassery, Kochi. Features high eave clearance, 12 loading docks, and AZ150 Galvalume standing seam roof.",
    },
    {
      id: 2,
      title: "Industrial Heavy Machinery Plant",
      category: "Factory Sheds",
      location: "Kinfra Industrial Park, Palakkad",
      area: "32,000 sq. ft",
      tonnage: "165 Metric Tons",
      duration: "38 Days",
      img: "/images/factory_structure_steel.jpg",
      desc: "Heavy structural steel factory shed equipped with a 20-Ton EOT crane girder system, skylight daylight harvesting panels, and continuous ridge ventilation.",
    },
    {
      id: 3,
      title: "Commercial Retail & Multi-Deck Center",
      category: "PEB Buildings",
      location: "Calicut / Kozhikode, Kerala",
      area: "28,000 sq. ft",
      tonnage: "120 Metric Tons",
      duration: "30 Days",
      img: "/images/hero_peb_roofing.jpg",
      desc: "Modern 3-story steel PEB commercial building featuring an integrated mezzanine deck floor slab, custom glass facade framing, and insulated sandwich panel roofing.",
    },
    {
      id: 4,
      title: "PUF Insulated Cold Chain Terminal",
      category: "Warehouses",
      location: "Thrissur, Kerala",
      area: "18,000 sq. ft",
      tonnage: "85 Metric Tons",
      duration: "25 Days",
      img: "/images/roofing_materials_showcase.jpg",
      desc: "Temperature-controlled cold storage warehouse built using 80mm PUF sandwich panels, achieving high thermal insulation and zero condensation.",
    },
    {
      id: 5,
      title: "Luxury Eco-Villa Architectural Metal Roof",
      category: "Residential",
      location: "Kottayam, Kerala",
      area: "6,500 sq. ft",
      tonnage: "14 Metric Tons",
      duration: "14 Days",
      img: "/images/residential_metal_roof.jpg",
      desc: "Heritage aesthetic residential metal tile roof with dark slate PVDF finish, offering 100% leak proof protection against intense monsoon rain.",
    },
  ];

  const categories = ["All", "Warehouses", "Factory Sheds", "PEB Buildings", "Residential"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Featured Projects Across Kerala
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our portfolio of completed PEB warehouses, factory structures, commercial centers, and premium metal roofs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 border ${
                activeFilter === cat
                  ? "bg-[#ff0015] text-white border-red-600 shadow-lg shadow-red-500/25 scale-105"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-[32px] bg-white border border-slate-200/80 overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-red-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 text-red-600 font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-md border border-slate-100">
                  {project.category}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 p-3 rounded-full bg-[#ff0015] hover:bg-red-700 text-white shadow-lg shadow-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="View Project Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs text-red-600 font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Specs pill bar */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs font-semibold">
                  <div className="flex items-center space-x-1.5 text-slate-700">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{project.duration}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Preview */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="rounded-[36px] bg-white border border-slate-200 max-w-2xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 w-full rounded-[24px] overflow-hidden border border-slate-100 shadow-md">
                <Image
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <span className="px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 font-bold text-xs uppercase tracking-wider border border-red-200">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedProject.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedProject.desc}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-[20px] bg-slate-50 border border-slate-200 text-center">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Total Area</div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">{selectedProject.area}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Steel Tonnage</div>
                  <div className="font-bold text-red-600 text-sm sm:text-base">{selectedProject.tonnage}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Execution Time</div>
                  <div className="font-bold text-emerald-600 text-sm sm:text-base">{selectedProject.duration}</div>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-medium">Location: {selectedProject.location}</span>
                <a
                  href={`https://wa.me/919876543210?text=Hi%20Sthira%20Team%2C%20I%20am%20interested%20in%20building%20a%20project%20similar%20to%20${encodeURIComponent(selectedProject.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Similar Project</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
