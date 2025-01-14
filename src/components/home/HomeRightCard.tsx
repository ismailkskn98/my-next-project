"use client";
import React, { useRef } from "react";
import Card from "./Card";
import styles from "./styles.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HomeRightCard() {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(elementRef.current, {
      y: 500,
      opacity: 0,
      duration: 0.5,
    });
  });
  return (
    <article
      ref={elementRef}
      className="relative mx-auto w-full overflow-hidden rounded-xl bg-black/70 px-4 py-10 mobileL:px-10 sm:max-w-[566px] md:bg-black/25 lg:mx-0 lg:px-4 2xl:px-7"
    >
      <div
        className={`${styles.cardBgTop} absolute -top-1 left-0 h-20 w-full rounded-lg mobileM:top-0`}
      ></div>
      <div
        className={`${styles.cardBgBottom} absolute bottom-0 left-0 h-20 w-full rounded-lg`}
      ></div>
      <div
        className={`${styles.cardBgLeft} absolute -left-2 bottom-0 top-0 w-20 rounded-lg mobileM:left-0`}
      ></div>
      <div
        className={`${styles.cardBgRight} absolute -right-2 bottom-0 top-0 w-20 rounded-lg mobileM:right-0`}
      ></div>
      <Card />
    </article>
  );
}
