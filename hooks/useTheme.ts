import React from "react";
import { useTheme as _useTheme } from "nextra-theme-docs";

export const useTheme = () => {
  const { resolvedTheme } = _useTheme();
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const handleThemeChange = () => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          setIsDark(savedTheme === "dark");
        } else if (resolvedTheme) {
          setIsDark(resolvedTheme === "dark");
        } else {
          setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
      }
    };

    handleThemeChange();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addListener(handleThemeChange);

    return () => mediaQuery.removeListener(handleThemeChange);
  }, [resolvedTheme]);

  return {
    isDark,
    setIsDark,
  };
};
