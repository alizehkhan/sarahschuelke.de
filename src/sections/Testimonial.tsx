import {
  IconBuildings,
  IconNotebook,
  IconQuoteFilled,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <div id="testimonials" className="bg-gray-100 py-16 text-gray-600">
      <div className="container px-6">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("testimonials.kicker")}
        </p>
        <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-medium tracking-[-0.5px] text-gray-600 md:text-6xl">
          {t("testimonials.title")}
        </h2>
        <div className="flex">
          <div>
            <img src="/images/fritz.png" className="mb-3 h-16" alt="" />
            <div className="mt-6 mb-4 flex flex-wrap gap-1">
              <div className="flex w-fit items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-sm font-semibold">
                <IconBuildings size={20} />
                {t("testimonials.tags.in-person")}
              </div>
              <div className="flex w-fit items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-sm font-semibold">
                <IconNotebook size={20} />
                {t("testimonials.tags.training-series")}
              </div>
            </div>
            <blockquote className="relative max-w-[50ch]">
              <q className="text-lg leading-[1.4]">
                <p className="mb-4">
                  {t("testimonials.quote.one.prefix")}{" "}
                  <span className="font-semibold text-amber-800">
                    {t("testimonials.quote.one.highlight")}
                  </span>
                  {t("testimonials.quote.one.suffix")}
                </p>
                <p className="mb-8">
                  <span className="font-semibold text-amber-800">
                    {t("testimonials.quote.two.highlight")}
                  </span>
                  {t("testimonials.quote.two.suffix")}
                </p>
              </q>
              <div className="flex items-center gap-3">
                <img
                  src="/images/stephanie.jpeg"
                  alt=""
                  className="size-12 rounded-full border-2 border-gray-700"
                />
                <cite className="block not-italic">
                  <p className="font-semibold">Stephanie Blankenburg</p>
                  <p>{t("testimonials.person.role")}</p>
                </cite>
              </div>
            </blockquote>
          </div>
          <IconQuoteFilled
            size={440}
            className="hidden font-serif text-gray-200 md:block"
          />
        </div>
      </div>
    </div>
  );
};
