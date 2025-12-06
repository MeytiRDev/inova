import AcordianDescription from "@/components/description/AcordianDescription";
import PrimarySection from "@/components/section/PrimarySection";

export default function DVAbout({ about }: { about: string }) {
  return (
    <PrimarySection>
      {about ? (
        <AcordianDescription
          className="line-clamp-4 max-md:line-clamp-3"
          description={about}
        />
      ) : null}
    </PrimarySection>
  );
}
