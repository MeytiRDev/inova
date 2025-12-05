import { getLocale } from "next-intl/server";

export default async function HeaderLogo() {
  const locale = await getLocale();
  return (
    <div className="flex items-center justify-center gap-1">
      {locale === "fa" ? (
        <h2 className="font-dana-bold text-2xl text-green-500 capitalize leading-none">
          اینوا
        </h2>
      ) : null}
      <h2 className="font-poppins-bold text-2xl text-white capitalize leading-none">
        inova
      </h2>
    </div>
  );
}
