import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number; // base radius (also used as "depth" for parallax)
  phase: number; // twinkle phase
  speed: number; // twinkle speed
}

const MAX_SPEED = 0.35;
const POINTER_RADIUS = 130;

/**
 * Fixed, full-screen animated background:
 *  - drifting aurora blobs (pure CSS, transform-only animations)
 *  - fireflies (dark) / pollen (light) drawn on a single canvas
 *
 * Performance: pre-rendered glow sprite (no shadowBlur), capped DPR,
 * particle count scales with viewport, pauses when the tab is hidden and
 * renders a single static frame when the user prefers reduced motion.
 */
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const root = document.documentElement;
    const reduceMotionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    let w = 0;
    let h = 0;
    let particles: Particle[] = [];
    let sprite: HTMLCanvasElement = document.createElement("canvas");
    let baseAlpha = 0.8;
    let isDark = true;
    let raf = 0;
    let last = 0;
    let lastScroll = window.scrollY;
    let resizeTimer = 0;
    const pointer = { x: -9999, y: -9999 };

    const spawn = (): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.05,
      r: 0.8 + Math.random() * 1.6,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 1.2,
    });

    const buildSprite = () => {
      const styles = getComputedStyle(root);
      const rgb = styles
        .getPropertyValue("--c-particle")
        .trim()
        .split(/\s+/)
        .join(",");
      baseAlpha = parseFloat(styles.getPropertyValue("--particle-alpha")) || 0.8;
      isDark = root.classList.contains("dark");

      const size = 64;
      const s = document.createElement("canvas");
      s.width = s.height = size;
      const g = s.getContext("2d");
      if (!g) return;
      const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      grad.addColorStop(0, `rgba(${rgb},1)`);
      grad.addColorStop(0.12, `rgba(${rgb},0.95)`);
      grad.addColorStop(0.35, `rgba(${rgb},0.28)`);
      grad.addColorStop(1, `rgba(${rgb},0)`);
      g.fillStyle = grad;
      g.fillRect(0, 0, size, size);
      sprite = s;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.round(Math.min(70, Math.max(22, (w * h) / 20000)));
      while (particles.length < target) particles.push(spawn());
      particles = particles.slice(0, target);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = isDark ? "lighter" : "source-over";
      for (const p of particles) {
        const twinkle = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(p.phase));
        const size = p.r * (isDark ? 9 : 7);
        ctx.globalAlpha = baseAlpha * twinkle;
        ctx.drawImage(sprite, p.x - size / 2, p.y - size / 2, size, size);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const step = (k: number) => {
      // Parallax: larger (closer) particles move more when scrolling.
      const scroll = window.scrollY;
      const scrollDelta = scroll - lastScroll;
      lastScroll = scroll;

      for (const p of particles) {
        p.phase += p.speed * 0.04 * k;

        // Gentle wandering
        p.vx += (Math.random() - 0.5) * 0.02 * k;
        p.vy += (Math.random() - 0.5) * 0.02 * k;

        // Drift away from the pointer
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < POINTER_RADIUS * POINTER_RADIUS && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const force = (1 - d / POINTER_RADIUS) * 0.12 * k;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }

        // Clamp + damp velocity
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > MAX_SPEED) {
          p.vx = (p.vx / sp) * MAX_SPEED;
          p.vy = (p.vy / sp) * MAX_SPEED;
        }
        p.vx *= 0.995;
        p.vy *= 0.995;

        p.x += p.vx * k;
        p.y += p.vy * k - scrollDelta * p.r * 0.08;

        // Wrap around edges
        const m = 24;
        if (p.x < -m) p.x = w + m;
        else if (p.x > w + m) p.x = -m;
        if (p.y < -m) p.y = h + m;
        else if (p.y > h + m) p.y = -m;
      }
    };

    const loop = (now: number) => {
      const k = Math.min(now - last, 50) / 16.67; // frame-rate independent
      last = now;
      step(k);
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduceMotionMq.matches) {
        draw(); // static frame only
        return;
      }
      last = performance.now();
      lastScroll = window.scrollY;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => cancelAnimationFrame(raf);

    // --- Events ---
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        if (reduceMotionMq.matches) draw();
      }, 150);
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const themeObserver = new MutationObserver(() => {
      buildSprite();
      if (reduceMotionMq.matches) draw();
    });

    buildSprite();
    resize();
    start();

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    reduceMotionMq.addEventListener("change", start);
    themeObserver.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      reduceMotionMq.removeEventListener("change", start);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />
      <div className="bg-grid absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="bg-vignette absolute inset-0" />
    </div>
  );
}
