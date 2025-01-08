"use client";
import React from "react";
import PersonalImage from "./PersonalImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function PersonalImages() {
  const PersonalContainerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".personal-image", {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.2,
      });
    },
    { scope: PersonalContainerRef },
  );

  return (
    <>
      <article
        ref={PersonalContainerRef}
        className="hidden w-full grid-cols-2 gap-10 sm:grid xl:grid-cols-3"
      >
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />

        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />

        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
      </article>
      <article className="grid w-full grid-cols-1 gap-y-5 sm:hidden">
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />

        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />

        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
      </article>
    </>
  );
}
