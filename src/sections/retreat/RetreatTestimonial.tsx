import { IconQuoteFilled } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const RetreatTestimonial = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 py-16 text-gray-600">
      <div className="container px-6">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("retreat.testimonial.kicker")}
        </p>
        <div className="flex">
          <div>
            <blockquote className="relative max-w-[60ch]">
              <q className="text-lg leading-[1.4] md:text-2xl">
                {t("retreat.testimonial.quote.prefix")}{" "}
                <span className="font-semibold text-amber-800">
                  {t("retreat.testimonial.quote.highlight")}
                </span>
                {t("retreat.testimonial.quote.suffix")}
              </q>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src="/images/stephanie.jpeg"
                  alt=""
                  className="size-12 rounded-full border-2 border-gray-700"
                />
                <cite className="block not-italic">
                  <p className="font-semibold">
                    {t("retreat.testimonial.name")}
                  </p>
                  <p>{t("retreat.testimonial.role")}</p>
                </cite>
              </div>
            </blockquote>
          </div>
          <IconQuoteFilled
            size={360}
            className="hidden font-serif text-gray-200 md:block"
          />
        </div>
      </div>
    </div>
  );
};
