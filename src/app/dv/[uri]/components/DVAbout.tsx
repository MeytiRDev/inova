import CAlert from "@/components/antd/CAlert";
import SecondryDescription from "@/components/description/SecondryDescription";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";
import { BiInfoCircle } from "react-icons/bi";

export default function DVAbout({ about }: { about: string }) {
  return (
    <PrimarySection>
      <SecondryTitle title="درباره" icon={<BiInfoCircle />} />
      {about ? (
        <SecondryDescription description={about} />
      ) : (
        <CAlert
          alertProps={{
            title: "در حال حاضر اطلاعاتی برای درباره درج نشده است",
          }}
        />
      )}
    </PrimarySection>
  );
}
