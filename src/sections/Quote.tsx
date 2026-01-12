export const Quote = () => {
  return (
    <div className="bg-gray-100 py-20">
      <section className="container">
        <p className="max-w-[700px] font-serif text-4xl text-gray-600 md:text-5xl">
          Putting an end to inefficiencies, demotivation and{" "}
          <span className="text-amber-700 italic">untapped potential</span>.
        </p>
        <a
          href="#contact"
          className="mt-4 inline-block rounded-md bg-amber-700 px-3 py-1.5 text-lg font-semibold text-white hover:bg-amber-800 active:bg-amber-900 md:text-xl"
        >
          Get in touch
        </a>
      </section>
    </div>
  );
};
