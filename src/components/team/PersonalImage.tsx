import Image from "next/image";
import React from "react";

export default function PersonalImage({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  return (
    <Image
      src={src}
      alt={name}
      width={300}
      height={300}
      className="personal-image mx-auto h-full max-h-[250px] w-full max-w-[250px] rounded-lg object-cover object-center sm:max-h-[200px] sm:max-w-[200px] lg:max-h-[150px] lg:max-w-[150px] xl:max-h-[200px] xl:max-w-[200px]"
    />
  );
}
