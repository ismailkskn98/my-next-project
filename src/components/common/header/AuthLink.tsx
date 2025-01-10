"use client";
import { Link, NavPaths } from "@/i18n/routing";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function AuthLink() {
  const t = useTranslations("Header");
  const languageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(languageRef.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
    });
  });

  return (
    <article
      ref={languageRef}
      className="ml-4 flex items-center gap-4 font-raleway text-sm font-semibold text-white lg:gap-3"
    >
      <Link
        href={NavPaths.LOGIN}
        className="relative text-nowrap text-xs underline-offset-4 transition-all duration-200 hover:underline md:text-sm xl:text-base"
      >
        {t("login")}
      </Link>
      <Link
        href={NavPaths.REGISTER}
        className="text-nowrap text-xs underline-offset-4 transition-all duration-200 hover:underline md:text-sm xl:text-base"
      >
        {t("register")}
      </Link>
    </article>
  );
}
