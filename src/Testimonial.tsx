import { IconBuildings } from "@tabler/icons-react";

export const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16 text-gray-500">
      <div className="mx-auto max-w-xl px-6">
        <img src="/fritz.png" className="h-12" alt="" />
        <div className="my-2 font-semibold tracking-wide uppercase">FRITZ!</div>
        <p className="mb-4 font-serif text-4xl font-semibold">
          Training Series "How to Work Well Together in Projects"
        </p>
        <div className="my-3 flex flex-wrap gap-1">
          <div className="flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold">
            <IconBuildings size={20} />
            In-person
          </div>
          <div className="flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold">
            🇩🇪 Germany
          </div>
        </div>
        <blockquote className="relative">
          <q className="text-lg">
            <p className="mb-4">
              Sarah's training was a complete success for our company and the
              impact was visible throughout the company: numerous employees
              recommended the training to their colleagues, and many immediately
              began implementing new ideas and methods in their projects. The
              increasing demand for more professional project management
              ultimately led us to offer an advanced training course for our
              project managers held by Sarah.
            </p>
            <p className="mb-4">
              Sarah manages to convey complex content in a lively, structured,
              and understandable way. Her friendly, open manner and the
              pleasant, confident atmosphere she creates in the room enabled
              honest, inspiring exchange. We can wholeheartedly recommend
              Sarah's training - for all teams that want to improve their
              collaboration, strengthen their project work, and achieve lasting
              change in their company.
            </p>
          </q>
          <div className="flex items-center gap-3">
            <img
              src="/stephanie.jpeg"
              alt=""
              className="size-12 rounded-full border-2 border-gray-700"
            />
            <cite className="block not-italic">
              <p className="font-semibold">Stephanie Blankenburg</p>
              <p>Head of Personal Development</p>
            </cite>
          </div>
        </blockquote>
      </div>
    </div>
  );
};
