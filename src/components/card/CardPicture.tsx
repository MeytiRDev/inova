"use client"
import Image from "next/image";
import Link from "next/link";
import { RiUserLine } from "react-icons/ri";

export default function CardPicture({ avatar, url = "/" }: any) {
  return (
    <Link href={url} className="block h-52">
      {avatar ? (
        <Image
          src={avatar}
          loader={({ src }) => src}
          alt="..."
          width={300}
          height={300}
          className="size-full object-cover object-center"
        />
      ) : (
        <div className="size-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <RiUserLine className="text-3xl text-black dark:text-white" />
        </div>
      )}
    </Link>
  );
}
