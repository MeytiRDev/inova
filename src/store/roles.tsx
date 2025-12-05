import { BsStarFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { MdOutlineStorefront } from "react-icons/md";
import { PiPaintBrushHousehold } from "react-icons/pi";

export const membersRole = {
  DEV: {
    title: "توسعه دهنده",
    icon: <FaCode />,
  },
  DSN: {
    title: "طراح",
    icon: <PiPaintBrushHousehold />,
  },
  PM: {
    title: "مدیر",
    icon: <BsStarFill/>,
  },
  MK: {
    title: "فروش",
    icon: <MdOutlineStorefront />,
  },
  OT: {
    title: "دیگر",
    icon: "",
  },
};
