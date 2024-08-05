import { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "@/framework";

import * as styles from "./mdx-pre.styles";

export type MdxPreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

export function MdxPre({ className, children, ...restProps }: MdxPreProps) {
  return (
    <pre
      className={cn(styles.pre, className ?? "")}
      style={styles.preInline} // Override prismjs css
      {...restProps}
      suppressHydrationWarning
    >
      {children}
    </pre>
  );
}
