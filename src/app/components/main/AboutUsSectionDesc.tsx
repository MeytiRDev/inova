import AcordianDescription from "@/components/description/AcordianDescription";
import { getLocale, getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

export default async function AboutUsSectionDesc() {
  const translate = await getTranslations();
  const locale = await getLocale();

  return (
    <div className="w-1/3 max-md:w-full space-y-4">
      <h2
        className={twMerge(
          "gap-2 capitalize text-6xl max-md:text-3xl",
          locale === "fa" ? "font-dana-bold" : "font-poppins-bold"
        )}
      >
        <span className="text-white">
          {translate("main.aboutUs.prefix_companyName")}
        </span>{" "}
        <span className="text-green-500">
          {translate("global.companyName")}
        </span>
      </h2>

      <AcordianDescription
        description={translate("main.aboutUs.description")}
      ></AcordianDescription>
    </div>
  );
}
