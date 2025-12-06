"use client";
import { useLocale } from "next-intl";
import { GoArrowDown } from "react-icons/go";
import { twMerge } from "tailwind-merge";

export default function HeroSectionScroll() {
  const locale = useLocale();

  function scrollToBottom() {
    const bodyInfo = document.body.getBoundingClientRect();
    window.scrollTo({
      top: bodyInfo.height,
      behavior: "smooth",
    });
  }
  return (
    <div
      className={twMerge(
        "w-1/2 flex items-center justify-center max-md:hidden",
        locale === "fa" ? " ml-auto" : "mr-auto"
      )}
    >
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
