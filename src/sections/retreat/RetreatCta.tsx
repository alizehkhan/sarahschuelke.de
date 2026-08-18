import { useTranslation } from "react-i18next";

import { Button } from "../../components/Button";

export const RetreatCta = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 py-20">
      <section className="container">
        <p className="max-w-[800px] font-serif text-3xl leading-[1.1] font-medium text-gray-600 md:text-6xl">
          {t("retreat.final-cta.prefix")}{" "}
          <span className="text-amber-700 italic">
            {t("retreat.final-cta.highlight")}.
          </span>
        </p>
        <p className="mt-4 max-w-[60ch] text-lg text-gray-600">
          {t("retreat.final-cta.spots-note")}
        </p>
        <Button href="#pricing">{t("retreat.final-cta.cta")}</Button>
      </section>
    </div>
  );
};
