"use client";

import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useGsap } from "./use-gsap";
import MobilContact from "./MobilContact";

export default function HomeImage() {
  const { elementRef, animate, reset } = useGsap({
    x: 0.3,
    y: 0.3,
    rotation: 0.9,
    scale: 0.001,
    duration: 0.6,
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

  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <article className="hidden lg:block">
        <Image
          alt="c1coin logo"
          src="/images/logo.png"
          width={400}
          height={400}
          quality={100}
          priority
          className="h-auto max-h-[400px] drop-shadow-2xl"
          ref={elementRef}
        />
      </article>
      <MobilContact />
    </section>
  );
}
