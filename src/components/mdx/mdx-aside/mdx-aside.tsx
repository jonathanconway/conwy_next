import { DetailedHTMLProps, HTMLAttributes } from "react";

import { MdxH3 } from "../mdx-h3";

import * as styles from "./mdx-aside.styles";

export type MdxAsideProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export function MdxAside({ className, ...restProps }: MdxAsideProps) {
  return <aside className={className ?? styles.aside()} {...restProps} />;
}

export type MdxAsideHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxAsideHeading({
  className,
  ...restProps
}: MdxAsideHeadingProps) {
  return (
    <MdxH3 className={className ?? styles.asideHeading()} {...restProps} />
  );
}
