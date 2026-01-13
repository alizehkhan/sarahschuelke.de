import { Approach } from "../components/Approach";
import { Expertise } from "./Expertise";

export const About = () => (
  <div className="py-20" id="about">
    <div className="container">
      <h2 className="mb-4 font-semibold tracking-wider text-gray-500 uppercase">
        About
      </h2>
      <p className="mt-4 font-serif text-3xl leading-[1.15] font-semibold tracking-[-0.5px] text-gray-600 md:text-4xl">
        Hi, I'm Sarah
      </p>
      <p className="mt-4 font-serif text-3xl leading-[1.15] font-semibold tracking-[-0.5px] text-gray-600 md:text-4xl">
        Trainer. Coach. Consultant.
      </p>
      <div className="max-w-[740px]">
        <p className="mt-4 font-serif text-3xl leading-[1.15] font-semibold tracking-[-0.5px] text-gray-600 md:text-4xl">
          With a strong track record in building and managing successful
          products and teams.
        </p>
      </div>
      <div className="mt-6 max-w-[70ch]">
        <p className="text-xl text-gray-600">
          I have a unique ability to analyze and empathize fast, even in complex
          situations. For over 10 years,{" "}
          <span className="bg-amber-100 px-1 font-semibold text-amber-800">
            developing a clear vision and executing strategies reliably was my
            bread and butter
          </span>
          . Most important to me: moving forward while keeping everyone aligned,
          motivated, and on board - by leveraging individual strengths.
        </p>
        <p className="mt-6 text-xl text-gray-600">
          People know me for my structured, solution-focused way of working. At
          the same time, they value{" "}
          <span className="bg-amber-100 px-1 font-semibold text-amber-800">
            my ability to make people feel included, heard, and seen
          </span>
          . My workshops and facilitations have proven to bring clarity,
          alignment, and focus - while also being enjoyable.
        </p>
        <p className="mt-6 text-xl text-gray-600">
          <span className="bg-amber-100 px-1 font-semibold text-amber-800">
            Working in a fast-growing, listed company taught me to act
            efficiently and effectively
          </span>
          , creating real value for customers and the business. I’m always keen
          to improve processes and collaboration. And I enjoy new challenges and
          designing solutions that simply work.
        </p>
        <p className="mt-6 text-xl text-gray-600">
          And now I’m curious: how could I support you?
        </p>
      </div>
      <Approach />
      <Expertise />
    </div>
  </div>
);
