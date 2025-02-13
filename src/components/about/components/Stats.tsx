"use client";

import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export type StatsItem = {
  id: number;
  value: number;
  unit?: string;
  title: string;
  description: string;
};
export default function Stats({ isHome = false }: { isHome?: boolean }) {
  const t = useTranslations("About");
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const statsData: StatsItem[] = [
    {
      id: 1,
      value: 25,
      unit: "%",
      title: "pazarlama tanıtım",
      description: t("stats.marketing", { rate: "25%" }),
    },
    {
      id: 2,
      value: 20,
      unit: "%",
      title: "aktif yatırımcılar",
      description: t("stats.investor", { rate: "20%" }),
    },
    {
      id: 3,
      value: 55,
      unit: "%",
      title: "borsaya giriş",
      description: t("stats.exchange", { rate: "55%" }),
    },
  ];

  return (
    <div
      className={classNames(
        "mx-auto grid h-full min-h-[448px] w-full grid-cols-1 place-items-center gap-x-5 gap-y-7 text-white sm:min-h-[528px] sm:gap-x-7 sm:gap-y-12 md:min-h-[228px] md:grid-cols-3 md:gap-y-7 lg:max-h-[414px]",
        {
          "w-10/12": !isHome,
          "w-full": isHome,
        },
      )}
    >
      {statsData.map((item) => (
        <div
          ref={ref}
          key={item.id}
          className="stats-item flex h-full w-full max-w-[470px] flex-col items-center justify-center gap-4 rounded-xl bg-black/60 py-14 lg:backdrop-blur-sm"
        >
          <h5 className="px-4 text-center text-3xl font-semibold capitalize text-white sm:text-3xl">
            {item.title}
          </h5>
          <div className="flex items-end">
            {inView ? (
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                // enableScrollSpy={true}
                scrollSpyOnce={true}
                className="text-3xl font-extrabold text-logoGold lg:text-4xl"
              />
            ) : (
              <span className="text-3xl font-extrabold text-logoGold lg:text-4xl">
                0
              </span>
            )}
            <span className="text-3xl font-bold text-logoGold lg:text-4xl">
              {item.unit}
            </span>
          </div>
          <p className="text-wrap px-4 text-center text-sm tracking-wide text-white/85 sm:text-base">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
