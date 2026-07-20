import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionShellProps = ComponentPropsWithoutRef<"section"> & {
  children?: ReactNode;
  innerClassName?: string;
};

export function SectionShell({
  children,
  className = "",
  innerClassName = "",
  ...props
}: SectionShellProps) {
  return (
    <section
      className={`w-full py-16 sm:py-20 lg:py-24 ${className}`}
      {...props}
    >
      <div
        className={`mx-auto w-full max-w-350 px-5 sm:px-8 lg:px-10 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
