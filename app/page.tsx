import Image from "next/image";
import HeroImage from "@/public/images/intro.webp";
import Logo from "@/public/niloofar.png";

export default async function Home() {
  return (
    <div>
      <section className="w-full h-20 bg-primary my-8 flex items-center justify-center px-4 py-2 rounded-md shadow-primary/20 shadow-2xl">
        <p className="text-secondary/70">
          {'"نیلوفر ام سی مکانی برای یافتن سرور های ماینکرفت"'}
        </p>
      </section>

      <div className="w-full h-[2px] bg-primary/40 my-8 rounded-md"></div>

      <section className="min-h-80 lg:min-h-[500px] bg-primary/30 flex flex-col justify-center items-center gap-8 relative rounded-md  shadow-primary/20 shadow-2xl">
        <Image
          src={HeroImage}
          alt="عکسی از نیلوفر ام سی"
          fill
          className="absolute top-0 left-0 object-cover opacity-40 -z-20"
        />
        <div className="flex flex-col justify-center items-center gap-4">
          <Image src={Logo} alt="لوگو" className="w-20 h-20" />
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

      <section className="flex flex-col items-center justify-center gap-4 mt-12">
        <h2 className="text-2xl">چرا نیلوفر ام سی؟</h2>
        <p className="text-base/7 text-balance text-center text-primary/70">
          شاید بپرسید که چرا باید از نیلوفر ام سی استفاده کنیم؟
          <br />
          <br />
          نیلوفر ام سی قابلیت های متعددی برای پیشرفت سرور های تازه کار داره.
          <br />
          شما بخوایید سرور تازه کار رو محبوب کنید خیلی کار داره اما نیلوفر ام سی
          این کار رو برای شما آسون میکنه.
          <br />
          <br />
          همچنین نسبت به سایر جاها ثبت سرور ماینکرفتی خیلی راحت تره.
          <br />
          <br />
          <span className="text-primary/80">
            پیشنهاد میکنم از نیلوفر ام سی یکبار استفاده کنید.
          </span>
          <br />
        </p>
        <button className="px-4 py-2 bg-secondary hover:bg-blue-700 focus:bg-blue-700 transition-colors duration-300 border-2 border-primary text-blue-200 cursor-pointer">
          ثبت سرور
        </button>
      </section>

      <div className="w-full h-0.5 bg-primary/40 my-8 rounded-md"></div>

      <section className="flex flex-col justify-center items-center gap-4 mt-12 lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl">محبوب ترین سرور ها</h2>
          <p className="text-base text-center text-primary/70 text-balance">
            سرور هایی که بیشترین بازیکن را دارند
          </p>
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-4 px-4 py-2 h-80 w-80 bg-primary/70 rounded-md shadow-primary/20 shadow-xs"
          >
            <Image
              src={Logo}
              alt="لوگو"
              className="w-20 h-20 rounded-full"
              width={80}
              height={80}
            />
            <h4 className="text-2xl text-center text-secondary/70">
              سرور {new Intl.NumberFormat("fa-IR").format(i + 1)}
            </h4>
            <p className="text-base text-center text-primary/70">
              توضیحات سرور {new Intl.NumberFormat("fa-IR").format(i + 1)}
            </p>
            <p>
              آنلاین:{" "}
              {new Intl.NumberFormat("fa-IR").format(
                Math.floor(Math.random() * 100)
              )}
            </p>
            <button className="px-4 py-2 bg-accent hover:bg-purple-700 focus:bg-purple-700 transition-colors duration-300 border-2 border-purple-900 text-blue-200 cursor-pointer">
              » کپی نشانی
            </button>
          </div>
        ))}
      </section>

      <section
        id="servers"
        className="flex flex-col items-center justify-center gap-2 my-12"
      >
        <h2 className="text-2xl">سرورها</h2>
        <div className="w-full h-80 lg:h-[500px] rounded-md overflow-y-scroll flex flex-col gap-4 shadow-primary/20 shadow-2xl">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-row items-center justify-between gap-4 px-4 py-4 shadow-primary/20 shadow-xs bg-white/80 rounded-md"
            >
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={Logo}
                  alt={`لوگو سرور ${i + 1}`}
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <h4 className="text-base text-black ">
                  سرور {new Intl.NumberFormat("fa-IR").format(i + 1)}
                </h4>
                <div className="w-4 h-4 rounded-full bg-accent mr-20 lg:mr-40 mb-2"></div>
                <p className="text-xs text-primary/70">
                  آنلاین:{" "}
                  {new Intl.NumberFormat("fa-IR").format(
                    Math.floor(Math.random() * 100)
                  )}
                </p>
              </div>
              <button className="px-2 py-1 bg-accent hover:bg-purple-700 focus:bg-purple-700 transition-colors duration-300 border-2 border-purple-900 text-blue-200 cursor-pointer">
                مشاهده
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 items-center justify-center my-12">
        <div className="flex flex-col gap-4 items-center justify-center bg-accent/70 px-4 py-2 rounded-md shadow-accent/20 shadow-2xl h-40 w-full md:w-[500px]">
          <h5>حمایت از ما</h5>
          <p className="text-sm text-center text-accent">
            برای حمایت ما لازم نیست کار خاصی بکنی! فقط این وبسایت رو به بقیه
            معرفی کن
          </p>
        </div>
      </section>
    </div>
  );
}

export const revalidate = 300;
