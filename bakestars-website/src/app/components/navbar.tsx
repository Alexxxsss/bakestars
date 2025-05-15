import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="row-start-1 flex gap-[24px] flex-wrap items-center justify-between w-full sticky top-0 filter backdrop-blur-sm  p-4  z-10 ">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Bake Stars Studios Logo"
          className="invert"
          width={72}
          height={15.2}
          priority
        />
      </Link>

      {/* Create a burber menu for these*/}
      <div className="flex gap-[24px] flex-wrap items-center">
        <Link
          href="/"
          className=" hover:text-pink transition-colors duration-150"
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className=" hover:text-pink transition-colors duration-150"
        >
          About Us
        </Link>
        <Link
          href="/games"
          className=" hover:text-pink transition-colors duration-150"
        >
          Games
        </Link>
        <Link
          href="/news"
          className=" hover:text-pink transition-colors duration-150"
        >
          News
        </Link>
        <Link
          href="#contact"
          className="bg-pink hover:bg-dark-pink transition-colors duration-150 rounded-full px-3 py-0.5"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
