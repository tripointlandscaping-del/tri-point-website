"use client";

import { useEffect, useRef, ReactNode } from "react";

type Animation = "fade-up" | "fade-left" | "fade-right" | "fade-in" | "scale-in";

interface Props {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;
  threshold?: number;
  tag?: "div" | "section" | "article" | "li";
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.12,
  tag: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            el.style.animationDelay = `${delay}ms`;
          }
          el.classList.add(`animate-${animation}`);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    // @ts-expect-error ref on polymorphic tag
    <Tag ref={ref} className={`anim-hidden ${className}`}>
      {children}
    </Tag>
  );
}
