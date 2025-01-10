import React from "react";
import { useTranslations } from "next-intl";
import CardButton from "@/components/home/CardButton";

export default function AboutContent() {
  const t = useTranslations("About");

  const whyc1CoinItems = [
    {
      title: t("whyc1Coin.content.comprehensiveCoverage.title"),
      description: t("whyc1Coin.content.comprehensiveCoverage.description"),
    },
    {
      title: t("whyc1Coin.content.engagingExperience.title"),
      description: t("whyc1Coin.content.engagingExperience.description"),
    },
    {
      title: t("whyc1Coin.content.understandability.title"),
      description: t("whyc1Coin.content.understandability.description"),
    },
    {
      title: t("whyc1Coin.content.reliability.title"),
      description: t("whyc1Coin.content.reliability.description"),
    },
  ];

  return (
    <article className="flex w-full flex-col items-center gap-10 lg:items-start">
      <div className="flex w-10/12 flex-col items-start gap-2">
        <h1 className={`relative text-3xl font-semibold md:text-4xl`}>
          {t("title")}
        </h1>
        <p className="font-semibold text-white/70">{t("subtitle")}</p>
      </div>
      <div className="flex w-10/12 flex-col items-start gap-10">
        <p className="font-medium leading-7">{t("description")}</p>
        <div className="flex w-10/12 flex-col items-start gap-8">
          <h2 className="text-4xl font-medium uppercase">
            {t("whyc1Coin.title")}
          </h2>
          <div className="flex flex-col items-start gap-3">
            {whyc1CoinItems.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-2">
                <h4 className="text-lg font-semibold">{item.title}:</h4>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <CardButton label={t("buyTokens")} />
        <div
          className={`min-h-5 w-1/2 self-center rounded-xl border-b-8 border-solid border-black/50 shadow-xl`}
        ></div>
      </div>
    </article>
  );
}
