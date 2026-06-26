/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { pricingStore } from './PricingStore';
import { Currency } from '../types';
import { Globe } from 'lucide-react';

export default function CurrencySelector() {
  const [currency, setCurrency] = useState(pricingStore.getSnapshot().currency);

  useEffect(() => {
    return pricingStore.subscribe((newState) => {
      setCurrency(newState.currency);
    });
  }, []);

  const handleSelect = (cur: Currency) => {
    pricingStore.setCurrency(cur);
  };

  const options: { value: Currency; label: string; symbol: string }[] = [
    { value: 'USD', label: 'USD', symbol: '$' },
    { value: 'EUR', label: 'EUR', symbol: '€' },
    { value: 'INR', label: 'INR', symbol: '₹' }
  ];

  return (
    <div
      className="inline-flex items-center gap-2 bg-zinc-950 p-1 rounded-xl border border-white/5 relative z-10"
      role="group"
      aria-label="Currency Selector"
    >
      <div className="pl-2 pr-1 text-zinc-500 hover:text-zinc-400 transition-colors hidden sm:flex items-center gap-1 select-none" aria-hidden="true">
        <Globe className="w-3.5 h-3.5" />
        <span className="text-[10px] font-mono tracking-widest font-bold">CURRENCY</span>
      </div>
      <div className="flex gap-1">
        {options.map((opt) => {
          const isSelected = currency === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                isSelected
                  ? 'bg-zinc-800 text-brand-cyan border border-brand-cyan/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                  : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
              }`}
              id={`currency-selector-${opt.value}`}
              aria-pressed={isSelected}
            >
              <span className="text-[10px] text-zinc-500 font-sans">{opt.symbol}</span>
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
