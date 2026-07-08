import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import Link from "next/link";
import Logo from "@/public/niloofar.png";
import Image from "next/image";

const vazirMatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic", "latin-ext"],
});
const royeen = localFont({ src: "../public/fonts/Royeen.ttf", preload: true });

export const metadata: Metadata = {
  title: "Niloofar MC - نیلوفر ام سی",
  description: "آمار محبوب ترین سرور های ماینکرفت",
  keywords: [
    "نیلوفر ام سی",
    "سرور ماینکرفت",
    "سرور ماینکرافت",
    "سرور آنلاین ماینکرفت",
    "ماینکرفت آنلاین",
    "ماینکرفت",
    "ماینکرافت",
    "سرور فارسی ماینکرفت",
    "برترین سرورهای ماینکرفت فارسی",
  ],
  applicationName: "Niloofar MC",
  publisher: "Niloofar MC",
  category: "Games",
  authors: [{ name: "Niloofar MC" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().toLocaleDateString("fa-IR").split("/")[0]; // Get the current year in Persian calendar
  return (
    <html lang="fa-IR" dir="rtl">
      <body
        className={`${vazirMatn.className} ${royeen.className} antialiased scroll-auto`}
      >
        <Header />
        <main className="max-w-[1200px] mx-auto px-4 py-2">{children}</main>
        <footer className="w-full rounded-t-md bg-primary/70 px-4 py-2">
          <div className="flex flex-col gap-4">
            <Link href={"/"}>
              <div className="flex flex-row gap-2 items-center">
                <Image src={Logo} alt="لوگو" className="w-20 h-20" />
                <h2>نیلوفر ام سی</h2>
              </div>
            </Link>
            <span className="text-center text-primary/70 text-xs/7">
              این وبسایت هیچ ارتباطی با Microsoft و یا Mojang ندارد.
              <br />
              ما یک وبسایت رایگان جهت معرفی سرور های فارسی ماینکرفت هستیم.
            </span>
            <span className="text-center text-primary/70 text-xs">
              طراحی با ❤️ - {currentYear}. تمامی حقوق محفوظ است.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
