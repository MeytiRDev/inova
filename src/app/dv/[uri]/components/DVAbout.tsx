import CAlert from "@/components/antd/CAlert";
import AcordianDescription from "@/components/description/AcordianDescription";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";
import { BiInfoCircle } from "react-icons/bi";

export default function DVAbout({ about }: { about: string }) {
  return (
    <PrimarySection>
      <SecondryTitle title="درباره" icon={<BiInfoCircle />} />
      {about ? (
        <AcordianDescription className="line-clamp-none @max-md:line-clamp-3" description={about} />
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
