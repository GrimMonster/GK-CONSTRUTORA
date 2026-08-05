import React from 'react';
import { DIFFERENTIALS_DATA } from '../data/differentialsData';
import { BlueprintViewer } from './BlueprintViewer';
import { Cpu, Leaf, Clock, ShieldCheck, Check, Sparkles, ArrowRight } from 'lucide-react';

interface BentoGridProps {
  onOpenQuoteModal: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#D4AF37]" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#D4AF37]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#2D2D2D]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#2D2D2D]">
          <div>
            <div className="flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span>Diferenciais de Engenharia</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight max-w-2xl leading-tight">
              A RIGIDEZ DO CONCRETO. A <span className="gold-text-gradient">FLUIDEZ DA TECNOLOGIA.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Eliminamos os vícios da construção civil tradicional através de engenharia pré-fabricada, compatibilização BIM 5D e gestão transparente em tempo real.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Precisão Milimétrica (Large 7 Columns) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#1A1A1A]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2D2D2D] border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                    {getIcon('Cpu')}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">
                      DIFERENCIAL 01
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-wide">
                      Precisão Milimétrica & BIM 5D
                    </h3>
                  </div>
                </div>
                <span className="font-heading font-black text-3xl text-neutral-700 group-hover:text-[#D4AF37]/30 transition-colors">
                  01
                </span>
              </div>

              <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                Eliminamos 100% dos retrabalhos em obra com escaneamento a laser 3D e compatibilização digital antes do primeiro caminhão de concreto chegar ao canteiro.
              </p>

              {/* Embedded Interactive 3D BIM Viewer */}
              <div className="mt-4" id="tecnologia-bim">
                <BlueprintViewer />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-neutral-400">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Compatibilização Total sem Interferências</span>
              </div>
              <button
                onClick={onOpenQuoteModal}
                className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white flex items-center space-x-1 transition-colors"
              >
                <span>Saiba mais sobre nosso processo BIM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Sustentabilidade Ativa (Medium 5 Columns) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#1A1A1A]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2D2D2D] border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                    {getIcon('Leaf')}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">
                      DIFERENCIAL 02
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-wide">
                      Sustentabilidade Ativa & ESG
                    </h3>
                  </div>
                </div>
                <span className="font-heading font-black text-3xl text-neutral-700 group-hover:text-[#D4AF37]/30 transition-colors">
                  02
                </span>
              </div>

              <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                Obras projetadas com ciclo de vida sustentável, utilizando concretos com menor emissão de carbono, captação pluvial e certificações verdes garantidas em contrato.
              </p>

              {/* Metric Card */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#252525] to-[#181818] border border-emerald-500/20 mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                <span className="text-4xl font-heading font-black text-emerald-400 block tracking-tight">
                  -40%
                </span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider mt-1 block">
                  Consumo Hídrico & Energético Pós-Obra
                </span>
                <p className="text-[11px] text-neutral-400 mt-2">
                  Metodologia alinhada aos padrões internacionais LEED Platinum e WELL Building.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-neutral-300 font-light">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Gestão inteligente com reciclabilidade de resíduos &gt;90%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Cálculo automatizado de crédito de carbono em tempo real</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <span className="text-[11px] font-mono text-[#D4AF37] uppercase">
                CERTIFICAÇÕES: LEED • WELL • AQUA-HQE • ISO 14001
              </span>
            </div>
          </div>

          {/* Card 3: Prazo Rigoroso (5 Columns) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#1A1A1A]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2D2D2D] border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                    {getIcon('Clock')}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">
                      DIFERENCIAL 03
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-wide">
                      Prazo Rigoroso Industrializado
                    </h3>
                  </div>
                </div>
                <span className="font-heading font-black text-3xl text-neutral-700 group-hover:text-[#D4AF37]/30 transition-colors">
                  03
                </span>
              </div>

              <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                Cumprimos cronogramas com rigor militar sob a metodologia Last Planner®. Cláusulas contratuais com garantia real de data de entrega.
              </p>

              {/* Big Highlight */}
              <div className="p-6 rounded-xl bg-[#0F0F0F] border border-[#D4AF37]/30 text-center relative overflow-hidden">
                <span className="text-3xl sm:text-4xl font-heading font-black gold-text-gradient block">
                  100% PONTUAL
                </span>
                <span className="text-xs font-semibold text-neutral-300 uppercase tracking-widest mt-1 block">
                  Zero Atrasos em 20+ Anos de História
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Contrato com multa diária reversa</span>
              <span className="text-xs font-bold text-[#D4AF37]">Metodologia Lean</span>
            </div>
          </div>

          {/* Card 4: Gestão Transparente (7 Columns) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#1A1A1A]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2D2D2D] border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                    {getIcon('ShieldCheck')}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">
                      DIFERENCIAL 04
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-wide">
                      Gestão Transparente & Portal do Cliente 24/7
                    </h3>
                  </div>
                </div>
                <span className="font-heading font-black text-3xl text-neutral-700 group-hover:text-[#D4AF37]/30 transition-colors">
                  04
                </span>
              </div>

              <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                Transmissão em tempo real 4K da obra via drone e câmeras fixas, diários de obra digitais atualizados diariamente e notas fiscais auditáveis em um portal exclusivo.
              </p>

              {/* Live Streaming Mock Preview */}
              <div className="relative rounded-xl overflow-hidden border border-[#2D2D2D]">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80"
                  alt="Canteiro de Obras em Tempo Real"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/60 p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2 bg-red-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span>LIVE 4K • CANTEIRO ALPHAVILLE</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-300 bg-black/70 px-2 py-1 rounded">
                      CAM-03 • TIPO SLAB
                    </span>
                  </div>

                  <div className="text-left">
                    <p className="text-xs font-bold text-white uppercase">Etapa: Concretagem de Laje Protendida 03</p>
                    <p className="text-[10px] text-neutral-300 font-mono">Status: Conforme Cronograma BIM • Medição OK</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">Acesso via iOS, Android ou Web Browser</span>
              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2 rounded-md bg-[#D4AF37] text-[#0F0F0F] text-xs font-extrabold uppercase tracking-wider hover:bg-[#F3E5AB] transition-colors"
              >
                Solicitar Demonstração do Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
