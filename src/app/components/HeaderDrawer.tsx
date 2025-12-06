"use client";
import { Drawer } from "antd";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { twMerge } from "tailwind-merge";

function DrawerHeader() {
  const translate = useTranslations("header.drawer");
  const locale = useLocale();

  return (
    <div className="flex items-center justify-between">
      <h2
        className={twMerge(
          "text-green-500 text-xl capitalize",
          locale === "fa" ? "font-dana-bold" : "font-poppins-bold"
        )}
      >
        {translate("title")}
      </h2>
    </div>
  );
}

export default function HeaderDrawer({ children }: any) {
  const [drawerSwitch, setDrawerSwitch] = useState(false);

  const locale = useLocale();

  function switchDrawer() {
    setDrawerSwitch((prev) => !prev);
  }

  return (
    <div className="flex items-center justify-center gap-5 md:hidden">
      <button type="button" onClick={switchDrawer}>
        <RiMenu5Fill className="text-xl text-white" />
      </button>
      <a
        className="hidden max-md:block"
        href="https://github.com/InovaCompanyIr"
      >
        {<SiGithub className="text-white/75 text-xl" />}
      </a>
      <Drawer
        size={250}
        open={drawerSwitch}
        onClose={switchDrawer}
        placement={locale === "fa" ? "right" : "left"}
        footer={null}
        classNames={{
          section: "bg-bg-primary!",
          body: "p-4!",
          header: "hidden!",
        }}
      >
        <DrawerHeader />
        <hr className="my-4 border-white/10" />
        <div className="space-y-5">{children}</div>
      </Drawer>
    </div>
  );
}
