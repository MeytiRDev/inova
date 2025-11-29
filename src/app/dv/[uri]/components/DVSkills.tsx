import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";
import React, { Fragment } from "react";

export default function DVSkills({ skills }: { skills: string[] }) {
  return (
    <PrimarySection>
      <SecondryTitle title="مهارت ها" />
      <div className="flex items-center justify-start flex-wrap gap-2">
        {skills?.map((_, i) => {
          return (
            <Fragment key={i}>
              <div className="shrink-0 font-dana-medium leading-[1.2] text-white rounded-md text-sm dark:bg-white dark:text-black bg-black px-2 py-1">
                nodejs
              </div>
            </Fragment>
          );
        })}
      </div>
    </PrimarySection>
  );
}
