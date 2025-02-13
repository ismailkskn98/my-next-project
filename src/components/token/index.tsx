import { useTranslations } from "next-intl";
import React from "react";
import PageTitle from "../common/pageTitle";
import PieChart from "./PieChart";

export default function Token() {
  const t = useTranslations("Token");
  return (
    <main className="pageMain">
      <section className="flex flex-col items-center gap-7">
        <PageTitle title={t("pageTitle")} />
        <p className="max-w-[540px] text-center font-raleway font-semibold tracking-wide text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </section>
      <PieChart />
    </main>
  );
}
