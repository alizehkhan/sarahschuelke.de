import { useTranslation } from "react-i18next";

import { Button } from "../components/Button";

export const Quote = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 py-20">
      <section className="container">
        <p className="max-w-[800px] font-serif text-3xl leading-[1.1] font-medium text-gray-600 md:text-6xl">
          Putting an end to inefficiencies, demotivation and{" "}
          <span className="text-amber-700 italic">untapped potential</span>.
        </p>
        <Button href="#contact">{t("get-in-touch")}</Button>
      </section>
    </div>
  );
};
