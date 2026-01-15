import {
  IconBarbell,
  IconBrain,
  IconEyeglass,
  IconHandStop,
  IconHeart,
  IconTool,
  IconUsers,
} from "@tabler/icons-react";

const approaches = [
  { emoji: <IconUsers size={20} />, text: "Interactive" },
  { emoji: <IconHandStop size={20} />, text: "Practical, hands-on" },
  { emoji: <IconTool size={20} />, text: "Easy to apply, pragmatic" },
  { emoji: <IconBrain size={20} />, text: "Non-dogmatic" },
  { emoji: <IconEyeglass size={20} />, text: "Reflective & inspiring" },
  { emoji: <IconHeart size={20} />, text: "Empathetic" },
  { emoji: <IconBarbell size={20} />, text: "Empowering" },
];

export const Approach = () => {
  return (
    <div>
      <p className="mt-16 font-serif text-3xl font-semibold text-gray-600 md:text-4xl">
        My approach is...
      </p>
      <ul className="my-6 flex max-w-[740px] flex-wrap gap-2">
        {approaches.map((approach) => (
          <li
            key={approach.text}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xl text-gray-600"
          >
            {approach.emoji}
            {approach.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
