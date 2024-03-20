"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === "dark")
    return <FiSun onClick={() => setTheme("light")} />;

  if (resolvedTheme === "light")
    return <FiMoon onClick={() => setTheme("dark")} />;
}
