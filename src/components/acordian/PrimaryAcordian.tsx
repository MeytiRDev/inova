"use client";
import SecondryDescription from "@/components/description/SecondryDescription";
import ThirdTitle from "@/components/title/ThirdTitle";
import Image from "next/image";
import { MouseEvent } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

type PrimaryAcordian = {
  id: string;
  title: string;
  subTitle: string;
  titleBadge: string;
  dateTime: string;
  description: string;
  field: string;
};

export default function PrimaryAcordian({
  id,
  dateTime,
  subTitle,
  title,
  titleBadge,
  description,
  field,
}: PrimaryAcordian) {
  function openDrawer(e: MouseEvent) {
    const targetElement = e.currentTarget as HTMLDivElement;
    const drawerElement = targetElement.querySelector(
      "#drawer"
    ) as HTMLDivElement;
    const drawerChildHeight = (
      drawerElement?.firstChild as HTMLElement
    ).getBoundingClientRect().height;
    const drawerElementHeight = drawerElement.style.height;

    !drawerElementHeight
      ? (drawerElement.style.height = drawerChildHeight + "px")
      : drawerElement.style.removeProperty("height");
  }

  return (
    <div
      className="bg-bg-secondry transition-colors rounded-xl p-3 space-y-3 group"
      onClick={openDrawer}
    >
      <div className="flex items-center justify-between">
        <div className="grow flex items-center justify-center gap-3">
          <div className="size-16 rounded-full overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/team/media/${field}/${id}`}
              loader={({ src }) => src}
              alt="..."
              width={64}
              height={64}
              className="size-full object-cover object-center"
            />
          </div>
          <div className="grow space-y-1">
            <div className="w-full flex items-center max-md:justify-between max-md:flex-col max-md:items-start">
              <div className="flex items-center justify-center gap-2">
                <ThirdTitle title={title} />
                <p className="empty:hidden font-dana-medium text-sm text-green-600 bg-green-600/15 rounded-lg px-2 py-1">
                  {titleBadge}
                </p>
              </div>
              <MdOutlineKeyboardArrowLeft className="max-md:hidden text-lg text-green-500 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300" />
              <p className="hidden max-md:block text-white/75 text-sm">{dateTime}</p>
            </div>
            <p className="text-sm text-white">{subTitle}</p>
          </div>
        </div>
        <p className="max-md:hidden text-white/75 text-sm">{dateTime}</p>
      </div>
      <div
        id="drawer"
        className="h-0 overflow-hidden transition-all duration-200"
      >
        <SecondryDescription description={description} />
      </div>
    </div>
  );
}
