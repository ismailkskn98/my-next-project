import AboutImage from "./components/AboutImage";
import AboutContent from "./components/AboutContent";
import PageTitle from "../common/pageTitle";
import { useTranslations } from "next-intl";

import Stats from "./components/Stats";

export default function About() {
  const t = useTranslations("About");
  return (
    <main className="relative z-10 mb-4 mt-16 flex w-full flex-col gap-20 pb-12 pt-16 md:mb-14">
      <PageTitle title={t("pageTitle")} />
      <section className="mx-auto flex w-full flex-col items-center justify-center gap-3 py-8 text-white lg:flex-row 2xl:w-10/12">
        <AboutContent />
        <AboutImage />
      </section>
      <Stats />
    </main>
  );
}
