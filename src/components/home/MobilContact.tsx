import { Link, NavPaths } from "@/i18n/routing";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
    <section className="mobileL:px-3 mx-auto flex items-center justify-center bg-transparent px-1 text-center text-white sm:px-4 lg:mx-0">
      <div ref={elementRef} className="max-w-3xl space-y-6">
        <div className="relative mx-auto flex w-min items-center justify-center gap-4 font-raleway text-6xl font-bold uppercase leading-tight sm:text-7xl">
          <span>c1</span>
          <span className="flex items-center justify-center">
            c
            <span className="relative text-logoGold">
              o
              <Image
                src={"/images/logo.png"}
                alt="c1coin logo"
                width={50}
                height={50}
                className="absolute left-1/2 top-1/2 -z-10 max-h-[35px] max-w-[35px] -translate-x-1/2 -translate-y-1/2 object-center drop-shadow-xl"
              />
            </span>
            ın
          </span>
        </div>
        <h2 className="mobileL:text-4xl text-3xl font-medium capitalize">
          {t("mobilContactSubtitle")}
        </h2>
        <p className="mx-auto max-w-2xl text-white/80">
          {t("mobilContactDescription")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={NavPaths.ABOUT}
            className="inline-flex h-10 items-center justify-center rounded-md bg-logoGold px-8 text-base font-medium capitalize text-white transition-colors hover:bg-logoGold-100"
          >
            {t("about")}
          </Link>
          <Link
            href={NavPaths.CONTACT}
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-base font-medium capitalize text-black/80 transition-colors hover:bg-white/80"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </section>
  );
}
