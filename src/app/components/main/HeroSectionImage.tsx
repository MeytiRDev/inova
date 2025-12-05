import Image from "next/image";

export default function HeroSectionImage() {
  return (
    <div className="relative -translate-y-20">
      <Image
        src="/svgs/chat-background-squere.svg"
        alt="..."
        width={514}
        height={514}
      />
      <Image
        src="/svgs/sitdown-dev.svg"
        alt="..."
        width={400}
        height={472}
        className="absolute -bottom-36 left-14 max-md:left-0 max-md:right-0 max-md:mx-auto"
      />
    </div>
  );
}
