import React from "react";
import PageTitle from "../common/pageTitle";
import { useTranslations } from "next-intl";
import ContactMain from "./ContactMain";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <main className="pageMain !mb-16">
      <section className="flex flex-col items-center gap-7">
        <PageTitle title={t("pageTitle")} />
        <p className="max-w-[700px] text-center font-raleway font-semibold tracking-wide text-white/80">
          {t("pageSubtitle")}
        </p>
      </section>
      <ContactMain />
    </main>
  );
}
