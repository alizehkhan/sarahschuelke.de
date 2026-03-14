import {
  IconBuildingBridge,
  IconHeartHandshake,
  IconRocket,
  IconSearch,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const Zones = () => {
  const { t } = useTranslation();

  const ZONES = [
    {
      Icon: IconSearch,
      text: t("expertise.zones-of-genius.one"),
    },
    {
      Icon: IconRocket,
      text: t("expertise.zones-of-genius.two"),
    },
    {
      Icon: IconHeartHandshake,
      text: t("expertise.zones-of-genius.three"),
    },
    {
      Icon: IconBuildingBridge,
      text: t("expertise.zones-of-genius.four"),
    },
  ];

  return (
    <section className="my-16">
      <p className="mb-6 font-serif text-2xl font-bold text-gray-600 md:text-3xl">
        {t("expertise.zones-of-genius.title")}
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {ZONES.map((zone, index) => {
          const { Icon } = zone;
          return (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-4 text-xl text-gray-600"
            >
              <div className="mb-2 w-fit rounded-lg bg-sky-100 p-2 text-4xl text-sky-900">
                <Icon size={32} />
              </div>
              {zone.text}
            </div>
          );
        })}
      </div>
    </section>
  );
};
