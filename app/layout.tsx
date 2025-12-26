import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const vazirMatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin","arabic", "latin-ext"],
});
const royeen = localFont({src: "../public/fonts/Royeen.ttf", preload: true});

export const metadata: Metadata = {
  title: "Niloofar MC - نیلوفر ام سی",
  description: "آمار محبوب ترین سرور های ماینکرفت",
  keywords: ["نیلوفر ام سی", "سرور ماینکرفت", "سرور ماینکرافت", "سرور آنلاین ماینکرفت", "ماینکرفت آنلاین", "ماینکرفت", "ماینکرافت", "سرور فارسی ماینکرفت", "برترین سرورهای ماینکرفت فارسی"],
  applicationName: "Niloofar MC",
  publisher: "Niloofar MC",
  category: "Games",
  authors: [{name:"Niloofar MC"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR">
      <body style={{direction:"rtl"}}
        className={`${vazirMatn.className} ${royeen.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
