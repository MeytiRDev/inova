import Image from "next/image";

export default function AboutUsImage() {
  return (
    <div className="relative">
      <Image src="/svgs/chat-background.svg" alt="..." width={665} height={499} />
      <Image src="/svgs/sit-on-chair.svg" alt="..." width={412} height={353} className="absolute right-0 left-0 -bottom-20 mx-auto" />
    </div>
  );
}
