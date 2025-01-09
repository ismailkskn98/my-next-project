import React from "react";

import HomeImage from "./HomeImage";
import RoadMap from "../roadMap";
import HomeRightCard from "./HomeRightCard";
import Stats from "../about/components/Stats";
import PageTitle from "../common/pageTitle";

export default function Home() {
  return (
    <main className="fluid gridContainer mt-24 w-full">
      <section className="relative z-10 mx-auto mb-24 flex w-full flex-col items-start justify-center gap-3 px-1 sm:px-4 md:px-0 lg:w-11/12 lg:flex-row lg:justify-between">
        <HomeImage />
        <HomeRightCard />
      </section>
      <RoadMap isHome={true} />
      <section className="fluid gridContainer relative z-10 mb-8 mt-14 min-h-[300px] place-items-center items-center pb-5 lg:min-h-[450px]">
        <div className="fluid bg-homeStatsBg absolute -inset-28 -z-20 bg-cover bg-center bg-no-repeat opacity-5"></div>
        <article className="row-span-3 flex w-full flex-col items-center gap-10">
          <PageTitle title="Stats" />
          <Stats isHome={true} />
        </article>
      </section>
    </main>
  );
}
