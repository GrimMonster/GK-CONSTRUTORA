import React, { useState } from 'react';
import { Layers, CheckCircle2, Eye, Cpu, Compass } from 'lucide-react';

export const BlueprintViewer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'structure' | 'facade' | 'mep'>('all');
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('3d');

  const layersInfo = {
    all: {
      title: 'Modelo BIM Integrado Completo',
      details: 'Compatibilização total entre estrutura, arquitetura e sistemas prediais com colisão zero.',
      stats: '100% Compatibilizado'
    },
    structure: {
      title: 'Superestrutura & Concreto Protendido',
      details: 'Vigas em balanço de 14m, concreto CAD 60-100 MPa e armaduras tratadas antirruído.',
      stats: 'Tolerância 0.02 mm'
    },
    facade: {
      title: 'Fachada Termoacústica & Vidros Duplos',
      details: 'Caixilhos Schüco minimalistas, vidro insulado low-e com atenuação de 45dB.',
      stats: 'Desempenho Térmico A+'
    },
    mep: {
      title: 'Instalações MEP & Automação Crestron',
      details: 'Tubulações silenciosas, reuso de água pluviométrica e distribuição ótica em shaft duplo.',
      stats: 'Automação Total'
    }
  };

  return (
    <div className="w-full rounded-xl bg-[#141414] border border-[#D4AF37]/25 p-4 sm:p-6 overflow-hidden shadow-2xl relative">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#2D2D2D]">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="font-heading font-extrabold text-sm uppercase tracking-wider text-white">
            Navegador BIM 5D • Visualização Técnica
          </span>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center space-x-2 bg-[#0F0F0F] p-1 rounded-lg border border-white/10 text-xs">
          <button
            onClick={() => setViewMode('3d')}
            className={`px-3 py-1 rounded-md transition-all font-semibold uppercase ${
              viewMode === '3d'
                ? 'bg-[#D4AF37] text-[#0F0F0F] shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Visão Isometric 3D
          </button>
          <button
            onClick={() => setViewMode('2d')}
            className={`px-3 py-1 rounded-md transition-all font-semibold uppercase ${
              viewMode === '2d'
                ? 'bg-[#D4AF37] text-[#0F0F0F] shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Planta Baixa 2D
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative h-64 sm:h-80 w-full rounded-lg bg-[#0A0D14] architectural-blueprint-grid border border-[#D4AF37]/20 flex items-center justify-center overflow-hidden">
        {/* Decorative Grid Axes */}
        <div className="absolute top-3 left-3 flex items-center space-x-2 text-[10px] font-mono text-[#D4AF37]">
          <Compass className="w-3.5 h-3.5" />
          <span>NORTE ARQUITETÔNICO • ESCALA 1:50</span>
        </div>

        <div className="absolute top-3 right-3 text-[10px] font-mono text-neutral-400 bg-[#0F0F0F]/80 px-2 py-1 rounded border border-white/10">
          STATUS: VERIFICADO • CLASH DETECTED = 0
        </div>

        {/* Dynamic Blueprint Graphics */}
        <div className={`relative transition-all duration-500 w-full h-full flex items-center justify-center ${viewMode === '3d' ? 'rotate-[-12deg] skew-x-[12deg] scale-90' : 'scale-95'}`}>
          {/* Base Slab Layer */}
          <div className="absolute w-72 sm:w-96 h-48 rounded border-2 border-[#D4AF37]/40 bg-[#D4AF37]/5 flex flex-col justify-between p-3 transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <div className="flex justify-between items-start text-[9px] font-mono text-[#D4AF37]">
              <span>[EIXO A-1] ESTACAS DE CONCRETO 800mm</span>
              <span>L=24.50m</span>
            </div>

            {/* Structure Wireframe */}
            {(activeLayer === 'all' || activeLayer === 'structure') && (
              <div className="absolute inset-4 border border-dashed border-[#D4AF37] rounded flex items-center justify-center">
                <div className="w-full h-full border border-[#D4AF37]/60 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-[#D4AF37] bg-[#0F0F0F] px-2 py-1 rounded border border-[#D4AF37]/30">
                    BALANÇO PROTENDIDO 14.00m
                  </span>
                </div>
              </div>
            )}

            {/* Facade Layer */}
            {(activeLayer === 'all' || activeLayer === 'facade') && (
              <div className="absolute inset-0 border-4 border-cyan-400/40 rounded bg-cyan-500/5 animate-pulse">
                <span className="absolute bottom-2 right-2 text-[9px] font-mono text-cyan-300 bg-black/80 px-1.5 py-0.5 rounded">
                  CAIXILHO SCHÜCO HIGH-THERMAL
                </span>
              </div>
            )}

            {/* MEP Automation Layer */}
            {(activeLayer === 'all' || activeLayer === 'mep') && (
              <div className="absolute inset-2 border-2 border-emerald-400/50 rounded flex items-center justify-between px-6">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[9px] font-mono text-emerald-400 bg-black/80 px-2 py-0.5 rounded">
                  HUB CANBUS CRESTRON • SHAFT 01
                </span>
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>
            )}

            <div className="flex justify-between items-end text-[9px] font-mono text-[#D4AF37]">
              <span>ÁREA TOTAL: 1.450 m²</span>
              <span>PONTOS DE MEDIÇÃO: 148</span>
            </div>
          </div>
        </div>

        {/* Blueprint Measurement Overlay Lines */}
        <div className="absolute bottom-2 left-4 text-[10px] font-mono text-neutral-400">
          <span>DIMENSÃO NOMINAL: 32.40m x 44.75m</span>
        </div>
      </div>

      {/* Layer Selector Bar */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => setActiveLayer('all')}
          className={`p-2.5 rounded-lg border text-left transition-all ${
            activeLayer === 'all'
              ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white'
              : 'bg-[#1E1E1E] border-white/5 text-neutral-400 hover:text-white'
          }`}
        >
          <div className="flex items-center space-x-2 text-xs font-bold uppercase">
            <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Ver Tudo</span>
          </div>
          <span className="text-[10px] text-neutral-400 block mt-1">Modelo Integrado</span>
        </button>

        <button
          onClick={() => setActiveLayer('structure')}
          className={`p-2.5 rounded-lg border text-left transition-all ${
            activeLayer === 'structure'
              ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white'
              : 'bg-[#1E1E1E] border-white/5 text-neutral-400 hover:text-white'
          }`}
        >
          <div className="flex items-center space-x-2 text-xs font-bold uppercase">
            <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Estrutura</span>
          </div>
          <span className="text-[10px] text-neutral-400 block mt-1">Concreto & Aço</span>
        </button>

        <button
          onClick={() => setActiveLayer('facade')}
          className={`p-2.5 rounded-lg border text-left transition-all ${
            activeLayer === 'facade'
              ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white'
              : 'bg-[#1E1E1E] border-white/5 text-neutral-400 hover:text-white'
          }`}
        >
          <div className="flex items-center space-x-2 text-xs font-bold uppercase">
            <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Fachada</span>
          </div>
          <span className="text-[10px] text-neutral-400 block mt-1">Pele de Vidro</span>
        </button>

        <button
          onClick={() => setActiveLayer('mep')}
          className={`p-2.5 rounded-lg border text-left transition-all ${
            activeLayer === 'mep'
              ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white'
              : 'bg-[#1E1E1E] border-white/5 text-neutral-400 hover:text-white'
          }`}
        >
          <div className="flex items-center space-x-2 text-xs font-bold uppercase">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Automação</span>
          </div>
          <span className="text-[10px] text-neutral-400 block mt-1">Sistemas MEP</span>
        </button>
      </div>

      {/* Active Layer Description */}
      <div className="mt-4 p-3 rounded-lg bg-[#181818] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div>
          <h4 className="text-xs font-bold text-white uppercase">{layersInfo[activeLayer].title}</h4>
          <p className="text-[11px] text-neutral-400 mt-0.5">{layersInfo[activeLayer].details}</p>
        </div>
        <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30 whitespace-nowrap">
          {layersInfo[activeLayer].stats}
        </span>
      </div>
    </div>
  );
};
