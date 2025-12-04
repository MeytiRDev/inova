"use client";

import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-2">
        <BeatLoader color="#a6eb4e" size={20} />
        <h2 className="font-dana-medium dark:text-white">در حال بارگذاری</h2>
      </div>
    </div>
  );
}
