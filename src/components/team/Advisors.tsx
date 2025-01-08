import React from "react";
import AdvisorsItem from "./AdvisorsItem";

export default function Advisors() {
  return (
    <section className="mx-auto flex w-full flex-col gap-16 px-4 text-white sm:px-8 lg:w-10/12">
      <h2 className="w-full text-center text-3xl font-extrabold sm:text-4xl">
        Advisors
      </h2>
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <AdvisorsItem name="Kişi İsmi" src="/images/570x570.jpg" />
        <AdvisorsItem name="Kişi İsmi" src="/images/570x570.jpg" />
        <AdvisorsItem name="Kişi İsmi" src="/images/570x570.jpg" />
        <AdvisorsItem name="Kişi İsmi" src="/images/570x570.jpg" />
      </div>
    </section>
  );
}
