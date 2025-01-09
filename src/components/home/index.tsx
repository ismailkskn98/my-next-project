import React from "react";

import HomeImage from "./HomeImage";
import RoadMap from "../roadMap";
import HomeRightCard from "./HomeRightCard";
import Stats from "../about/components/Stats";
import PageTitle from "../common/pageTitle";

export default function Home() {
  return (
    <main className="z-10 mx-auto mb-28 mt-20 flex w-full flex-col gap-10 sm:gap-20 lg:w-11/12 lg:gap-28">
      <section className="relative z-10 flex w-full flex-col items-start justify-center gap-3 px-1 sm:px-4 md:px-0 lg:flex-row lg:justify-between">
        <HomeImage />
        <HomeRightCard />
      </section>
      <RoadMap isHome={true} />
      <section className="mb-8 mt-14 flex flex-col items-center gap-10 pb-5">
        <PageTitle title="Stats" />
        <Stats isHome={true} />
      </section>
    </main>
  );
}
