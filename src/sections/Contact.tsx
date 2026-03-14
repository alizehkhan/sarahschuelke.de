import { IconMail, IconPhone } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-800 py-16 text-gray-100" id="contact">
      <div className="container">
        <p className="mb-4 font-semibold tracking-wider text-gray-300 uppercase">
          Contact
        </p>
        <p className="font-serif text-4xl font-bold text-gray-200 md:text-6xl">
          {t("get-in-touch")}
        </p>
        <p className="mt-4 max-w-xl text-xl text-gray-400">
          All my workshops can be easily adapted, and can be offered both
          in-person or online. I'm happy to explore your needs and create a
          solution that fits perfectly.
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
            href="/impressum"
            className="focus-visible:focus rounded-md underline underline-offset-2"
          >
            Impressum
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
