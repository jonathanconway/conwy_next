"use client";

import { loadPrismJSTheme } from "@/framework/client";

import { THEMES, useSelectedTheme } from "../../../app/theme";

const THEME_EMOJIS = {
  [THEMES.DARK]: "☾",
  [THEMES.LIGHT]: "☀",
};

const TOGGLE_THEME = {
  [THEMES.DARK]: THEMES.LIGHT,
  [THEMES.LIGHT]: THEMES.DARK,
};

loadPrismJSTheme();

export function HeaderThemeSwitcher() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();

  const handleClick = () => {
    setSelectedTheme(
      selectedTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK,
    );
  };

  return (
    <button onClick={handleClick}>
      {THEME_EMOJIS[TOGGLE_THEME[selectedTheme]]}
    </button>
  );
}
