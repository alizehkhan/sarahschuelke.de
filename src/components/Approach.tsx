import {
  IconBarbell,
  IconBrain,
  IconEyeglass,
  IconHandStop,
  IconHeart,
  IconTool,
  IconUsers,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const approachIcons = [
  IconUsers,
  IconHandStop,
  IconTool,
  IconBrain,
  IconEyeglass,
  IconHeart,
  IconBarbell,
];

export const Approach = () => {
  const { t } = useTranslation();
  const approachItems = t("offers.approach.items", {
    returnObjects: true,
  }) as string[];

  return (
    <div>
      <p className="mt-16 font-serif text-2xl font-medium text-gray-600 md:text-3xl">
        {t("offers.approach.title")}
      </p>
      <ul className="my-6 flex max-w-[740px] flex-wrap gap-2">
        {approachItems.map((text, index) => {
          const Icon = approachIcons[index];

          if (!Icon) {
            return null;
          }

          return (
            <li
              key={text}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xl text-gray-600"
            >
              <Icon size={20} />
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
