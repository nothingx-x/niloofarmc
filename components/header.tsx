import Image from "next/image";
import Logo from "@/public/niloofar.png";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full rounded-b-md bg-primary/70 px-4 py-2 sticky top-0 left-0 z-10 backdrop-blur-sm">
      <nav className="flex flex-row gap-2 items-center justify-between">
        <Link href={"/"}>
          <div className="flex flex-row gap-2 items-center">
            <Image src={Logo} alt="لوگو" className="w-20 h-20" />
            <h2>نیلوفر ام سی</h2>
          </div>
        </Link>
        <ul className="hidden md:flex md:flex-row md:gap-4 md:items-center md:justify-center">
          <li>خانه</li>
          <li>ثبت سرور</li>
        </ul>
        <button className="md:hidden px-4 py-2 bg-secondary hover:bg-blue-700 focus:bg-blue-700 transition-colors duration-300 border-2 border-primary text-blue-200 cursor-pointer">
          منو
        </button>
      </nav>
    </header>
  );
}
