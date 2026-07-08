"use client";

import { useState } from "react";

const categories = ["All", "Workouts", "Transformation", "Diet", "Mindset"];

const videos = [
  {
    id: "WbjZEAD4pEM",
    title: "Why Your Arms Still Look Small",
    category: "Workouts",
    tag: "Arms",
  },
  {
    id: "4mYZ0pcRGaM",
    title: "Brutal Leg Day Workout for Fat Loss & Muscle Growth",
    category: "Workouts",
    tag: "Legs",
  },
  {
    id: "dPhpFh-L1x4",
    title: "I Changed My Body in 7 Days Without Fat Burner",
    category: "Transformation",
    tag: "7-Day Challenge",
  },
  {
    id: "Ja0q4uUkDcU",
    title: "Shoulder Grow Nahi Ho Rahe? Do This Workout Correctly",
    category: "Workouts",
    tag: "Shoulders",
  },
  {
    id: "HOvPEwsrP6Q",
    title: "Back Grow Nahi Ho Raha? Try This Workout",
    category: "Workouts",
    tag: "Back",
  },
  {
    id: "mWbPJg22yQM",
    title: "Stop Wasting Chest Day - Do This Instead",
    category: "Workouts",
    tag: "Chest",
  },
  {
    id: "qqmz7Y6368M",
    title: "My Cutting Plan After Bulk - No Whey, Only Real Strategy",
    category: "Diet",
    tag: "Cutting",
  },
  {
    id: "Rko_B8iaTL8",
    title: "Mahashivratri Fast + Gym - No Excuses Motivation",
    category: "Mindset",
    tag: "Vlog",
  },
  {
    id: "7OJKaPNhneY",
    title: "Chest Workout Mistakes That Are Killing Your Gains",
    category: "Workouts",
    tag: "Chest",
  },
  {
    id: "rDmgpvoXUpY",
    title: "85 KG to 62 KG - The Difference is Consistency",
    category: "Transformation",
    tag: "Full Journey",
  },
  {
    id: "9mwntqFdO-0",
    title: "Indian Diet Explained - Veg, Egg & Non-Veg",
    category: "Diet",
    tag: "Indian Diet",
  },
  {
    id: "nhmqg_XQAqA",
    title: "85 Kg Se 62 Kg Tak - No Loose Skin, Poori Diet & Workout",
    category: "Transformation",
    tag: "Full Story",
  },
];

export default function Content() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="py-20 px-4 bg-card-bg/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Featured Videos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Watch. Learn. <span className="gradient-text">Transform.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From brutal workouts to realistic diet plans. Every video is designed to
            help you build a body you&apos;re proud of.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "bg-card-bg border border-card-border text-gray-400 hover:text-white hover:border-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden bg-card-bg border border-card-border card-hover"
            >
              <div className="relative aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    {video.tag}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold group-hover:text-accent transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@ShredwithVK/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            View All 205 Videos
          </a>
        </div>
      </div>
    </section>
  );
}
