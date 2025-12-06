import { twMerge } from "tailwind-merge";

export default function PrimaryDescription({ description, className }: any) {
  return (
    <p
      className={twMerge(
        "font-dana-medium text-white text-xl max-md:text-lg",
        className
      )}
    >
      {description}
    </p>
  );
}
