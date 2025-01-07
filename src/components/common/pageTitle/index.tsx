import React from "react";

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <article className="flex w-full items-center justify-center">
      <h2
        className="font-raleway before:font-raleway relative text-nowrap text-4xl font-bold text-white before:absolute before:left-1/2 before:top-1/4 before:-translate-x-1/2 before:-translate-y-1/2 before:text-8xl before:font-extrabold before:text-black/10 before:content-[var(--title)]"
        style={{ "--title": `"${title}"` } as React.CSSProperties}
      >
        {title}
      </h2>
    </article>
  );
}
