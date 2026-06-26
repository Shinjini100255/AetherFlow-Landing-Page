/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

export default function FinalCTA() {
  const handleScrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cta"
      className="py-24 max-w-7xl mx-auto px-6 relative"
      aria-label="Get Started Call to Action"
    >
      {/* Background radial spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow" aria-hidden="true" />

      {/* Main card */}
      <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-[#0c0c0e] via-[#09090b] to-[#040405] p-10 sm:p-16 text-center max-w-5xl mx-auto shadow-2xl group">
        
        {/* Animated grid overlay inside the CTA card */}
        <div className="absolute inset-0 grid-overlay opacity-30 select-none pointer-events-none" aria-hidden="true" />
        
        {/* Decorative corner glows */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-accent/10 rounded-full filter blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-cyan/10 rounded-full filter blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium tracking-wider text-brand-cyan mb-8 animate-float">
            <Terminal className="w-3.5 h-3.5" />
            <span>INSTANT SETUP &middot; DOCKER &middot; CLOUD RUN</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to Automate Your Data Architecture?
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of modern developers and systems architects building high-concurrency pipelines with native schema learning and sub-millisecond routing speeds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleScrollToPricing}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-accent to-brand-cyan text-white text-base font-semibold hover:brightness-110 active:scale-98 transition-all shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:shadow-[0_0_35px_rgba(168,85,247,0.4)] cursor-pointer"
              id="cta-btn-primary"
            >
              Get Started for Free
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 border border-white/10 text-white text-base font-semibold hover:bg-zinc-800 hover:border-white/20 active:scale-98 transition-all cursor-pointer"
              id="cta-btn-secondary"
            >
              Schedule Enterprise Demo
            </button>
          </div>

          <p className="mt-6 text-zinc-500 font-mono text-[10px] tracking-wider select-none">
            NO CREDIT CARD REQUIRED &middot; DEPLOY MODULES IN 3 MINUTES
          </p>
        </div>
      </div>
    </section>
  );
}
