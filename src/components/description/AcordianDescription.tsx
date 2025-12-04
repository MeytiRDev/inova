import { twMerge } from "tailwind-merge";

export default function AcordianDescription({ description, className }: any) {
  function clickHandler(e: MouseEvent) {
    const targetElement = e.target as HTMLParagraphElement;
    targetElement.classList.toggle("line-clamp-none!");
  }

  return (
    <p
      className={twMerge(
        "font-dana-medium max-md:text-sm line-clamp-3 @max-md:line-clamp-2 dark:text-white",
        className
      )}
      onClick={clickHandler}
    >
      {description}
    </p>
  );
}
