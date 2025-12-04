import Avatar from "@/components/Avatar";
import PrimaryDescription from "@/components/description/PrimaryDescription";
import PrimaryTitle from "@/components/title/PrimaryTitle";

export default function HHeader() {
  return (
    <div className="flex items-center justify-center @max-md:flex-col-reverse gap-20">
      <div className="space-y-5 @max-md:px-3">
        <PrimaryTitle title=" تیم توسعه اینوا" />
        <PrimaryDescription
          description="تیم ایِنوا با تکیه بر خلاقیت، دانش فنی و رویکردی نوآورانه، به طراحی و توسعه‌ی اپلیکیشن‌های مدرن تحت وب می‌پردازد.
ما با ارائه‌ راهکارهای دقیق، حرفه‌ای و منطبق با نیاز کسب‌وکارها، تجربه‌ای متمایز و کارآمد در دنیای دیجیتال خلق می‌کنیم."
        />
      </div>
      <div className="shrink-0">
        <Avatar src="/pictures/inova.jpg" className="size-72" />
      </div>
      {/* <div className="shrink-0 @min-md:hidden w-full">
        <Image
          src="/pictures/inova.jpg"
          alt="..."
          width={400}
          height={400}
          className="size-full object-cover object-center aspect-3/2"
        />
      </div> */}
    </div>
  );
}
