import CAlert from "@/components/antd/CAlert";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export default function DVSkills({ skills }: { skills: string[] }) {
  const isSkills = skills && skills?.length;

  return (
    <PrimarySection>
      <SecondryTitle title="مهارت ها" />
      <div
        className={twMerge(
          isSkills ? "flex items-center justify-start flex-wrap gap-2" : null
        )}
      >
        {isSkills ? (
          skills?.map((_, i) => {
            return (
              <Fragment key={i}>
                <div className="shrink-0 font-dana-medium leading-[1.2] text-white rounded-md text-sm dark:bg-white dark:text-black bg-black px-2 py-1">
                  nodejs
                </div>
              </Fragment>
            );
          })
        ) : (
          <CAlert
            alertProps={{
              title: "در حال حاضر اطلاعاتی برای تحربه های کاری درج نشده است",
            }}
          />
        )}
      </div>
    </PrimarySection>
  );
}
