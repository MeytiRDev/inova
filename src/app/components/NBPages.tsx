import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function NBPages() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Link href="/">
        <FiHome />
      </Link>
    </div>
  );
}
