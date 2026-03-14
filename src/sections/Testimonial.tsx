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
        <p className="mb-4 font-semibold tracking-wider text-gray-500 uppercase">
          {t("testimonials.kicker")}
        </p>
        <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-bold tracking-[-0.5px] text-gray-600 md:text-6xl">
          {t("testimonials.title")}
        </h2>
        <div className="flex">
          <div>
            <img src="/fritz.png" className="mb-3 h-16" alt="" />
            <div className="mt-6 mb-4 flex flex-wrap gap-1">
              <div className="flex w-fit items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-sm font-semibold">
                <IconBuildings size={20} />
                In-person
              </div>
              <div className="flex w-fit items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-sm font-semibold">
                <IconNotebook size={20} />
                Training Series
              </div>
            </div>
            <blockquote className="relative max-w-[50ch]">
              <q className="text-lg leading-[1.4]">
                <p className="mb-4">
                  Sarah's training was a complete success for our company and
                  the impact was visible throughout the company:{" "}
                  <span className="font-semibold text-amber-800">
                    numerous employees recommended the training to their
                    colleagues
                  </span>
                  , and many immediately began implementing the new ideas and
                  methods.
                </p>
                <p className="mb-8">
                  <span className="font-semibold text-amber-800">
                    Sarah manages to convey complex content in a lively,
                    structured, and understandable way.
                  </span>
                  Her friendly, open manner and the pleasant, confident
                  atmosphere she creates in the room enabled honest, inspiring
                  exchange. We can wholeheartedly recommend Sarah's training -
                  for all teams that want to improve their collaboration, and
                  achieve lasting change in their company.
                </p>
              </q>
              <div className="flex items-center gap-3">
                <img
                  src="/stephanie.jpeg"
                  alt=""
                  className="size-12 rounded-full border-2 border-gray-700"
                />
                <cite className="block not-italic">
                  <p className="font-semibold">Stephanie Blankenburg</p>
                  <p>Head of Personal Development</p>
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
