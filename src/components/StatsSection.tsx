import React, { useEffect, useRef } from 'react';
import { STATS_DATA } from '../data/differentialsData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ShieldCheck, CheckCircle2, Trophy, Building, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const StatsSection: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = document.querySelectorAll('.stat-number');

      counters.forEach((counter) => {
        const targetValue = parseFloat(counter.getAttribute('data-target') || '0');
        const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);

        gsap.to(counter, {
          innerText: targetValue,
          duration: 2.5,
          ease: 'power2.out',
          snap: { innerText: decimals > 0 ? 0.1 : 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
          },
          onUpdate: function () {
            const current = parseFloat(counter.textContent || '0');
            counter.textContent = current.toFixed(decimals);
          },
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="legado" ref={statsRef} className="py-24 bg-[#0F0F0F] relative overflow-hidden border-y border-[#2D2D2D]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              Solidez Comprovada em Números
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            O IMPACTO DE UMA <span className="gold-text-gradient">ENGENHARIA DE ELITE</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            Duas décadas construindo os empreendimentos mais exigentes do Brasil com pontualidade cirúrgica.
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#181818]/90 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-2xl relative overflow-hidden group text-center"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none group-hover:bg-[#D4AF37]/15 transition-colors" />

              <div className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight mb-2 flex items-center justify-center">
                {stat.prefix && <span className="gold-text-gradient mr-1">{stat.prefix}</span>}
                <span
                  className="stat-number gold-text-gradient"
                  data-target={stat.number}
                  data-decimals={stat.decimals || 0}
                >
                  0
                </span>
                <span className="text-[#D4AF37] ml-1">{stat.suffix}</span>
              </div>

              <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider text-white mb-2">
                {stat.label}
              </h3>

              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Authority Badges & Certifications Bar */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity">
            <Award className="w-6 h-6 text-[#D4AF37]" />
            <div className="text-left">
              <span className="text-xs font-bold text-white block uppercase">LEED Platinum</span>
              <span className="text-[10px] text-neutral-400 uppercase font-mono">U.S. Green Building Council</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            <div className="text-left">
              <span className="text-xs font-bold text-white block uppercase">ISO 9001 : 2015</span>
              <span className="text-[10px] text-neutral-400 uppercase font-mono">Gestão de Qualidade Total</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity">
            <Building className="w-6 h-6 text-[#D4AF37]" />
            <div className="text-left">
              <span className="text-xs font-bold text-white block uppercase">PBQP-H Nível A</span>
              <span className="text-[10px] text-neutral-400 uppercase font-mono">Excelência em Habitat</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity">
            <Star className="w-6 h-6 text-[#D4AF37]" />
            <div className="text-left">
              <span className="text-xs font-bold text-white block uppercase">CREA-SP Certificado</span>
              <span className="text-[10px] text-neutral-400 uppercase font-mono">ARTs de Alta Complexidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
