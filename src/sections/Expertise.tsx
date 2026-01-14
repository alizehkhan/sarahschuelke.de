import {
  IconFolderOpen,
  IconTargetArrow,
  IconUsersGroup,
} from "@tabler/icons-react";

export const Expertise = () => (
  <section className="pt-20" id="expertise">
    <div className="container text-gray-600">
      <h2 className="mb-8 font-serif text-6xl font-bold">Areas of Expertise</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="mb-2 w-fit rounded-md bg-sky-100 p-2 text-sky-700">
            <IconFolderOpen size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Product & Project Management
          </h3>
          <p className="mb-2">
            Taking skills to the next level and overcoming common challenges
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>Prioritization and decision-making</li>
            <li>Increasing productivity and efficiency, time management</li>
            <li>Stakeholder communication and stakeholder management</li>
            <li>Vision, purpose and strategy</li>
            <li>Product discovery and delivery (Double-Diamond)</li>
            <li>Managing complexity and uncertainty</li>
            <li>PO/ PM mentoring</li>
          </ul>
        </div>

        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="mb-2 w-fit rounded-md bg-sky-100 p-2 text-sky-700">
            <IconUsersGroup size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Team-Building, Communication & Collaboration
          </h3>
          <p className="mb-2">
            How well a team works together is crucial to productivity and
            efficiency. Hence, the following areas at times need focus:
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>Building high-performing teams</li>
            <li>Team cohesion</li>
            <li>Team goals and alignment</li>
            <li>Better collaboration</li>
            <li>Recipient- and needs-oriented communication</li>
            <li>Conflict resolution</li>
            <li>Efficient remote teamwork</li>
          </ul>
        </div>

        <div className="max-w-[500px] rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="mb-2 w-fit rounded-md bg-sky-100 p-2 text-sky-700">
            <IconTargetArrow size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Leadership & Management
          </h3>
          <p className="mb-2">
            A leader these days needs to balance and master both - managing
            people empathically and ensuring business success. This is what I
            can help with:
          </p>
          <ul className="list-disc space-y-0.5 pl-4.5">
            <li>Embodied leadership approach</li>
            <li>Professional relationship management</li>
            <li>Leading with emotional intelligence</li>
            <li>Goal setting and achievement frameworks, e.g. OKRs</li>
            <li>Empathic change management</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
