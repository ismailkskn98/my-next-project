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
        <h1
          className={`relative text-3xl font-semibold after:absolute after:-right-5 after:top-0 after:rotate-12 after:font-raleway after:font-extrabold after:text-logoGold after:content-['?'] md:text-4xl`}
        >
          {t("title")}
        </h1>
        <p className="font-semibold text-logoGold">{t("subtitle")}</p>
      </div>
      <div className="flex w-10/12 flex-col items-start gap-10">
        <p className="font-medium leading-7">{t("description")}</p>
        <div className="flex w-10/12 flex-col items-start gap-8">
          <h2 className="relative text-4xl font-medium uppercase after:absolute after:-right-5 after:top-0 after:rotate-12 after:font-raleway after:font-extrabold after:text-logoGold after:content-['?']">
            {t("whyc1Coin.title")}
          </h2>
          <div className="flex flex-col items-start gap-3">
            {whyc1CoinItems.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-2">
                <h4 className="relative text-lg font-semibold after:absolute after:-right-2 after:-top-[3px] after:font-raleway after:text-2xl after:font-extrabold after:text-logoGold after:content-[':']">
                  {item.title}
                </h4>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <CardButton label={t("buyTokens")} />
      </div>
    </article>
  );
}
