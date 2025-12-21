export const Quote = () => {
  return (
    <div className="bg-gray-100 py-20">
      <section className="container mx-auto">
        <p className="max-w-[700px] font-serif text-5xl text-gray-600">
          Putting an end to inefficiencies, demotivation, unresolved conflicts,
          and <span className="text-amber-700 italic">untapped potential</span>.
        </p>
        <a
          href="#contact"
          className="mt-4 inline-block rounded-md bg-amber-700 px-3 py-1.5 font-semibold text-white hover:bg-amber-800 active:bg-amber-900"
        >
          Get in touch
        </a>
      </section>
    </div>
  );
};
