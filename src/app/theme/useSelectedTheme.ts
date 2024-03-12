"use client";

import { useEffect, useState } from "react";
import { THEMES, Theme } from "./types";
import {
  getSelectedThemeFromLocalStorageOrDefault,
  setSelectedThemeToLocalStorage,
} from "./selectedTheme";

export function useSelectedTheme() {
  console.log("useSelectedTheme");
  const [selectedThemeState, setSelectedThemeState] = useState<Theme>(
    THEMES.LIGHT
  );

  useEffect(() => {
    setSelectedThemeState(getSelectedThemeFromLocalStorageOrDefault());
  }, []);

  useEffect(() => {
    window.document.body.classList.remove(...Object.values(THEMES));
    window.document.body.classList.add(selectedThemeState);
    console.log("useSelectedTheme/useEffect@2", { selectedThemeState });
  }, [selectedThemeState]);

  const selectedTheme = selectedThemeState;

  const setSelectedTheme = (theme: Theme) => {
    if (typeof window === "undefined") {
      return;
    }

    setSelectedThemeState(theme);
    setSelectedThemeToLocalStorage(theme);
  };

  return {
    selectedTheme,
    setSelectedTheme,
  };
}
