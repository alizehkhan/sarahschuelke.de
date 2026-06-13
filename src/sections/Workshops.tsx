import { IconBuilding, IconVideo } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import { Button } from "../components/Button";
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
    duration: "4 hours",
  },
  {
    title: "Upleveled Relational & Communication Skills",
    chips: ["👥 Relational", "💬 Communication"],
    description:
      "What leads to greater collaboration and trusting work relationships that help people excel? Increased interpersonal awareness and attunement, as well as communication that is recipient and needs focused - just to name a few ingredients. Learn hands-on where and how you can uplevel your skills.",
    duration: "4 hours",
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
  const { t } = useTranslation();

  return (
    <div id="workshops">
      <section className="container py-20">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("workshops.kicker")}
        </p>
        <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-medium tracking-[-0.5px] text-gray-600 md:text-6xl">
          {t("workshops.title")}
        </h2>
        <div className="mt-6 mb-8 flex flex-col gap-6 md:flex-row">
          <div className="flex gap-2 text-xl text-gray-700">
            <p className="flex items-center gap-1">
              <IconBuilding size={24} className="text-gray-500" />
              On-site
            </p>
            |
            <p className="flex items-center gap-1">
              <IconVideo size={24} className="text-gray-500" />
              Remote
            </p>
          </div>
          <div className="flex gap-2 text-xl text-gray-700">
            <p>🇬🇧 English</p>|<p>🇩🇪 German</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop, index) => (
            <WorkshopCard
              key={index}
              title={workshop.title}
              chips={workshop.chips}
              description={workshop.description}
              duration={workshop.duration}
            />
          ))}
          <div className="flex flex-col justify-center rounded-lg border border-gray-200 bg-gray-50 p-6 text-center text-gray-700">
            <p className="text-xl font-semibold text-amber-700">
              Not what you're looking for?
            </p>
            <p className="mt-4">
              I love tailoring solutions to your individual needs. Let’s chat so
              I can create a solution that fits perfectly for you.
            </p>
            <div className="mx-auto mt-2">
              <Button href="#contact">{t("get-in-touch")}</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
