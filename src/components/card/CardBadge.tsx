import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type CardBadgeProps = {
  className?: string;
  children: ReactElement;
};

export default function CardBadge({ className, children }: CardBadgeProps) {
  return (
    <div className={twMerge("absolute top-3 left-3 bg-green-600/15 text-green-600 rounded-xl py-1 px-2 text-sm", className)}>
      {children}
    </div>
  );
}
