import Image from "next/image";
import React from "react";
import { BorderBeam } from "../ui/border-beam";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";

export default function AdvisorImage({
  linkedin,
  x,
  facebook,
  src,
  name,
}: {
  name: string;
  src: string;
  linkedin: string;
  x: string;
  facebook: string;
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
      <div className="absolute inset-0 -z-10 flex flex-col items-center justify-between bg-transparent py-4 opacity-0 transition-all duration-300 group-hover:z-10 group-hover:bg-black/40 group-hover:opacity-100">
        <Link
          target="_blank"
          href={linkedin}
          className="text-2xl text-white hover:text-[#FEC057]"
        >
          <CiLinkedin />
        </Link>
        <Link
          target="_blank"
          href={x}
          className="text-2xl text-white hover:text-[#FEC057]"
        >
          <BsTwitterX />
        </Link>
        <Link
          target="_blank"
          href={facebook}
          className="text-2xl text-white hover:text-[#FEC057]"
        >
          <FiFacebook />
        </Link>
      </div>
      <BorderBeam
        size={100}
        duration={12}
        delay={5}
        className="opacity-0 group-hover:opacity-100"
      />
    </div>
  );
}
