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
      duration: 0.8,
    });
  });
  return (
    <article
      ref={elementRef}
      className="mobileL:px-10 relative mx-auto w-full overflow-hidden rounded-xl bg-black/70 px-4 py-10 sm:max-w-[566px] md:bg-black/25 lg:mx-0 lg:px-4 2xl:px-7"
    >
      <div
        className={`${styles.cardBgTop} mobileM:top-0 absolute -top-1 left-0 h-20 w-full rounded-lg`}
      ></div>
      <div
        className={`${styles.cardBgBottom} absolute bottom-0 left-0 h-20 w-full rounded-lg`}
      ></div>
      <div
        className={`${styles.cardBgLeft} mobileM:left-0 absolute -left-2 bottom-0 top-0 w-20 rounded-lg`}
      ></div>
      <div
        className={`${styles.cardBgRight} mobileM:right-0 absolute -right-2 bottom-0 top-0 w-20 rounded-lg`}
      ></div>
      <Card />
    </article>
  );
}
