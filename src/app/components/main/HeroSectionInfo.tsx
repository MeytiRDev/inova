import { getLocale, getTranslations } from "next-intl/server";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export default async function HeroSectionInfo() {
  const translate = await getTranslations();
  const locale = await getLocale();

  return (
    <div className="w-1/2 max-md:w-full space-y-12">
      <h1 className="flex items-start flex-col gap-2 text-8xl max-md:text-5xl font-dana-bold">
        <span className="text-white">
          {translate("main.hero.prefixCompanyName")}
        </span>
        <span className="text-green-500">
          {translate("global.companyName")}
        </span>
      </h1>

      <div className="max-md:hidden">
        <a
          href="https://github.com/InovaCompanyIr"
          target="_blank"
          className="flex items-center justify-start w-fit p-3 rounded-2xl font-dana-medium text-white! bg-green-700! group"
        >
          <span className="leading-none capitalize">
            {locale === "fa"
              ? `${translate("global.github")} ${translate(
                  "global.companyName"
                )}`
              : `${translate("global.companyName")} ${translate(
                  "global.github"
                )}`}
          </span>
          <span>
            <MdKeyboardArrowLeft className={twMerge("text-white text-xl transition-all", locale === "fa" ? "group-hover:-translate-x-1" : "rotate-180 group-hover:translate-x-1")} />
          </span>
        </a>
      </div>
    </div>
  );
}
