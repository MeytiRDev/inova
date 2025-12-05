"use client";
import { twMerge } from "tailwind-merge";
import { useLocale, useTranslations } from "use-intl";

export default function AcordianDescription({ description, className }: any) {
  const translate = useTranslations("global");
  const locale = useLocale();

  function clickHandler(e: any) {
    const targetElem = e.target as HTMLButtonElement;
    const descriptionElem = document.querySelector(
      "#description"
    ) as HTMLParagraphElement;

    const result = descriptionElem.classList.toggle("line-clamp-none!");
    if (result) {
      targetElem.innerText = translate("close");
      return;
    }
    targetElem.innerText = translate("close");
  }

  return (
    <div>
      <p
        id="description"
        className={twMerge(
          "font-dana-regular text-white/75 line-clamp-6",
          className
        )}
      >
        {description}
      </p>
      <button
        type="button"
        className={twMerge(
          "text-white",
          locale === "fa" ? "font-dana-bold" : "font-poppins-bold"
        )}
        onClick={clickHandler}
      >
        {translate("more")}
      </button>
    </div>
  );
}
