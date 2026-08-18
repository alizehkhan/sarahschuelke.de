import { IconCheck } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const RetreatIntro = () => {
  const { t } = useTranslation();
  const items = t("retreat.intro.for-who.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="py-20">
      <div className="container text-gray-600">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("retreat.intro.kicker")}
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl leading-[1.15] font-medium tracking-[-0.5px] text-gray-600 md:text-5xl">
              {t("retreat.intro.title")}
            </h2>
            <p className="mt-4 max-w-[60ch] text-lg">
              {t("retreat.intro.paragraph")}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <p className="mb-4 text-xl font-semibold text-gray-700">
              {t("retreat.intro.for-who.title")}
            </p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-amber-700"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
