import SecondryDescription from "@/components/description/SecondryDescription";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";

export default function DVAbout({ about }: { about: string }) {
  return (
    <PrimarySection>
      <SecondryTitle title="درباره" />
      <SecondryDescription description={about} />
    </PrimarySection>
  );
}
