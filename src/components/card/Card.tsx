import React, { ReactElement } from "react";

type CardProps = {
  children: ReactElement[];
};

export default function Card({ children }: CardProps) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-xl transition-all">
      {children}
    </div>
  );
}
