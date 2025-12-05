"use client";
import { GoArrowDown } from "react-icons/go";

export default function HeroSectionScroll() {
  function scrollToBottom() {
    const bodyInfo = document.body.getBoundingClientRect();
    window.scrollTo({
      top: bodyInfo.height,
      behavior: "smooth",
    });
  }
  return (
    <div className="w-1/2 flex items-center justify-center ml-auto max-md:hidden">
      <button
        type="button"
        className="size-24 bg-bg-secondry flex items-center justify-center"
        onClick={scrollToBottom}
      >
        <GoArrowDown className="text-3xl text-white" />
      </button>
    </div>
  );
}
