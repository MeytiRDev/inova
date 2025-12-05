import { getLocale, getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";
import MembersSectionCards from "./MembersSectionCards";

export default async function MembersSection() {
  const translate = await getTranslations("main.members");
  const locale = await getLocale();

  return (
    <section>
      <div className="custom-container">
        <div className="space-y-8">
          <h2
            className={twMerge(
              "text-6xl max-md:text-3xl font-dana-bold text-white capitalize",
              locale === "fa" ? "font-dana-bold" : "font-poppins-bold"
            )}
          >
            {translate("title")}
          </h2>
          <MembersSectionCards />
        </div>
      </div>
    </section>
  );
}
