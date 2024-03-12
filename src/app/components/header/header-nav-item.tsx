import Link from "next/link";
import { container, cursor } from "./header-nav-item.styles";

interface HeaderNavItemProps {
  readonly title: string;
  readonly href: string;
}

export function HeaderNavItem({ title, href }: HeaderNavItemProps) {
  const active = Boolean(title === "Articles");

  return (
    <Link className={container()} href={href}>
      <span>{title}</span>

      <span className={cursor(active)}></span>
    </Link>
  );
}
