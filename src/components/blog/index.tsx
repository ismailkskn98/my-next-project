import React from "react";
import PageTitle from "../common/pageTitle";
import { useTranslations } from "next-intl";
import BlogCards from "./BlogCards";

export default function Blog() {
  const t = useTranslations("Blog");
  return (
    <main className="relative z-10 mx-auto mb-24 flex w-full flex-col gap-20 pt-16 lg:w-11/12">
      <section className="flex flex-col items-center gap-7">
        <PageTitle title={t("pageTitle")} />
        <p className="max-w-[540px] text-center font-raleway font-semibold tracking-wide text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </section>
      <BlogCards />
    </main>
  );
}
