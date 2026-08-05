import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { Maximize2, MapPin, Building2, ArrowUpRight, Filter } from 'lucide-react';

interface ProjectShowcaseProps {
  onRequestQuoteForProject: (projectTitle: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onRequestQuoteForProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('todos');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'todos', label: 'Todas as Obras' },
    { id: 'residencial', label: 'Residencial de Luxo' },
    { id: 'corporativo', label: 'Corporativo Icon' },
    { id: 'penthouse', label: 'Pent-houses' },
    { id: 'icone', label: 'Marcos Arquitetônicos' },
  ];

  const filteredProjects = selectedCategory === 'todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-24 bg-[#0F0F0F] relative overflow-hidden architectural-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#2D2D2D]">
          <div>
            <div className="flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span>Showcase de Obras Emblemáticas</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              PORTFÓLIO DE <span className="gold-text-gradient">EXCELÊNCIA</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Cada obra é um monumento à engenharia de precisão e ao rigor do acabamento. Explore nossos projetos de destaque no Brasil.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-6 mb-10 no-scrollbar">
          <div className="flex items-center space-x-2 bg-[#1A1A1A] p-1.5 rounded-xl border border-white/10">
            <div className="px-3 py-2 text-xs font-bold text-neutral-400 uppercase flex items-center space-x-2">
              <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Filtrar:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF37] text-[#0F0F0F] shadow-lg shadow-[#D4AF37]/20'
                    : 'text-neutral-400 hover:text-white hover:bg-[#252525]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#181818] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between"
            >
              {/* Image Container with Parallax Hover */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                  {project.status}
                </div>

                {/* Area Tag */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                  {project.area}
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                  <span className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#0F0F0F] font-heading font-black text-xs uppercase tracking-wider flex items-center space-x-2 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span>Ver Memorial Completo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 bg-[#181818]">
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] mb-1">
                  <span>{project.categoryLabel}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-xs font-light line-clamp-2 mb-4">
                  {project.subtitle}
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-300">
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="font-medium text-neutral-300">{project.location}</span>
                  </div>
                  <span className="font-bold text-[#D4AF37]">{project.vgv || 'Ver VGV'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onRequestQuoteForProject={onRequestQuoteForProject}
      />
    </section>
  );
};
