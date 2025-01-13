"use client";
import Language from "@/components/common/header/Language";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";

const Animate = dynamic(
  () => import("./../../../components/login/components/LoginAnimate"),
  {
    ssr: false,
    loading: () => <div className="h-full w-full flex-1 bg-[#EEF2F5]"></div>,
  },
);

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex h-dvh w-full items-start justify-between bg-white">
      <Toaster position="top-center" closeButton richColors theme="light" />
      <div className="absolute left-2 top-2 z-10 md:left-3 md:top-5">
        <Language isAuth={true} />
      </div>
      {children}
      <Animate />
    </main>
  );
}
