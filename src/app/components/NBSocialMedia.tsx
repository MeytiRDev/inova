import { socialMedias } from "@/store/socialMedia";

const requireSocialMedias = ["github", "linkedin"];

export default function NBSocialMedia() {
  return (
    <div className="flex items-center justify-center gap-3">
      {socialMedias.map(({ active, icon, key, name, title, url }) => {
        if (!requireSocialMedias.includes(name)) return null;
        return (
          <a href={url}>
            <span className="*:text-xl! *:text-black! *:dark:text-white!">{icon}</span>
          </a>
        );
      })}
    </div>
  );
}
