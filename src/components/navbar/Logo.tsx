import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo_physio_leben.png"
        alt="Physioleben"
        width={160}
        height={40}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
