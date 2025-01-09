import { Link, NavPaths } from "@/i18n/routing";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";

export default function MobilContact() {
  const t = useTranslations("Home");

  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(elementRef.current, {
      y: 500,
      opacity: 0,
      duration: 0.8,
    });
  });

  return (
    <section className="mx-auto flex items-center justify-center bg-transparent px-4 text-center text-white lg:mx-0">
      <div ref={elementRef} className="max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {t("mobilContactTitle")}
        </h1>
        <p className="mx-auto max-w-2xl text-white/80">
          {t("mobilContactDescription")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={NavPaths.ABOUT}
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#F5E36C]/80 px-8 text-sm font-medium capitalize text-[#0f141d] transition-colors hover:bg-[#F5E36C]"
          >
            {t("about")}
          </Link>
          <Link
            href={NavPaths.CONTACT}
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#0f141d]/80 px-8 text-sm font-medium capitalize text-white transition-colors hover:bg-[#0f141d]"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </section>
  );
}
