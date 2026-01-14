import { Button } from "../components/Button";

export const Quote = () => {
  return (
    <div className="bg-gray-100 py-20">
      <section className="container">
        <p className="max-w-[760px] font-serif text-3xl font-semibold text-gray-600 md:text-6xl">
          Putting an end to inefficiencies, demotivation and{" "}
          <span className="text-amber-700 italic">untapped potential</span>.
        </p>
        <Button href="#contact">Get in touch</Button>
      </section>
    </div>
  );
};
