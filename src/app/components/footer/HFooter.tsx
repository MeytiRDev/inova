import SecondryTitle from "@/components/title/SecondryTitle";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function HFooter() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 p-3 rounded-xl dark:border dark:border-solid dark:border-white/10">
      <div className="flex justify-between">
        <div className="space-y-5">
          <SecondryTitle title="صفحات مجازی" />
          <ul className="space-y-3 *:flex *:items-center *:gap-1 *:dark:text-white">
            <li>
              <AiFillInstagram className="text-2xl text-red-500" />
              <span>اینستاگرام ما</span>
            </li>
            <li>
              <FaTelegram className="text-2xl text-blue-500" />
              <span>تلگرام</span>
            </li>
            <li>
              <FaGithub className="text-2xl" />
              <span>گیت هاب</span>
            </li>
            <li>
              <FaLinkedin className="text-2xl text-shadow-cyan-500" />
              <span>لینکداین</span>
            </li>
            <li>
              <IoLogoWhatsapp className="text-2xl text-green-500" />
              <span>واتس اپ</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
