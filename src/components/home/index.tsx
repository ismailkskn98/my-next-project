import React from "react";

import HomeImage from "./HomeImage";
import RoadMap from "../roadMap";
import HomeRightCard from "./HomeRightCard";
import Stats from "../about/components/Stats";
import PageTitle from "../common/pageTitle";

export default function Home() {
  return (
    <main className="z-10 mx-auto mb-28 mt-10 flex w-full flex-col gap-5 lg:w-11/12">
      <section className="relative z-10 flex w-full flex-col items-start justify-center gap-3 px-4 py-16 md:px-0 lg:flex-row lg:justify-between">
        <HomeImage />
        <HomeRightCard />
      </section>
      <RoadMap />
      <section className="mb-8 mt-14 flex flex-col items-center gap-24 pb-5">
        <PageTitle title="Stats" />
        <Stats />
      </section>
    </main>
  );
}
