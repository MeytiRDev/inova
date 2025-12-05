import HeaderDrawer from "./HeaderDrawer";
import HeaderLogo from "./HeaderLogo";
import HeaderNavigations from "./HeaderNavigations";
import HeaderTools from "./HeaderTools";
import { cookies } from "next/headers";
import HeaderToolsMobile from "./HeaderToolsMobile";

export default function Header() {
  async function changeLocale(locale: "fa" | "en") {
    "use server";
    const cookie = await cookies();
    cookie.set("locale", locale);
  }

  return (
    <header className="sticky top-0 py-12 max-md:py-4 bg-bg-primary border-b border-solid border-white/10 z-50">
      <div className="custom-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-14 max-md:hidden">
            <HeaderTools changeLocale={changeLocale} />
            <HeaderNavigations />
          </div>

          <HeaderDrawer>
            <HeaderNavigations />
            <hr className="my-4 border-white/10" />
            <HeaderToolsMobile changeLocale={changeLocale} />
          </HeaderDrawer>

          <HeaderLogo />
        </div>
      </div>
    </header>
  );
}
