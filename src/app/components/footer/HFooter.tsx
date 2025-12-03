import SecondryTitle from "@/components/title/SecondryTitle";
import { socialMedias } from "@/store/socialMedia";

export default function HFooter() {
  return (
    <footer>
      <div className="space-y-5">
        <SecondryTitle title="صفحات مجازی" className="justify-center" />
        <div className="flex items-center justify-center flex-wrap gap-2">
          {socialMedias.map(({ key, title, icon, url, active }) => {
            if (!active) return null;
            return (
              <a
                key={key}
                href={url}
                className="flex items-center justify-center gap-1 bg-black! dark:bg-white! rounded-2xl px-3 py-2"
                target="_blank"
              >
                {icon}
                <span className="font-dana-medium text-sm text-white dark:text-black">
                  {title}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
