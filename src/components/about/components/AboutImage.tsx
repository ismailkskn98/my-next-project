import Image from "next/image";
import React from "react";

export default function AboutImage() {
  return (
    <article className="flex h-full basis-1/3 items-center justify-center bg-black/50">
      <Image
        src="/images/about.png"
        alt="about image"
        className="h-full w-full rounded-lg object-cover object-center brightness-75 drop-shadow-2xl"
        width={400}
        height={400}
      />
    </article>
  );
}
