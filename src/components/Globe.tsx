"use client";
import { useEffect, useRef, useCallback } from "react";

interface Point {
  bx: number;
  by: number;
  bz: number;
}

export default function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    rotX: 0.3,
    rotY: 0,
    velX: 0,
    velY: 0.003,
    dragging: false,
    lastMX: 0,
    lastMY: 0,
    mouseX: -9999,
    mouseY: -9999,
    mouseIn: false,
    animId: 0,
  });

  const buildPoints = useCallback((n: number): Point[] => {
    const pts: Point[] = [];
    for (let i = 0; i < n; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      pts.push({
        bx: Math.sin(phi) * Math.cos(theta),
        by: Math.cos(phi),
        bz: Math.sin(phi) * Math.sin(theta),
      });
    }
    return pts;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;
    const N = 800;
    const pts = buildPoints(N);

    const setSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    setSize();

    const rotatePoint = (
      x: number,
      y: number,
      z: number,
      rx: number,
      ry: number
    ): [number, number, number] => {
      const y1 = y * Math.cos(rx) - z * Math.sin(rx);
      const z1 = y * Math.sin(rx) + z * Math.cos(rx);
      const x2 = x * Math.cos(ry) + z1 * Math.sin(ry);
      const z2 = -x * Math.sin(ry) + z1 * Math.cos(ry);
      return [x2, y1, z2];
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const R = Math.min(W, H) * 0.42;
      const cx = W / 2;
      const cy = H / 2;

      ctx.clearRect(0, 0, W, H);

      const mapped = pts.map((p) => {
        const [rx, ry, rz] = rotatePoint(p.bx, p.by, p.bz, s.rotX, s.rotY);
        let sx = cx + rx * R;
        let sy = cy - ry * R;
        let pull = 0;

        if (s.mouseIn) {
          const dx = s.mouseX - sx;
          const dy = s.mouseY - sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;
          if (dist < maxDist) {
            pull = (1 - dist / maxDist) * 0.5;
            sx += dx * pull * 0.55;
            sy += dy * pull * 0.55;
          }
        }

        const depth = (rz + 1) / 2;
        return { sx, sy, rz, depth, pull };
      });

      mapped.sort((a, b) => a.rz - b.rz);

      mapped.forEach(({ sx, sy, depth, pull }) => {
        const visible = depth > 0.15;
        const baseAlpha = visible ? depth * 0.75 + 0.05 : 0.04;
        const alpha = Math.min(1, baseAlpha + pull * 0.9);
        const size = (visible ? depth * 2.0 + 0.4 : 0.5) + pull * 3.5;
        const rCh = Math.round(255 * (1 - pull * 0.25));
        const gCh = Math.round(255 * (1 - pull * 0.1));

        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.3, size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rCh},${gCh},255,${alpha})`;
        ctx.fill();
      });

      if (!s.dragging) {
        s.rotY += s.velY;
        s.rotX += s.velX;
        s.velX *= 0.96;
        s.velY = s.velY * 0.992 + 0.003 * 0.008;
      }

      s.animId = requestAnimationFrame(draw);
    };

    draw();

    const onMouseDown = (e: MouseEvent) => {
      s.dragging = true;
      s.lastMX = e.clientX;
      s.lastMY = e.clientY;
      s.velX = 0;
      s.velY = 0;
    };
    const onMouseUp = () => {
      s.dragging = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (s.dragging) {
        const dx = e.clientX - s.lastMX;
        const dy = e.clientY - s.lastMY;
        s.velY = dx * 0.009;
        s.velX = dy * 0.009;
        s.rotY += dx * 0.009;
        s.rotX += dy * 0.009;
        s.lastMX = e.clientX;
        s.lastMY = e.clientY;
      }
      const rect = canvas.getBoundingClientRect();
      s.mouseX = e.clientX - rect.left;
      s.mouseY = e.clientY - rect.top;
    };
    const onEnter = () => {
      s.mouseIn = true;
    };
    const onLeave = () => {
      s.mouseIn = false;
    };
    const onResize = () => setSize();

    const onTouchStart = (e: TouchEvent) => {
      s.dragging = true;
      s.lastMX = e.touches[0].clientX;
      s.lastMY = e.touches[0].clientY;
      s.velX = 0;
      s.velY = 0;
    };
    const onTouchEnd = () => {
      s.dragging = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const dx = e.touches[0].clientX - s.lastMX;
      const dy = e.touches[0].clientY - s.lastMY;
      s.velY = dx * 0.009;
      s.velX = dy * 0.009;
      s.rotY += dx * 0.009;
      s.rotX += dy * 0.009;
      s.lastMX = e.touches[0].clientX;
      s.lastMY = e.touches[0].clientY;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      cancelAnimationFrame(s.animId);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, [buildPoints]);

  return (
    <div
      className={`relative w-full h-full ${className ?? ""}`}
      style={{ cursor: "grab" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(100,130,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      />
    </div>
  );
}
