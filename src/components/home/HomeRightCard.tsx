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
      x: 500,
      opacity: 0,
      duration: 0.8,
    });
  });
  return (
    <article
      ref={elementRef}
      className="relative mx-auto w-full max-w-[330px] rounded-xl bg-black/30 px-1 py-10 sm:max-w-[566px] sm:px-6 lg:mx-0"
    >
      <div
        className={`${styles.cardBgTop} absolute bottom-0 left-0 h-20 w-full rounded-lg`}
      ></div>
      <div
        className={`${styles.cardBgBottom} absolute left-0 top-0 h-20 w-full rounded-lg`}
      ></div>
      <div
        className={`${styles.cardBgLeft} absolute bottom-0 left-0 top-0 w-20 rounded-lg`}
      ></div>
      <div
        className={`${styles.cardBgRight} absolute bottom-0 right-0 top-0 w-20 rounded-lg`}
      ></div>
      <Card />
    </article>
  );
}
