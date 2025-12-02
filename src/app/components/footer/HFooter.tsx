import SecondryTitle from "@/components/title/SecondryTitle";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const socialMedias = [
  {
    key: 1,
    title: "اینستاگرام",
    icon: <AiFillInstagram className="text-2xl text-red-500" />,
  },
  {
    key: 2,
    title: "تلگرام",
    icon: <FaTelegram className="text-2xl text-blue-500" />,
  },
  {
    key: 3,
    title: "گیت هاب",
    icon: <FaGithub className="text-2xl text-white dark:text-black" />,
  },
  {
    key: 4,
    title: "لینکداین",
    icon: <FaLinkedin className="text-2xl text-cyan-600" />,
  },
  {
    key: 5,
    title: "واتس آپ",
    icon: <IoLogoWhatsapp className="text-2xl text-green-500" />,
  },
];

export default function HFooter() {
  return (
    <footer>
      <div className="space-y-5">
        <SecondryTitle title="صفحات مجازی" className="justify-center" />
        <div className="flex items-center justify-center flex-wrap gap-2">
          {socialMedias.map(({ key, title, icon }) => {
            return (
              <button
                key={key}
                className="flex items-center justify-center gap-1 bg-black dark:bg-white rounded-2xl px-3 py-2"
              >
                {icon}
                <span className="font-dana-medium text-sm text-white dark:text-black">{title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
