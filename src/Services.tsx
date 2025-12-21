export const Services = () => {
  return (
    <div className="bg-gray-800 py-24">
      <section className="container grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <h2 className="mb-2 font-serif text-3xl font-semibold text-gray-200">
            Coaching
          </h2>
          <p className="text-lg text-gray-400">
            Getting support in developing personally and professionally
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-3xl font-semibold text-gray-200">
            Moderation & Facilitation
          </h2>
          <p className="text-lg text-gray-400">
            Poorly facilitated plannings, workshops and meetings are detrimental
            to a company's success.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-3xl font-semibold text-gray-200">
            Consulting
          </h2>
          <p className="text-lg text-gray-400">
            In need of an outsider's perspective on a specific topic? I am happy
            to challenge the status quo and provide personalised solutions to
            meet your unique needs.
          </p>
        </div>
      </section>
    </div>
  );
};
