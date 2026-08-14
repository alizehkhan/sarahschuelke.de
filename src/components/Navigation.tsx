import { useTranslation } from "react-i18next";

const LINKS = ["offers", "workshops", "about", "testimonials", "contact"];

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith("de") ? "de" : "en";

  const handleLanguageChange = (language: "en" | "de") => {
    void i18n.changeLanguage(language);
  };

  return (
    <header>
      <nav className="container flex justify-between py-12 text-gray-800">
        <a
          href="/"
          className="focus-visible:focus rounded-md font-serif text-3xl hover:no-underline"
        >
          Sarah Schülke
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a
                className="focus-visible:focus rounded-md text-lg underline-offset-2 hover:underline"
                href={`/#${link}`}
              >
                {t(`navigation.${link}`)}
              </a>
            </li>
          ))}
          <fieldset>
            <legend className="sr-only">{t("navigation.language")}</legend>
            <input
              id="language-en"
              className="peer/en appearance-none"
              type="radio"
              name="language"
              value="en"
              checked={currentLanguage === "en"}
              onChange={() => handleLanguageChange("en")}
            />
            <label
              htmlFor="language-en"
              className="peer-focus-visible/en:focus rounded-l-md bg-white px-3 py-1 text-gray-600 peer-checked/en:border-gray-800 peer-checked/en:bg-gray-800 peer-checked/en:text-white"
            >
              🇬🇧 EN
            </label>
            <input
              id="language-de"
              className="peer/de appearance-none"
              type="radio"
              name="language"
              value="de"
              checked={currentLanguage === "de"}
              onChange={() => handleLanguageChange("de")}
            />
            <label
              htmlFor="language-de"
              className="peer-focus-visible/de:focus rounded-r-md bg-white px-3 py-1 text-gray-600 peer-checked/de:border-gray-800 peer-checked/de:bg-gray-800 peer-checked/de:text-white"
            >
              🇩🇪 DE
            </label>
          </fieldset>
        </ul>
      </nav>
    </header>
  );
};
