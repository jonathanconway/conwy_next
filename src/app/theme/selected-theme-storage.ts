// import { isClient } from "@/framework/client";
import { LocalStorageKeys } from "../local-storage-keys";

import { THEMES, Theme } from "./themes";

export class SelectedThemeChangedEvent extends Event {
  static type = "selectedThemeChange";
  public theme: Theme;

  constructor(theme: Theme) {
    super(SelectedThemeChangedEvent.type);
    this.theme = theme;
  }
}

function getSelectedThemeFromLocalStorage(): Theme | undefined {
  // if (!isClient) {
  //   return undefined;
  // }

  return localStorage?.getItem(LocalStorageKeys.Theme) as Theme | undefined;
}

function getSelectedThemeDefault(): Theme {
  // if (!isClient) {
  //   return "light";
  // }

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  return (prefersDarkScheme.matches ? THEMES.DARK : THEMES.LIGHT) as Theme;
}

export function getSelectedThemeFromLocalStorageOrDefault() {
  return getSelectedThemeFromLocalStorage() ?? getSelectedThemeDefault();
}

export function setSelectedThemeToLocalStorage(theme: Theme) {
  // if (!isClient) {
  //   return undefined;
  // }

  localStorage?.setItem(LocalStorageKeys.Theme, theme);
  window.dispatchEvent(new SelectedThemeChangedEvent(theme));
}
