"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdInfoOutline } from "react-icons/md";
import { Fragment } from "react/jsx-runtime";

const links = [
  {
    key: 1,
    title: "home",
    icon: <FiHome />,
    type: "navigation",
    href: "/",
    activeURL: "*",
  },
  {
    key: 2,
    title: "aboutUs",
    icon: <MdInfoOutline />,
    type: "scroll",
    href: "#aboutUs",
    activeURL: "/",
  },
  {
    key: 3,
    title: "members",
    icon: <HiOutlineUsers />,
    type: "scroll",
    href: "#members",
    activeURL: "/",
  },
] as const;

export default function HeaderNavigations() {
  const pathname = usePathname();
  const t = useTranslations("header.navigation");

  return (
    <nav className="flex items-center max-md:items-start justify-center max-md:flex-col gap-12 max-md:gap-6 *:text-lg *:text-white/50! *:hover:text-white! *:capitalize!">
      {links.map(({ key, title, type, href, icon, activeURL }) => {
        return pathname === activeURL || activeURL === "*" ? (
          <Fragment key={key}>
            {type === "navigation" ? (
              <Link
                href={href}
                className="flex items-center justify-center gap-1"
              >
                <span>{icon}</span>
                <span>{t(title)}</span>
              </Link>
            ) : (
              <a href={href} className="flex items-center justify-center gap-1">
                <span>{icon}</span>
                <span>{t(title)}</span>
              </a>
            )}
          </Fragment>
        ) : null;
      })}
    </nav>
  );
}
