import {
  IconFolderOpen,
  IconTargetArrow,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import { Zones } from "../components/Zones";

interface ExpertiseCardContent {
  title: string;
  description: string;
  items: string[];
}

const expertiseIcons = [IconFolderOpen, IconUsersGroup, IconTargetArrow];

export const Expertise = () => {
  const { t } = useTranslation();
  const expertiseCards = t("expertise.cards", {
    returnObjects: true,
  }) as ExpertiseCardContent[];

  return (
    <section className="bg-gray-50 pb-20" id="expertise">
      <div className="container text-gray-600">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("expertise.kicker")}
        </p>
        <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-medium tracking-[-0.5px] text-gray-600 md:text-6xl">
          {t("expertise.title")}
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {expertiseCards.map((card, index) => {
            const IconComponent = expertiseIcons[index];

            if (!IconComponent) {
              return null;
            }

            return (
              <div
                key={card.title}
                className="max-w-[500px] rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-2 w-fit rounded-md bg-sky-100 p-2 text-sky-900">
                  <IconComponent size={32} />
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
        <Zones />
      </div>
    </section>
  );
};
