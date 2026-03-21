"use client";

import React, { useState, useCallback, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  size?: number;
}

export default function CursorGlow({
  children,
  className = "",
  style,
  color = "rgba(44,95,46,0.18)",
  size = 500,
}: Props) {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPos({ x: -9999, y: -9999 });
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          left: pos.x,
          top: pos.y,
          width: size,
          height: size,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
          transition: "left 0.05s linear, top 0.05s linear",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
