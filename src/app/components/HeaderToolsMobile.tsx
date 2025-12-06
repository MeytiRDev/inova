"use client";
import { GrLanguage } from "react-icons/gr";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useTranslations } from "use-intl";

type HeaderToolsMobileProps = {
  changeLocale: (locale: "fa" | "en") => void;
};

function generateMenu(
  t: any,
  changeLocale: HeaderToolsMobileProps["changeLocale"]
) {
  const items = [
    {
      key: 1,
      title: t("persian"),
      onClick: () => changeLocale("fa"),
    },
    {
      key: 2,
      title: t("english"),
      onClick: () => changeLocale("en"),
    },
  ];
  return items;
}

export default function HeaderToolsMobile({
  changeLocale,
}: HeaderToolsMobileProps) {
  const t = useTranslations("header.tools.language");

  function switchMenu() {
    const accordianElem = document.querySelector(
      "#accordian"
    ) as HTMLDivElement;
    const containerElem = document.querySelector(
      "#container"
    ) as HTMLDivElement;

    const accordianInfo = accordianElem.getBoundingClientRect();
    const containerInfo = containerElem.getBoundingClientRect();

    console.log(containerInfo.height);
    

    if (!accordianInfo.height) {
      accordianElem.style.height = `92px`;
    } else {
      accordianElem.style.height = "0";
    }
  }

  return (
    <div className="bg-bg-secondry p-2 rounded-xl">
      <button
        type="button"
        className="w-full flex items-center justify-between"
        onClick={switchMenu}
      >
        <div className="flex items-center justify-center gap-2">
          <GrLanguage className="text-lg text-white" />
          <p className="text-lg text-white">{t("title")}</p>
        </div>
        <MdKeyboardArrowLeft className="text-white text-base" />
      </button>

      <div
        id="accordian"
        className="overflow-hidden transition-all"
        style={{
          height: "0",
        }}
      >
        <div id="container" className="space-y-3 py-3">
          {generateMenu(t, changeLocale).map(({ key, title, onClick }) => {
            return (
              <button
                key={key}
                type="button"
                className="block text-white/50 text-lg"
                onClick={onClick}
              >
                {title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
