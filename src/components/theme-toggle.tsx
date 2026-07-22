"use client";

import { MoonStars, Sun } from "@phosphor-icons/react";
import { useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = window.localStorage.getItem("hegong-theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("hegong-theme", next ? "dark" : "light");
  }

  return (
    <button className="icon-button" onClick={toggle} aria-label={dark ? "切换浅色模式" : "切换深色模式"} type="button">
      {dark ? <Sun size={19} weight="bold" /> : <MoonStars size={19} weight="bold" />}
    </button>
  );
}
