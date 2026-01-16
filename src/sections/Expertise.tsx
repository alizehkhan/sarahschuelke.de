import {
  IconFolderOpen,
  IconTargetArrow,
  IconUsersGroup,
} from "@tabler/icons-react";

import { Zones } from "../components/Zones";

const expertiseCards = [
  {
    icon: IconFolderOpen,
    title: "Product & Project Management",
    description:
      "Taking skills to the next level and overcoming common challenges, e.g.:",
    items: [
      "Prioritisation & decision-making",
      "Stakeholder communication & management",
      "Better collaboration",
    ],
  },
  {
    icon: IconUsersGroup,
    title: "Team-Building, Communication & Collaboration",
    description:
      "How well a team works together is crucial to productivity and efficiency. Hence, some areas at times need focus, e.g.:",
    items: [
      "Team cohesion, goals & alignment",
      "Better communication & collaboration",
      "Conflict resolution",
    ],
  },
  {
    icon: IconTargetArrow,
    title: "Leadership & Management",
    description:
      "A leader these days needs to balance and master both - managing people empathically and ensuring business success. I can help with, e.g.:",
    items: [
      "Embodied leadership",
      "Professional relationship management",
      "Goal setting frameworks, e.g. OKRs",
      "Empathic change management",
    ],
  },
];

export const Expertise = () => (
  <section className="bg-gray-50 pb-20" id="expertise">
    <div className="container text-gray-600">
      <p className="mb-4 font-semibold tracking-wider text-gray-500 uppercase">
        Expertise
      </p>
      <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-bold tracking-[-0.5px] text-gray-600 md:text-6xl">
        Capabilities I can help you build
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {expertiseCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className="max-w-[500px] rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-2 w-fit rounded-md bg-sky-100 p-2 text-sky-900">
                <IconComponent size={32} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
              <p className="mb-2">{card.description}</p>
              <ul className="list-disc space-y-0.5 pl-8">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <Zones />
    </div>
  </section>
);
