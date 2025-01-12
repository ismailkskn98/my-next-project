import ProgressBar from "./ProgressBar";
import Header from "./Header";
import Counter from "./Counter";
import CardButton from "./CardButton";
import { useTranslations } from "next-intl";

export default function Card() {
  const t = useTranslations("Home");
  return (
    <article className="flex w-full flex-col items-center gap-6 overflow-hidden rounded-md px-4 py-6 text-white sm:gap-10 sm:px-14 sm:py-10 lg:px-8">
      <Header />
      <Counter />
      <div className="text-center text-xs font-semibold text-white/80 sm:text-sm">
        {t("card.clockStopped")}
      </div>
      <ProgressBar />
      <CardButton label={t("card.buyTokens")} />
    </article>
  );
}
