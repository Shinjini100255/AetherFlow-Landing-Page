/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set up native high-performance IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once the element is visible, stop observing to keep CPU cycles free
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // trigger when 10% of the section is visible
        rootMargin: '0px 0px -60px 0px' // offset slightly before it enters to feel proactive
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-[350ms] ease-out transform ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0 filter blur-0'
          : 'opacity-0 translate-y-8 filter blur-[1px]'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity, filter',
      }}
    >
      {children}
    </div>
  );
}
