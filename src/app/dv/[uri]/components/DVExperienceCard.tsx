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

  const dateTime = `شروع ${start_date || "-"} / پایان ${end_date || "-"}`;

  return (
    <div
      className="bg-bg-secondry transition-colors rounded-xl p-3 space-y-3 group"
      onClick={openDrawer}
    >
      <div className="flex items-center justify-between">
        <div className="grow flex items-center justify-center gap-3">
          <div className="shrink-0 size-16 rounded-full overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/team/media/experience/${id}`}
              loader={({ src }) => src}
              alt="..."
              width={64}
              height={64}
              className="size-full object-cover object-center"
            />
          </div>
          <div className="grow">
            <div className="w-full flex max-md:justify-between max-md:flex-col">
              <ThirdTitle title={company_name} />
              <MdOutlineKeyboardArrowLeft className="max-md:hidden text-lg text-green-500 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300" />
              <SecondryDescription
                description={dateTime}
                className="hidden max-md:block"
              />
            </div>
            <p className="text-sm text-white">{position}</p>
          </div>
        </div>

        <SecondryDescription description={dateTime} className="max-md:hidden" />
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
