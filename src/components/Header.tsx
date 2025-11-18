import Image from "next/image";
import Link from "next/link";

interface Props {}

export function Header({}: Props) {
    return (
    <header className="border-b border-white/10 px-6 py-4 flex
    item-center justify-between bg-black">
        <Link
            href="/"
            className="flex items-center gap-3"
            >
            <Image 
                src="/x-logo.jpg"
                alt="x Logo"
                width={38}
                height={38}
                priority
            />
        </Link>

        <nav className="flex gap-6 text-white/80">
            <Link href="/">Home</Link>
            <Link href="/">Explore</Link>
            <Link href="/">Profile</Link>
        </nav>
    </header>
    )
}
