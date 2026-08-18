import { useTranslation } from "react-i18next";

import { Chip } from "../../components/Chip";

interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  items: string[];
}

export const RetreatItinerary = () => {
  const { t } = useTranslation();
  const days = t("retreat.itinerary.days", {
    returnObjects: true,
  }) as ItineraryDay[];

  return (
    <section className="py-20" id="itinerary">
      <div className="container text-gray-600">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("retreat.itinerary.kicker")}
        </p>
        <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-medium tracking-[-0.5px] text-gray-600 md:text-6xl">
          {t("retreat.itinerary.title")}
        </h2>
        <div className="space-y-4">
          {days.map((day) => (
            <div
              key={day.day}
              className="grid grid-cols-1 gap-4 rounded-xl border border-gray-200 bg-white p-6 md:grid-cols-[140px_1fr]"
            >
              <div>
                <p className="text-sm font-semibold tracking-widest text-amber-700 uppercase">
                  {day.day}
                </p>
                <p className="mt-1 text-xl font-semibold text-gray-700">
                  {day.title}
                </p>
              </div>
              <div>
                <p className="mb-3">{day.description}</p>
                <div className="flex flex-wrap gap-1">
                  {day.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
