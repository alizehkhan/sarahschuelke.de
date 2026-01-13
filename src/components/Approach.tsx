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
  { emoji: <IconHandGrab size={18} />, text: "Interactive" },
  { emoji: <IconTool size={18} />, text: "Practical, Hands-On" },
  { emoji: <IconBolt size={18} />, text: "Easy to Apply, Pragmatic" },
  { emoji: <IconBrain size={18} />, text: "Non-Dogmatic" },
  { emoji: <IconPlant size={18} />, text: "Reflective & Inspiring" },
  { emoji: <IconHeart size={18} />, text: "Empathetic" },
  { emoji: <IconPower size={18} />, text: "Empowering" },
];

export const Approach = () => {
  return (
    <div id="approach">
      <ul className="my-12 flex flex-wrap gap-4">
        {approaches.map((approach) => (
          <li
            key={approach.text}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-gray-50 px-2 py-1 text-lg text-gray-500 drop-shadow-sm"
          >
            {approach.emoji}
            {approach.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
