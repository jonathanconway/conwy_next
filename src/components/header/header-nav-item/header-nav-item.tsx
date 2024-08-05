"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { container, cursor, text } from "./header-nav-item.styles";

interface HeaderNavItemProps {
  readonly title: string;
  readonly href: string;
  readonly selected: boolean;
}

export function HeaderNavItem({ title, href, selected }: HeaderNavItemProps) {
  const path = usePathname();
  const active = selected || Boolean(href === path);

  return (
    <Link className={container()} href={href}>
      <span className={text()}>{title}</span>

      <span className={cursor(active)}></span>
    </Link>
  );
}
