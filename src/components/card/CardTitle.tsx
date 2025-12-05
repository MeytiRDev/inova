import Link from "next/link";

type CardTitleProps = {
  title: string;
  url?: string;
};

export default function CardTitle({ title, url = "/" }: CardTitleProps) {
  return (
    <Link
      href={url}
      className="text-xl font-dana-medium text-white!"
    >
      {title}
    </Link>
  );
}
