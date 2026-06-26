/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { testimonials } from '../data';
import { Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow" aria-hidden="true" />

      <header className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-mono tracking-wider text-brand-cyan uppercase mb-4">
          <Sparkles className="w-3 h-3" />
          Industry Validation
        </div>
        <h2
          id="testimonials-title"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Proven in High-Concurrency Production
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg">
          Read how high-scale infrastructure engineers compile schemas, isolate edge pipelines, and automate telemetry queries at Stripe, Vercel, and Linear.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10" role="region" aria-label="Customer Success Reviews">
        {testimonials.map((test, idx) => (
          <article
            key={idx}
            className="p-8 rounded-2xl glass-card glass-card-hover border border-white/5 flex flex-col justify-between h-full transition-all duration-300 relative group"
            style={{ contentVisibility: 'auto' }}
          >
            {/* Quote design accent */}
            <Quote className="absolute top-6 right-6 w-10 h-10 text-white/[0.03] group-hover:text-brand-accent/5 transition-colors duration-300" />

            <blockquote className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 relative z-10 font-medium italic">
              &ldquo;{test.quote}&rdquo;
            </blockquote>

            <footer className="flex items-center gap-3.5 border-t border-white/5 pt-5 relative z-10">
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center font-display font-semibold text-sm text-brand-cyan shadow-inner select-none">
                {test.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-left">
                <cite className="font-display font-bold text-sm text-white block not-italic">
                  {test.author}
                </cite>
                <span className="text-[11px] font-mono text-zinc-500 block uppercase tracking-wide">
                  {test.role} &middot; <span className="text-brand-cyan font-bold">{test.company}</span>
                </span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
