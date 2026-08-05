import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Building2, ShieldCheck, Cpu, Award } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreProjects }) => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1 },
          '-=0.4'
        )
        .fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0F0F0F] architectural-grid">
      {/* Background Architectural Image with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
          alt="GK Construtora - Arquitetura de Alto Padrão"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Dark vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/70 to-[#0F0F0F]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-transparent to-[#0F0F0F]" />
      </div>

      {/* Decorative Gold Laser Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent z-10" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1E1E1E]/80 border border-[#D4AF37]/40 mb-8 backdrop-blur-md shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-[#F5F5F5] uppercase">
            Industrial Luxury & Precision • Engenharia de Elite
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F5F5] uppercase leading-[0.92] max-w-5xl mb-8"
        >
          CONSTRUINDO ONDE O <span className="gold-text-gradient">DESIGN</span> ENCONTRA A ENGENHARIA.
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-3xl mb-12 leading-relaxed tracking-wide"
        >
          Transformamos visões arquitetônicas em marcos de concreto, vidro e estrutura protendida.
          Excelência milimétrica do alicerce ao acabamento de alto padrão.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <button
            onClick={onExploreProjects}
            className="w-full sm:w-auto relative group px-8 py-4 rounded-md bg-[#D4AF37] text-[#0F0F0F] font-heading font-extrabold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#F3E5AB] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Conheça Nossas Obras</span>
              <Building2 className="w-4 h-4 transition-transform group-hover:rotate-12" />
            </span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#1E1E1E]/90 border border-[#D4AF37]/50 text-[#F5F5F5] font-heading font-semibold text-sm uppercase tracking-widest hover:border-[#D4AF37] hover:bg-[#2D2D2D] transition-all duration-300 backdrop-blur-md"
          >
            Simular Orçamento BIM
          </button>
        </div>

        {/* Key Credentials Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 w-full max-w-4xl pt-8 border-t border-[#2D2D2D]/60 text-left">
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-[#1A1A1A]/40 border border-white/5">
            <Cpu className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tecnologia BIM 5D</h4>
              <p className="text-[11px] text-neutral-400 font-light mt-0.5">Tolerância zero de interferências</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-lg bg-[#1A1A1A]/40 border border-white/5">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">0 Atrasos</h4>
              <p className="text-[11px] text-neutral-400 font-light mt-0.5">Garantia rígida em contrato</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-lg bg-[#1A1A1A]/40 border border-white/5">
            <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Selo LEED Platinum</h4>
              <p className="text-[11px] text-neutral-400 font-light mt-0.5">Construção verde e sustentável</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-lg bg-[#1A1A1A]/40 border border-white/5">
            <Building2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">+500.000 m²</h4>
              <p className="text-[11px] text-neutral-400 font-light mt-0.5">Obras executadas no Brasil</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium">Scroll down</span>
        <ArrowDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
      </div>
    </section>
  );
};
