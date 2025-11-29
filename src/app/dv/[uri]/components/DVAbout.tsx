import CAlert from "@/components/antd/CAlert";
import SecondryDescription from "@/components/description/SecondryDescription";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";

export default function DVAbout({ about }: { about: string }) {
  return (
    <PrimarySection>
      <SecondryTitle title="درباره" />
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
