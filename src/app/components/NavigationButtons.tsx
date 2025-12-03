import NBPages from "./NBPages";
import NBSocialMedia from "./NBSocialMedia";
import NBTheme from "./NBTheme";

export default function NavigationButtons() {
  return (
    <div className="flex  justify-center gap-3 *:text-xl dark:*:text-white">
      <NBPages />
      <div className="w-px bg-black/10"></div>
      <NBSocialMedia />
      <div className="w-px bg-black/10"></div>
      <NBTheme />
    </div>
  );
}
