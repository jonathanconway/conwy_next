import { HeaderLogo } from "./header-logo";
import { HeaderNavItem } from "./header-nav-item";
import { HeaderThemeSwitcher } from "./header-theme-switcher";
import * as styles from "./header.styles";

export interface HeaderProps {
  readonly selectedNavPath?: string;
}

const NAV_ITEMS = [
  {
    href: "/articles",
    title: "Articles",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/work",
    title: "Work",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

function getNavItemsWithSelected(selectedNavPath?: string) {
  return NAV_ITEMS.map((navItem) => ({
    ...navItem,
    selected: selectedNavPath === navItem.href,
  }));
}

export function Header({ selectedNavPath }: HeaderProps) {
  const navItems = getNavItemsWithSelected(selectedNavPath);

  return (
    <div className={styles.container}>
      <HeaderLogo />

      <div className={styles.navsContainer}>
        {navItems.map((navItem) => (
          <HeaderNavItem key={navItem.href} {...navItem} />
        ))}
      </div>

      <HeaderThemeSwitcher />
    </div>
  );
}
