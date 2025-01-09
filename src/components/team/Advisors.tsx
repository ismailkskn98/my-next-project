import React from "react";
import AdvisorsItem from "./AdvisorsItem";

export default function Advisors() {
  return (
    <section className="flex w-full flex-col gap-16 text-white">
      <h2 className="mt-4 w-full text-center text-3xl font-extrabold sm:text-4xl lg:mt-0 lg:text-start">
        Advisors
      </h2>
      <div className="mx-auto grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <AdvisorsItem job="İş" name="Kişi İsmi" src="/images/570x570.jpg" />
        <AdvisorsItem job="İş" name="Kişi İsmi" src="/images/570x570.jpg" />
        <AdvisorsItem job="İş" name="Kişi İsmi" src="/images/570x570.jpg" />
        <AdvisorsItem job="İş" name="Kişi İsmi" src="/images/570x570.jpg" />
      </div>
    </section>
  );
}
