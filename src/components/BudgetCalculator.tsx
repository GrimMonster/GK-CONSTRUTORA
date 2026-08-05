import React, { useState } from 'react';
import { Calculator, Sparkles, Sliders, CheckSquare, Square, ShieldCheck, ArrowRight, Download, Cpu, HardHat } from 'lucide-react';
import { BIMCalculationState } from '../types';

interface BudgetCalculatorProps {
  onGenerateProposal: (summary: string) => void;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ onGenerateProposal }) => {
  const [calcState, setCalcState] = useState<BIMCalculationState>({
    projectType: 'residencial',
    areaSquareMeters: 800,
    finishLevel: 'ultra',
    location: 'sp-faria-lima',
    options: {
      helipad: false,
      infinityPool: true,
      crestronAutomation: true,
      leedPlatinum: true,
      solarFacade: false,
    },
  });

  const baseRatesPerM2 = {
    signature: 9500,
    ultra: 14500,
    master: 22000,
  };

  const projectMultipliers = {
    residencial: 1.0,
    corporativo: 1.15,
    retrofit: 0.9,
    penthouse: 1.35,
  };

  const calculateResults = () => {
    const basePrice = calcState.areaSquareMeters * baseRatesPerM2[calcState.finishLevel] * projectMultipliers[calcState.projectType];

    let addonsTotal = 0;
    if (calcState.options.helipad) addonsTotal += 1800000;
    if (calcState.options.infinityPool) addonsTotal += 850000;
    if (calcState.options.crestronAutomation) addonsTotal += 650000;
    if (calcState.options.leedPlatinum) addonsTotal += 950000;
    if (calcState.options.solarFacade) addonsTotal += 1200000;

    const totalEstimateMin = Math.round((basePrice + addonsTotal) * 0.95);
    const totalEstimateMax = Math.round((basePrice + addonsTotal) * 1.05);

    // Timeline estimation
    const monthsMin = Math.max(8, Math.round(10 + (calcState.areaSquareMeters / 150)));
    const monthsMax = monthsMin + 3;

    // BIM Savings
    const bimSavingsPercent = 18;
    const carbonMitigated = Math.round(calcState.areaSquareMeters * 0.32);

    return {
      totalEstimateMin,
      totalEstimateMax,
      monthsMin,
      monthsMax,
      bimSavingsPercent,
      carbonMitigated,
    };
  };

  const results = calculateResults();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const toggleOption = (key: keyof BIMCalculationState['options']) => {
    setCalcState((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [key]: !prev.options[key],
      },
    }));
  };

  const handleGenerateClick = () => {
    const summary = `Simulação BIM: Projetar ${calcState.projectType.toUpperCase()} de ${calcState.areaSquareMeters}m², padrão ${calcState.finishLevel.toUpperCase()}, orçamento aproximado ${formatCurrency(results.totalEstimateMin)} a ${formatCurrency(results.totalEstimateMax)}.`;
    onGenerateProposal(summary);
  };

  return (
    <section id="simulador" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              Simulador Paramétrico de Engenharia
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
            ESTIME SEU <span className="gold-text-gradient">INVESTIMENTO BIM</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            Calcule o valor estimado, prazo de execução e economia gerada por tecnologia BIM 5D com base nas métricas reais da GK Construtora.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (7 cols) */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
            {/* 1. Project Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-3">
                1. Tipo de Empreendimento
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'residencial', label: 'Residencial Luxo' },
                  { id: 'corporativo', label: 'Corporativo AAA' },
                  { id: 'penthouse', label: 'Pent-house' },
                  { id: 'retrofit', label: 'Retrofit Fino' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setCalcState((prev) => ({
                        ...prev,
                        projectType: item.id as BIMCalculationState['projectType'],
                      }))
                    }
                    className={`p-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all text-center ${
                      calcState.projectType === item.id
                        ? 'bg-[#D4AF37] text-[#0F0F0F] border-[#D4AF37] shadow'
                        : 'bg-[#1E1E1E] text-neutral-300 border-white/5 hover:bg-[#282828]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  2. Área Construída Total (m²)
                </label>
                <span className="text-xl font-heading font-black text-white bg-[#1E1E1E] px-4 py-1 rounded-lg border border-[#D4AF37]/40">
                  {calcState.areaSquareMeters.toLocaleString('pt-BR')} m²
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="5000"
                step="50"
                value={calcState.areaSquareMeters}
                onChange={(e) =>
                  setCalcState((prev) => ({
                    ...prev,
                    areaSquareMeters: Number(e.target.value),
                  }))
                }
                className="w-full h-2 bg-[#2D2D2D] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
                <span>300 m² (Mansão / Triplex)</span>
                <span>2.500 m²</span>
                <span>5.000 m² (Torre Corporativa)</span>
              </div>
            </div>

            {/* 3. Finish Level */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-3">
                3. Padrão de Acabamento & Especificação
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'signature',
                    label: 'Signature',
                    desc: 'Mármores Nacionais, Vidro Duplo, Porcelanato 120x120',
                    rate: 'R$ 9.500/m²',
                  },
                  {
                    id: 'ultra',
                    label: 'Ultra-Luxury',
                    desc: 'Travertino Navona, Caixilhos Schüco, Climatização VRF',
                    rate: 'R$ 14.500/m²',
                  },
                  {
                    id: 'master',
                    label: 'Master Bespoke',
                    desc: 'Especialistas internacionais, fibra de carbono, acabamentos CNC',
                    rate: 'R$ 22.000/m²',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setCalcState((prev) => ({
                        ...prev,
                        finishLevel: item.id as BIMCalculationState['finishLevel'],
                      }))
                    }
                    className={`p-4 rounded-xl text-left border transition-all ${
                      calcState.finishLevel === item.id
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white shadow-lg'
                        : 'bg-[#1E1E1E] border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-extrabold uppercase text-white">{item.label}</span>
                      <span className="text-[10px] font-mono text-[#D4AF37]">{item.rate}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-tight">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Options */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-3">
                4. Opcionais de Alta Tecnologia & Conforto
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { key: 'infinityPool' as const, label: 'Piscina com borda em vidro acrílico 80mm' },
                  { key: 'crestronAutomation' as const, label: 'Automação Integral Crestron + Lutron' },
                  { key: 'leedPlatinum' as const, label: 'Selo LEED Platinum & Poços Geotérmicos' },
                  { key: 'helipad' as const, label: 'Heliponto homologado para até 6 Toneladas' },
                  { key: 'solarFacade' as const, label: 'Fachada Solar Fotovoltaica Integrada (BIPV)' },
                ].map((opt) => {
                  const isChecked = calcState.options[opt.key];
                  return (
                    <button
                      key={opt.key}
                      onClick={() => toggleOption(opt.key)}
                      className={`p-3 rounded-lg border text-left flex items-center space-x-3 transition-all ${
                        isChecked
                          ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white'
                          : 'bg-[#1E1E1E] border-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-neutral-600 shrink-0" />
                      )}
                      <span className="text-xs font-medium">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Output Panel (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1E1E1E] to-[#121212] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl relative">
            <div className="border-b border-[#2D2D2D] pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block">
                RELATÓRIO PARAMÉTRICO PRELIMINAR
              </span>
              <h3 className="font-heading font-black text-2xl text-white uppercase mt-1">
                MEMORIAL DE INVESTIMENTO
              </h3>
            </div>

            {/* Total Estimated Cost */}
            <div className="p-6 rounded-xl bg-[#0F0F0F] border border-[#D4AF37]/30 text-center relative overflow-hidden">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                FAIXA ESTIMADA DE INVESTIMENTO TOTAL
              </span>
              <div className="text-2xl sm:text-3xl font-heading font-black gold-text-gradient my-1">
                {formatCurrency(results.totalEstimateMin)}
              </div>
              <span className="text-xs text-neutral-400 block font-light">
                até {formatCurrency(results.totalEstimateMax)}
              </span>
              <div className="mt-3 pt-3 border-t border-white/10 text-[10px] text-neutral-400 font-mono">
                *Inclui gerenciamento de obra, compras BIM e garantia total de 5 anos.
              </div>
            </div>

            {/* Timeline & BIM Savings */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#141414] border border-white/5">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">CRONOGRAMA ESTIMADO</span>
                <span className="text-2xl font-heading font-extrabold text-white block mt-1">
                  {results.monthsMin} a {results.monthsMax} meses
                </span>
                <span className="text-[10px] text-emerald-400 font-bold block mt-1">
                  -18% por pré-fabricação
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-white/5">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">MITIGAÇÃO CO₂</span>
                <span className="text-2xl font-heading font-extrabold text-emerald-400 block mt-1">
                  {results.carbonMitigated} Ton
                </span>
                <span className="text-[10px] text-neutral-400 block mt-1">
                  Pegada de carbono evitada
                </span>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center space-x-3">
              <HardHat className="w-6 h-6 text-[#D4AF37] shrink-0" />
              <p className="text-xs text-neutral-300 font-light leading-snug">
                Orçamento fechado com clausulado de <strong className="text-white font-bold">preço máximo garantido (GMP)</strong> e sem surpresas.
              </p>
            </div>

            {/* Actions */}
            <button
              onClick={handleGenerateClick}
              className="w-full py-4 px-6 rounded-xl bg-[#D4AF37] text-[#0F0F0F] font-heading font-extrabold text-xs uppercase tracking-widest hover:bg-[#F3E5AB] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Agendar Reunião com Engenheiro Chefe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
