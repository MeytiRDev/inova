import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export const socialMedias = [
  {
    key: 1,
    name: "instagram",
    title: "اینستاگرام",
    icon: <AiFillInstagram className="text-2xl text-red-500" />,
    url: "https://www.instagram.com/inova.ir_group?igsh=MXVxczlnYncwdDF5OQ==",
    active: true,
  },
  {
    key: 2,
    name: "telegram",
    title: "تلگرام",
    icon: <FaTelegram className="text-2xl text-blue-500" />,
    url: "https://t.me/Inova_Team",
    active: true,
  },
  {
    key: 3,
    name: "github",
    title: "گیت هاب",
    icon: <FaGithub className="text-2xl text-white dark:text-black" />,
    url: "https://github.com/InovaCompanyIr",
    active: true,
  },
  {
    key: 4,
    name: "linkedin",
    title: "لینکداین",
    icon: <FaLinkedin className="text-2xl text-cyan-600" />,
    url: "https://www.linkedin.com/in/inova-company-a62420398",
    active: true,
  },
  {
    key: 5,
    name: "whatsapp",
    title: "واتس آپ",
    icon: <IoLogoWhatsapp className="text-2xl text-green-500" />,
    active: false,
  },
];