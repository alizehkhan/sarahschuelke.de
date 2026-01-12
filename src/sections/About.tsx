import { Approach } from "../components/Approach";

export const About = () => (
  <div className="py-20" id="about">
    <div className="container">
      <h2 className="mb-4 font-semibold tracking-wider text-gray-500 uppercase">
        About
      </h2>
      <p className="my-4 font-serif text-5xl font-semibold text-gray-600 md:text-6xl">
        Hi, I'm Sarah
      </p>
      <p className="my-4 font-serif text-5xl font-semibold text-gray-400 md:text-8xl">
        Trainer. Coach. Consultant.
      </p>
      <div className="max-w-[740px]">
        <p className="mt-4 font-serif text-3xl leading-[1.15] tracking-[-0.5px] text-gray-500 md:text-4xl">
          With a strong track record in building and managing successful
          products and teams.
        </p>
        <Approach />
      </div>
      <div className="mt-12 max-w-[70ch]">
        <p className="text-xl text-gray-600">
          I have a unique ability to <b>analyze and empathize fast</b>, even in
          complex situations. For over <b>10 years</b>, developing a{" "}
          <b>clear vision</b> and <b>executing strategies reliably</b> was my
          bread and butter. Most important to me: moving forward while keeping
          everyone <b>aligned, motivated, and on board</b> - by leveraging
          <b> individual strengths</b>.
        </p>
        <p className="mt-6 text-xl text-gray-600">
          People know me for my <b>structured, solution-focused way</b> of
          working. At the same time, they value my ability to make people feel
          <b>included, heard, and seen</b>. My workshops and facilitations have
          proven to bring <b>clarity, alignment, and focus</b> - while also
          being <b>enjoyable</b>.
        </p>
        <p className="mt-6 text-xl text-gray-600">
          Working in a <b>fast-growing, listed company</b> taught me to act
          efficiently and effectively, <b>creating real value</b> for customers
          and the business. I’m always keen to improve
          <b> processes and collaboration</b>. And I enjoy new challenges and
          designing <b>solutions that simply work</b>.
        </p>
        <p className="mt-6 text-xl text-gray-600">
          And now I’m curious: <b>how could I support you?</b>
        </p>
      </div>
    </div>
  </div>
);
