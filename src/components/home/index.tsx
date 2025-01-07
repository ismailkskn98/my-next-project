import React from "react";
import Card from "./Card";
import styles from "./styles.module.css";
import HomeImage from "./HomeImage";

export default function Home() {
  return (
    <main className="relative z-20 mx-auto flex w-full flex-col items-start justify-center gap-3 px-4 py-16 md:px-0 lg:w-11/12 lg:flex-row lg:justify-between">
      <HomeImage />
      <article className="relative rounded-xl bg-white/40 px-6 py-10">
        <div
          className={`${styles.cardBgTop} absolute bottom-0 left-0 h-20 w-full`}
        ></div>
        <div
          className={`${styles.cardBgBottom} absolute left-0 top-0 h-20 w-full`}
        ></div>
        <div
          className={`${styles.cardBgLeft} absolute bottom-0 left-0 top-0 w-20`}
        ></div>
        <div
          className={`${styles.cardBgRight} absolute bottom-0 right-0 top-0 w-20`}
        ></div>
        <Card />
      </article>
    </main>
  );
}
