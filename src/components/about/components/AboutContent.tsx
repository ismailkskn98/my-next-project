import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";

export default function AboutContent() {
  const t = useTranslations("About");
  return (
    <article className="flex flex-1 flex-col items-center gap-10 lg:items-start">
      <div className="flex w-10/12 flex-col items-start gap-2">
        <h1 className="text-4xl font-semibold">{t("title")}</h1>
        <p className="font-semibold text-white/70">{t("subtitle")}</p>
      </div>
      <div className="flex w-10/12 flex-col items-start gap-10">
        <p className="font-semibold">{t("description")}</p>
        <div className="flex w-10/12 flex-col items-start gap-8">
          <h2 className="text-4xl font-medium uppercase">
            {t("runAnywhere.title")}
          </h2>
          <p>{t("runAnywhere.description")}</p>
        </div>
        <div className="bebas-neue-regular group flex w-2/3 flex-col items-center justify-between gap-10 border-none bg-transparent text-5xl font-bold tracking-wider shadow-none outline-none hover:bg-transparent md:flex-row">
          <span className="text-nowrap bg-gradient-to-r from-[#FEC057] to-[#ECB165] bg-clip-text font-bold text-transparent drop-shadow-lg">
            {t("buyTokens")}
          </span>
          <div className="flex items-center gap-3">
            <Button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEC057] transition-all duration-300 group-hover:bg-white">
              <FaPlay
                className={`min-h-6 min-w-6 transition-all duration-300 group-hover:text-black`}
              />
            </Button>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold">
                {t("watchVideo.title")}
              </span>
              <span className="text-[8px] font-semibold">
                {t("watchVideo.subtitle")}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`min-h-5 w-1/2 self-center rounded-xl border-b-8 border-solid border-black/50 shadow-xl`}
        ></div>
      </div>
    </article>
  );
}
