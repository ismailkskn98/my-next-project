import React, { useRef } from "react";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

export default function CardButton() {
  const t = useTranslations("Home");
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(elementRef.current, {
      y: 500,
      opacity: 0,
      duration: 0.5,
      delay: 0.8,
    });
  });

  return (
    <article ref={elementRef} className="h-min w-min">
      <Button className="group flex w-full items-center justify-center gap-5 border-none bg-transparent font-raleway text-3xl font-bold tracking-wider shadow-none outline-none hover:bg-transparent sm:gap-10 sm:text-4xl">
        <span className="relative z-10 overflow-hidden bg-gradient-to-r from-[#FEC057] to-[#f5e36c] bg-clip-text text-transparent drop-shadow-lg transition-all duration-300 after:absolute after:inset-y-0 after:left-0 after:-z-10 after:w-full after:-translate-x-5 after:translate-x-0 after:translate-y-0 after:skew-x-6 after:skew-y-[19deg] after:bg-[#0f141dab] after:transition-transform after:duration-300">
          {t("card.buyTokens")}
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#FEC057] to-[#f5e36c] shadow-xl drop-shadow-2xl transition-all duration-300 group-hover:bg-black/50 sm:h-12 sm:w-12">
          <FaPlay className="min-h-5 min-w-5 text-white sm:min-h-6 sm:min-w-6" />
        </span>
      </Button>
    </article>
  );
}
