import React from "react";
import PageTitle from "../common/pageTitle";
import { useTranslations } from "next-intl";
import ContactMain from "./ContactMain";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <main className="relative z-10 mx-auto mb-4 mt-14 flex w-full flex-col gap-8 px-4 pt-8 sm:gap-12 sm:px-8 sm:pt-12 md:mb-14 md:gap-16 md:pt-14 lg:mt-16 lg:w-11/12 lg:gap-20 lg:pt-16">
      <section className="flex flex-col items-center gap-7">
        <PageTitle title={t("pageTitle")} />
        <p className="max-w-[540px] text-center font-raleway font-semibold tracking-wide text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </section>
      <ContactMain />
    </main>
  );
}
