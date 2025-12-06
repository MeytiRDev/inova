import { twMerge } from "tailwind-merge";

export default function SecondryDescription({ description, className }: any) {
  return (
    <p className={twMerge("text-white/70 max-md:text-sm", className)}>
      {description}
    </p>
  );
}
