import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export default function NBSocialMedia() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Link href="">
        <IoLogoGithub />
      </Link>
      <Link href="">
        <IoLogoLinkedin />
      </Link>
    </div>
  );
}
