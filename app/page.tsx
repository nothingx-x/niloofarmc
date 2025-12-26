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
        <p>نیلوفر ام مکانی برای یافتن سرورهای ماینکرفت</p>
      </section>
      <span className="h-9 bg-primary rounded-md w-full"></span>
    </div>
  );
}



export const revalidate = 300