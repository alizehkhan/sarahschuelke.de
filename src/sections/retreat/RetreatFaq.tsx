import { IconChevronDown } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

interface FaqItem {
  q: string;
  a: string;
}

export const RetreatFaq = () => {
  const { t } = useTranslation();
  const items = t("retreat.faq.items", {
    returnObjects: true,
  }) as FaqItem[];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container text-gray-600">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("retreat.faq.kicker")}
        </p>
        <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-medium tracking-[-0.5px] text-gray-600 md:text-6xl">
          {t("retreat.faq.title")}
        </h2>
        <div className="max-w-160 space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-gray-200 bg-white p-4"
            >
              <summary className="focus-visible:focus flex cursor-pointer list-none items-center justify-between gap-4 rounded-md font-semibold text-gray-700 marker:content-none">
                {item.q}
                <IconChevronDown
                  size={20}
                  className="shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-3">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
