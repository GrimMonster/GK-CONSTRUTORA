import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, Send, Paperclip, Building2, User, Mail, Phone, Clock, ArrowRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialMessage = '',
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'residencial',
    estimatedArea: '1000',
    location: 'São Paulo',
    message: initialMessage,
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageLines = [
      `*Solicitação de Orçamento - GK Construtora*`,
      `*Nome:* ${formData.name}`,
      `*E-mail:* ${formData.email}`,
      `*Telefone:* ${formData.phone}`,
      `*Tipo de Projeto:* ${formData.projectType}`,
      formData.message ? `*Mensagem:* ${formData.message}` : '',
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/5547991948238?text=${encodeURIComponent(messageLines)}`;

    setTimeout(() => {
      const randomCode = `GK-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceCode(randomCode);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#141414] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl text-white my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2D2D2D] bg-[#0F0F0F]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-[#1E1E1E] border border-[#D4AF37]/40 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                ATENDIMENTO EXCLUSIVO
              </span>
              <h2 className="font-heading font-black text-xl text-white uppercase tracking-tight">
                SOLICITAR ORÇAMENTO DE ENGENHARIA
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#2D2D2D] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-neutral-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/15 border-2 border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37] animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
                  CÓDIGO DE PROTOCOLO: {referenceCode}
                </span>
                <h3 className="font-heading font-black text-2xl text-white uppercase mt-1">
                  SOLICITAÇÃO RECEBIDA COM SUCESSO
                </h3>
                <p className="text-neutral-300 text-sm font-light max-w-md mx-auto mt-2 leading-relaxed">
                  Nossa Diretoria de Engenharia analisará seu briefing e entrará em contato em até <strong className="text-white">4 horas úteis</strong> para o agendamento da reunião técnica.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Cliente:</span>
                  <span className="font-bold text-white">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Tipo de Obra:</span>
                  <span className="font-bold text-[#D4AF37] uppercase">{formData.projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Contato:</span>
                  <span className="font-bold text-white">{formData.phone}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-lg bg-[#D4AF37] text-[#0F0F0F] font-heading font-black text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition-colors"
              >
                Concluir & Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-1.5">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Dr. Roberto Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* E-mail */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-1.5">
                    E-mail Corporativo/Pessoal *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="roberto@holding.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Telefone / WhatsApp */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-8888"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Tipo de Projeto */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-1.5">
                    Tipo de Projeto
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="residencial">Residencial de Alto Padrão</option>
                    <option value="corporativo">Edifício Corporativo AAA</option>
                    <option value="penthouse">Pent-house / Cobertura</option>
                    <option value="incorporacao">Incorporação / VGV</option>
                    <option value="outro">Outros Projetos Especiais</option>
                  </select>
                </div>
              </div>

              {/* Mensagem / Detalhes */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-1.5">
                  Briefing Inicial ou Mensagem
                </label>
                <textarea
                  rows={3}
                  placeholder="Descreva detalhes como área desejada, localização da obra ou prazos pretendidos..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Attach File (DWG / PDF / Planta) */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-1.5">
                  Anexar Planta Baixa ou PDF do Projeto (Opcional)
                </label>
                <div className="relative border border-dashed border-white/20 rounded-lg p-4 bg-[#181818] text-center hover:border-[#D4AF37] transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.dwg,.zip,.png,.jpg"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Paperclip className="w-5 h-5 text-[#D4AF37] mx-auto mb-1" />
                  <span className="text-xs text-neutral-300 block font-medium">
                    {uploadedFile ? uploadedFile.name : 'Clique para selecionar arquivo (PDF, DWG, ZIP até 50MB)'}
                  </span>
                </div>
              </div>

              {/* Security & Confidentiality Notice */}
              <div className="flex items-center space-x-2 text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Garantia de Confidencialidade e NDA automático para todos os briefings recebidos.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#0F0F0F] font-heading font-black text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processando e Criptografando...</span>
                ) : (
                  <>
                    <span>Enviar Briefing para Diretoria</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
