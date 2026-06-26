/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { bentoFeatures } from '../data';
import { BentoFeature } from '../types';
import { Cpu, Zap, Shield, AreaChart, GitMerge, ChevronDown } from 'lucide-react';

// Custom Hook to track window resize for layout switches
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

export default function BentoGridFeatures() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isMobile = useIsMobile();

  const handleInteract = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="features"
      className="py-24 max-w-7xl mx-auto px-6 relative"
      aria-labelledby="features-title"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          id="features-title"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Automate Data Operations at Supercomputing Scale
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg">
          No manual ETL pipeline scripts. No fragile API adapters. AetherFlow parses raw event buffers, builds dynamic relational states, and routes edge packages autonomously.
        </p>
      </div>

      {isMobile ? (
        /* Mobile Accordion View with smooth CSS height animations */
        <div className="space-y-4" role="tablist" aria-label="Feature Accordion">
          {bentoFeatures.map((feature, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <article
                key={feature.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-brand-accent bg-[#0f0f12] shadow-[0_0_20px_rgba(99,102,241,0.15)]'
                    : 'border-white/5 bg-[#08080a]'
                }`}
              >
                <button
                  onClick={() => handleInteract(idx)}
                  className="w-full p-5 text-left flex items-center justify-between cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`feature-panel-${feature.id}`}
                  id={`feature-tab-${feature.id}`}
                >
                  <div className="flex items-center gap-3">
                    <FeatureIcon type={feature.visualType} className={isOpen ? 'text-brand-accent' : 'text-zinc-400'} />
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 tracking-wider block mb-0.5">
                        {feature.tag}
                      </span>
                      <h3 className="font-display font-bold text-base text-white">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-accent' : ''
                    }`}
                  />
                </button>

                {/* Smooth CSS Accordion Height Transition */}
                <div
                  id={`feature-panel-${feature.id}`}
                  role="tabpanel"
                  aria-labelledby={`feature-tab-${feature.id}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 pt-1 border-t border-white/5 text-sm text-zinc-400 leading-relaxed space-y-4">
                      <p>{feature.detailedDescription}</p>
                      {/* Visual Widget Rendered Inside the Accordion Content Area */}
                      <div className="w-full h-40 bg-zinc-950/80 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center p-3">
                        <FeatureWidget type={feature.visualType} isActive={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Desktop Bento Grid View */
        <div className="grid grid-cols-12 gap-5" role="region" aria-label="Feature Bento Grid">
          {/* Card 0: Main large card */}
          <BentoCard
            feature={bentoFeatures[0]}
            className="col-span-8 h-[360px]"
            isActive={activeIndex === 0}
            onHover={() => handleInteract(0)}
          />

          {/* Card 1: Sub-card */}
          <BentoCard
            feature={bentoFeatures[1]}
            className="col-span-4 h-[360px]"
            isActive={activeIndex === 1}
            onHover={() => handleInteract(1)}
          />

          {/* Card 2: Center card */}
          <BentoCard
            feature={bentoFeatures[2]}
            className="col-span-4 h-[340px]"
            isActive={activeIndex === 2}
            onHover={() => handleInteract(2)}
          />

          {/* Card 3: Wide card */}
          <BentoCard
            feature={bentoFeatures[3]}
            className="col-span-8 h-[340px]"
            isActive={activeIndex === 3}
            onHover={() => handleInteract(3)}
          />

          {/* Card 4: Footer card */}
          <BentoCard
            feature={bentoFeatures[4]}
            className="col-span-12 h-[260px]"
            isActive={activeIndex === 4}
            onHover={() => handleInteract(4)}
          />
        </div>
      )}
    </section>
  );
}

/* Reusable Desktop Bento Card */
function BentoCard({
  feature,
  className,
  isActive,
  onHover
}: {
  feature: BentoFeature;
  className: string;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <article
      onMouseEnter={onHover}
      onTouchStart={onHover}
      className={`relative rounded-2xl overflow-hidden glass-card transition-all duration-300 flex flex-col justify-between group ${className} ${
        isActive
          ? 'border-brand-accent/40 shadow-[0_0_35px_rgba(99,102,241,0.15)] bg-[#101013]'
          : 'border-white/5 hover:border-white/10 hover:bg-zinc-900/40'
      }`}
      style={{ contentVisibility: 'auto' }}
    >
      {/* Background radial highlight glow on active */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-brand-accent/5 via-brand-cyan/2 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
          isActive ? 'opacity-100' : ''
        }`}
      />

      {/* Card Content Area */}
      <div className="p-6 relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-mono tracking-widest uppercase font-medium ${isActive ? 'text-brand-cyan' : 'text-zinc-500'}`}>
            {feature.tag}
          </span>
          <FeatureIcon type={feature.visualType} className={`w-5 h-5 transition-colors ${isActive ? 'text-brand-accent' : 'text-zinc-400'}`} />
        </div>

        {/* Visual Widget container in the center */}
        <div className="flex-1 my-4 overflow-hidden relative flex items-center justify-center">
          <FeatureWidget type={feature.visualType} isActive={isActive} />
        </div>

        {/* Info footer */}
        <div className="text-left">
          <h3 className="font-display font-bold text-lg text-white mb-1.5 flex items-center gap-2">
            {feature.title}
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed max-w-xl group-hover:text-zinc-300 transition-colors">
            {feature.shortDescription}
          </p>
        </div>
      </div>
    </article>
  );
}

/* Feature Icon Selector */
function FeatureIcon({ type, className }: { type: BentoFeature['visualType']; className?: string }) {
  switch (type) {
    case 'schema':
      return <Cpu className={className} />;
    case 'edge':
      return <Zap className={className} />;
    case 'network':
      return <Shield className={className} />;
    case 'analytics':
      return <AreaChart className={className} />;
    case 'proxy':
      return <GitMerge className={className} />;
  }
}

/* Mini visual interactive widgets representing live telemetry simulations inside bento cards */
function FeatureWidget({ type, isActive }: { type: BentoFeature['visualType']; isActive: boolean }) {
  switch (type) {
    case 'schema':
      return (
        <div className="w-full max-w-md h-full flex flex-col justify-center text-left font-mono text-[9px] text-zinc-500 gap-1.5">
          <div className="flex items-center justify-between border-b border-white/5 pb-1">
            <span className="text-brand-cyan">INPUT: Raw Stream Event</span>
            <span className="text-emerald-400">STATE: Synthesizing</span>
          </div>
          <div className="space-y-1">
            <p className="text-zinc-400 select-none">
              <span className="text-purple-400">const</span> pipeline = Aether.compiler.ingest(&apos;metrics&apos;);
            </p>
            <div className="bg-zinc-950/60 p-2 rounded border border-white/5 relative overflow-hidden h-14">
              <p className="text-zinc-500 text-[8px] leading-tight font-mono select-none">
                {`{ id: "tx_94a02", value_raw: 9283, region: "ap-east", currency: "INR" }`}
                <br />
                <span className="text-emerald-400 animate-pulse">{`➜ Generated: { valueINR: 9283, normalizedEUR: 104.2, timestamp: 17823908 }`}</span>
              </p>
              <div className="absolute top-0 right-0 h-full w-0.5 bg-brand-accent opacity-75 animate-bounce" />
            </div>
          </div>
        </div>
      );

    case 'edge':
      return (
        <div className="w-full max-w-xs flex items-center justify-around h-full py-4">
          {[
            { label: 'AP-EAST', latency: '0.42ms', active: true },
            { label: 'US-WEST', latency: '0.78ms', active: true },
            { label: 'EU-WEST', latency: '0.61ms', active: false }
          ].map((node, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="relative">
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${isActive && node.active ? 'border-brand-cyan bg-brand-cyan/10' : 'border-zinc-800 bg-zinc-900'}`}>
                  <Zap className={`w-3.5 h-3.5 ${isActive && node.active ? 'text-brand-cyan animate-pulse' : 'text-zinc-500'}`} />
                </div>
                {isActive && node.active && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-zinc-950" />
                )}
              </div>
              <span className="text-[8px] font-mono text-zinc-500">{node.label}</span>
              <span className="text-[9px] font-mono font-semibold text-white">{node.latency}</span>
            </div>
          ))}
        </div>
      );

    case 'network':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Multi-layered orbital ring grids */}
            <div className={`absolute rounded-full border border-dashed border-zinc-700/60 transition-all duration-700 ${isActive ? 'w-24 h-24 rotate-45 scale-110' : 'w-20 h-20'}`} />
            <div className={`absolute rounded-full border border-dashed border-purple-500/30 transition-all duration-700 ${isActive ? 'w-36 h-36 -rotate-45 scale-105' : 'w-28 h-28'}`} />
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center z-10">
              <Shield className={`w-5 h-5 ${isActive ? 'text-brand-accent animate-pulse' : 'text-zinc-400'}`} />
            </div>
          </div>
        </div>
      );

    case 'analytics':
      return (
        <div className="w-full h-full flex items-end px-3">
          <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Grid Lines */}
            <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            {/* Wavy active path */}
            <path
              d={isActive ? "M0,60 Q30,20 60,75 T120,40 T180,80 T200,30" : "M0,60 Q30,60 60,60 T120,60 T180,60 T200,60"}
              fill="none"
              stroke="#6366f1"
              strokeWidth="1.8"
              className="transition-all duration-700 ease-out"
            />
            {/* Glowing fill underneath path */}
            <path
              d={isActive ? "M0,60 Q30,20 60,75 T120,40 T180,80 T200,30 L200,100 L0,100 Z" : "M0,60 Q30,60 60,60 T120,60 T180,60 T200,100 L200,100 L0,100 Z"}
              fill="url(#chartGlow)"
              className="transition-all duration-700 ease-out"
            />
          </svg>
        </div>
      );

    case 'proxy':
      return (
        <div className="w-full max-w-xs flex items-center justify-between font-mono text-[9px] gap-2 p-2">
          <div className="flex flex-col items-start gap-1 p-2 rounded bg-zinc-950/60 border border-white/5 flex-1">
            <span className="text-zinc-500 font-semibold text-[8px] uppercase">LEGACY DATA</span>
            <span className="text-rose-400 truncate w-full">🐘 PostgreSQL</span>
            <span className="text-amber-400 truncate w-full">🍂 MongoDB</span>
          </div>
          <div className="flex items-center justify-center">
            <GitMerge className={`w-5 h-5 text-brand-cyan ${isActive ? 'rotate-180 transition-transform duration-500' : ''}`} />
          </div>
          <div className="flex flex-col items-start gap-1 p-2 rounded bg-zinc-950/60 border border-white/5 flex-1 border-brand-cyan/20">
            <span className="text-brand-cyan font-semibold text-[8px] uppercase">UNIFIED GRAPHQL</span>
            <span className="text-white">query CoreData {`{`}</span>
            <span className="text-brand-accent pl-2">syncStatus</span>
            <span className="text-white">{`}`}</span>
          </div>
        </div>
      );
  }
}
