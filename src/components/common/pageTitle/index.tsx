import React from "react";

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <article className="flex w-full items-center justify-center">
      <h2
        className="relative text-nowrap font-raleway text-2xl font-bold text-white before:absolute before:left-1/2 before:top-1/4 before:-translate-x-1/2 before:-translate-y-1/2 before:font-raleway before:text-6xl before:font-extrabold before:text-black/10 before:content-[var(--title)] sm:text-3xl sm:before:text-7xl md:text-4xl md:before:text-8xl lg:text-5xl lg:before:text-9xl xl:text-6xl xl:before:text-[10rem]"
        style={{ "--title": `"${title}"` } as React.CSSProperties}
      >
        {title}
      </h2>
    </article>
  );
}
