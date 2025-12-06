import CAlert from "@/components/antd/CAlert";
import AcordianDescription from "@/components/description/AcordianDescription";
import PrimarySection from "@/components/section/PrimarySection";

export default function DVAbout({ about }: { about: string }) {
  return (
    <PrimarySection>
      {/* <SecondryTitle title="درباره" icon={<BiInfoCircle />} /> */}
      {about ? (
        <AcordianDescription
          className="line-clamp-4 max-md:line-clamp-3"
          description={about}
        />
      ) : null}
    </PrimarySection>
  );
}
