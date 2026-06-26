/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PricingTier, BentoFeature, TestimonialItem, FAQItem, PriceConfig, Currency } from './types';

// Multi-dimensional pricing matrix: Tier -> Currency -> Price Details
// Structure: pricingMatrix[TierID][Currency] = PriceConfig
export const pricingMatrix: Record<string, Record<Currency, PriceConfig>> = {
  starter: {
    USD: { basePrice: 29, regionalTariff: 1.0, discount: 0, symbol: '$' },
    INR: { basePrice: 2400, regionalTariff: 0.95, discount: 0, symbol: '₹' },
    EUR: { basePrice: 27, regionalTariff: 1.02, discount: 0, symbol: '€' }
  },
  professional: {
    USD: { basePrice: 79, regionalTariff: 1.0, discount: 0, symbol: '$' },
    INR: { basePrice: 6500, regionalTariff: 0.95, discount: 0, symbol: '₹' },
    EUR: { basePrice: 74, regionalTariff: 1.02, discount: 0, symbol: '€' }
  },
  enterprise: {
    USD: { basePrice: 249, regionalTariff: 1.0, discount: 0, symbol: '$' },
    INR: { basePrice: 20500, regionalTariff: 0.92, discount: 0, symbol: '₹' },
    EUR: { basePrice: 229, regionalTariff: 1.05, discount: 0, symbol: '€' }
  }
};

// Pricing tier specifications (metadata, descriptions, features, and visual ordering)
export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for fast-growing developers and modular engineering teams.',
    features: [
      'Up to 5 autonomous pipelines',
      'Real-time edge telemetry (100k events/mo)',
      'Single-node schema learning',
      'Community Discord & Email support',
      'Standard 24-hour SLA'
    ],
    ctaText: 'Start with Starter'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Our flagship tier for advanced engineering suites and custom pipelines.',
    features: [
      'Unlimited auto-optimizing pipelines',
      'High-throughput edge routing (5M events/mo)',
      'Multi-node schema mapping & syncing',
      'Dedicated compliance templates (GDPR/HIPAA)',
      'Priority 1-hour developer support',
      'Advanced GraphQL and Webhook bridges'
    ],
    ctaText: 'Deploy Professional',
    isPopular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Fully isolated compute, dedicated servers, and custom ML training runs.',
    features: [
      'Sovereign tenant isolation & private cloud',
      'Bespoke ML schema adapters',
      'Unlimited event pipelines',
      'Custom SLA & dedicated account architect',
      'Direct engineers on Slack & MS Teams',
      'Advanced regional traffic balancing'
    ],
    ctaText: 'Establish Enterprise'
  }
];

// Bento Features: Designed for a clean grid layout on desktop, translating into an accordion on mobile
export const bentoFeatures: BentoFeature[] = [
  {
    id: 0,
    title: 'Autonomous Schema Synthesis',
    shortDescription: 'Zero-Shot relational schema learning without typing a single model.',
    detailedDescription: 'Our neural compiler continuously inspects streaming database telemetry, automatically building relational schema mappings, detecting anomalies, and patching nested data interfaces with 99.98% semantic precision.',
    tag: 'NATIVE AI',
    visualType: 'schema'
  },
  {
    id: 1,
    title: 'Sub-Millisecond Edge Pipelines',
    shortDescription: 'Sub-millisecond latency routing on geocentric proxy nodes.',
    detailedDescription: 'Deploy and replicate data pipelines across 140+ edge centers. Our smart routing algorithm predicts bottleneck pathways, balancing high-concurrency flows before latency thresholds are breached.',
    tag: 'PERFORMANCE',
    visualType: 'edge'
  },
  {
    id: 2,
    title: 'Geo-Replicated Cryptic Vaults',
    shortDescription: 'Military-grade direct replication with sovereign edge isolation.',
    detailedDescription: 'Data is auto-partitioned, cryptographically encoded across decentralized multi-tenant storage clusters, and synchronized using a zero-trust consensus algorithm for complete data sovereignty.',
    tag: 'SECURITY',
    visualType: 'network'
  },
  {
    id: 3,
    title: 'Predictive Latency Telemetry',
    shortDescription: 'Live prediction modeling forecasts throughput and server loads.',
    detailedDescription: 'Harness predictive anomaly models directly within your pipeline views. Foresee potential scale events up to 48 hours in advance, triggering automated server cluster balancing.',
    tag: 'ANALYTICS',
    visualType: 'analytics'
  },
  {
    id: 4,
    title: 'Unified GraphQL Edge Proxy',
    shortDescription: 'Instantly connect legacy warehouses to serverless GraphQL endpoints.',
    detailedDescription: 'Consolidate multiple databases, legacy clusters, or microservices into a single, cohesive, cache-optimized schema layer without writing repetitive middleware.',
    tag: 'INTEGRATIONS',
    visualType: 'proxy'
  }
];

// Trusted Companies logos & names
export const trustedCompanies = [
  { name: 'Vercel', logo: 'Vercel' },
  { name: 'Stripe', logo: 'Stripe' },
  { name: 'Linear', logo: 'Linear' },
  { name: 'Supabase', logo: 'Supabase' },
  { name: 'Figma', logo: 'Figma' },
  { name: 'HashiCorp', logo: 'HashiCorp' }
];

// Testimonials reflecting real quality and expensive aesthetic
export const testimonials: TestimonialItem[] = [
  {
    quote: "AetherFlow revolutionized how we consolidate multi-currency telemetry at Stripe. It bypassed months of manual pipeline building in literally three afternoons.",
    author: "Elena Rostova",
    role: "VP of Core Infrastructure",
    company: "Stripe"
  },
  {
    quote: "Our data syncing was a constant source of friction. Moving to AetherFlow gave us 99.99% uptime, unified schema inference, and reduced our global database costs by 42%.",
    author: "Marcus Vance",
    role: "Principal Architect",
    company: "Vercel"
  },
  {
    quote: "The zero-shot schema generation is magic. I watched our legacy databases compile into cohesive edge-cached API endpoints without writing a single line of mapping code.",
    author: "Siddharth Mehta",
    role: "Director of Engineering",
    company: "Linear"
  }
];

// Curated FAQs that address actual enterprise buyer friction
export const FAQs: FAQItem[] = [
  {
    question: "How does the autonomous schema mapping work under the hood?",
    answer: "AetherFlow utilizes custom-trained, server-side LLMs integrated with local telemetry hooks. It observes stream query mutations and structural changes, automatically synthesizing target JSON or relational schemas. All mapping occurs inside isolated server sandboxes to ensure absolute data privacy."
  },
  {
    question: "Do you offer localized pricing or flexible payment systems?",
    answer: "Yes. Our pricing engine dynamically computes base tier prices adjusted with regional tariffs for INR, USD, and EUR. This offers highly tailored purchasing options optimized for regional market rates and sovereign business compliance."
  },
  {
    question: "Can we deploy AetherFlow in our own private cloud or sovereign VPC?",
    answer: "Absolutely. Our Enterprise tier offers direct sovereign tenant deployments inside AWS VPC, Google Cloud VPC, or on-premise Kubernetes clusters, completely isolated from global shared nodes."
  },
  {
    question: "How does AetherFlow handle regional data compliance (GDPR, HIPAA)?",
    answer: "Every edge node is embedded with automated regional tag enforcement. If a data stream contains personally identifiable information (PII), AetherFlow can auto-apply dynamic hashing, masking, or secure local residence guarantees on our geocentric centers."
  },
  {
    question: "What is your support SLA on the Professional and Enterprise tiers?",
    answer: "Professional comes with priority 1-hour email and developer support. Enterprise tiers feature 15-minute response times with dedicated Slack/MS Teams channels and regular architectural reviews."
  }
];
