import React from "react";
import PageTitle from "../common/pageTitle";
import { useTranslations } from "next-intl";
import TeamMain from "./TeamMain";

export default function Team() {
  const t = useTranslations("Team");
  return (
    <main className="pageMain">
      <section className="flex flex-col items-center gap-7">
        <PageTitle title={t("pageTitle")} />
        <p className="max-w-[540px] text-center font-raleway font-semibold tracking-wide text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </section>
      <TeamMain />
    </main>
  );
}
