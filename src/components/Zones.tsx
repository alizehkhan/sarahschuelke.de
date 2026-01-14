import {
  IconBuildingBridge,
  IconHeartHandshake,
  IconRocket,
  IconSearch,
} from "@tabler/icons-react";

const ZONES = [
  {
    emoji: <IconSearch size={32} />,
    text: "Identifying potential, patterns, and weaknesses and implementing viable optimisations",
  },
  {
    emoji: <IconRocket size={32} />,
    text: "Achieving impact while maintaining high satisfaction, motivation and good collaboration",
  },
  {
    emoji: <IconHeartHandshake size={32} />,
    text: "Relationship management and communication",
  },
  {
    emoji: <IconBuildingBridge size={32} />,
    text: "Structure and clarity",
  },
];

export const Zones = () => {
  return (
    <section className="my-16">
      <p className="mb-6 font-serif text-3xl font-semibold text-gray-500 md:text-4xl">
        My zones of genius are...
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {ZONES.map((zone, index) => (
          <div
            key={index}
            className="rounded-xl border-2 border-white bg-gray-50 p-4 text-xl text-gray-600 drop-shadow-sm"
          >
            <div className="mb-2 w-fit rounded-xl bg-sky-100 p-2 text-4xl text-sky-800">
              {zone.emoji}
            </div>
            {zone.text}
          </div>
        ))}
      </div>
    </section>
  );
};
