import { useTranslation } from "react-i18next";

import { Navigation } from "../components/Navigation";
import { RetreatCta } from "./retreat/RetreatCta";
import { RetreatFaq } from "./retreat/RetreatFaq";
import { RetreatHero } from "./retreat/RetreatHero";
import { RetreatHighlights } from "./retreat/RetreatHighlights";
import { RetreatHost } from "./retreat/RetreatHost";
import { RetreatIntro } from "./retreat/RetreatIntro";
import { RetreatItinerary } from "./retreat/RetreatItinerary";
import { RetreatPricing } from "./retreat/RetreatPricing";
import { RetreatTestimonial } from "./retreat/RetreatTestimonial";

export const Retreat = () => {
  const { t } = useTranslation();

  return (
    <>
      <head>
        <title>{t("retreat.meta.title")}</title>
      </head>
      <Navigation />
      <RetreatHero />
      <RetreatIntro />
      <RetreatHighlights />
      <RetreatItinerary />
      <RetreatHost />
      <RetreatTestimonial />
      <RetreatPricing />
      <RetreatFaq />
      <RetreatCta />
    </>
  );
};
