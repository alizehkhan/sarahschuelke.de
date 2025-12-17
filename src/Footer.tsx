import { IconBrandLinkedin } from "@tabler/icons-react";
import { Contact } from "./Contact";

export const Footer = () => {
  return (
    <div className="bg-gray-800 py-16 text-gray-100">
      <div className="container">
        <Contact />
        <IconBrandLinkedin size={24} className="mt-4" />
        <div className="mx-auto mt-12 flex w-fit gap-2 text-sm">
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
