/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { pricingTiers } from '../data';
import BillingToggle from './BillingToggle';
import CurrencySelector from './CurrencySelector';
import PriceText from './PriceText';
import { Check, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

// Wrap in React.memo to ensure 100% static isolation from external renders
export const Pricing = React.memo(function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden"
      aria-labelledby="pricing-title"
    >
      {/* Background visual element for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full filter blur-[150px] pointer-events-none" aria-hidden="true" />

      <header className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-[10px] font-mono tracking-wider text-brand-accent uppercase mb-4">
          <Sparkles className="w-3 h-3" />
          Flexible Purchasing Matrix
        </div>
        <h2
          id="pricing-title"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Scale Freely. Zero Hidden Tariffs.
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg">
          Configure tier structures, toggle global billing periods, and switch localized regional currencies instantly with zero-latency updates.
        </p>
      </header>

      {/* Control selectors block */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 relative z-10">
        <BillingToggle />
        <CurrencySelector />
      </div>

      {/* Pricing Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10" role="region" aria-label="Subscription Pricing Tiers">
        {pricingTiers.map((tier) => {
          if (tier.isPopular) {
            return (
              /* Premium Conic-Gradient Animated Glowing Border for Popular plan */
              <div key={tier.id} className="border-glow-wrapper h-full">
                <article className="border-glow-content p-8 flex flex-col justify-between h-full relative" style={{ contentVisibility: 'auto' }}>
                  {/* Popular Floating Badge */}
                  <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-brand-accent to-brand-cyan text-[10px] font-bold tracking-wider uppercase text-white shadow-[0_4px_12px_rgba(168,85,247,0.3)]">
                    <Sparkles className="w-3 h-3 text-white fill-white animate-pulse" />
                    RECOMMENDED TIER
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-white mb-2 flex items-center gap-2">
                      {tier.name}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    {/* Performance Isolated Dynamic Price display */}
                    <div className="mb-6 h-14 flex items-center">
                      <PriceText tierId={tier.id} />
                    </div>

                    <div className="w-full h-px bg-zinc-800/80 mb-6" />

                    <h4 className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase mb-4 font-semibold">
                      PLAN INCLUSIONS
                    </h4>
                    <ul className="space-y-3.5 text-left mb-8" aria-label={`${tier.name} plan features`}>
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm leading-normal">
                          <Check className="w-4.5 h-4.5 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-accent to-brand-cyan text-white text-sm font-semibold tracking-wide hover:brightness-115 active:scale-98 transition-all shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer"
                    id={`pricing-cta-${tier.id}`}
                  >
                    {tier.ctaText}
                  </button>
                </article>
              </div>
            );
          }

          return (
            <article
              key={tier.id}
              className="p-8 rounded-2xl glass-card border border-white/5 flex flex-col justify-between h-full hover:border-white/10 hover:bg-[#0c0c0e] transition-all duration-300"
              style={{ contentVisibility: 'auto' }}
            >
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Performance Isolated Dynamic Price display */}
                <div className="mb-6 h-14 flex items-center">
                  <PriceText tierId={tier.id} />
                </div>

                <div className="w-full h-px bg-zinc-800/50 mb-6" />

                <h4 className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase mb-4 font-semibold">
                  PLAN INCLUSIONS
                </h4>
                <ul className="space-y-3.5 text-left mb-8" aria-label={`${tier.name} plan features`}>
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm leading-normal">
                      <Check className="w-4.5 h-4.5 text-zinc-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="w-full py-3.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm font-semibold tracking-wide hover:bg-zinc-800 hover:border-white/20 active:scale-98 transition-all cursor-pointer"
                id={`pricing-cta-${tier.id}`}
              >
                {tier.ctaText}
              </button>
            </article>
          );
        })}
      </div>

      <div className="mt-12 flex items-center justify-center gap-2 text-zinc-500 font-mono text-[10px] tracking-wide relative z-10 select-none">
        <ShieldCheck className="w-4.5 h-4.5 text-brand-cyan" />
        Sovereign security standard & consensus encryption guaranteed on all plans.
      </div>
    </section>
  );
});

export default Pricing;
