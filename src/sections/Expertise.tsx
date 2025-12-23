const ZONES = [
  "🔍 Identifying potential, patterns, and weaknesses & implementing viable optimizations",
  "🏗️ Structure & clarity",
  "🤝 Relationship management & communication",
  "🚀 Achieving impact while maintaining high satisfaction, motivation & good collaboration",
];

export const Expertise = () => {
  return (
    <div id="expertise">
      <section className="container py-20">
        <p className="mb-6 font-serif text-3xl font-semibold text-gray-600 md:text-8xl md:text-gray-400">
          My zones of genius
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
