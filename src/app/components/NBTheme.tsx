"use client";
import { useLayoutEffect, useState } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { IoSunnyOutline } from "react-icons/io5";

export default function NBTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  function changeTheme() {
    const rootElement = document.documentElement;
    const isDark = rootElement.toggleAttribute("data-theme-dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setTheme(isDark ? "dark" : "light");
  }

  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      const rootElement = document.documentElement;
      rootElement.toggleAttribute("data-theme-dark");
      setTheme("dark");
    }
  }, []);

  return (
    <button type="button" onClick={changeTheme}>
      {theme === "light" ? <IoSunnyOutline /> : <HiOutlineMoon />}
    </button>
  );
}
