const tips = [
  {
    icon: "🥗",
    title: "High-Protein Indian Diet",
    description: "Paneer, eggs, chicken, dal - protein sources that actually work for Indian meals. No need for expensive supplements.",
    link: "https://www.youtube.com/watch?v=9mwntqFdO-0",
  },
  {
    icon: "🍳",
    title: "Realistic Meal Ideas",
    description: "Simple, affordable meals that fit a busy Indian lifestyle. Prep once, eat clean all week.",
    link: "https://www.youtube.com/watch?v=qqmz7Y6368M",
  },
  {
    icon: "📉",
    title: "Fat Loss Without Fat Burners",
    description: "Realistic fat loss strategies that work. No shortcuts, no magic pills - just science and consistency.",
    link: "https://www.youtube.com/watch?v=dPhpFh-L1x4",
  },
  {
    icon: "💪",
    title: "Cutting After Bulk",
    description: "How to transition from building muscle to losing fat while maintaining your gains. The complete strategy.",
    link: "https://www.youtube.com/watch?v=qqmz7Y6368M",
  },
];

export default function DietTips() {
  return (
    <section id="diet" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nutrition Guide
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Eat Smart. <span className="gradient-text">Train Hard.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The secret to losing fat isn&apos;t starving yourself. It&apos;s eating the right food,
            at the right time, in the right amounts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <a
              key={tip.title}
              href={tip.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-card-bg border border-card-border card-hover group block"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {tip.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">{tip.description}</p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                Watch Video
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-card-bg border border-card-border">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">🧠</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Science-Based, Not Crash Diets
              </h3>
              <p className="text-gray-400">
                Every diet tip on this channel is backed by research. We believe in sustainable
                nutrition that you can follow for life, not just for a few weeks. No magic
                supplements, no extreme restriction - just smart eating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
