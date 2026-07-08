"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-[128px]" />
      </div>

      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-accent text-sm font-medium">Real Transformation Journey</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">From </span>
          <span className="gradient-text">36% Body Fat</span>
          <br />
          <span className="text-white">to </span>
          <span className="gradient-text">14%</span>
        </h1>

        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
          <div className="text-center">
            <span className="text-3xl sm:text-4xl font-bold text-white stat-number">85</span>
            <span className="text-accent text-lg sm:text-xl font-bold">kg</span>
            <p className="text-gray-400 text-sm mt-1">Before</p>
          </div>
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
          <div className="text-center">
            <span className="text-3xl sm:text-4xl font-bold text-white stat-number">62</span>
            <span className="text-accent text-lg sm:text-xl font-bold">kg</span>
            <p className="text-gray-400 text-sm mt-1">After</p>
          </div>
        </div>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          No shortcuts. No fake promises. Just discipline, smart training, and sustainable nutrition.
          Join 44,700+ people on this transformation journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@ShredwithVK"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent hover:bg-accent-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-all animate-pulse-glow flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch My Journey
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto border border-gray-600 hover:border-accent text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            Learn More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
