import Image from "next/image";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="flex flex-row h-full items-center ">
      <div className="basis-3/5 pr-8 align">

        <LoginForm />
      </div>
      <div className="basis-2/5 h-full relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={"/images/login-sidebar.jpg"}
            layout="fill"
            objectFit="cover"
            alt="login sidebar image"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
