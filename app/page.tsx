"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();

  const isAuthenticated = Math.random() > 0.5;;

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (

    <div className="grid h-screen px-4 bg-white place-content-center">
    <h1 className="tracking-widest text-gray-500 uppercase">Checking login...</h1>
  </div>
  );
};

export default Index;
