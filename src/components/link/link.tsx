import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import { cnOverride } from "@/framework";

import { link } from "./link.styles";

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  readonly classNameOverride?: boolean;
};

export function Link({
  className = "",
  classNameOverride,
  children,
  href,
  ref,
  ...restProps
}: LinkProps) {
  return (
    <NextLink
      className={cnOverride(link, className, classNameOverride)}
      href={href ?? ""}
      target="_blank"
      {...restProps}
    >
      {children}
    </NextLink>
  );
}
