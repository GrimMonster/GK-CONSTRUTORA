import React, { useState } from 'react';
import { Project } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2, Calendar, UserCheck, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestQuoteForProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuoteForProject,
}) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#141414] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl my-auto text-white">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#2D2D2D] bg-[#0F0F0F]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
              {project.categoryLabel} • STATUS: {project.status.toUpperCase()}
            </span>
            <h2 className="font-heading font-black text-xl sm:text-3xl text-white uppercase tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#2D2D2D] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-neutral-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Main Gallery Slider */}
          <div className="relative rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/10 group">
            <img
              src={project.gallery[activeImageIndex]}
              alt={`${project.title} - foto ${activeImageIndex + 1}`}
              className="w-full h-72 sm:h-96 md:h-[450px] object-cover transition-all duration-500"
            />

            {/* Slider Navigation Controls */}
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black transition-colors backdrop-blur-md"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black transition-colors backdrop-blur-md"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Thumbnails */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 p-1.5 rounded-lg bg-black/60 backdrop-blur-md">
                  {project.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-12 h-10 rounded overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx ? 'border-[#D4AF37] scale-105' : 'border-transparent opacity-60'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Quick Specs Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5">
              <div className="flex items-center space-x-2 text-[#D4AF37] mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-wider font-bold">Localização</span>
              </div>
              <p className="text-sm font-semibold text-white">{project.location}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5">
              <div className="flex items-center space-x-2 text-[#D4AF37] mb-1">
                <Maximize2 className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-wider font-bold">Área Construída</span>
              </div>
              <p className="text-sm font-semibold text-white">{project.area}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5">
              <div className="flex items-center space-x-2 text-[#D4AF37] mb-1">
                <UserCheck className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-wider font-bold">Projeto Arquitetônico</span>
              </div>
              <p className="text-sm font-semibold text-white">{project.architect}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5">
              <div className="flex items-center space-x-2 text-[#D4AF37] mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-wider font-bold">Ano de Entrega</span>
              </div>
              <p className="text-sm font-semibold text-white">{project.year}</p>
            </div>
          </div>

          {/* Project Details and Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-heading font-extrabold text-lg uppercase tracking-wide text-white">
                Memorial Descritivo & Desafios de Engenharia
              </h3>
              <p className="text-neutral-300 text-sm font-light leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                  Destaques e Especificações Técnicas
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {project.highlights.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 bg-[#1E1E1E] p-2.5 rounded-lg border border-white/5">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* VGV and Action Panel */}
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/30 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
                  ESTIMATIVA VGV / INVESTIMENTO
                </span>
                <span className="text-3xl font-heading font-black text-white block mt-1">
                  {project.vgv || 'Consulte VGV'}
                </span>
                <p className="text-[11px] text-neutral-400 mt-2 font-light">
                  Construção executada sob regime de empreitada global com tabela BIM 5D de insumos.
                </p>
              </div>

              {project.floorPlanImage && (
                <div className="rounded-lg overflow-hidden border border-white/10 p-2 bg-black/40">
                  <span className="text-[9px] font-mono text-neutral-400 block mb-1">PLANTA DE ARQUITETURA</span>
                  <img src={project.floorPlanImage} alt="Planta Baixa" className="w-full h-24 object-cover rounded" />
                </div>
              )}

              <button
                onClick={() => {
                  onClose();
                  onRequestQuoteForProject(project.title);
                }}
                className="w-full py-3.5 px-4 rounded-lg bg-[#D4AF37] text-[#0F0F0F] font-heading font-black text-xs uppercase tracking-wider hover:bg-[#F3E5AB] transition-colors flex items-center justify-center space-x-2"
              >
                <span>Solicitar Projeto Semelhante</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
