import { IconBuilding, IconVideo } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import { Button } from "../components/Button";
import { WorkshopCard } from "../components/WorkshopCard";

interface WorkshopContent {
  title: string;
  chips: string[];
  description: string;
  duration: string;
}

export const Workshops = () => {
  const { t } = useTranslation();
  const workshops = t("workshops.cards", {
    returnObjects: true,
  }) as WorkshopContent[];

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
              {t("workshops.meta.on-site")}
            </p>
            |
            <p className="flex items-center gap-1">
              <IconVideo size={24} className="text-gray-500" />
              {t("workshops.meta.remote")}
            </p>
          </div>
          <div className="flex gap-2 text-xl text-gray-700">
            <p>{t("workshops.meta.english")}</p>|
            <p>{t("workshops.meta.german")}</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <WorkshopCard
              key={workshop.title}
              title={workshop.title}
              chips={workshop.chips}
              description={workshop.description}
              duration={workshop.duration}
            />
          ))}
          <div className="flex flex-col justify-center rounded-lg border border-gray-200 bg-gray-50 p-6 text-center text-gray-700">
            <p className="text-xl font-semibold text-amber-700">
              {t("workshops.cta.title")}
            </p>
            <p className="mt-4">{t("workshops.cta.description")}</p>
            <div className="mx-auto mt-2">
              <Button href="#contact">{t("get-in-touch")}</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
