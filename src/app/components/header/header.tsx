import Image from "next/image";
import { HeaderNavItem } from "./header-nav-item";
import { HeaderThemeSwitcher } from "./header-theme-switcher";
import { container, logoContainer, logo, navsContainer } from "./header.styles";

export function Header() {
  return (
    <div className={container()}>
      <div className={logoContainer()}>
        <Image
          className={logo()}
          src="/conwy.svg"
          alt="conwy Logo"
          height={35}
          width={150}
          priority
        />
      </div>

      <div className={navsContainer()}>
        <HeaderNavItem href="/articles" title="Articles" />
        <HeaderNavItem href="/projects" title="Projects" />
        <HeaderNavItem href="/work" title="Work" />
        <HeaderNavItem href="/contact" title="Contact" />
      </div>

      <HeaderThemeSwitcher />
    </div>
  );
}
