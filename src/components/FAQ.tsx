/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQs } from '../data';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 max-w-4xl mx-auto px-6 relative"
      aria-labelledby="faq-title"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-accent/5 rounded-full filter blur-[100px] pointer-events-none" aria-hidden="true" />

      <header className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-[10px] font-mono tracking-wider text-brand-accent uppercase mb-4">
          <HelpCircle className="w-3 h-3" />
          Technical FAQ
        </div>
        <h2
          id="faq-title"
          className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          Get transparent, precise answers about our neural compiler capabilities, multi-currency processing tariffs, and sovereign cloud deployments.
        </p>
      </header>

      <div className="space-y-4" role="tablist" aria-label="Frequently Asked Questions Accordion">
        {FAQs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <article
              key={idx}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen
                  ? 'border-brand-accent/40 bg-zinc-900/30'
                  : 'border-white/5 bg-[#08080a]'
              }`}
            >
              <h3>
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-accent"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-button-${idx}`}
                >
                  <span className="font-display font-semibold text-white text-sm sm:text-base group-hover:text-zinc-200 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-accent' : ''
                    }`}
                  />
                </button>
              </h3>

              {/* Seamless Height Transition using CSS grid */}
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-button-${idx}`}
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-1 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
