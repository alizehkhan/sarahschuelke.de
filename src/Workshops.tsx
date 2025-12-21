import { WorkshopCard } from "./WorkshopCard";

const workshops = [
  {
    title: "Effective project collaboration",
    chips: ["📁 Projects", "🤝🏼 Teams", "💬 Communication"],
    description:
      "Let's strive for projects with clear communication, high commitment, and engaged collaboration, where everyone knows what's going on and pulls together. For a project routine that's noticeably more structured, relaxed and enjoyable.",
    duration: "4 x 4 hour sessions",
  },
  {
    title: "Embodied leadership",
    chips: ["🦁 Leadership", "💪🏼 Power", "🧘🏼 Embodiment"],
    description:
      "Leadership trainings don't need to be dry and theoretical. For those keen to learn more about Embodied Leadership by experiencing it in and through the body - you're in for a treat. This is your invitation to explore power and impact in a different way and to learn how to lead from a place where people want to follow you.",
    duration: "Half day",
  },
  {
    title: "Upleveled relational & communication skills",
    chips: ["👥 Relational", "💬 Communication"],
    description:
      "What leads to greater collaboration and trusting work relationships that help people excel? Increased interpersonal awareness and attunement, as well as communication that is recipient and needs focused - just to name a few ingredients. Learn hands-on where and how you can uplevel your skills.",
    duration: "Half day",
  },
  {
    title: "Productivity and focus for teams",
    chips: ["🪞 Reflection", "⏱️ Self-management"],
    description:
      "When meeting marathons, endless to-do lists, reactiveness and too little time to think about what would really move the needle are one's reality, it's time to pause and course correct. A few small, field-tested improvements will show great impact. Enabling you to perform better while being more relaxed, fulfilled and creative.",
    duration: "Half day",
  },
  {
    title: "The secret to building great teams",
    chips: ["🤝🏼 Teams", "🌱 Soft skills"],
    description:
      'You may have followed the common practices on how to build high- performing teams and yet you sense more is possible. But how to unlock that potential? Let\'s look at the (not so) "secret" ingredients often neglected. Let\'s learn how to introduce those "soft" factors and rituals that will show noticeable impact.',
    duration: "Half day",
  },
];

export const Workshops = () => {
  return (
    <div id="workshops">
      <section className="container mx-auto px-4 py-20 md:px-0">
        <h2 className="mb-4 font-serif text-4xl font-semibold text-gray-600 md:text-5xl">
          Signature Workshops
        </h2>
        <p className="mb-6 max-w-[70ch] text-lg text-gray-500">
          Here are a few signature workshops I typically offer. We can also
          design a session fully tailored to your team's needs. Workshops can be
          held onsite at your offices or delivered remotely.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop, index) => (
            <WorkshopCard
              key={index}
              title={workshop.title}
              chips={workshop.chips}
              description={workshop.description}
              duration={workshop.duration}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
