import AboutUsSection from "./components/main/AboutUsSection";
import HeroSection from "./components/main/HeroSection";
import MembersSection from "./components/main/MembersSection";

export default function HomePage() {
  return (
    <main className="space-y-52 max-md:space-y-32 py-52 max-md:py-14">
      <HeroSection />
      <AboutUsSection />
      <MembersSection />
    </main>
  );
}
