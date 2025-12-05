import { getTranslations } from "next-intl/server";
import Link from "next/link";
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
  },
  {
    key: 2,
    title: "aboutUs",
    icon: <MdInfoOutline />,
    type: "navigation",
    href: "/",
  },
  {
    key: 3,
    title: "members",
    icon: <HiOutlineUsers />,
    type: "scroll",
    href: "/",
  },
] as const;

export default async function HeaderNavigations() {
  const t = await getTranslations("header.navigation");

  return (
    <nav className="flex items-center max-md:items-start justify-center max-md:flex-col gap-12 max-md:gap-6 *:text-lg *:text-white/50! *:hover:text-white! *:capitalize!">
      {links.map(({ key, title, type, href, icon }) => {
        return (
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
              <a className="flex items-center justify-center gap-1">
                <span>{icon}</span>
                <span>{t(title)}</span>
              </a>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
