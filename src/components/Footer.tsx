/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cpu, Github, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-12 relative z-10" aria-label="AetherFlow Sitemap">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
        
        {/* Brand identity */}
        <div className="md:col-span-5 flex flex-col items-start gap-4 text-left">
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2.5 text-white font-display text-lg font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="AetherFlow Home"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-accent to-brand-cyan flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span>
              Aether<span className="font-light text-zinc-400">Flow</span>
            </span>
          </button>
          
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
            The next-generation data automation platform. Compile, secure, and route autonomous event data streams globally at sub-millisecond speeds.
          </p>

          {/* Social icons */}
          <div className="flex gap-4.5 mt-2">
            <a href="https://github.com" className="text-zinc-500 hover:text-white transition-colors" aria-label="AetherFlow GitHub Profile" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" className="text-zinc-500 hover:text-white transition-colors" aria-label="AetherFlow Twitter Account" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-zinc-500 hover:text-white transition-colors" aria-label="AetherFlow LinkedIn Profile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Product column */}
        <div className="md:col-span-2 flex flex-col items-start gap-3.5 text-left">
          <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
            PRODUCT
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li><a href="#features" className="hover:text-white transition-colors">Platform Engine</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Edge Routers</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Matrix</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">Release Notes</a></li>
          </ul>
        </div>

        {/* Resources column */}
        <div className="md:col-span-2 flex flex-col items-start gap-3.5 text-left">
          <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
            RESOURCES
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li><a href="#faq" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">Security Audit</a></li>
            <li><a href="https://github.com" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">Open Source</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">API Guide</a></li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div className="md:col-span-3 flex flex-col items-start gap-3.5 text-left">
          <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
            NEWSLETTER
          </h4>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Subscribe to our weekly edge-computing and schema optimization digests.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full gap-2 mt-2"
            aria-label="Subscribe to newsletter"
          >
            <input
              type="email"
              placeholder="name@company.com"
              required
              className="flex-1 bg-zinc-900 border border-white/5 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-brand-accent transition-colors"
              aria-label="Corporate Email Address"
            />
            <button
              type="submit"
              className="bg-brand-accent hover:brightness-110 active:scale-95 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all cursor-pointer"
              aria-label="Subscribe button"
            >
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500 select-none">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4.5 text-center sm:text-left">
          <span>&copy; {currentYear} AetherFlow Systems, Inc. All rights reserved.</span>
          <span className="hidden sm:inline text-zinc-800">|</span>
          <div className="flex gap-4">
            <a href="#faq" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <span>&middot;</span>
            <a href="#faq" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <span>&middot;</span>
            <a href="#faq" className="hover:text-zinc-300 transition-colors">Sovereignty Act</a>
          </div>
        </div>

        {/* Professional Polish Systems Operational Badge */}
        <div className="flex flex-wrap items-center justify-center gap-4.5">
          <div className="flex items-center gap-1.5 bg-green-500/5 px-2.5 py-1 rounded-full border border-green-500/15">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse"></span>
            <span className="text-[9px] uppercase tracking-wider text-green-400 font-bold">Systems Operational</span>
          </div>
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-zinc-400 font-sans">
            Node v3.8.2 (Production)
          </span>
          <div className="flex items-center gap-1 text-[9px]">
            Crafted with <Heart className="w-3 h-3 text-brand-accent fill-brand-accent" /> for Elite Engineers
          </div>
        </div>
      </div>
    </footer>
  );
}
