import AcordianDescription from "@/components/description/AcordianDescription";
import SecondryDescription from "@/components/description/SecondryDescription";
import ThirdTitle from "@/components/title/ThirdTitle";
import Image from "next/image";

export default function DVHacathonCard({ title, description, date }: any) {
  return (
    <div className="relative hacathon_card_border p-5 pr-12 max-md:p-5 max-md:space-y-2">
      <div className="max-md:flex gap-5">
        <div className="absolute top-2.5 -right-8 max-md:static size-16 bg-gray-100 rounded-full overflow-hidden">
          <Image
            src="/pictures/inova.jpg"
            alt="..."
            width={64}
            height={64}
            className="size-full object-cover object-center"
          />
        </div>
        <div className="max-md:flex max-md:flex-col-reverse">
          <div className="max-md:flex gap-1">
            <time className="dark:text-white text-sm">{date}</time>
            <span>/</span>
            <p className="dark:text-white text-sm line-clamp-1 hidden max-md:block">ایران - اصفهان</p>
          </div>
          <ThirdTitle title={title} />
          <p className="dark:text-white line-clamp-1 max-md:hidden">ایران - اصفهان</p>
        </div>
      </div>
      <div className="min-h-[100px] max-md:min-h-auto">
        <AcordianDescription description={description} />
      </div>
    </div>
  );
}
