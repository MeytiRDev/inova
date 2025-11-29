import PrimaryDescription from "@/components/description/PrimaryDescription";
import SecondryDescription from "@/components/description/SecondryDescription";
import SecondryTitle from "@/components/title/SecondryTitle";
import React, { Fragment } from "react";
import DVHacathonCard from "./DVHacathonCard";
import { Alert, Result } from "antd";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import CResult from "@/components/antd/CResult";

export default function DVhacathons({ hacathon }: any) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center">
        <p className="text-sm px-2 py-1 rounded-md dark:text-black dark:bg-white font-dana-medium bg-black text-white">
          مسابقه های شرکت کرده
        </p>
      </div>
      <SecondryTitle
        title="  مسابقه های شرکت کرده"
        className="justify-center"
      />
      <PrimaryDescription
        description="در دوران دانشگاه، در بیش از ۲۱ هکاتون شرکت کردم. آدم‌هایی از سراسر کشور دور هم جمع می‌شدند و در عرض فقط ۲-۳ روز چیزهای فوق‌العاده‌ای می‌ساختند.
دیدن این همه امکان بی‌پایان که توسط گروهی از افراد باانگیزه و پرشور به واقعیت تبدیل می‌شد، واقعاً چشم‌گشا بود."
        className="w-2/3 mx-auto text-center"
      />
      <div className="">
        {hacathon ? (
          hacathon?.map((hacathon: any) => {
            return (
              <Fragment key={hacathon?.id}>
                <DVHacathonCard {...hacathon} />
              </Fragment>
            );
          })
        ) : (
          <CResult />
        )}
      </div>
    </div>
  );
}
