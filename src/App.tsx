/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import BentoGridFeatures from './components/BentoGridFeatures';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 selection:bg-brand-accent selection:text-white">
      {/* Upper Navigation Header */}
      <Header />

      {/* Main Semantic Page Content */}
      <main id="main-content">
        <h1 className="sr-only">AetherFlow - AI-Powered Data Automation Platform</h1>
        
        {/* Hero Section with Live AI Background Network */}
        <Hero />

        {/* Corporate Trust Scroll banner */}
        <ScrollReveal delay={100}>
          <TrustedCompanies />
        </ScrollReveal>

        {/* Dynamic Bento-to-Accordion Features Grid with index persistence */}
        <ScrollReveal delay={150}>
          <BentoGridFeatures />
        </ScrollReveal>

        {/* Performance-Isolated Multi-Currency Dynamic Pricing */}
        <ScrollReveal delay={150}>
          <Pricing />
        </ScrollReveal>

        {/* Social Proof Customer Endorsements */}
        <ScrollReveal delay={150}>
          <Testimonials />
        </ScrollReveal>

        {/* Accessible Keyboard-Navigable FAQ list */}
        <ScrollReveal delay={150}>
          <FAQ />
        </ScrollReveal>

        {/* High-Converting Glowing Action call */}
        <ScrollReveal delay={150}>
          <FinalCTA />
        </ScrollReveal>
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
