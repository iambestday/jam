import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white h-64 font-bold">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16  sm:px-6 lg:space-y-16 lg:px-8 ">
        <div className="flex flex-row justify-between">
          <div>
            <Image
              src={"/images/logo.png"}
              width={"150"}
              height={"99"}
              alt="login sidebar image"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 text-right sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            <div>
              <p className=" text-sm text-gray-400">شبکه های اجتماعی</p>
              <ul className="mt-6 space-y-4   text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    آپارات
                  </a>
                </li>

              </ul>
            </div>

            <div>
              <p className=" text-gray-400">پشتیبانی</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    تماس با ما
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    سوالات متداول
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    دبیرخانه
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
