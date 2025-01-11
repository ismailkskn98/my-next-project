"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classNames from "classnames";

gsap.registerPlugin(ScrollTrigger);

export type StatsItem = {
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
      value: 25,
      unit: "%",
      translationKey: t("stats.marketing", { rate: "25%" }),
    },
    {
      id: 2,
      value: 20,
      unit: "%",
      translationKey: t("stats.investor", { rate: "20%" }),
    },
    {
      id: 3,
      value: 55,
      unit: "%",
      translationKey: t("stats.exchange", { rate: "55%" }),
    },
  ];

  useGSAP(
    () => {
      gsap.from(statsContainerRef.current, {
        opacity: 0,
        duration: 0.1,
        ease: "power1.out",
        stagger: {
          each: 0.0,
        },
        scrollTrigger: {
          trigger: statsContainerRef.current,
          start: "top 99%",
          end: "top 80%",
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
        "mx-auto grid h-full min-h-[448px] w-full grid-cols-1 place-items-center gap-x-5 gap-y-7 text-white sm:min-h-[528px] sm:gap-x-7 sm:gap-y-12 md:min-h-[228px] md:grid-cols-3 md:gap-y-7 lg:max-h-[414px]",
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
            className="stats-item flex h-full w-full max-w-[470px] flex-col items-center justify-center gap-4 rounded-xl bg-black/10 py-14 backdrop-blur"
          >
            <div className="flex items-end">
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                className="text-4xl font-extrabold sm:text-5xl lg:text-6xl"
              />
              <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                {item.unit}
              </span>
            </div>
            <p className="text-wrap text-center text-sm leading-10 tracking-wide text-white/80 sm:text-base">
              {item.translationKey}
            </p>
          </div>
        ))}
    </div>
  );
}
