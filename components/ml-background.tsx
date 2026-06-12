'use client';

import { useEffect, useRef } from 'react';

function getThemeColors(): { primary: string; accent: string } {
  if (typeof window === 'undefined') {
    return { primary: 'oklch(0.75 0.22 195)', accent: 'oklch(0.75 0.22 195)' };
  }
  const style = getComputedStyle(document.documentElement);
  return {
    primary: style.getPropertyValue('--primary').trim() || 'oklch(0.75 0.22 195)',
    accent: style.getPropertyValue('--accent').trim() || 'oklch(0.75 0.22 195)',
  };
}

type DataPoint = {
  x: number;
  y: number;
  clusterX: number;
  clusterY: number;
  phase: number;
  driftX: number;
  driftY: number;
};

export function MLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = mq.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener('change', handleMotionChange);

    let animationId = 0;
    let startTime = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth ?? canvas.offsetWidth;
      const height = parent?.clientHeight ?? canvas.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, width * dpr);
      canvas.height = Math.max(1, height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    const pointCount = 55;
    const points: DataPoint[] = Array.from({ length: pointCount }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      clusterX: 0.62 + (Math.random() - 0.5) * 0.12,
      clusterY: 0.72 + (Math.random() - 0.5) * 0.1,
      phase: i * 0.17,
      driftX: (Math.random() - 0.5) * 0.00035,
      driftY: (Math.random() - 0.5) * 0.00035,
    }));

    const draw = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const w = canvas.parentElement?.clientWidth ?? canvas.offsetWidth;
      const h = canvas.parentElement?.clientHeight ?? canvas.offsetHeight;
      const { primary, accent } = getThemeColors();
      const animate = !reducedMotionRef.current;

      ctx.clearRect(0, 0, w, h);

      // Drifting data points with gentle clustering
      const positions: { x: number; y: number; alpha: number }[] = [];

      points.forEach((point) => {
        if (animate) {
          point.x = (point.x + point.driftX + 1) % 1;
          point.y = (point.y + point.driftY + 1) % 1;
        }

        const blend = animate
          ? 0.25 + 0.55 * (Math.sin(elapsed * 1.2 + point.phase) + 1) / 2
          : 0.65;
        const x = w * (point.x * (1 - blend) + point.clusterX * blend);
        const y = h * (point.y * (1 - blend) + point.clusterY * blend);
        const radius = 2 + (animate ? Math.sin(elapsed * 1.5 + point.phase) * 1.2 : 0);
        const alpha = 0.45 + (animate ? Math.sin(elapsed * 0.9 + point.phase) * 0.15 : 0);

        positions.push({ x, y, alpha });

        ctx.globalAlpha = alpha;
        ctx.fillStyle = primary;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connection lines between nearby points
      if (animate) {
        ctx.strokeStyle = accent;
        for (let i = 0; i < positions.length; i++) {
          for (let j = i + 1; j < positions.length; j++) {
            const dx = positions[i].x - positions[j].x;
            const dy = positions[i].y - positions[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < 90) {
              ctx.globalAlpha = 0.12 * (1 - dist / 90);
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(positions[i].x, positions[i].y);
              ctx.lineTo(positions[j].x, positions[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
      mq.removeEventListener('change', handleMotionChange);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
