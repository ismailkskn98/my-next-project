import Image from "next/image";
import React from "react";

export default function AboutImage() {
  return (
    <article className="flex h-full items-center justify-center bg-red-400">
      <Image
        src="/images/team.png"
        alt="about image"
        className="h-auto w-auto drop-shadow-2xl"
        width={450}
        height={500}
      />
    </article>
  );
}
