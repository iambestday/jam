"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className="w-full h-full rounded-lg  relative bg-white  ">
      <ul className="mt-6 space-y-1 font-bold flex flex-col items-end">
        <li
          className={`flex flex-row justify-end px-4 py-4 text-sm w-full ${
            pathname  === "/dashboard/me"
            ? "text-fuchsia-600 bg-gray-100"
              : "text-gray-950"
          } hover:bg-gray-100 hover:text-fuchsia-600`}
        >
          <Link href="/dashboard/me">حساب کاربری</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-person ml-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
          </svg>
        </li>
        <li className={`flex flex-row justify-end px-4 py-4 text-sm w-full ${
            pathname  === "/dashboard/user/management"
            ? "text-fuchsia-600 bg-gray-100"
              : "text-gray-950"
          } hover:bg-gray-100 hover:text-fuchsia-600`}>
          <Link href="/dashboard/user/management">مدیریت کاربران</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-file-text ml-2"
            viewBox="0 0 16 16"
          >
            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
          </svg>
        </li>
        <li className={`flex flex-row justify-end px-4 py-4 text-sm w-full ${
            pathname  === "/dashboard/about"
            ? "text-fuchsia-600 bg-gray-100"
              : "text-gray-950"
          } hover:bg-gray-100 hover:text-fuchsia-600`}>
   
          <Link href="/dashboard/about">درباره ما</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-chat-text ml-2"
            viewBox="0 0 16 16"
          >
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
          </svg>
        </li>
      </ul>
      <div className="mx-2 flex flex-row justify-center  absolute border-t-2 bottom-0 left-0 right-0 text-center text-sm px-4 py-3 hover:text-fuchsia-600 ">
        <Link href="/login">خروج از حساب کاربری</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-box-arrow-right ml-2"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
          />
          <path
            fill-rule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SideBar;
