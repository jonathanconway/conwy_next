"use client";

import { LocalStorageKey } from "../localStorage";
import { Theme } from "./types";

const isClient = typeof window !== "undefined";

function getSelectedThemeFromLocalStorage(): Theme | undefined {
  if (!isClient) {
    return undefined;
  }

  return localStorage?.getItem(LocalStorageKey.Theme) as Theme | undefined;
}

function getSelectedThemeDefault(): Theme {
  if (!isClient) {
    return "light";
  }

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  return (prefersDarkScheme.matches ? "dark" : "light") as Theme;
}

export function getSelectedThemeFromLocalStorageOrDefault() {
  return getSelectedThemeFromLocalStorage() ?? getSelectedThemeDefault();
}

export function setSelectedThemeToLocalStorage(theme: Theme) {
  if (!isClient) {
    return undefined;
  }

  localStorage?.setItem(LocalStorageKey.Theme, theme);
}
