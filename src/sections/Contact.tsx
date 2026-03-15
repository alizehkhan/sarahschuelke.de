import { IconMail, IconPhone } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-800 py-16 text-gray-100" id="contact">
      <div className="container">
        <p className="mb-4 font-semibold tracking-wider text-gray-300 uppercase">
          {t("contact.kicker")}
        </p>
        <p className="font-serif text-4xl font-bold text-gray-200 md:text-6xl">
          {t("contact.title")}
        </p>
        <p className="mt-4 max-w-xl text-xl text-gray-400">
          {t("contact.description")}
        </p>

        <p className="mt-4 flex items-center gap-1 font-serif text-2xl text-gray-200">
          <IconPhone size={24} stroke={1.5} />
          +49 151 5030 0058
        </p>

        <p className="mt-4 flex items-center gap-1 font-serif text-2xl text-gray-200 not-italic">
          <IconMail size={24} stroke={1.5} />
          kontakt@sarahschuelke.de
        </p>

        <div className="mt-12 flex flex-col gap-2 text-sm md:flex-row">
          © {new Date().getFullYear()} Sarah Schülke
          <p className="hidden md:block">|</p>
          <a
            href="/legal"
            className="focus-visible:focus rounded-md underline underline-offset-2"
          >
            {t("footer.legal")}
          </a>{" "}
          <p className="hidden md:block">|</p>
          <a
            href="/privacy"
            className="focus-visible:focus rounded-md underline underline-offset-2"
          >
            {t("footer.privacy")}
          </a>{" "}
          <p className="hidden md:block">|</p>
          <p>
            Website by {""}
            <a
              href="https://alizehkhan.com"
              target="_blank"
              className="focus-visible:focus rounded-md underline underline-offset-2"
              rel="noreferrer"
            >
              Alizeh Khan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
