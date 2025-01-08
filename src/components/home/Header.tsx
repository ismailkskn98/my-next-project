import { useGSAP } from "@gsap/react";
import styles from "./styles.module.css";
import gsap from "gsap";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function Header() {
  const elementRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Home");

  useGSAP(
    () => {
      gsap.from(".header-item", {
        x: 400,
        opacity: 0,
        delay: 0.8,
        stagger: {
          each: 0.4,
        },
      });
    },
    { scope: elementRef },
  );
  return (
    <header
      ref={elementRef}
      className="flex flex-col items-center gap-2 overflow-hidden sm:gap-3"
    >
      <div
        className={`${styles.titleShadow} px-3 pb-2 pt-3 font-raleway text-xl font-extrabold uppercase drop-shadow-xl sm:px-5 sm:pb-3 sm:pt-4 sm:text-2xl xl:px-8 xl:text-3xl`}
      >
        <p className="header-item">{t("card.preSaleLive")}</p>
      </div>
      <p className="header-item text-xs sm:text-sm">{t("card.endsIn")}</p>
    </header>
  );
}
