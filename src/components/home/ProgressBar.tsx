"use client";
import { Progress } from "@/components/ui/progress";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ProgressBar() {
  const t = useTranslations("Home");
  const [progress] = useState<number>(30);

  return (
    <div className="w-full space-y-3 sm:space-y-4">
      <div className="flex justify-between text-xs sm:text-sm">
        <span className="relative font-semibold after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:text-white after:content-['|'] sm:after:-bottom-4">
          {t("card.preSale")}
        </span>
        <span className="relative font-semibold after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:text-white after:content-['|'] sm:after:-bottom-4">
          {t("card.softCap")}
        </span>
        <span className="relative font-semibold after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:text-white after:content-['|'] sm:after:-bottom-4">
          {t("card.bonus")}
        </span>
      </div>
      <Progress value={progress} className="h-1 sm:h-2" />
      <div className="flex justify-between px-1 text-xs font-semibold sm:text-sm">
        <span>{t("card.targetRaised", { value: "0%" })}</span>
        <span>1+</span>
      </div>
    </div>
  );
}
