"use client";
import SecondryDescription from "@/components/description/SecondryDescription";
import ThirdTitle from "@/components/title/ThirdTitle";
import Image from "next/image";
import { MouseEvent } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function DVExperienceCard({
  id,
  company_name,
  position,
  start_date,
  end_date,
  description,
}: any) {
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
      className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors rounded-xl p-2 space-y-3 group"
      onClick={openDrawer}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          <div className="size-16 rounded-full overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/team/media/experience/${id}`}
              loader={({ src }) => src}
              alt="..."
              width={64}
              height={64}
              className="size-full object-cover object-center"
            />
          </div>
          <div className="">
            <div className="flex items-center">
              <ThirdTitle title={company_name} />
              <MdOutlineKeyboardArrowLeft className="text-lg dark:text-secondry invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300" />
            </div>
            <p className="text-sm dark:text-white">{position}</p>
          </div>
        </div>
        <div>
          <SecondryDescription
            description={`از ${start_date} تا ${end_date}`}
          />
        </div>
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
