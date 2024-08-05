import { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "tailwindjs";

export type MdxH2ShortProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export function MdxH2Short({
  className,
  children,
  ...restProps
}: MdxH2ShortProps) {
  return (
    <span hidden className={cn(className, "h2-short")} {...restProps}>
      {children}
    </span>
  );
}
