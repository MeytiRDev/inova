import NBPages from "./NBPages";
import NBSocialMedia from "./NBSocialMedia";
import NBTheme from "./NBTheme";

export default function NavigationButtons() {
  return (
    <div className="flex items-center justify-center gap-5 *:text-xl dark:*:text-white">
      <NBPages />
      <NBSocialMedia />
      <NBTheme />
    </div>
  );
}
