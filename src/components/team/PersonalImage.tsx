import Image from "next/image";
import React from "react";
import { BorderBeam } from "../ui/border-beam";

export default function PersonalImage({
  name,
  job = "İş",
  src,
}: {
  name: string;
  job: string;
  src: string;
}) {
  return (
    <div className="personal-image group relative mx-auto h-full max-h-[250px] w-full max-w-[250px] overflow-hidden rounded-lg sm:max-h-[200px] sm:max-w-[200px] lg:max-h-[150px] lg:max-w-[150px] xl:max-h-[200px] xl:max-w-[200px]">
      <Image
        src={src}
        alt={name}
        width={300}
        height={300}
        className="h-full max-h-[250px] w-full max-w-[250px] rounded-lg object-cover object-center sm:max-h-[200px] sm:max-w-[200px] lg:max-h-[150px] lg:max-w-[150px] xl:max-h-[200px] xl:max-w-[200px]"
      />
      <div className="absolute inset-x-0 -bottom-16 z-10 flex h-16 flex-col items-center justify-center gap-4 rounded-bl-lg rounded-br-lg bg-black/30 capitalize transition-all duration-300 group-hover:bottom-0">
        <span className="absolute -translate-y-72 transition-all duration-300 group-hover:-translate-y-3">
          {name}
        </span>
        <span className="absolute translate-y-72 transition-all duration-300 group-hover:translate-y-3">
          {job}
        </span>
      </div>
      <BorderBeam
        size={100}
        duration={12}
        delay={9}
        className="opacity-0 group-hover:opacity-100"
      />
    </div>
  );
}
