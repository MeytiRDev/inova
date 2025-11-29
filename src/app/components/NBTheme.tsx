"use client";
import { useState } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { IoSunnyOutline } from "react-icons/io5";

export default function NBTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  function changeTheme() {
    const rootElement = document.documentElement;
    const isDark = rootElement.toggleAttribute("data-theme-dark");
    setTheme(isDark ? "dark" : "light");
  }

  return (
    <button type="button" onClick={changeTheme}>
      {theme === "light" ? <IoSunnyOutline /> : <HiOutlineMoon />}
    </button>
  );
}
