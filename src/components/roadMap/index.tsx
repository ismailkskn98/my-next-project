"use client";

import { useTranslations } from "next-intl";
import PageTitle from "../common/pageTitle";
import HorizontalTimeline from "./HorizontalTimeline";
import VerticalTimelines from "./VerticalTimeline";
import classNames from "classnames";

export interface MilestoneItem {
  id: string;
  date: string;
  title: string;
  description: string;
  value: string;
}

export default function RoadMap({ isHome = false }: { isHome?: boolean }) {
  const t = useTranslations("RoadMap");
  const milestones: MilestoneItem[] = [
    {
      id: "1",
      date: t("milestones.0.date"), // Tarih çeviri dosyasından geliyor
      title: t("milestones.0.title"),
      description: t("milestones.0.description"),
      value: t("milestones.0.value"),
    },
    {
      id: "2",
      date: t("milestones.1.date"),
      title: t("milestones.1.title"),
      description: t("milestones.1.description"),
      value: t("milestones.1.value"),
    },
    {
      id: "3",
      date: t("milestones.2.date"),
      title: t("milestones.2.title"),
      description: t("milestones.2.description"),
      value: t("milestones.2.value"),
    },
    {
      id: "4",
      date: t("milestones.3.date"),
      title: t("milestones.3.title"),
      description: t("milestones.3.description"),
      value: t("milestones.3.value"),
    },
    {
      id: "5",
      date: t("milestones.4.date"),
      title: t("milestones.4.title"),
      description: t("milestones.4.description"),
      value: t("milestones.4.value"),
    },
    {
      id: "6",
      date: t("milestones.5.date"),
      title: t("milestones.5.title"),
      description: t("milestones.5.description"),
      value: t("milestones.5.value"),
    },
    {
      id: "7",
      date: t("milestones.6.date"),
      title: t("milestones.6.title"),
      description: t("milestones.6.description"),
      value: t("milestones.6.value"),
    },
  ];

  return (
    <main
      className={classNames("relative z-10 mb-12 mt-20 flex w-full flex-col", {
        "relative z-10 mb-12 mt-20 flex w-full flex-col gap-14 pt-16": !isHome,
        "mb:gap-0 relative z-10 mb-0 mt-9 flex w-full flex-col gap-0 pt-0 lg:mt-20 lg:gap-2":
          isHome,
      })}
    >
      <PageTitle title={t("pageTitle")} isHome={isHome} />
      <HorizontalTimeline milestones={milestones} />
      <VerticalTimelines milestones={milestones} />
    </main>
  );
}
