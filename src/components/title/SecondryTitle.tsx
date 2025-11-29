import { twMerge } from "tailwind-merge";

export default function SecondryTitle({ title, icon, className }: any) {
  return (
    <h2
      className={twMerge(
        "flex items-center gap-1 font-dana-bold dark:text-white text-2xl",
        className
      )}
    >
      <span className="empty:hidden text-green-900 dark:text-secondry/70">
        {icon}
      </span>
      <span className="text-green-900 dark:text-secondry">{title}</span>
    </h2>
  );
}
