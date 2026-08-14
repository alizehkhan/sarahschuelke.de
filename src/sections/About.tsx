import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="py-20" id="about">
      <div className="container">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          <div className="w-6 shrink-0 border-b border-gray-400"></div>
          {t("about.kicker")}
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="max-w-[65ch]">
            <h2 className="font-serif text-4xl leading-[1.15] font-medium tracking-[-0.5px] text-gray-600 md:text-6xl">
              {t("about.title")}
            </h2>
            <p className="mt-4 font-serif text-3xl leading-[1.2] font-medium tracking-[-0.5px] text-gray-500">
              {t("about.tagline")}
            </p>
            <p className="mt-4 font-serif text-3xl leading-[1.2] font-medium tracking-[-0.5px] text-gray-500">
              {t("about.subtitle")}
            </p>
          </div>
          <div className="max-w-[65ch]">
            <p className="text-lg text-gray-600">
              {t("about.paragraphs.one.prefix")}{" "}
              <span className="font-semibold text-amber-800">
                {t("about.paragraphs.one.highlight")}
              </span>
              {t("about.paragraphs.one.suffix")}
            </p>
            <p className="mt-6 text-lg text-gray-600">
              {t("about.paragraphs.two.prefix")}{" "}
              <span className="font-semibold text-amber-800">
                {t("about.paragraphs.two.highlight")}
              </span>
              {t("about.paragraphs.two.suffix")}
            </p>
            <p className="mt-6 text-lg text-gray-600">
              <span className="font-semibold text-amber-800">
                {t("about.paragraphs.three.highlight")}
              </span>
              {t("about.paragraphs.three.suffix")}
            </p>
            <p className="mt-6 text-lg text-gray-600">
              {t("about.paragraphs.four")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
