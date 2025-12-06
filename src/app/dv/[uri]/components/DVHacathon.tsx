import SecondryTitle from "@/components/title/SecondryTitle";
import { Fragment } from "react";
import DVHacathonCard from "./DVHacathonCard";
import CResult from "@/components/antd/CResult";
import { useTranslations } from "next-intl";

export default function DVhacathons({ hacathon }: any) {
  const translate = useTranslations("dv.achievments");

  const isAchievment = hacathon && hacathon?.length;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center">
        <p className="text-sm px-2 py-1 rounded-md font-dana-medium text-white">
          {translate("badge")}
        </p>
      </div>
      <SecondryTitle title={translate("title")} className="justify-center" />

      <div className="">
        {isAchievment ? (
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
