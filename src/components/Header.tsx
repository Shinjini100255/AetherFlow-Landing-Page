/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Shield, Cpu, Layers, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/75 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-white font-display text-xl font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer group"
          aria-label="AetherFlow Home"
          id="header-logo-btn"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-accent to-brand-cyan flex items-center justify-center overflow-hidden">
            <Cpu className="w-4.5 h-4.5 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Aether<span className="font-light text-zinc-400">Flow</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
          <button
            onClick={() => scrollToSection('features')}
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors cursor-pointer relative py-1 group"
            id="nav-btn-features"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors cursor-pointer relative py-1 group"
            id="nav-btn-pricing"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors cursor-pointer relative py-1 group"
            id="nav-btn-testimonials"
          >
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors cursor-pointer relative py-1 group"
            id="nav-btn-faq"
          >
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollToSection('pricing')}
            className="relative px-4.5 py-2 rounded-lg bg-zinc-900 border border-white/10 text-white text-sm font-medium overflow-hidden group hover:border-brand-accent/40 transition-all cursor-pointer"
            id="nav-btn-console"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Launch Console
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-nav"
          id="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-x-0 top-[72px] bg-zinc-950/95 border-b border-white/5 backdrop-blur-lg overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 gap-5 text-left" aria-label="Mobile Navigation">
          <button
            onClick={() => scrollToSection('features')}
            className="text-zinc-300 hover:text-white text-base font-medium py-1 text-left cursor-pointer"
            id="mob-nav-btn-features"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-zinc-300 hover:text-white text-base font-medium py-1 text-left cursor-pointer"
            id="mob-nav-btn-pricing"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-zinc-300 hover:text-white text-base font-medium py-1 text-left cursor-pointer"
            id="mob-nav-btn-testimonials"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-zinc-300 hover:text-white text-base font-medium py-1 text-left cursor-pointer"
            id="mob-nav-btn-faq"
          >
            FAQ
          </button>
          <div className="border-t border-white/5 pt-4">
            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full flex items-center justify-center gap-1.5 py-3 rounded-lg bg-gradient-to-r from-brand-accent to-brand-cyan text-white text-sm font-semibold hover:brightness-110 transition-all cursor-pointer"
              id="mob-nav-btn-cta"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
