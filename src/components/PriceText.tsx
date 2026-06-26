/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { pricingStore } from './PricingStore';
import { pricingMatrix } from '../data';

interface PriceTextProps {
  tierId: string;
}

export default function PriceText({ tierId }: PriceTextProps) {
  const [pricingState, setPricingState] = useState(pricingStore.getSnapshot());

  useEffect(() => {
    return pricingStore.subscribe((newState) => {
      setPricingState(newState);
    });
  }, []);

  const { currency, billing } = pricingState;
  const tierMatrix = pricingMatrix[tierId];
  if (!tierMatrix) return null;

  const priceConfig = tierMatrix[currency];
  if (!priceConfig) return null;

  const { basePrice, regionalTariff } = priceConfig;

  // Calculate dynamic price: Base Price multiplied by Regional Tariff adjustment
  let calculatedVal = basePrice * regionalTariff;

  // Apply annual 20% discount multiplier exactly if selected
  if (billing === 'annual') {
    calculatedVal = calculatedVal * 0.8;
  }

  // Format to neat local integer values
  const roundedPrice = Math.round(calculatedVal);
  const formattedPrice = roundedPrice.toLocaleString();

  return (
    <span
      className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight flex items-baseline gap-1"
      id={`price-display-${tierId}`}
    >
      <span className="text-xl sm:text-2xl text-zinc-500 font-normal select-none" id={`price-symbol-${tierId}`}>
        {priceConfig.symbol}
      </span>
      <span className="tabular-nums" id={`price-amount-${tierId}`}>{formattedPrice}</span>
      <span className="text-xs sm:text-sm text-zinc-400 font-normal tracking-normal select-none" id={`price-period-${tierId}`}>
        /{billing === 'monthly' ? 'mo' : 'yr'}
      </span>
    </span>
  );
}
