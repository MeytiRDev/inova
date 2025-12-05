import Button from "@/components/button/Button";
import { getTranslations } from "next-intl/server";

export default async function HeroSectionInfo() {
  const translate = await getTranslations();

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
        <Button title="گیت هاب اینوا" />
      </div>
    </div>
  );
}
