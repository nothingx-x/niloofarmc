import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center px-4 py-2 bg-secondary h-dvh">
      <section className="flex flex-row gap-2 items-center justify-center bg-primary h-20 w-full rounded-md">
        <div className="flex flex-row gap-2 items-center justify-center">
          <Image src="/niloofar.png" alt="Niloofar MC Logo" width={40} height={40} />
          <h1 className="text-blue-100">نیلوفر ام سی</h1>
        </div>
        <button></button>
      </section>
      <section className="flex flex-col gap-2 items-center justify-center bg-primary h-15 w-full rounded-md text-secondary">
        <p className="text-sm text-center">نیلوفر ام مکانی برای یافتن سرورهای ماینکرفت</p>
      </section>
      <span className="h-9 bg-primary rounded-md w-full"></span>
      <section className="flex flex-col gap-2 items-center justify-center bg-primary rounded-md text-secondary relative w-full h-65">
        <Image src="/images/intro.webp" alt="Niloofar MC Logo" fill objectFit="contain"/>
        <div className="w-full h-full z-20 bg-primary/50 flex flex-col gap-2 items-center justify-center rounded-md">
          <Image src="/niloofar.png" alt="Niloofar MC Logo" width={50} height={50} />
          <p className="text-base text-blue-100">نیلوفر ام سی</p>
          <div className="flex flex-row items-center justify-center gap-2">
            <button className="px-4 py-2 bg-accent hover:bg-purple-700 focus:bg-purple-700 transition-colors duration-300 border-2 border-purple-900 shadow-2xl shadow-accent text-blue-200 cursor-pointer">سرور ها</button>
            <button className="px-4 py-2 bg-secondary hover:bg-blue-700 focus:bg-blue-700 transition-colors duration-300 border-2 border-primary shadow-2xl shadow-secondary text-blue-200 cursor-pointer">ثبت سرور</button>
          </div>
        </div>
      </section>
    </div>
  );
}



export const revalidate = 300