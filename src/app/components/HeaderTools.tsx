"use client";
import { Dropdown, MenuProps } from "antd";
import { useTranslations } from "next-intl";
import { GrLanguage } from "react-icons/gr";

type HeaderToolsProps = {
  changeLocale: (locale: "fa" | "en") => void;
};

function generateItems(t: any, changeLocale: HeaderToolsProps["changeLocale"]) {
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: t("persian"),
      onClick: () => changeLocale("fa"),
    },
    {
      key: 2,
      label: t("english"),
      onClick: () => changeLocale("en"),
    },
  ];
  return items;
}

export default function HeaderTools({ changeLocale }: HeaderToolsProps) {
  const t = useTranslations("header.tools.language");
  const items = generateItems(t, changeLocale);

  return (
    <div>
      <Dropdown
        menu={{ items }}
        placement="bottom"
        classNames={{
          item: "text-white/50! hover:bg-bg-primary! hover:text-white!",
          itemContent: "capitalize",
        }}
      >
        <GrLanguage className="text-white text-lg" />
      </Dropdown>
    </div>
  );
}
