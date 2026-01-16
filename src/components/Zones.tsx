import {
  IconBuildingBridge,
  IconHeartHandshake,
  IconRocket,
  IconSearch,
} from "@tabler/icons-react";

const ZONES = [
  {
    Icon: IconSearch,
    text: "Identifying potential, patterns, and weaknesses and implementing viable optimisations",
  },
  {
    Icon: IconRocket,
    text: "Achieving impact while maintaining high satisfaction, motivation and good collaboration",
  },
  {
    Icon: IconHeartHandshake,
    text: "Relationship management and communication",
  },
  {
    Icon: IconBuildingBridge,
    text: "Structure and clarity",
  },
];

export const Zones = () => {
  return (
    <section className="my-16">
      <p className="mb-6 font-serif text-2xl font-bold text-gray-600 md:text-3xl">
        My zones of genius are...
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {ZONES.map((zone, index) => {
          const { Icon } = zone;
          return (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-4 text-xl text-gray-600"
            >
              <div className="mb-2 w-fit rounded-lg bg-sky-100 p-2 text-4xl text-sky-900">
                <Icon size={32} />
              </div>
              {zone.text}
            </div>
          );
        })}
      </div>
    </section>
  );
};
