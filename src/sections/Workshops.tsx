import { IconBuilding, IconVideo } from "@tabler/icons-react";

import { WorkshopCard } from "../components/WorkshopCard";

const workshops = [
  {
    title: "Effective Project Collaboration",
    chips: ["📁 Projects", "🤝🏼 Teams", "💬 Communication"],
    description:
      "Let's strive for projects with clear communication, high commitment, and engaged collaboration, where everyone knows what's going on and pulls together. For a project routine that's noticeably more structured, relaxed and enjoyable.",
    duration: "4 x 4 hour sessions",
  },
  {
    title: "Embodied Leadership",
    chips: ["🦁 Leadership", "💪🏼 Power", "🧘🏼 Embodiment"],
    description:
      "Leadership trainings don't need to be dry and theoretical. For those keen to learn more about Embodied Leadership by experiencing it in and through the body - you're in for a treat. This is your invitation to explore power and impact in a different way and to learn how to lead from a place where people want to follow you.",
    duration: "Half day",
  },
  {
    title: "Upleveled Relational & Communication Skills",
    chips: ["👥 Relational", "💬 Communication"],
    description:
      "What leads to greater collaboration and trusting work relationships that help people excel? Increased interpersonal awareness and attunement, as well as communication that is recipient and needs focused - just to name a few ingredients. Learn hands-on where and how you can uplevel your skills.",
    duration: "Half day",
  },
  {
    title: "Time For Excellence - Small Improvements, Great Impact",
    chips: ["🪞 Reflection", "⏱️ Self-Management"],
    description:
      "When meeting marathons, endless to-do lists, reactiveness and too little time to think about what would really move the needle are one's reality, it's time to pause and course correct. A few small, field-tested improvements will show great impact. Enabling you to perform better while being more relaxed, fulfilled and creative.",
    duration: "2 hours",
  },
  {
    title: "The Secret to Building Great Teams",
    chips: ["🤝🏼 Teams", "🌱 Soft Skills"],
    description:
      'You may have followed the common practices on how to build high- performing teams and yet you sense more is possible. But how to unlock that potential? Let\'s look at the (not so) "secret" ingredients often neglected. Let\'s learn how to introduce those "soft" factors and rituals that will show noticeable impact.',
    duration: "3 hours",
  },
];

export const Workshops = () => {
  return (
    <div id="offers">
      <section className="container py-20">
        <p className="mb-4 font-semibold tracking-wider text-gray-500 uppercase">
          Offers
        </p>
        <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-bold tracking-[-0.5px] text-gray-600 md:text-6xl">
          My signature workshops
        </h2>
        <div className="mt-6 mb-8 flex flex-col gap-8 md:flex-row">
          <div className="flex gap-2 text-xl text-gray-700">
            <p className="flex items-center gap-1">
              <IconBuilding size={24} className="text-gray-400" />
              On-site
            </p>
            |
            <p className="flex items-center gap-1">
              <IconVideo size={24} className="text-gray-400" />
              Remote
            </p>
          </div>
          <div className="flex gap-2 text-xl text-gray-700">
            <p>🇬🇧 English</p>|<p>🇩🇪 German</p>
          </div>
        </div>
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
