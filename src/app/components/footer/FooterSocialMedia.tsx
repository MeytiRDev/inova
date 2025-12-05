import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";

const socialMedia = [
  {
    key: 1,
    icon: <FaInstagram className="text-white/75 text-xl" />,
    url: "https://www.instagram.com/inova.ir_group?igsh=MXVxczlnYncwdDF5OQ==",
  },
  {
    key: 2,
    icon: <RiTelegram2Fill className="text-white/75 text-xl" />,
    url: "https://t.me/Inova_Team",
  },
  {
    key: 3,
    icon: <SiGithub className="text-white/75 text-xl" />,
    url: "https://github.com/InovaCompanyIr",
  },
  {
    key: 4,
    icon: <FaLinkedinIn className="text-white/75 text-xl" />,
    url: "https://www.linkedin.com/in/inova-company-a62420398",
  },
];

export default function FooterSocialMedia() {
  return (
    <div className="flex items-center justify-center gap-6">
      {socialMedia.map(({ icon, key, url }) => {
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            className="flex items-center justify-center size-12 rounded-full bg-bg-secondry!"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}
