export const Contact = () => {
  return (
    <div className="container py-24">
      <h2 className="mb-8 text-sm font-semibold tracking-wider text-gray-500 uppercase">
        Contact
      </h2>
      <p className="font-serif text-5xl font-semibold tracking-[-1px] text-gray-600 md:text-6xl">
        Get in touch
      </p>
      <p className="mt-8 max-w-xl text-xl text-gray-600">
        All my workshops are easily adapted for companies, and can be offered
        both in-person or online. I'm happy to explore your needs and offer a
        simple solution that delivers.
      </p>

      <address className="mt-4 font-serif text-3xl font-semibold text-gray-500 not-italic">
        kontakt@sarahschuelke.de
      </address>
    </div>
  );
};

Contact.displayName = "Contact";
