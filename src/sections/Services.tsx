const services = [
  "Coaching",
  "Moderation & Facilitation",
  "Consulting",
  "Workshops & Trainings",
  "Group Mentoring",
];

export const Services = () => {
  return (
    <div className="hidden bg-gray-800 pt-24 md:block">
      <section className="container">
        {services.map((service, index) => (
          <>
            <span
              key={index}
              className="font-serif text-8xl font-semibold break-all text-gray-700"
            >
              {service}
              <span className="px-4">.</span>
            </span>
          </>
        ))}
      </section>
    </div>
  );
};
