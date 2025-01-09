import Image from "next/image";
import React from "react";

export default function AboutImage() {
  return (
    <article className="flex h-full basis-1/3 items-center justify-center bg-black/50">
      <Image
        src="/images/570x570.jpg"
        alt="about image"
        className="h-auto w-auto rounded-lg brightness-75 drop-shadow-2xl"
        width={500}
        height={500}
      />
    </article>
  );
}
