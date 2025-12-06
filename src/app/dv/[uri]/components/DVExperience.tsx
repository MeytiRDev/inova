import { Fragment } from "react";
import DVExperienceCard from "./DVExperienceCard";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";
import CAlert from "@/components/antd/CAlert";
import { useTranslations } from "next-intl";

export default function DVExperience({
  experience,
}: {
  experience: object[];
}) {
  const translate = useTranslations("dv");
  const isExperiences = experience && experience?.length;

  return (
    <PrimarySection>
      <SecondryTitle title={translate("experience")} />
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-4">
        {isExperiences ? (
          experience?.map((ex: any, i) => {
            return (
              <Fragment key={ex.id}>
                <DVExperienceCard {...ex} />
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
