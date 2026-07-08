const testimonials = [
  {
    name: "Rahul K.",
    text: "Lost 15 kg in 6 months following VK's workout plans. The chest workout videos completely changed my gym routine.",
    tag: "Lost 15 kg",
  },
  {
    name: "Priya M.",
    text: "As a vegetarian, I always struggled with protein. The Indian diet videos showed me how to hit my macros without supplements.",
    tag: "Veg Diet Expert",
  },
  {
    name: "Amit S.",
    text: "The shoulder and back workouts are brutal but they work. My physique completely changed in 4 months.",
    tag: "4 Month Transformation",
  },
  {
    name: "Vikram R.",
    text: "Started at 90 kg, now at 72 kg. VK's consistency message really stuck with me. Best fitness channel on YouTube.",
    tag: "Lost 18 kg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-card-bg/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Community
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Real People. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            44,700+ subscribers. 23 million+ views. The community speaks for itself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-2xl bg-card-bg border border-card-border card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <span className="text-accent text-sm font-medium">{testimonial.tag}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-card-bg border border-card-border rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-accent/30 border-2 border-card-bg flex items-center justify-center text-accent text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-gray-300 text-sm">
              Join <span className="text-accent font-bold">44,700+</span> subscribers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
