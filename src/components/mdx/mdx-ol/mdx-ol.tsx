import { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "@/framework";

import * as styles from "./mdx-ol.styles";

export type MdxOLProps = DetailedHTMLProps<
  HTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

export function MdxOL({ className, children, ...restProps }: MdxOLProps) {
  return (
    <ol className={cn(styles.ol, className)} {...restProps}>
      {children}
    </ol>
  );
}
