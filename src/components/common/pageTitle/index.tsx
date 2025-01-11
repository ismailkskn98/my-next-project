"use client";
import { useGSAP } from "@gsap/react";
import classNames from "classnames";
import gsap from "gsap";
import React from "react";

type PageTitleProps = {
  title: string;
  isFaq?: boolean;
  isHome?: boolean;
};

export default function PageTitle({ title, isFaq, isHome }: PageTitleProps) {
  useGSAP(() => {
    gsap.from(".page-title", {
      opacity: 0,
      y: -100,
      duration: 0.8,
    });
  });

  return (
    <article className="flex w-full items-center justify-center">
      <div className="relative flex w-full items-center justify-center">
        <h2
          className={classNames(
            "relative z-10 text-nowrap font-raleway font-extrabold text-white before:absolute before:left-1/2 before:top-1/4 before:-z-10 before:-translate-x-1/2 before:-translate-y-1/2 before:font-raleway before:font-extrabold before:text-logoGold/10 before:content-[var(--title)] after:absolute after:-bottom-3 after:left-1/2 after:h-[2px] after:w-20 after:-translate-x-1/2 after:bg-logoGold after:content-['']",
            {
              "text-4xl before:text-6xl sm:before:text-7xl md:text-4xl md:before:text-8xl lg:text-5xl lg:before:text-9xl xl:text-6xl":
                !isFaq,
              "text-3xl before:text-3xl sm:before:text-5xl md:before:text-6xl xl:before:text-8xl":
                isFaq,
              "page-title": !isHome,
              "text-white": isHome,
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
