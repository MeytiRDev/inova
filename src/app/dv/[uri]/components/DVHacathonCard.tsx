import SecondryDescription from "@/components/description/SecondryDescription";
import ThirdTitle from "@/components/title/ThirdTitle";
import Image from "next/image";

export default function DVHacathonCard({title, description, date}: any) {
  return (
    <div className="relative hacathon_card_border p-5 pr-12">
      <div className="absolute top-2.5 -right-8 size-16 bg-gray-100 rounded-full overflow-hidden">
        <Image
          src="/pictures/inova.jpg"
          alt="..."
          width={64}
          height={64}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="min-h-[100px]">
        <time className="dark:text-white text-sm">{date}</time>
        <ThirdTitle title={title} />
        <p className="dark:text-white">ایران - اصفهان</p>
        <SecondryDescription description={description} />
      </div>
    </div>
  );
}
