import AboutContent from "./components/AboutContent";
import PageTitle from "../common/pageTitle";
import { useTranslations } from "next-intl";

import Stats from "./components/Stats";

export default function About() {
  const t = useTranslations("About");

  return (
    <main className="pageMain">
      <PageTitle title={t("pageTitle")} />
      <section className="mx-auto flex w-full pt-8 text-white 2xl:w-10/12">
        <AboutContent />
      </section>
      <Stats />
    </main>
  );
}
