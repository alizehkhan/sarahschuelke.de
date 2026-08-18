import { IconCheck } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import { Button } from "../../components/Button";

export const RetreatPricing = () => {
  const { t } = useTranslation();
  const includesItems = t("retreat.pricing.includes.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="py-20" id="pricing">
      <div className="container text-gray-600">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("retreat.pricing.kicker")}
        </p>
        <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-medium tracking-[-0.5px] text-gray-600 md:text-6xl">
          {t("retreat.pricing.title")}
        </h2>
        <div className="max-w-140 rounded-xl border border-gray-200 bg-gray-50 p-8">
          <p className="font-serif text-5xl font-medium text-gray-700">
            {t("retreat.pricing.price")}
          </p>
          <p className="mt-1 text-gray-500">
            {t("retreat.pricing.price-note")}
          </p>
          <p className="mt-6 text-lg font-semibold text-gray-700">
            {t("retreat.pricing.includes.title")}
          </p>
          <ul className="mt-2 space-y-2">
            {includesItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <IconCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-amber-700"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button href="#contact">{t("retreat.pricing.cta")}</Button>
          <p className="mt-3 text-sm text-gray-500">
            {t("retreat.pricing.note")}
          </p>
        </div>
      </div>
    </section>
  );
};
