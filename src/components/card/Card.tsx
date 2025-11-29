import React, { ReactElement } from "react";

type CardProps = {
  children: ReactElement[];
};

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-xl dark:bg-gray-900 dark:border dark:border-solid dark:border-white/10 overflow-hidden hover:-translate-y-2 shadow-xl transition-all">
      {children}
    </div>
  );
}
