import React from "react";
import PersonalImage from "./PersonalImage";

export default function TeamMain() {
  return (
    <section className="mx-auto mb-10 flex w-full flex-col items-center justify-center gap-16 py-14 text-white lg:flex-row lg:justify-between lg:gap-0">
      <article className="flex flex-col items-start gap-3">
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-raleway text-3xl font-extrabold uppercase">
            Who are we
          </h3>
          <p className="relative ml-4 text-teal-600 before:absolute before:-left-4 before:top-1/2 before:h-[2px] before:w-[10px] before:translate-y-[-50%] before:bg-white/70 before:content-['']">
            Meet the Entire Team
          </p>
        </div>
        <p className="max-w-[350px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          quae nesciunt officia! Autem, nam eum voluptatem, esse voluptatibus
          deleniti tempora laboriosam sequi pariatur, explicabo itaque.
        </p>
      </article>
      <article className="hidden flex-1 rotate-0 flex-col items-center gap-8 sm:flex lg:-rotate-45 lg:gap-5">
        {/* <article className="hidden flex-1 flex-col items-center gap-5 px-4 sm:flex"> */}
        <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
          <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
          <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
          <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-center">
          <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
          <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
          <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-end">
          <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
          <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
          <PersonalImage src="/images/dummy-200x200.png" name="Kişi ismi" />
        </div>
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
    </section>
  );
}
