"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">SHRED</span>
            <span className="text-2xl font-light text-white">withVK</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-accent transition-colors">
              About
            </a>
            <a href="/calendar" className="text-gray-300 hover:text-accent transition-colors">
              Calendar
            </a>
            <a href="#videos" className="text-gray-300 hover:text-accent transition-colors">
              Videos
            </a>
            <a href="#diet" className="text-gray-300 hover:text-accent transition-colors">
              Diet Tips
            </a>
            <a
              href="https://www.youtube.com/@ShredwithVK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-secondary text-white px-5 py-2 rounded-full font-medium transition-all"
            >
              Subscribe
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-card-border">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-accent py-2"
            >
              About
            </a>
            <a
              href="/calendar"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-accent py-2"
            >
              Calendar
            </a>
            <a
              href="#videos"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-accent py-2"
            >
              Videos
            </a>
            <a
              href="#diet"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-accent py-2"
            >
              Diet Tips
            </a>
            <a
              href="https://www.youtube.com/@ShredwithVK"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-accent text-white text-center py-3 rounded-full font-medium mt-4"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
