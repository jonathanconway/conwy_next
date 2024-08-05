import { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "@/framework";

import * as styles from "./mdx-ul.styles";

export type MdxULProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export function MdxUL({ className, children, ...restProps }: MdxULProps) {
  return (
    <ul className={cn(styles.ul, className)} {...restProps}>
      {children}
    </ul>
  );
}
