import { useTranslations } from "next-intl";
import React from "react";
import PageTitle from "../common/pageTitle";
import PieChart from "./PieChart";

export default function Token() {
  const t = useTranslations("Token");
  return (
    <main className="relative z-20 mb-12 flex w-full flex-col gap-20 pt-16">
      <section className="flex flex-col items-center gap-7">
        <PageTitle title={t("pageTitle")} />
        <p className="font-raleway max-w-[540px] text-center font-semibold tracking-wide text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </section>
      <PieChart />
    </main>
  );
}
