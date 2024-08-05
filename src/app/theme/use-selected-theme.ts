"use client";

import { useEffect, useState } from "react";

// import { isClient } from "@/framework/client";
import { setSelectedThemeClass } from "./selected-theme-class-setter";
import {
  getSelectedThemeFromLocalStorageOrDefault,
  setSelectedThemeToLocalStorage,
} from "./selected-theme-storage";
import {
  addSelectedThemeStorageListener,
  removeSelectedThemeStorageListener,
} from "./selected-theme-storage-watcher";
import { THEMES, Theme } from "./themes";

const DEFAULT_THEME = THEMES.LIGHT;

export function useSelectedTheme() {
  const [selectedThemeState, setSelectedThemeState] =
    useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    setSelectedThemeState(getSelectedThemeFromLocalStorageOrDefault());
  }, []);

  useEffect(() => {
    setSelectedThemeClass(selectedThemeState);
  }, [selectedThemeState]);

  useEffect(() => {
    addSelectedThemeStorageListener(setSelectedThemeState);

    return () => {
      removeSelectedThemeStorageListener(setSelectedThemeState);
    };
  }, []);

  const selectedTheme = selectedThemeState;

  const setSelectedTheme = (theme: Theme) => {
    // if (!isClient) {
    //   return;
    // }

    setSelectedThemeState(theme);
    setSelectedThemeToLocalStorage(theme);
  };

  return {
    selectedTheme,
    setSelectedTheme,
  };
}
