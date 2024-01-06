function Header() {
  return (
    <header className="bg-white h-16">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-5 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="inline-flex items-center justify-center gap-1.5  px-1 py-1 text-black transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </button>

            <div className="font-bold text-gray-900 ">پرهام ساقریچی ها</div>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-xl">
              ایرانیان پرداز جم
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
