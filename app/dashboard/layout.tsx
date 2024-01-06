import type { Metadata } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "شرکت ایرانیان جم",
  description: "پروژه داشبورد آزمایشی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="bg-gray-100 flex-auto h-full">
      <Header />
      <div
        className="flex-auto flex justify-center items-center"
        style={{ height: "calc(100% - 20rem)" }}
      >
        <div className="w-full max-w-screen-xl space-y-8 px-4 py-10 h-full sm:px-6 lg:space-y-14 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 h-full">
            <div className="h-full rounded-lg bg-white lg:col-span-3 p-5 text-right">
              {children}
            </div>
            <SideBar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
