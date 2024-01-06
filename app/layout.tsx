import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "شرکت ایرانیان جم",
  description: "پروژه داشبورد آزمایشی",
};

const vazirFont = localFont({
  src: "../public/font/Vazirmatn-RD-FD-Regular.woff2",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" style={{ height: "100%" }}>
      <body className={`w-full h-full ${vazirFont.className}`}>
        {children}
      </body>
    </html>
  );
}
