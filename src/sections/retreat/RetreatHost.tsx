import { useTranslation } from "react-i18next";

export const RetreatHost = () => {
  const { t } = useTranslation();
  const paragraphs = t("retreat.host.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="bg-gray-50 py-20" id="host">
      <div className="container">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("retreat.host.kicker")}
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,280px)_1fr]">
          <img
            src="/images/sarah.jpg"
            alt=""
            className="aspect-square w-full rounded-xl object-cover"
          />
          <div>
            <h2 className="font-serif text-4xl leading-[1.15] font-medium tracking-[-0.5px] text-gray-600 md:text-5xl">
              {t("retreat.host.title")}
            </h2>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mt-4 max-w-[65ch] text-lg text-gray-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
