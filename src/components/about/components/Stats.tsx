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
      title: "pazarlama ve tanıtım",
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
      ref={ref}
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
          key={item.id}
          className="stats-item flex h-full w-full max-w-[470px] flex-col items-center justify-center gap-4 rounded-xl bg-black/10 py-14 backdrop-blur"
        >
          <h5 className="text-3xl font-semibold capitalize text-white sm:text-4xl lg:text-4xl">
            {item.title}
          </h5>
          <div className="flex items-end">
            {inView && (
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyDelay={500}
                scrollSpyOnce={true}
                className="text-4xl font-extrabold text-logoGold sm:text-4xl lg:text-5xl"
              />
            )}
            <span className="text-4xl font-bold text-logoGold sm:text-4xl lg:text-5xl">
              {item.unit}
            </span>
          </div>
          <p className="text-wrap px-4 text-center text-sm leading-10 tracking-wide text-white/80 sm:text-base">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
