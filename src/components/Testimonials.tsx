import React from 'react';
import { TESTIMONIALS_DATA } from '../data/differentialsData';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 mb-3">
            <Quote className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              Endossos de Autoridades
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            RECONHECIMENTO DE <span className="gold-text-gradient">GRANDES MESTRES</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            O que dizem os mais renomados arquitetos e investidores do mercado imobiliário sobre a GK Construtora.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-2xl flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6 group-hover:text-[#D4AF37]/40 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-neutral-300 text-sm font-light italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center space-x-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/40 shrink-0"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white uppercase">{t.name}</h4>
                  <p className="text-xs text-[#D4AF37] font-medium">{t.role} • {t.company}</p>
                  <span className="text-[10px] font-mono text-neutral-400 block mt-0.5">
                    Obra: {t.projectAssociated}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
