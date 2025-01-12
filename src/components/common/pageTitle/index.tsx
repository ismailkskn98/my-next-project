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
          className={classNames("pageTitleH2", {
            "mobileL:text-4xl mobileL:before:text-6xl mobileS:text-3xl mobileS:before:text-5xl text-3xl before:text-4xl sm:before:text-7xl md:text-4xl md:before:text-8xl lg:text-5xl lg:before:text-9xl xl:text-6xl":
              !isFaq,
            "mobileL:before:text-3xl mobilM:before:text-[27px] mobilM:text-2xl mobileS:text-xl mobileS:before:text-[22px] mobileL:text-[25px] text-base before:text-lg sm:text-4xl sm:before:text-[46px] md:before:text-[55px] lg:text-6xl lg:before:text-7xl 2xl:before:text-8xl":
              isFaq,
            "page-title": !isHome,
            "text-white": isHome,
          })}
          style={{ "--title": `"${title}"` } as React.CSSProperties}
        >
          {title}
        </h2>
      </div>
    </article>
  );
}
