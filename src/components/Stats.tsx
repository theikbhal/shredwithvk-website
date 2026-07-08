"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Body Fat Lost", value: 22, suffix: "%", description: "From 36% to 14%" },
  { label: "Weight Lost", value: 23, suffix: "kg", description: "85 kg to 62 kg" },
  { label: "Subscribers", value: 44.7, suffix: "K+", description: "Growing community" },
  { label: "Total Views", value: 23, suffix: "M+", description: "Across all videos" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref} className="stat-number">
      {typeof value === "number" && value % 1 !== 0
        ? count.toFixed(1)
        : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 px-4 bg-card-bg/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-background/50 border border-card-border card-hover"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
