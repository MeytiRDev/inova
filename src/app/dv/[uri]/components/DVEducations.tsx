import { Fragment } from "react";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";
import CAlert from "@/components/antd/CAlert";
import PrimaryAcordian from "@/components/acordian/PrimaryAcordian";
import { useTranslations } from "next-intl";

type DVEducationProps = {
  isData: boolean;
  educations: Partial<{
    id: string;
    degree: string;
    field_of_study: string;
    university: string;
    start_year: string;
    end_year: string;
    description: string;
  }>[];
};

export default function DVEducation({ isData, educations }: DVEducationProps) {
  const translate = useTranslations("dv")
  return (
    <PrimarySection>
      <SecondryTitle title={translate("education")} />
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-4">
        {isData ? (
          educations?.map(
            ({
              id,
              degree,
              field_of_study,
              university,
              start_year,
              end_year,
              description,
            }: any) => {
              return (
                <Fragment key={id}>
                  <PrimaryAcordian
                    id={id}
                    title={field_of_study}
                    titleBadge={degree}
                    subTitle={university}
                    dateTime={`شروع ${start_year || "-"} پایان ${
                      end_year || "-"
                    }`}
                    description={description}
                    field="education"
                  />
                </Fragment>
              );
            }
          )
        ) : (
          <CAlert
            alertProps={{
              title: "در حال حاضر اطلاعاتی برای تحصیلات درج نشده است!",
            }}
          />
        )}
      </div>
    </PrimarySection>
  );
}
