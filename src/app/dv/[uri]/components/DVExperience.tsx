import React, { Fragment } from "react";
import DVExperienceCard from "./DVExperienceCard";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";

export default function DVExperience({ experience }: { experience: object[] }) {
  return (
    <PrimarySection>
      <SecondryTitle title="تجربه های کاری" />
      <div className="space-y-5">
        {experience?.map((ex, i) => {
          return (
            <Fragment key={ex.id}>
              <DVExperienceCard {...ex} />
            </Fragment>
          );
        })}
      </div>
    </PrimarySection>
  );
}
