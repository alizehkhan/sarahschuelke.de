const ZONES = [
  "🔍 Identifying Potential, Patterns, and Weaknesses & Implementing Viable Optimisations",
  "🏗️ Structure & Clarity",
  "🤝 Relationship Management & Communication",
  "🚀 Achieving Impact While Maintaining High Satisfaction, Motivation & Good Collaboration",
];

export const Expertise = () => {
  return (
    <div id="expertise">
      <section className="container py-20">
        <p className="mb-6 font-serif text-3xl font-semibold text-gray-600 md:text-5xl">
          My Zones of Genius
        </p>
        <div className="space-y-4">
          {ZONES.map((service, index) => (
            <div
              key={index}
              className="mb-2 w-fit rounded-xl bg-gray-50 p-4 text-xl text-gray-600 shadow-sm"
            >
              {service}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
