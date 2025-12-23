import { IconClock } from "@tabler/icons-react";

import { Chip } from "./Chip";

interface WorkshopCardProps {
  title: string;
  chips: string[];
  description: string;
  duration: string;
}

export const WorkshopCard = ({
  title,
  chips,
  description,
  duration,
}: WorkshopCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h3 className="mb-2 font-serif text-xl font-semibold text-gray-600">
        {title}
      </h3>
      <div className="mb-2 flex flex-wrap gap-1">
        {chips.map((chip, index) => (
          <Chip key={index}>{chip}</Chip>
        ))}
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 space-y-1 border-t border-gray-200 pt-4 font-semibold text-gray-600">
        <p className="flex items-center gap-1">
          <IconClock size={16} className="inline-block text-gray-400" />
          {duration}
        </p>
      </div>
    </div>
  );
};
