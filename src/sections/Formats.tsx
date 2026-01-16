import { IconChartColumn, IconMessage, IconTrophy } from "@tabler/icons-react";

import { Approach } from "../components/Approach";

const formatCards = [
  {
    icon: IconTrophy,
    title: "Trainings & Coaching",
    description:
      "Get support in developing individuals and teams to become excellent - e.g. in these areas:",
    items: [
      "Project & product management",
      "Team-building, communication & collaboration",
      "Leadership & management",
    ],
  },
  {
    icon: IconMessage,
    title: "Moderation & Facilitation",
    description:
      "Poorly facilitated plannings, workshops and meetings are detrimental to a company's success. I can support you and/or train you to run e.g. excellent:",
    items: [
      "OKR planning & check-ins",
      "Agile ceremonies like retrospectives",
      "Double diamond processes & design sprints",
    ],
  },
  {
    icon: IconChartColumn,
    title: "Consulting & Process Optimisation",
    description:
      "In need of an outsider's perspective on a specific topic? I am happy to challenge the status quo and provide personalised solutions. The process encompasses e.g.:",
    items: [
      "Identifying inefficiencies, knowledge gaps, optimisation potential",
      "Impact review and further improvements",
    ],
  },
];

export const Formats = () => (
  <section className="bg-gray-50 py-20" id="offers">
    <div className="container text-gray-600">
      <p className="mb-4 font-semibold tracking-wider text-gray-500 uppercase">
        Offers
      </p>
      <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-bold tracking-[-0.5px] text-gray-600 md:text-6xl">
        Ways we can work together
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {formatCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className="max-w-125 rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-2 w-fit rounded-md bg-orange-100 p-2 text-orange-700">
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
      <Approach />
    </div>
  </section>
);
