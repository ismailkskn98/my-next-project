"use client";
import { useGSAP } from "@gsap/react";
import classNames from "classnames";
import gsap from "gsap";
import React from "react";

type PageTitleProps = {
  title: string;
  isFaq?: boolean;
};

export default function PageTitle({ title, isFaq }: PageTitleProps) {
  useGSAP(() => {
    gsap.from(".page-title", {
      // opacity: 0,
      y: -100,
      duration: 0.8,
    });
  });

  return (
    <article className="flex w-full items-center justify-center">
      <div className="relative flex w-full items-center justify-center">
        <h2
          className={classNames(
            "page-title relative text-nowrap font-raleway text-2xl font-bold text-white before:absolute before:left-1/2 before:top-1/4 before:-translate-x-1/2 before:-translate-y-1/2 before:font-raleway before:text-6xl before:font-extrabold before:text-white/10 before:content-[var(--title)] after:absolute after:-bottom-3 after:left-1/2 after:h-[2px] after:w-20 after:-translate-x-1/2 after:bg-white/70 after:content-[''] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
            {
              "sm:before:text-7xl md:before:text-8xl lg:before:text-9xl":
                !isFaq,
              "before:text-2xl sm:before:text-5xl md:before:text-6xl xl:before:text-8xl":
                isFaq,
            },
          )}
          style={{ "--title": `"${title}"` } as React.CSSProperties}
        >
          {title}
        </h2>
      </div>
    </article>
  );
}
