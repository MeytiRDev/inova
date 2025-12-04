import HFooter from "./components/footer/HFooter";
import HHeader from "./components/header/HHeader";
import HMain from "./components/main/HMain";

export default function Home() {
  return (
    <div className="@min-4xl:max-w-4xl pt-16 pb-32 @max-md:pt-10 max-md:pb-24 space-y-20 mx-auto">
      <HHeader />
      <div className="@max-md:px-3">
        <HMain />
      </div>
      <HFooter />
    </div>
  );
}
