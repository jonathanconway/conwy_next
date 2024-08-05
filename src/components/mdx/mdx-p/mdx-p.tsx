import { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "@/framework";

import * as styles from "./mdx-p.styles";

export type MdxPProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export function MdxP({ className, children, ...restProps }: MdxPProps) {
  return (
    <p className={cn(styles.p, className)} {...restProps}>
      {children}
    </p>
  );
}
