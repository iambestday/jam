"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};
function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
   
  
    <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4 text-right ">
    <div className="mx-auto max-w-lg text-right ">
      <h1 className="text-2xl font-bold sm:text-3xl">
        شرکت ایرانیان پرداز جم
      </h1>
    </div>
      <div>
        <label className="">شناسه کاربری*</label>
  
        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-2 border-gray-200 p-4 mt-5 text-sm shadow-sm text-right "
            placeholder=""
          />
        </div>
      </div>
  
      <div>
        <label>رمزعبور*</label>
  
        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-2 border-gray-200 p-4 mt-5 text-sm shadow-sm text-right"
            placeholder=""
          />
  
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
        </div>
      </div>
  
      <button
        type="submit"
        className="inline-block rounded-lg bg-slate-950 px-14 py-3 text-sm font-medium text-white"
      >
        ورود
      </button>
      <p className="text-sm text-gray-500">
        ورود شما به منزله قبول قوانین و مقررات سامانه است
      </p>
    </form>
  </div>
  
  );
}

export default LoginForm;
