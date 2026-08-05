import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Obras & Projetos', href: '#projetos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Tecnologia BIM', href: '#tecnologia-bim' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Legado & Números', href: '#legado' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#2D2D2D]/80 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-white transition-opacity hover:opacity-90"
          >
            <div className="w-10 h-10 bg-[#1E1E1E] border border-[#D4AF37]/40 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:border-[#D4AF37] transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-heading font-black text-xl text-[#D4AF37] tracking-tighter">GK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base tracking-widest text-white uppercase leading-none">
                GK <span className="text-[#D4AF37]">CONSTRUTORA</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-neutral-400 font-light uppercase mt-1">
                Engenharia & Incorporação
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-widest font-medium text-neutral-300 hover:text-[#D4AF37] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/5547991948238?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20constru%C3%A7%C3%A3o%20de%20alto%20padr%C3%A3o"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white px-3 py-2 rounded-md transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>(47) 99194-8238</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden text-xs font-bold tracking-widest text-[#0F0F0F] uppercase transition-all duration-300 bg-[#D4AF37] rounded-md group hover:bg-[#F3E5AB] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#0F0F0F] uppercase bg-[#D4AF37] rounded"
            >
              Orçamento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0F0F0F]/95 backdrop-blur-xl border-b border-[#2D2D2D] p-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-widest font-semibold text-neutral-200 hover:text-[#D4AF37] py-2 border-b border-neutral-800/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="https://wa.me/5547991948238?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20constru%C3%A7%C3%A3o%20de%20alto%20padr%C3%A3o"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-neutral-300"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span>WhatsApp: (47) 99194-8238</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0F0F0F] bg-[#D4AF37] rounded-md shadow-lg"
              >
                Solicitar Orçamento de Engenharia
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
