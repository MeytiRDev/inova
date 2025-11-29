import PrimaryDescription from "@/components/description/PrimaryDescription";
import SecondryDescription from "@/components/description/SecondryDescription";
import PrimarySection from "@/components/section/PrimarySection";
import SecondryTitle from "@/components/title/SecondryTitle";
import { BiInfoCircle } from "react-icons/bi";

export default function HMAboutTeam() {
  return (
    <PrimarySection>
      <SecondryTitle title="درباره" icon={<BiInfoCircle />} />
      <SecondryDescription
        description="تیم ایِنوا با رویکردی نوآورانه و دانش فنی عمیق، در طراحی و توسعه‌ی سامانه‌های تخصصی از جمله ERP، CRM، LMS و فروشگاه‌های آنلاین فعالیت می‌کند.
ما با دقت در رفع باگ‌ها، بهینه‌سازی روندها و ساخت پکیج‌های توسعه، راهکارهایی پایدار و قابل اعتماد ارائه می‌دهیم.
هدف ما خلق بهترین و کارآمدترین اپلیکیشن‌های تحت وب است؛ محصولاتی که دقیقاً متناسب با نیاز و چشم‌انداز مشتریان طراحی می‌شوند.
ایِنوا با تکیه بر مهارت در زبان‌های JavaScript و Python، خدمات آموزشی تخصصی نیز ارائه می‌دهد تا مسیر رشد توسعه‌دهندگان هموارتر شود.
ما باور داریم که هر ایده شایسته بهترین اجرا است و برای تحقق این هدف، با تمام توان همراه شما خواهیم بود."
      />
    </PrimarySection>
  );
}
