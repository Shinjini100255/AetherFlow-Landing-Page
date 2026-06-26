/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Play, Terminal, Database, ShieldAlert } from 'lucide-react';
import AIVisualization from './AIVisualization';

export default function Hero() {
  const handleScrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden grid-overlay"
      aria-label="AetherFlow Introduction"
    >
      {/* Background blobs for premium depth */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-accent/15 rounded-full filter blur-[120px] animate-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-cyan/10 rounded-full filter blur-[120px] animate-pulse-glow" style={{ animationDelay: '-4s' }} aria-hidden="true" />

      {/* AI Network Visualizer Canvas - Layered cleanly */}
      <div className="absolute inset-0 z-0">
        <AIVisualization />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mt-6">
        {/* Upper Accent Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-xs font-mono font-bold tracking-wider text-brand-accent mb-8 animate-fade-in-scale">
          <Terminal className="w-3.5 h-3.5" />
          <span>V3.8 PLATFORM CO-PILOT NOW LIVE</span>
        </div>

        {/* Strong display headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6 animate-fade-in-scale">
          Autonomous Data
          <span className="block bg-gradient-to-r from-brand-accent via-brand-glow to-brand-cyan bg-clip-text text-transparent">
            Automation at the Edge
          </span>
        </h1>

        {/* Supporting description */}
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
          Connect legacy data warehouses, auto-compile relational schemas, and stream secure, high-throughput pipelines with sub-millisecond edge latency. Powered by neural zero-shot compilation.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4.5 mb-16 animate-fade-in-scale" style={{ animationDelay: '0.15s' }}>
          <button
            onClick={handleScrollToPricing}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-accent to-brand-cyan text-white text-base font-semibold hover:brightness-110 active:scale-98 transition-all shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:shadow-[0_0_40px_rgba(99,102,241,0.45)] cursor-pointer"
            id="hero-cta-primary"
          >
            Start Deploying Free
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={handleScrollToFeatures}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-zinc-900/80 border border-white/10 text-white text-base font-semibold hover:bg-zinc-800/80 hover:border-white/20 active:scale-98 transition-all cursor-pointer backdrop-blur-md"
            id="hero-cta-secondary"
          >
            <Play className="w-4 h-4 fill-white text-white" />
            Watch Sandbox Demo
          </button>
        </div>

        {/* Futuristic 3D Spline Interactive Console Stage */}
        <div className="mb-20 max-w-5xl mx-auto px-1 sm:px-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-2xl border border-white/10 bg-[#09090b]/80 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.12)] hover:border-brand-accent/20 transition-all duration-300 group">
            {/* Top Control Bar / Browser Decorator */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></span>
                <span className="ml-2 text-[10px] font-mono text-zinc-500 tracking-wider uppercase">CORE_ENGINE // REACTIVE_ORB_v3.8</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  LIVE_FEED
                </span>
                <span className="hidden sm:inline text-zinc-700">|</span>
                <span className="hidden sm:inline text-zinc-500">INTERACTIVE 3D STAGE (CLICK & DRAG)</span>
              </div>
            </div>

            {/* Core Iframe Workspace */}
            <div className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] bg-[#020202] overflow-hidden">
              {/* Overlay with subtle instruction info */}
              <div className="absolute bottom-4 left-4 z-20 pointer-events-none bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 text-[9px] font-mono text-zinc-400 tracking-wide uppercase">
                AETHERFLOW COMPLIANT ORB // ACTIVE
              </div>

              {/* Precise solid black overlay shield to completely cover and hide the Spline watermark badge on the bottom-right corner */}
              <div className="absolute bottom-0 right-0 z-20 w-[150px] h-[55px] bg-[#020202] pointer-events-none" />
              
              <iframe 
                src="https://my.spline.design/reactiveorb-ai6YgogfhsHyrLJylLqEMCs6/" 
                frameBorder="0" 
                width="100%" 
                height="100%"
                title="AetherFlow 3D Reactive Orb"
                className="w-full h-full block"
                allow="autoplay; fullscreen"
                style={{ background: 'transparent' }}
              />
            </div>
            
            {/* Interactive Glow Effects */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-cyan/25 to-transparent" />
          </div>
        </div>

        {/* Company statistics bento cluster */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-left pt-12 border-t border-white/5 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          
          <article className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/20 transition-all duration-300 group">
            <header className="flex items-center justify-between mb-3">
              <Database className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">PIPELINES</span>
            </header>
            <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
              $4.2B+
            </p>
            <p className="text-sm text-zinc-400">
              Autonomous telemetry events processed, structured, and synced securely.
            </p>
          </article>

          <article className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/20 transition-all duration-300 group">
            <header className="flex items-center justify-between mb-3">
              <Terminal className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">LATENCY</span>
            </header>
            <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
              &lt;0.8ms
            </p>
            <p className="text-sm text-zinc-400">
              Average request latency on geocentric edge router nodes.
            </p>
          </article>

          <article className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/20 transition-all duration-300 group">
            <header className="flex items-center justify-between mb-3">
              <ShieldAlert className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">AVAILABILITY</span>
            </header>
            <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
              99.999%
            </p>
            <p className="text-sm text-zinc-400">
              Consensus-backed node persistence guarantee across sovereign clusters.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
