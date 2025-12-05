import { getCookie } from "@/utils/cookieCollection";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = (await getCookie("locale")) || "fa";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
