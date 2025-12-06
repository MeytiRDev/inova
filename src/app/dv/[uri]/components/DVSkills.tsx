import CAlert from "@/components/antd/CAlert";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export default function DVSkills({ skills }: { skills: string[] }) {
  const translate = useTranslations("dv")
  const isSkills = skills && skills?.length;

  return (
    <PrimarySection>
      <SecondryTitle title={translate("skills")} />
      <div
        className={twMerge(
          isSkills ? "flex items-center justify-start flex-wrap gap-2" : null
        )}
      >
        {isSkills ? (
          skills?.map((skill, i) => {
            return (
              <Fragment key={i}>
                <div className="shrink-0 font-dana-medium leading-[1.2] text-white/75 rounded-2xl text-lg bg-bg-secondry p-4">
                  {skill}
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
