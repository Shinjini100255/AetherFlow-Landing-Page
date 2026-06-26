/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Currency, BillingCycle } from '../types';

type Listener = (state: PricingState) => void;

interface PricingState {
  currency: Currency;
  billing: BillingCycle;
}

class PricingStore {
  private state: PricingState = {
    currency: 'USD',
    billing: 'monthly'
  };

  private listeners: Set<Listener> = new Set();

  public getSnapshot(): PricingState {
    return this.state;
  }

  public setCurrency(currency: Currency): void {
    if (this.state.currency === currency) return;
    this.state = { ...this.state, currency };
    this.notify();
  }

  public setBilling(billing: BillingCycle): void {
    if (this.state.billing === billing) return;
    this.state = { ...this.state, billing };
    this.notify();
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => listener(this.state));
  }
}

export const pricingStore = new PricingStore();
