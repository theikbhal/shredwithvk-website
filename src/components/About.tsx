export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Science-Based Training",
      description: "Every workout is backed by research, not bro-science. Progressive overload and periodization for real results.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Sustainable Nutrition",
      description: "No crash diets. Learn to eat for fat loss while enjoying Indian food, eggs, and non-veg options.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Mindset & Discipline",
      description: "The mental game is everything. Learn the mindset shifts that made this transformation possible.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Real Transformation",
      description: "205 videos documenting every step. No filters, no fake before-afters. Just honest, raw content.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            The Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Built Different. <span className="gradient-text">Trained Smart.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ShredwithVK is not just a fitness channel. It&apos;s a documentation of a real
            transformation from 85 kg to 62 kg, from 36% body fat to 14%. Every video is
            a lesson learned the hard way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-card-bg border border-card-border card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-accent/10 to-orange-600/10 border border-accent/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">The Numbers Don&apos;t Lie</h3>
              <p className="text-gray-300">
                Joined YouTube in March 2022. In just a few years, built a community of 44,700+ subscribers
                with 23 million+ views. Every video is proof that consistency beats perfection.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">205</div>
                <div className="text-gray-400 text-sm">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">4+</div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
