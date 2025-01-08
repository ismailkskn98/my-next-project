import React from "react";
import PersonalImage from "./PersonalImage";

export default function AdvisorsItem({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  return (
    <article className="mx-auto flex max-h-[310px] max-w-[290px] flex-col items-center justify-between gap-3">
      <PersonalImage name={name} src={src} />
      <div className="flex flex-col items-center gap-1">
        <h4 className="text-center font-raleway text-2xl font-bold uppercase">
          jhon doe
        </h4>
        <p className="text-center text-white/60">Bitcoin Expert</p>
      </div>
    </article>
  );
}
