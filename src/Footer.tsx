import { IconMail, IconPhone } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <div className="bg-gray-800 py-16 text-gray-100">
      <div className="container">
        <h2 className="mb-4 font-semibold tracking-wider text-gray-300 uppercase">
          Contact
        </h2>
        <p className="font-serif text-5xl font-semibold text-gray-200 md:text-6xl">
          Get in touch
        </p>
        <p className="mt-4 max-w-xl text-xl text-gray-400">
          All my workshops are easily adapted for companies, and can be offered
          both in-person or online. I'm happy to explore your needs and offer a
          simple solution that delivers.
        </p>

        <p className="mt-4 flex items-center gap-1 font-serif text-2xl text-gray-200">
          <IconPhone size={24} stroke={1.5} />
          +49 151 5030 0058
        </p>

        <address className="mt-4 flex items-center gap-1 font-serif text-2xl text-gray-200 not-italic">
          <IconMail size={24} stroke={1.5} />
          kontakt@sarahschuelke.de
        </address>

        <div className="mt-12 flex gap-2 text-sm">
          © {new Date().getFullYear()} Sarah Schülke
          <p>|</p>
          <a href="" className="underline underline-offset-2">
            Legal Notice
          </a>{" "}
          <p>|</p>
          <p>
            Website by {""}
            <a
              href="https://alizehkhan.com"
              target="_blank"
              className="underline underline-offset-2"
              rel="noreferrer"
            >
              Alizeh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
