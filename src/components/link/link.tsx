import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import { link } from "./link.styles";

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link({
  className,
  children,
  href,
  ref,
  ...restProps
}: LinkProps) {
  return (
    <NextLink
      className={className ?? link}
      href={href ?? ""}
      target="_blank"
      {...restProps}
    >
      {children}
    </NextLink>
  );
}
