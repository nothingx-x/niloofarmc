import Image from "next/image";
import Logo from "@/public/niloofar.png";
import HeroImage from "@/public/images/intro.webp";

export default async function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-primary/70 px-4 py-2">
        <nav className="flex flex-row gap-2 items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Image src={Logo} alt="لوگو" className="w-20 h-20" />
            <h2>نیلوفر ام سی</h2>
          </div>
          <ul className="hidden md:flex md:flex-row md:gap-4 md:items-center md:justify-center">
            <li>خانه</li>
            <li>ثبت سرور</li>
          </ul>
          <button className="md:hidden px-4 py-2 bg-secondary hover:bg-blue-700 focus:bg-blue-700 transition-colors duration-300 border-2 border-primary text-blue-200 cursor-pointer">
            منو
          </button>
        </nav>
      </header>

      <section className="w-full h-20 bg-primary my-8 flex items-center justify-center px-4 py-2">
        <p className="text-secondary/70">
          {'"نیلوفر ام سی مکانی برای یافتن سرور های ماینکرفت"'}
        </p>
      </section>

      <div className="w-full h-4 bg-primary my-8"></div>

      <section className="min-h-80 bg-primary/30 flex flex-col justify-center items-center gap-8 relative">
        <Image
          src={HeroImage}
          alt="عکسی از نیلوفر ام سی"
          fill
          className="absolute top-0 left-0 object-cover opacity-40 -z-20"
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-4xl">نیلوفر ام سی</h1>
          <p className="text-base text-center text-balance">
            با نیلوفر ام سی سرور ماینکرفت فارسی پیدا کن. سرورتو پیشرفت بده و..
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <button className="px-4 py-2 bg-accent hover:bg-purple-700 focus:bg-purple-700 transition-colors duration-300 border-2 border-purple-900 text-blue-200 cursor-pointer">
            سرور ها
          </button>
          <button className="px-4 py-2 bg-secondary hover:bg-blue-700 focus:bg-blue-700 transition-colors duration-300 border-2 border-primary text-blue-200 cursor-pointer">
            ثبت سرور
          </button>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-4 mt-12">
        <h2 className="text-2xl">محبوب ترین سرور ها</h2>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-80 w-80 bg-primary/70"></div>
        ))}
      </section>
    </div>
  );
}

export const revalidate = 300;
