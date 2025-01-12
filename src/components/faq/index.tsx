import { useTranslations } from "next-intl";
import PageTitle from "../common/pageTitle";
import FaqMain from "./FaqMain";

export default function Faq() {
  const t = useTranslations("FAQ");
  return (
    <main className="pageMain">
      <section className="flex flex-col items-center gap-7">
        <PageTitle title={t("pageTitle")} isFaq={true} />
        <p className="max-w-[540px] text-center font-raleway font-semibold tracking-wide text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </section>
      <FaqMain isHome={false} />
    </main>
  );
}
