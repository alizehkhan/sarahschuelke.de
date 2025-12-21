import { Chip } from "./Chip";

export const Workshops = () => {
  return (
    <div id="workshops">
      <section className="container mx-auto px-4 py-20 md:px-0">
        <h2 className="mb-12 font-serif text-4xl font-semibold text-gray-600 md:text-5xl">
          Signature Workshops
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-2 font-serif text-xl font-semibold text-gray-600">
              Effective project collaboration
            </h3>
            <div className="mb-2 flex flex-wrap gap-1">
              <Chip>📁 Projects</Chip>
              <Chip>🤝🏼 Teams</Chip>
              <Chip>💬 Communication</Chip>
            </div>
            <p className="text-gray-600">
              Let's strive for projects with clear communication, high
              commitment, and engaged collaboration, where everyone knows what's
              going on and pulls together. For a project routine that's
              noticeably more structured, relaxed and enjoyable.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-2 font-serif text-xl font-semibold text-gray-600">
              Embodied leadership
            </h3>
            <div className="mb-2 flex flex-wrap gap-1">
              <Chip>🦁 Leadership</Chip>
              <Chip>💪🏼 Power</Chip>
              <Chip>🧘🏼 Embodiment</Chip>
            </div>
            <p className="text-gray-600">
              Leadership trainings don't need to be dry and theoretical. For
              those keen to learn more about Embodied Leadership by experiencing
              it in and through the body - you're in for a treat. This is your
              invitation to explore power and impact in a different way and to
              learn how to lead from a place where people want to follow you.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-2 font-serif text-xl font-semibold text-gray-600">
              Upleveled relational & communication skills
            </h3>
            <div className="mb-2 flex flex-wrap gap-1">
              <Chip>👥 Relational</Chip>
              <Chip>💬 Communication</Chip>
            </div>
            <p className="text-gray-600">
              What leads to greater collaboration and trusting work
              relationships that help people excel? Increased interpersonal
              awareness and attunement, as well as communication that is
              recipient and needs focused - just to name a few ingredients.
              Learn hands-on where and how you can uplevel your skills.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-2 font-serif text-xl font-semibold text-gray-600">
              Productivity and focus for teams
            </h3>
            <div className="mb-2 flex flex-wrap gap-1">
              <Chip>🪞 Reflection</Chip>
              <Chip>⏱️ Self-management</Chip>
            </div>
            <p className="text-gray-600">
              When meeting marathons, endless to-do lists, reactiveness and too
              little time to think about what would really move the needle are
              one's reality, it's time to pause and course correct. A few small,
              field-tested improvements will show great impact. Enabling you to
              perform better while being more relaxed, fulfilled and creative.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-2 font-serif text-xl font-semibold text-gray-600">
              The secret to building great teams
            </h3>
            <div className="mb-2 flex flex-wrap gap-1">
              <Chip>🤝🏼 Teams</Chip>
              <Chip>🌱 Soft skills</Chip>
            </div>
            <p className="text-gray-600">
              You may have followed the common practices on how to build high-
              performing teams and yet you sense more is possible. But how to
              unlock that potential? Let's look at the (not so) "secret"
              ingredients often neglected. Let's learn how to introduce those
              "soft" factors and rituals that will show noticeable impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
