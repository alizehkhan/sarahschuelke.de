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
  { Icon: IconUsers, text: "Interactive" },
  { Icon: IconHandStop, text: "Practical, hands-on" },
  { Icon: IconTool, text: "Easy to apply, pragmatic" },
  { Icon: IconBrain, text: "Non-dogmatic" },
  { Icon: IconEyeglass, text: "Reflective & inspiring" },
  { Icon: IconHeart, text: "Empathetic" },
  { Icon: IconBarbell, text: "Empowering" },
];

export const Approach = () => {
  return (
    <div>
      <p className="mt-16 font-serif text-2xl font-bold text-gray-600 md:text-3xl">
        My approach is...
      </p>
      <ul className="my-6 flex max-w-[740px] flex-wrap gap-2">
        {approaches.map((approach) => {
          const { Icon } = approach;
          return (
            <li
              key={approach.text}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xl text-gray-600"
            >
              <Icon size={20} />
              {approach.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
