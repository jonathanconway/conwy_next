import { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "@/framework";

import * as styles from "./mdx-blockquote.styles";

export type MdxBlockQuoteProps = DetailedHTMLProps<
  HTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

export function MdxBlockQuote({
  className,
  children,
  ...restProps
}: MdxBlockQuoteProps) {
  return (
    <blockquote
      className={cn(styles.blockquote, className ?? "")}
      {...restProps}
    >
      {children}
    </blockquote>
  );
}
