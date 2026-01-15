import {
  IconFolderOpen,
  IconTargetArrow,
  IconUsersGroup,
} from "@tabler/icons-react";

import { Zones } from "../components/Zones";

export const Expertise = () => (
  <section className="bg-gray-50 pb-20" id="expertise">
    <div className="container text-gray-600">
      <p className="mb-4 font-semibold tracking-wider text-gray-500 uppercase">
        Expertise
      </p>
      <h2 className="mb-8 font-serif text-4xl leading-[1.15] font-bold tracking-[-0.5px] text-gray-600 md:text-6xl">
        Capabilities I can help you build
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-2 w-fit rounded-md bg-sky-100 p-2 text-sky-900">
            <IconFolderOpen size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Product & Project Management
          </h3>
          <p className="mb-2">
            Taking skills to the next level and overcoming common challenges,
            e.g.:
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>Prioritisation & decision-making</li>
            <li>Stakeholder communication & management</li>
            <li>Better collaboration</li>
          </ul>
        </div>

        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-2 w-fit rounded-md bg-sky-100 p-2 text-sky-900">
            <IconUsersGroup size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Team-Building, Communication & Collaboration
          </h3>
          <p className="mb-2">
            How well a team works together is crucial to productivity and
            efficiency. Hence, some areas at times need focus, e.g.:
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>Team cohesion, goals & alignment</li>
            <li>Better communication & collaboration</li>
            <li>Conflict resolution</li>
          </ul>
        </div>

        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-2 w-fit rounded-md bg-sky-100 p-2 text-sky-900">
            <IconTargetArrow size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Leadership & Management
          </h3>
          <p className="mb-2">
            A leader these days needs to balance and master both - managing
            people empathically and ensuring business success. I can help with,
            e.g.:
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>Embodied leadership</li>
            <li>Professional relationship management</li>
            <li>Goal setting frameworks, e.g. OKRs</li>
            <li>Empathic change management</li>
          </ul>
        </div>
      </div>
      <Zones />
    </div>
  </section>
);
