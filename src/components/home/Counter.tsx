"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

interface timeItems {
  title: string;
  value: number;
}

export default function Counter() {
  const t = useTranslations("Home");
  const timerDay = 3;
  const [timeLeft, setTimeLeft] = useState({
    days: timerDay,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(); // şuanki tarihi ve saati temsil ediyor
    // targetDate.getDate() // bugünü veriyor sayı olarak (11)
    targetDate.setDate(targetDate.getDate() + timerDay); // şuanki güne 2 gün ekliyor (13)

    const timer = setInterval(() => {
      // her 1 saniye de bir burası çalışacak
      const now = new Date().getTime(); // Şu anki zaman milisaniye cinsinden alınıyor.
      const distance = targetDate.getTime() - now; // Hedef tarih ile şu anki zaman arasındaki fark. Bu farkı milisaniye cinsinden alıyoruz.

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
  }, []);

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
      className="flex w-full items-center justify-center gap-4 rounded-lg bg-white/5 px-3 py-3 sm:gap-7 md:px-10"
    >
      {timeItems.map((item, index) => (
        <div
          key={index}
          className="counter-item -space-y-1 text-center sm:space-y-2"
        >
          <div className="relative text-[38px] font-bold sm:text-6xl">
            <div className="text-logoGold">
              {item.value.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="mt-2 text-xs uppercase sm:text-sm">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
