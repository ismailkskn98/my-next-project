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
      <div className="flex w-full flex-col items-start gap-2 lg:w-10/12">
        <h1
          className={`relative text-2xl font-semibold after:absolute after:-right-5 after:top-0 after:rotate-12 after:font-raleway after:font-extrabold after:text-logoGold after:content-['?'] sm:text-3xl md:text-4xl`}
        >
          {t("title")}
        </h1>
        <p className="mobileL:text-sm text-xs font-semibold text-logoGold lg:text-base">
          {t("subtitle")}
        </p>
      </div>
      <div className="flex w-full flex-col items-start gap-10 lg:w-10/12">
        <p className="mobileM:text-sm text-xs font-medium leading-6 lg:text-base">
          {t("description")}
        </p>
        <div className="flex w-full flex-col items-start gap-8 lg:w-10/12">
          <h2 className="relative text-2xl font-medium uppercase after:absolute after:-right-5 after:top-0 after:rotate-12 after:font-raleway after:font-extrabold after:text-logoGold after:content-['?'] sm:text-3xl md:text-4xl">
            {t("whyc1Coin.title")}
          </h2>
          <div className="flex flex-col items-start gap-3">
            {whyc1CoinItems.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-2">
                <h4 className="mobileS:text-lg mobileS:after:-top-[3px] relative text-nowrap text-base font-semibold after:absolute after:-right-2 after:-top-[5px] after:font-raleway after:text-2xl after:font-extrabold after:text-logoGold after:content-[':']">
                  {item.title}
                </h4>
                <p className="mobileM:text-sm text-xs leading-6 lg:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <CardButton label={t("buyTokens")} />
      </div>
    </article>
  );
}
