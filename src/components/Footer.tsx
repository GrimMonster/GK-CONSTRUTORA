import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#0A0A0A] border-t border-white/10 text-white pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white text-black font-heading font-black text-base flex items-center justify-center rounded">
                GK
              </div>
              <span className="font-heading font-extrabold text-sm tracking-widest text-white uppercase">
                GK CONSTRUTORA
              </span>
            </div>

            <p className="text-neutral-400 text-xs font-light max-w-sm leading-relaxed">
              Engenharia de alta precisão e solidez estrutural para empreendimentos de alto padrão.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#181818] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#181818] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Office */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Sede
            </h4>
            <div className="text-xs text-neutral-300 font-light space-y-1">
              <p className="font-medium text-white">São Paulo</p>
              <p className="text-neutral-400">Av. Brig. Faria Lima, 4.500</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li><a href="#projetos" className="hover:text-white transition-colors">Obras</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#simulador" className="hover:text-white transition-colors">Simulador</a></li>
              <li><button onClick={onOpenQuoteModal} className="hover:text-white text-left transition-colors">Contato</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Contato
            </h4>
            <div className="space-y-2 text-xs text-neutral-300">
              <a href="tel:1130908800" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>(11) 3090-8800</span>
              </a>
              <a href="mailto:contato@gkconstrutora.com.br" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <span>contato@gkconstrutora.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-light gap-4">
          <p>© {new Date().getFullYear()} GK Construtora S.A. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-[#181818] hover:bg-white hover:text-black text-neutral-300 transition-colors flex items-center space-x-1"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
