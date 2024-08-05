import { LocalStorageKeys } from "../local-storage-keys";

import { THEMES, Theme } from "./themes";

const DEFAULT_THEME = THEMES.LIGHT;

export class SelectedThemeChangedEvent extends Event {
  static type = "selectedThemeChange";
  public theme: Theme;

  constructor(theme: Theme) {
    super(SelectedThemeChangedEvent.type);
    this.theme = theme;
  }
}

function getSelectedThemeFromLocalStorage(): Theme | undefined {
  return localStorage?.getItem(LocalStorageKeys.Theme) as Theme | undefined;
}

export function getSelectedThemeFromLocalStorageOrDefault() {
  return getSelectedThemeFromLocalStorage() ?? DEFAULT_THEME;
}

export function setSelectedThemeToLocalStorage(theme: Theme) {
  localStorage?.setItem(LocalStorageKeys.Theme, theme);
  window.dispatchEvent(new SelectedThemeChangedEvent(theme));
}
