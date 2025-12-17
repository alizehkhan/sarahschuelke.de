const SERVICES = [
  {
    title: "🚢 From vision to delivery",
    description:
      "I help product and project professionals prioritize what matters, make confident decisions, and take ideas all the way to delivery.",
  },
  {
    title: "🤝 Working better together",
    description:
      "I support teams in strengthening collaboration, alignment, and trust so shared goals become achievable.",
  },
  {
    title: "📹 Meetings that actually work",
    description:
      "I design and facilitate workshops and meetings that are focused, inclusive, and genuinely useful — not draining.",
  },
  {
    title: "🌱 Growing as a professional",
    description:
      "I support individuals in developing communication, confidence, and sustainable ways of performing at their best.",
  },
  {
    title: "🦁 Leading people well",
    description:
      "I work with leaders to combine clarity and empathy — leading people effectively while keeping business goals in sight.",
  },
  {
    title: "🔍 An outside perspective",
    description:
      "I offer an outside perspective to uncover blind spots, improve ways of working, and create solutions that truly fit.",
  },
];

export const Services = () => {
  return (
    <div id="services">
      <section className="container mx-auto px-4 py-20 md:px-0">
        <h2 className="mb-12 font-serif text-4xl font-semibold text-gray-700 md:text-5xl">
          How I can support you
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div key={index} className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-2 font-serif text-xl font-semibold text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
