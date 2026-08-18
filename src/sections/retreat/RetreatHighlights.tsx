import {
  IconBed,
  IconBrain,
  IconUsersGroup,
  IconYoga,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

interface HighlightCard {
  title: string;
  description: string;
  items: string[];
}

const highlightIcons = [IconBrain, IconYoga, IconUsersGroup, IconBed];

export const RetreatHighlights = () => {
  const { t } = useTranslation();
  const cards = t("retreat.highlights.cards", {
    returnObjects: true,
  }) as HighlightCard[];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container text-gray-600">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("retreat.highlights.kicker")}
        </p>
        <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-medium tracking-[-0.5px] text-gray-600 md:text-6xl">
          {t("retreat.highlights.title")}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = highlightIcons[index];

            if (!Icon) {
              return null;
            }

            return (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-2 w-fit rounded-md bg-amber-100 p-2 text-amber-800">
                  <Icon size={32} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
                <p className="mb-2">{card.description}</p>
                <ul className="list-disc space-y-0.5 pl-8">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
