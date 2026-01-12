const ZONES = [
  "🔍 Identifying Potential, Patterns, and Weaknesses & Implementing Viable Optimisations",
  "🚀 Achieving Impact While Maintaining High Satisfaction, Motivation & Good Collaboration",
  "🤝 Relationship Management & Communication",
  "🏗️ Structure & Clarity",
];

export const Expertise = () => {
  return (
    <section className="container pb-20">
      <p className="mb-6 font-serif text-3xl font-semibold text-gray-600 md:text-5xl">
        My Zones of Genius
      </p>
      <div className="grid grid-cols-2 gap-4">
        {ZONES.map((service, index) => (
          <div
            key={index}
            className="mb-2 rounded-xl border-2 border-white bg-gray-50 p-4 text-xl text-gray-600 drop-shadow-sm"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
};
