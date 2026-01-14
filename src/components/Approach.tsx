import {
  IconBolt,
  IconBrain,
  IconHandGrab,
  IconHeart,
  IconPlant,
  IconPower,
  IconTool,
} from "@tabler/icons-react";

const approaches = [
  { emoji: <IconHandGrab size={20} />, text: "Interactive" },
  { emoji: <IconTool size={20} />, text: "Practical, Hands-On" },
  { emoji: <IconBolt size={20} />, text: "Easy to Apply, Pragmatic" },
  { emoji: <IconBrain size={20} />, text: "Non-Dogmatic" },
  { emoji: <IconPlant size={20} />, text: "Reflective & Inspiring" },
  { emoji: <IconHeart size={20} />, text: "Empathetic" },
  { emoji: <IconPower size={20} />, text: "Empowering" },
];

export const Approach = () => {
  return (
    <div>
      <p className="mt-16 font-serif text-3xl font-semibold text-gray-500 md:text-4xl">
        My approach is...
      </p>
      <ul className="my-6 flex max-w-[740px] flex-wrap gap-4">
        {approaches.map((approach) => (
          <li
            key={approach.text}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-gray-50 px-2 py-1.5 text-xl text-gray-600 drop-shadow-sm"
          >
            {approach.emoji}
            {approach.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
