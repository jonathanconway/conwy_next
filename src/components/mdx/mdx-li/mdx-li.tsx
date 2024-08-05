import { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "@/framework";

import * as styles from "./mdx-li.styles";

export type MdxLIProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export function MdxLI({ className, children, ...restProps }: MdxLIProps) {
  return (
    <li className={cn(styles.li, className)} {...restProps}>
      {children}
    </li>
  );
}
