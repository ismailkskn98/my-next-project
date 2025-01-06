"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Logo() {
  const navLogoRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.from(navLogoRef.current, {
      opacity: 0,
      x: -100,
      duration: 0.5,
    });
  });
  return (
    <article className="relative">
      <Link href="/">
        <Image
          ref={navLogoRef}
          width={70}
          height={70}
          quality={100}
          priority
          src="/images/logo.png"
          alt="c1coin logo"
          className="relative size-16 2xl:max-h-16"
        />
      </Link>
    </article>
  );
}
