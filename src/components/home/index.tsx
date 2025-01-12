import React from "react";

import HomeImage from "./HomeImage";
import RoadMap from "../roadMap";
import HomeRightCard from "./HomeRightCard";
import Stats from "../about/components/Stats";
import PageTitle from "../common/pageTitle";
import FaqMain from "../faq/FaqMain";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="fluid gridContainer mt-9 w-full sm:mt-14 lg:mt-16">
      <section className="relative z-10 mx-auto mb-24 flex w-full flex-col items-start justify-center gap-16 px-1 sm:px-4 md:px-0 lg:flex-row lg:justify-between lg:gap-3 xl:w-11/12">
        <HomeImage />
        <HomeRightCard />
      </section>
      <RoadMap isHome={true} />
      <section className="fluid gridContainer relative z-10 mb-8 mt-14 min-h-[320px] place-items-center items-center pb-5 lg:min-h-[450px] lg:py-28">
        <div className="fluid absolute -inset-24 -z-20 bg-homeStatsBg bg-cover bg-center bg-no-repeat opacity-10 lg:inset-1"></div>
        <article className="row-span-3 flex w-full flex-col items-center gap-20 lg:gap-28">
          <PageTitle title={t("stats")} isHome={true} />
          <Stats isHome={true} />
        </article>
      </section>
      <section className="relative z-10 mx-auto mb-16 mt-14 flex w-full flex-col items-center justify-center gap-16 lg:w-9/12">
        <PageTitle isFaq={true} title={t("faq")} isHome={true} />
        <FaqMain isHome={true} />
      </section>
    </main>
  );
}
