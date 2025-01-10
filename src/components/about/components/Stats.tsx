"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classNames from "classnames";

gsap.registerPlugin(ScrollTrigger);

type StatsItem = {
  id: number;
  value: number;
  unit?: string;
  translationKey: string;
};
export default function Stats({ isHome = false }: { isHome?: boolean }) {
  const t = useTranslations("About");
  const [stateVisible, setStateVisible] = useState<boolean>(false);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  const statsData: StatsItem[] = [
    {
      id: 1,
      value: 50,
      unit: "$",
      translationKey: "stats.revenue",
    },
    {
      id: 2,
      value: 150,
      translationKey: "stats.clients",
    },
    {
      id: 3,
      value: 20,
      unit: "%",
      translationKey: "stats.noBorders",
    },
    {
      id: 4,
      value: 10,
      unit: "x",
      translationKey: "stats.speed",
    },
  ];

  useGSAP(
    () => {
      gsap.from(statsContainerRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "expoScale(0.5,7,none)",
        stagger: {
          each: 0.2,
        },
        scrollTrigger: {
          trigger: statsContainerRef.current,
          start: "top 80%",
          end: "bottom 70%",
          onEnter: () => setStateVisible(true),
        },
      });
    },
    { scope: statsContainerRef },
  );

  return (
    <div
      ref={statsContainerRef}
      className={classNames(
        "mx-auto grid min-h-[108px] w-full grid-cols-2 place-items-center gap-x-5 gap-y-7 text-white sm:gap-x-7 sm:gap-y-12 md:grid-cols-4 md:gap-y-7",
        {
          "w-10/12": !isHome,
          "w-full": isHome,
        },
      )}
    >
      {stateVisible &&
        statsData.map((item) => (
          <div
            key={item.id}
            className="stats-item flex w-full max-w-64 flex-col items-center justify-center gap-2 rounded-xl bg-black/10 py-14 backdrop-blur"
          >
            <div className="flex items-end">
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
              />
              <span className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                {item.unit}
              </span>
            </div>
            <p className="max-w-36 text-wrap text-center text-sm tracking-wide text-white/80 sm:text-base md:max-w-48">
              {t(item.translationKey)}
            </p>
          </div>
        ))}
    </div>
  );
}
