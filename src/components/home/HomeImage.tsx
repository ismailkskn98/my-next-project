"use client";

import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useGsap } from "./use-gsap";
import MobilContact from "./MobilContact";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HomeImage() {
  const { elementRef, animate, reset } = useGsap({
    x: 1,
    y: 1,
    rotation: 1.5,
    scale: 0.002,
    duration: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      animate(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      reset();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animate, reset]);

  useGSAP(() => {
    gsap.from(elementRef.current, {
      x: -500,
      opacity: 0,
      duration: 0.8,
      rotation: -360,
    });
  });

  return (
    <section className="mx-auto flex flex-col items-center justify-center lg:mx-0 lg:gap-10">
      <article className="hidden h-min w-min lg:block">
        <Image
          alt="c1coin logo"
          src="/images/logo.png"
          width={380}
          height={380}
          quality={100}
          priority
          className="xl-max-w-[380px] drop-shadow-2xl h-auto shadow-[#EAC04A] lg:max-h-[350px] lg:max-w-[350px] xl:max-h-[380px]"
          ref={elementRef}
        />
      </article>
      <MobilContact />
    </section>
  );
}
