import { useState } from "react";
import { Theme } from "./types";
import {
  getSelectedThemeFromLocalStorageOrDefault,
  setSelectedThemeToLocalStorage,
} from "./selectedTheme";

export function useSelectedTheme() {
  const [selectedThemeState, setSelectedThemeState] = useState<Theme>(
    getSelectedThemeFromLocalStorageOrDefault()
  );

  const selectedTheme = selectedThemeState;

  const setSelectedTheme = (theme: Theme) => {
    if (typeof window === "undefined") {
      return;
    }

    window.document.body.classList.remove("dark");
    window.document.body.classList.remove("light");
    window.document.body.classList.add(theme);

    setSelectedThemeState(theme);
    setSelectedThemeToLocalStorage(theme);
  };

  return {
    selectedTheme,
    setSelectedTheme,
  };
}
