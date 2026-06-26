# AI Automation Platform Landing Page

A premium, high-performance SaaS landing page built with **Next.js** and **Tailwind CSS**, featuring dynamic multi-currency pricing, a responsive Bento-to-Accordion layout, handcrafted animations, and a performance-focused architecture.

Designed as a frontend engineering challenge emphasizing clean architecture, responsive design, accessibility, SEO, and optimized rendering.

---

## Features

* Premium AI SaaS landing page with a modern, responsive interface
* Dynamic pricing engine with:

  * Monthly and Annual billing
  * Multi-currency support (INR, USD, EUR)
  * Automatic annual discount calculation
* Responsive Bento Grid that transforms into an Accordion on mobile devices
* State persistence across responsive layout transitions
* Optimized rendering with isolated state updates
* Custom CSS animations and smooth micro-interactions
* Fully responsive across mobile, tablet, laptop, and desktop
* Semantic HTML with SEO optimization
* Accessibility-focused implementation

---

## Tech Stack

* **Framework:** Next.js
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Native CSS Transitions & Web Animations API
* **Deployment:** Vercel

---

## Project Structure

```text
app/
components/
  ├── Hero/
  ├── Features/
  ├── Pricing/
  ├── Testimonials/
  ├── FAQ/
  └── Footer/
lib/
public/
styles/
```

---

## Performance Optimizations

* Localized state updates to minimize unnecessary re-renders
* Component memoization for improved rendering performance
* Hardware-accelerated animations using `transform` and `opacity`
* Optimized initial load and Time to Interactive (TTI)
* Semantic markup for improved Lighthouse and SEO scores

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```text
http://localhost:3000
```

---


## Competition Requirements Implemented

* Dynamic multi-currency pricing engine
* Monthly and Annual billing toggle
* Pricing calculation using a configuration matrix
* Responsive Bento Grid with mobile Accordion transformation
* State persistence across viewport changes
* CSS-only animations (no external animation libraries)
* Performance-optimized React architecture
* Semantic HTML and SEO best practices
* Fully responsive layout
* Accessibility and keyboard navigation support

---

## License

This project was developed as part of a frontend engineering challenge and is intended for educational and evaluation purposes.
