"use client";

import { useTranslations } from "next-intl";
import CountUp from "react-countup";

type StatsItem = {
  id: number;
  value: number;
  unit?: string;
  translationKey: string;
};
export default function Stats() {
  const t = useTranslations("About");

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

  return (
    <div className="mx-auto flex w-10/12 flex-wrap items-start justify-center gap-8 text-white md:justify-between">
      {statsData.map((item) => (
        <div
          key={item.id}
          className="flex min-w-[144px] basis-36 flex-col items-center justify-center gap-2"
        >
          <div className="flex items-end">
            <CountUp
              start={0}
              end={item.value}
              duration={2}
              className="text-6xl font-bold"
            />
            <span className="text-6xl font-bold">{item.unit}</span>
          </div>
          <p className="text-sm font-light text-black">
            {t(item.translationKey)}
          </p>
        </div>
      ))}
    </div>
  );
}
