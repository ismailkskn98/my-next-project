import React from "react";
import PersonalImages from "./PersonalImages";
import Advisors from "./Advisors";

export default function TeamMain() {
  return (
    <section className="mx-auto mb-10 flex w-full flex-col items-start justify-center gap-16 py-14 text-white lg:flex-row lg:justify-between lg:gap-9">
      <article className="flex h-full flex-col items-start justify-center gap-5 xl:justify-between">
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="font-raleway text-3xl font-extrabold uppercase">
              Who are we
            </h3>
            <p className="relative ml-4 text-teal-600 before:absolute before:-left-4 before:top-1/2 before:h-[2px] before:w-[10px] before:translate-y-[-50%] before:bg-white/70 before:content-['']">
              Meet the Entire Team
            </p>
          </div>
          <p className="basis-1/3 text-center lg:text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            quae nesciunt officia! Autem, nam eum voluptatem, esse voluptatibus
            deleniti tempora laboriosam sequi pariatur, explicabo itaque.
          </p>
        </div>
        <Advisors />
      </article>
      <PersonalImages />
    </section>
  );
}
