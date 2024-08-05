// import { isClient } from "@/framework/client";
import { THEMES, Theme } from "./themes";

export function setSelectedThemeClass(theme: Theme) {
  // if (!isClient) {
  //   return;
  // }

  const containerElement = document.body.parentElement!;

  containerElement.classList.remove(...Object.values(THEMES));
  containerElement.classList.add(theme);
}
