"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Link from "next/link";
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
      className="ml-4 flex items-center gap-3 overflow-hidden text-sm text-white"
    >
      <Link
        href="/login"
        className="lg relative text-nowrap underline-offset-4 transition-all duration-200 hover:underline"
      >
        {t("login")}
      </Link>
      {/* <Link
        href="/register"
        className="underline-offset-4 transition-all duration-200 hover:underline"
      >
        {t("register")}
      </Link> */}
    </article>
  );
}
