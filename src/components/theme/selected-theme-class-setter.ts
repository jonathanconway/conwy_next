import { THEMES, Theme } from "./themes";

export function setSelectedThemeClass(theme: Theme) {
  const containerElement = document.body.parentElement!;

  containerElement.classList.remove(...Object.values(THEMES));
  containerElement.classList.add(theme);
}
