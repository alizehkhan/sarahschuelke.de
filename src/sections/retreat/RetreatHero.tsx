import { IconCalendarEvent, IconMapPin, IconTicket } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import { Button } from "../../components/Button";

export const RetreatHero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-[560px] max-h-screen bg-[url('/images/workshop.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/40 to-gray-900/10" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="container pb-10">
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-amber-200 uppercase">
            <div className="w-6 shrink-0 border-b border-amber-200"></div>
            {t("retreat.hero.kicker")}
          </p>
          <h1 className="max-w-160 font-serif text-4xl leading-[1.1] font-medium text-white md:text-[68px]">
            {t("retreat.hero.title")}
          </h1>
          <p className="mt-3 max-w-140 text-xl text-gray-200 md:text-2xl">
            {t("retreat.hero.subtitle")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-sm font-semibold text-white backdrop-blur">
              <IconCalendarEvent size={16} />
              {t("retreat.hero.dates")}
            </div>
            <div className="flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-sm font-semibold text-white backdrop-blur">
              <IconMapPin size={16} />
              {t("retreat.hero.location")}
            </div>
            <div className="flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-sm font-semibold text-white backdrop-blur">
              <IconTicket size={16} />
              {t("retreat.hero.spots")}
            </div>
          </div>
          <Button href="#pricing">{t("retreat.hero.cta")}</Button>
        </div>
      </div>
    </div>
  );
};
