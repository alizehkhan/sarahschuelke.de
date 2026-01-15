import { IconChartColumn, IconMessage, IconTrophy } from "@tabler/icons-react";

import { Approach } from "../components/Approach";

export const Formats = () => (
  <section className="bg-gray-50 py-20" id="formats">
    <div className="container text-gray-600">
      <p className="mb-4 font-semibold tracking-wider text-gray-500 uppercase">
        Formats
      </p>
      <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-bold tracking-[-0.5px] text-gray-600 md:text-6xl">
        Ways we can work together
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-2 w-fit rounded-md bg-orange-100 p-2 text-orange-700">
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
            <li>Effective communication & conflict resolution</li>
            <li>
              Making a convincing impression, asserting oneself, and setting
              boundaries
            </li>
            <li>Self-organisation, prioritisation, time management</li>
          </ul>
        </div>

        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-2 w-fit rounded-md bg-orange-100 p-2 text-orange-700">
            <IconMessage size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Moderation & Facilitation
          </h3>
          <p className="mb-2">
            Poorly facilitated plannings, workshops and meetings are detrimental
            to a company's success. I can support you and/or train you to run
            e.g. excellent:
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>OKR planning & check-ins</li>
            <li>Agile ceremonies like retrospectives</li>
            <li>Double diamond processes & design sprints</li>
          </ul>
        </div>

        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-2 w-fit rounded-md bg-orange-100 p-2 text-orange-700">
            <IconChartColumn size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Consulting / Process Optimisation
          </h3>
          <p className="mb-2">
            In need of an outsider's perspective on a specific topic? I am happy
            to challenge the status quo and provide personalised solutions. The
            process encompasses e.g.:
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>
              Identifying inefficiencies, knowledge gaps, optimisation potential
            </li>
            <li>Impact review and further improvements</li>
          </ul>
        </div>
      </div>
      <Approach />
    </div>
  </section>
);
