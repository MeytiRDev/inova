"use client";
import { Image } from "antd";
import { RiUser4Line } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

export default function Avatar({ src, className }: any) {
  return (
    <div
      className={twMerge(
        "relative shrink-0 size-40 max-md:mx-auto",
        className
      )}
    >
      <div className="absolute inset-0 rounded-4xl border-4 border-solid border-green-500 rotate-30 inset-shadow-[0_0_50px_#22c55e]"></div>
      <div className="absolute inset-0 rounded-4xl border-4 border-solid border-green-500 rotate-15"></div>

      {src ? (
        <div className="size-full rounded-4xl overflow-hidden">
          <Image
            preview={{ movable: false, actionsRender: () => null }}
            src={src}
            classNames={{
              image: "size-full! object-cover! object-center!",
              root: "size-full!",
              popup: {
                footer: "hidden",
              },
            }}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center size-full bg-gray-100 dark:bg-gray-900">
          <RiUser4Line className="text-3xl text-black dark:text-white/50" />
        </div>
      )}
    </div>
  );
}
