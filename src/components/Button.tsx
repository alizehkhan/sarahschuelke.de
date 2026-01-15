import type { ComponentProps } from "react";

export const Button = (props: ComponentProps<"a">) => {
  const { children, ...rest } = props;
  return (
    <a
      className="mt-4 inline-block w-fit rounded-md bg-amber-700 px-3 py-1.5 text-lg font-semibold text-white hover:bg-amber-800 active:bg-amber-900 md:text-xl"
      {...rest}
    >
      {children}
    </a>
  );
};
