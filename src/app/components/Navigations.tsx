import NavigationButtons from "./NavigationButtons";

export default function Navigations() {
  return (
    <div className="fixed right-0 bottom-5 shadow-2xl left-0 w-fit rounded-full border border-solid border-gray-100 dark:border-white/10 p-4 bg-white dark:bg-gray-900 mx-auto">
      <NavigationButtons />
    </div>
  );
}
