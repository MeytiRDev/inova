export default function PrimaryTitle({ title, icon }: any) {
  return (
    <h2 className="flex items-center gap-2 font-dana-bold dark:text-white text-7xl">
      <span className="empty:hidden">{icon}</span>
      <span className="text-green-500  max-md:text-4xl">{title}</span>
    </h2>
  );
}
