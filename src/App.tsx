/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProjectShowcase } from './components/ProjectShowcase';
import { BudgetCalculator } from './components/BudgetCalculator';
import { StatsSection } from './components/StatsSection';
import { Testimonials } from './components/Testimonials';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialMessage, setQuoteInitialMessage] = useState('');

  const handleOpenQuoteModal = (initialMessage = '') => {
    setQuoteInitialMessage(initialMessage);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuoteInitialMessage('');
  };

  const handleExploreProjects = () => {
    const el = document.querySelector('#projetos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5] font-['Inter'] relative selection:bg-[#D4AF37] selection:text-[#0F0F0F]">
      {/* Custom Gold Pointer Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreProjects={handleExploreProjects}
        />

        {/* 2. Bento Grid of Differentials (Precisão Milimétrica, Sustentabilidade, Prazo, Transparência) */}
        <BentoGrid onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. Showcase / Portfolio of Flagship Projects */}
        <ProjectShowcase
          onRequestQuoteForProject={(projectTitle) =>
            handleOpenQuoteModal(`Interesse na obra: ${projectTitle}. Gostaria de agendar uma apresentação técnica sobre este padrão de construção.`)
          }
        />

        {/* 4. Interactive BIM Budget Calculator */}
        <BudgetCalculator
          onGenerateProposal={(summary) => handleOpenQuoteModal(summary)}
        />

        {/* 5. Stats & Certifications */}
        <StatsSection />

        {/* 6. Endorsements & Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Consultation & Lead Capture Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialMessage={quoteInitialMessage}
      />
    </div>
  );
}
