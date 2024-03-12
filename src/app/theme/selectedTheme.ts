import { SESSION_STORAGE_KEYS } from "../localStorage";
import { THEMES, Theme } from "./types";

const isClient = typeof window !== "undefined";

function getSelectedThemeFromLocalStorage(): Theme | undefined {
  if (!isClient) {
    return undefined;
  }

  return sessionStorage?.getItem(SESSION_STORAGE_KEYS.THEME) as
    | Theme
    | undefined;
}

function getSelectedThemeDefault(): Theme {
  if (!isClient) {
    return "light";
  }

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  return (prefersDarkScheme.matches ? THEMES.DARK : THEMES.LIGHT) as Theme;
}

export function getSelectedThemeFromLocalStorageOrDefault() {
  return getSelectedThemeFromLocalStorage() ?? getSelectedThemeDefault();
}

export function setSelectedThemeToLocalStorage(theme: Theme) {
  if (!isClient) {
    return undefined;
  }

  sessionStorage?.setItem(SESSION_STORAGE_KEYS.THEME, theme);
}
