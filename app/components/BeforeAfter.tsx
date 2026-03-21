"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
}

export default function BeforeAfter({ before, after, beforeAlt, afterAlt, label }: Props) {
  const [pos, setPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // Entrance animation — auto-slide from 100 → 50 on mount
  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const updatePos = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(Math.max(x, 3), 97));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    setIsDragging(true);
    updatePos(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    updatePos(e.clientX);
  };
  const handleMouseUp = () => {
    dragging.current = false;
    setIsDragging(false);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
  };

  return (
    <div className="relative">
      {label && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-white text-gray-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 shadow-lg border border-gray-100">
          {label}
        </div>
      )}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden select-none"
        style={{
          height: "500px",
          cursor: isDragging ? "grabbing" : "ew-resize",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={(e) => updatePos(e.touches[0].clientX)}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER — base layer */}
        <div className="absolute inset-0">
          <Image src={after} alt={afterAlt} fill className="object-cover" />
          <div
            className="absolute bottom-5 right-5 text-white text-xs font-bold uppercase tracking-widest px-4 py-2"
            style={{ backgroundColor: "#2C5F2E" }}
          >
            After
          </div>
        </div>

        {/* BEFORE — clipped layer */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
            transition: revealed ? "none" : "clip-path 1s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <Image src={before} alt={beforeAlt} fill className="object-cover" />
          <div
            className="absolute bottom-5 left-5 text-white text-xs font-bold uppercase tracking-widest px-4 py-2"
            style={{ backgroundColor: "#111111" }}
          >
            Before
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/90" />
          {/* Handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-2xl flex items-center justify-center pointer-events-auto cursor-ew-resize"
            style={{ borderRadius: 0 }}
          >
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5l-5 5 5 5V5zm8 0v10l5-5-5-5z" />
            </svg>
          </div>
        </div>

        {/* Drag hint — fades after first interaction */}
        {pos === 50 && (
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <div className="bg-black/40 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 backdrop-blur-sm">
              ← Drag to Compare →
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
