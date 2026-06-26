/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  glow: number;
  color: string;
}

export default function AIVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const nodes: Node[] = [];
    const maxNodes = 65;
    const connectionDist = 110;
    const colors = ['#a855f7', '#06b6d4', '#3b82f6'];

    // Mouse coordinates
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 180 };

    // Function to initialize nodes
    const initNodes = (w: number, h: number) => {
      nodes.length = 0;
      for (let i = 0; i < maxNodes; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1.5,
          glow: Math.random() * 10 + 5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    // Handle resizing using ResizeObserver (per canvas guidelines)
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        width = Math.floor(newWidth);
        height = Math.floor(newHeight);
        canvas.width = width;
        canvas.height = height;
        initNodes(width, height);
      }
    });

    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Lerp mouse coordinates for ultra-smooth responsiveness
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Draw faint background glow on mouse position
      if (mouse.x > -1000 && mouse.y > -1000) {
        const radialGlow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius
        );
        radialGlow.addColorStop(0, 'rgba(168, 85, 247, 0.06)');
        radialGlow.addColorStop(0.5, 'rgba(6, 182, 212, 0.02)');
        radialGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Move
        n.x += n.vx;
        n.y += n.vy;

        // Bounce on borders
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Constrain strictly to bounds
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));

        // Magnetic attraction to mouse
        if (mouse.x > -1000 && mouse.y > -1000) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            n.x -= (dx / dist) * force * 0.45;
            n.y -= (dy / dist) * force * 0.45;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);

            // Subtle gradient transition line between nodes
            const grad = ctx.createLinearGradient(n.x, n.y, n2.x, n2.y);
            grad.addColorStop(0, n.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
            grad.addColorStop(1, n2.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));

            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = n.glow;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for line performance
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto radial-mask"
      id="ai-visualization-container"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75"
        id="ai-visualization-canvas"
      />
    </div>
  );
}
