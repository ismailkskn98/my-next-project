import { Link, NavPaths } from "@/i18n/routing";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Language from "./header/Language";

export default function AuthFormTop() {
  return (
    <div className="absolute inset-x-0 top-5 z-10 flex w-full items-center justify-between px-5">
      <Link
        href={NavPaths.HOME}
        className="rounded-md bg-black/5 px-3 py-[7px] font-medium text-black underline underline-offset-4 backdrop-blur-lg transition-all duration-200 hover:bg-black/15 focus:bg-black/20"
      >
        <IoIosArrowBack className="text-xl font-extrabold" />
      </Link>
      <Language isAuth={true} />
    </div>
  );
}
