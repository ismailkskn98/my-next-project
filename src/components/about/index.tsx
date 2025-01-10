import AboutContent from "./components/AboutContent";
import PageTitle from "../common/pageTitle";
import { useTranslations } from "next-intl";

import Stats from "./components/Stats";

export default function About() {
  const t = useTranslations("About");
  return (
    <main className="relative z-10 mb-4 mt-2 flex w-full flex-col gap-8 pb-12 pt-16 md:mb-14 md:mt-16 md:gap-20">
      <PageTitle title={t("pageTitle")} />
      <section className="mx-auto flex w-full pt-8 text-white 2xl:w-10/12">
        <AboutContent />
      </section>
      <Stats />
    </main>
  );
}
