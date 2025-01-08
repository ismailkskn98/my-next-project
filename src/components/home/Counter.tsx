"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

interface timeItems {
  title: string;
  value: string;
}

export default function Counter() {
  const t = useTranslations("Home");
  const [timeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const timeItems: timeItems[] = [
    { title: t("card.days"), value: timeLeft.days },
    { title: t("card.hours"), value: timeLeft.hours },
    { title: t("card.minutes"), value: timeLeft.minutes },
    { title: t("card.seconds"), value: timeLeft.seconds },
  ];

  const counterItemContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".counter-item", {
        x: 400,
        opacity: 0,
        delay: 0.8,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: counterItemContainer },
  );

  return (
    <div
      ref={counterItemContainer}
      className="flex items-center justify-center gap-4 sm:gap-7"
    >
      {timeItems.map((item, index) => (
        <div key={index} className="counter-item text-center">
          <div className="relative text-[38px] font-bold sm:text-6xl">
            {item.value}
            {index + 1 !== timeItems.length && (
              <span className="absolute -right-4 top-[40%] -translate-y-1/2 font-bold text-black/50 sm:-right-6">
                :
              </span>
            )}
          </div>
          <div className="mt-2 text-xs uppercase sm:text-sm">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
