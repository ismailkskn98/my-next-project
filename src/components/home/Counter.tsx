"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

interface timeItems {
  title: string;
  value: number;
}

export default function Counter() {
  const t = useTranslations("Home");
  const campaignEndDate = useMemo(() => new Date(2025, 0, 20, 23, 59, 59), []);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = campaignEndDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [campaignEndDate]);

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
      className="flex w-full items-center justify-around gap-2 rounded-lg bg-white/5 px-3 py-3 mobileL:gap-4 sm:gap-5 xl:gap-7"
    >
      {timeItems.map((item, index) => (
        <div key={index} className="counter-item flex flex-col items-center">
          <div className="relative text-xl font-bold mobileS:text-2xl mobileM:text-3xl mobileL:text-[38px] lg:text-5xl xl:text-6xl">
            <div className="text-logoGold">
              {item.value.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="mt-2 text-[10px] uppercase mobileL:text-xs sm:text-sm">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}
