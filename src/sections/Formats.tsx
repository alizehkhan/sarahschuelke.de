import { IconChartColumn, IconMessage, IconTrophy } from "@tabler/icons-react";

export const Formats = () => (
  <section className="pt-20" id="expertise">
    <div className="container text-gray-600">
      <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-bold tracking-[-0.5px] text-gray-600 md:text-6xl">
        Formats
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="mb-2 w-fit rounded-md bg-amber-100 p-2 text-amber-700">
            <IconTrophy size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Professional Development Coaching
          </h3>
          <p className="mb-2">
            Getting support in developing personally and professionally - esp.
            in these areas:
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>Effective communication</li>
            <li>
              Making a convincing impression, asserting oneself, and setting
              boundaries
            </li>
            <li>Self-confidence & self-marketing, esp. for women*</li>
            <li>Public image, presentation, and rhetoric</li>
            <li>Conflict management</li>
            <li>Self-organisation, prioritisation, time management</li>
            <li>Healthy, sustainable high performance</li>
            <li>Stress management and resilience</li>
          </ul>
        </div>

        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="mb-2 w-fit rounded-md bg-amber-100 p-2 text-amber-700">
            <IconMessage size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Moderation & Facilitation
          </h3>
          <p className="mb-2">
            Poorly facilitated plannings, workshops and meetings are detrimental
            to a company's success. I can support you and/or train you to run
            excellent:
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>OKR planning & check-ins</li>
            <li>Retrospectives, futurespectives</li>
            <li>Conflict resolution within teams</li>
            <li>Cycle or sprint plannings</li>
            <li>Strategy & vision crafting</li>
            <li>Design sprints</li>
            <li>Double-Diamond-Processes (product development)</li>
          </ul>
        </div>

        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="mb-2 w-fit rounded-md bg-amber-100 p-2 text-amber-700">
            <IconChartColumn size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Consulting / Process Optimisation
          </h3>
          <p className="mb-2">
            In need of an outsider's perspective on a specific topic? I am happy
            to challenge the status quo and provide personalised solutions to
            meet your unique needs. The process can encompass:
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>Analysis of status quo</li>
            <li>
              Identification of inefficiencies, knowledge gaps, deviations from
              desired state etc. and the resulting optimisation potential
            </li>
            <li>Proposal of measures to get closer to the desired end state</li>
            <li>Support with trainings, mentoring etc.</li>
            <li>Impact review and further improvements</li>
            <li>Areas and examples</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
