/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { trustedCompanies } from '../data';
import { Layers } from 'lucide-react';

export default function TrustedCompanies() {
  // Duplicate list to achieve seamless infinite looping
  const duplicatedCompanies = [...trustedCompanies, ...trustedCompanies, ...trustedCompanies];

  return (
    <section
      id="trusted-companies"
      className="py-14 bg-zinc-950/60 border-y border-white/5 overflow-hidden"
      aria-label="Trusted Partners"
    >
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <h2 className="text-zinc-500 font-mono text-[11px] font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
          <Layers className="w-3 h-3 text-brand-accent animate-spin-slow" />
          TRUSTED BY LEADERS AT THE FOREFRONT OF SOFTWARE
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden w-full" aria-hidden="true">
        {/* Transparent gradient side overlays to fade logos at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

        {/* Marquee Inner Container */}
        <div className="animate-marquee flex gap-16 items-center">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors duration-200 select-none group cursor-default"
            >
              {/* Dynamic SVG / Styled Text representation for elite corporate marks */}
              <div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center font-bold text-xs text-zinc-400 group-hover:bg-brand-accent/20 group-hover:text-white transition-all">
                {company.name[0]}
              </div>
              <span className="font-display font-semibold tracking-tight text-lg group-hover:translate-x-0.5 transition-transform">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
