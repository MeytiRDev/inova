import { twMerge } from "tailwind-merge";

export default function SecondryTitle({ title, icon, className }: any) {
  return (
    <h2
      className={twMerge(
        "flex items-center gap-1 font-dana-bold dark:text-white",
        className
      )}
    >
      <span className="empty:hidden text-green-500">
        {icon}
      </span>
      <span className="text-white text-4xl capitalize">{title}</span>
    </h2>
  );
}
