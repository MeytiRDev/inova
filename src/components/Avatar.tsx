"use client"
import { Image } from "antd";
import { twMerge } from "tailwind-merge";

export default function Avatar({ src, className }: any) {
  return (
    <div
      className={twMerge(
        "shrink-0 size-40 rounded-full overflow-hidden bg-gray-100",
        className
      )}
    >
      <Image
        preview={{ movable: false, actionsRender: () => null }}
        src={src}
        classNames={{
          image: "size-full object-cover object-center",
          popup: {
            footer: "hidden",
          },
        }}
      />
    </div>
  );
}
