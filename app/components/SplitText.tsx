"use client";

import { useEffect, useRef } from "react";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 90,
  as: Tag = "span",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLSpanElement>(".split-word").forEach((word, i) => {
            word.style.animationDelay = `${delay + i * stagger}ms`;
            word.classList.add("animate-fade-up");
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger]);

  const words = text.split(" ");

  return (
    // @ts-expect-error polymorphic ref
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="split-word anim-hidden inline-block" style={{ marginRight: i < words.length - 1 ? "0.3em" : 0 }}>
          {word}
        </span>
      ))}
    </Tag>
  );
}
