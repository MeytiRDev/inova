// import HFooter from "./components/footer/HFooter";
// import HHeader from "./components/header/HHeader";
// import HMain from "./components/main/HMain";

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

// export default function Home() {
//   return (
//     <div className="@min-4xl:max-w-4xl pt-16 pb-32 @max-md:pt-10 max-md:pb-24 space-y-20 mx-auto">
//       <HHeader />
//       <div className="@max-md:px-3">
//         <HMain />
//       </div>
//       <HFooter />
//     </div>
//   );
// }
