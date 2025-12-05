import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type CardBadgeProps = {
  className?: string;
  title: string;
  icon: ReactElement;
};

export default function CardBadge({ className, title, icon }: CardBadgeProps) {
  return (
    <div
      className={twMerge(
        "absolute top-3 left-3 flex items-center justify-center gap-1 text-green-500 bg-bg-primary rounded-xl py-1.5 px-3 text-sm",
        className
      )}
    >
      <span>{icon}</span>
      <p>{title}</p>
    </div>
  );
}
