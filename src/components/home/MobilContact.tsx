import { Link, NavPaths } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

export default function MobilContact() {
  const t = useTranslations("Home");
  return (
    <section className="flex items-center justify-center bg-transparent px-4 text-center text-white">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {t("mobilContactTitle")}
        </h1>
        <p className="mx-auto max-w-2xl text-white/80">
          {t("mobilContactDescription")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={NavPaths.ABOUT}
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#774E1D]/80 px-8 text-sm font-medium capitalize text-white transition-colors hover:bg-[#774E1D]"
          >
            {t("about")}
          </Link>
          <Link
            href={NavPaths.CONTACT}
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#000000]/80 px-8 text-sm font-medium capitalize text-white transition-colors hover:bg-[#000000]"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </section>
  );
}
