/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { pricingStore } from './PricingStore';

export default function BillingToggle() {
  const [billing, setBilling] = useState(pricingStore.getSnapshot().billing);

  useEffect(() => {
    return pricingStore.subscribe((newState) => {
      setBilling(newState.billing);
    });
  }, []);

  const handleToggle = (cycle: 'monthly' | 'annual') => {
    pricingStore.setBilling(cycle);
  };

  return (
    <div
      className="inline-flex p-1 rounded-xl bg-zinc-950 border border-white/5 relative z-10"
      role="radiogroup"
      aria-label="Billing cycle toggle"
    >
      <button
        onClick={() => handleToggle('monthly')}
        className={`px-4.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
          billing === 'monthly'
            ? 'bg-zinc-800 text-white shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
            : 'text-zinc-400 hover:text-white'
        }`}
        role="radio"
        aria-checked={billing === 'monthly'}
        id="billing-monthly-btn"
      >
        Monthly Billing
      </button>
      <button
        onClick={() => handleToggle('annual')}
        className={`px-4.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
          billing === 'annual'
            ? 'bg-gradient-to-r from-brand-accent to-brand-cyan text-white shadow-[0_2px_15px_rgba(168,85,247,0.35)]'
            : 'text-zinc-400 hover:text-white'
        }`}
        role="radio"
        aria-checked={billing === 'annual'}
        id="billing-annual-btn"
      >
        <span>Annual Billing</span>
        <span
          className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold tracking-normal ${
            billing === 'annual'
              ? 'bg-white text-zinc-950'
              : 'bg-brand-accent/20 text-brand-accent'
          }`}
        >
          SAVE 20%
        </span>
      </button>
    </div>
  );
}
