/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Currency = 'USD' | 'INR' | 'EUR';
export type BillingCycle = 'monthly' | 'annual';

export interface PriceConfig {
  basePrice: number;
  regionalTariff: number; // regional multiplier or surcharge adjustment
  discount: number;       // base discount percent for this currency (flat annual is 20%)
  symbol: string;
}

export interface PricingTier {
  id: 'starter' | 'professional' | 'enterprise';
  name: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface BentoFeature {
  id: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  tag: string;
  visualType: 'network' | 'schema' | 'edge' | 'analytics' | 'proxy';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}
