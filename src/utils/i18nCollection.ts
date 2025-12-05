// "use server";
import { getCookie, setCookie } from "./cookieCollection";

export async function changeLocal() {
  const locale = await getCookie("locale");
  const isSet = await setCookie("locale", locale === "fa" ? "en" : "fa");
}
