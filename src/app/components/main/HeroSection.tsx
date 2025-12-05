import HeroSectionImage from "./HeroSectionImage";
import HeroSectionInfo from "./HeroSectionInfo";
import HeroSectionScroll from "./HeroSectionScroll";

export default function HeroSection() {
  return (
    <section>
      <div className="custom-container">
        <div className="relative -z-10">
          <div className="absolute top-0 right-0 bg-green-500 size-52 blur-[1000px]"></div>
        </div>

        <div className="flex justify-between max-md:flex-col max-md:gap-8">
          <HeroSectionInfo />
          <HeroSectionImage />
        </div>

        <HeroSectionScroll />
      </div>
    </section>
  );
}
