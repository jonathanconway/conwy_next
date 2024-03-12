"use client";

import { useSelectedTheme } from "../theme";

export function MyComponent() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();

  const handleClickToggleTheme = () => {
    setSelectedTheme(selectedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      hello6
      <button onClick={handleClickToggleTheme}>{selectedTheme}</button>
    </div>
  );
}
