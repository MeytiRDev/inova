import HeaderNavigations from "../HeaderNavigations";
import FooterSocialMedia from "./FooterSocialMedia";

export default function Footer() {
  return (
    <footer className="border-t border-solid border-white/10">
      <div className="custom-container">
        <div className="relative -z-10">
          <div className="absolute top-0 left-0 bg-green-500 rounded-full size-52 blur-[300px]"></div>
        </div>

        <div className="flex items-center justify-center flex-col gap-9 py-24">
          <HeaderNavigations />
          <FooterSocialMedia />
        </div>
      </div>
    </footer>
  );
}
