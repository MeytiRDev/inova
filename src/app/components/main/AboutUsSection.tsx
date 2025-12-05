import AboutUsSectionDesc from "./AboutUsSectionDesc";
import AboutUsImage from "./AboutUsImage";

export default function AboutUsSection() {
  return (
    <section>
      <div className="custom-container">
        <div className="flex items-center justify-between max-md:flex-col max-md:gap-4 pb-20">
          <AboutUsSectionDesc />
          <AboutUsImage />
        </div>
      </div>
    </section>
  );
}
