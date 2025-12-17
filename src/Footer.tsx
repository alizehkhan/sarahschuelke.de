export const Footer = () => {
  return (
    <div className="flex justify-center gap-2 bg-gray-800 pt-8 pb-24 text-gray-100">
      <address className="not-italic">kontakt@sarahschuelke.de</address> |
      <p>
        Website by {""}
        <a
          href="https://alizehkhan.com"
          target="_blank"
          className="underline"
          rel="noreferrer"
        >
          Alizeh
        </a>
      </p>
    </div>
  );
};
