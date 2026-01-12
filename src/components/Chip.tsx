import type { ReactNode } from "react";

export const Chip = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-0.5 text-sm font-semibold text-gray-600">
      {children}
    </div>
  );
};
