import React from "react";
import AdvisorImage from "./AdvisorImage";

export default function AdvisorsItem({
  name,
  src,
  job,
}: {
  name: string;
  src: string;
  job: string;
}) {
  return (
    <article className="mx-auto flex max-h-[310px] max-w-[290px] flex-col items-center justify-between gap-3">
      <AdvisorImage linkedin="#" x="#" facebook="#" name={name} src={src} />
      <div className="flex flex-col items-center gap-1">
        <h4 className="text-center font-raleway text-2xl font-bold uppercase">
          {name}
        </h4>
        <p className="text-center text-white/60">{job}</p>
      </div>
    </article>
  );
}
