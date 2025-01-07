import { useTranslations } from "next-intl";
import React from "react";
import { MdEmail } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { Link, NavPaths } from "@/i18n/routing";

export default function FooterMain() {
  const t = useTranslations("Footer");

  const companyLinks = [
    { href: NavPaths.ABOUT, label: t("company.about") },
    { href: NavPaths.TOKEN, label: t("company.token") },
    { href: NavPaths.TEAM, label: t("company.team") },
    { href: NavPaths.BLOG, label: t("company.blog") },
  ];

  const servicesLinks = [
    { href: NavPaths.ROADMAP, label: t("services.roadMap") },
    { href: NavPaths.FAQ, label: t("services.faq") },
    { href: NavPaths.CONTACT, label: t("services.contact") },
  ];

  return (
    <section className="mx-auto flex w-full flex-col items-center justify-around gap-10 py-12 sm:w-10/12 sm:px-4 md:w-9/12 lg:w-full lg:flex-row lg:items-start lg:gap-5">
      <article className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row lg:flex-col lg:items-start">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-1">
            <span>{t("contact.city")}</span>
            <p className="text-black">{t("contact.phone")}</p>
          </div>
          <a href={`hrefto:${t("contact.email")}`}>{t("contact.email")}</a>
        </div>
        <div className="flex flex-col items-start gap-2 capitalize">
          <p>{t("workingHours.weekday")}</p>
          <p>{t("workingHours.sunday")}</p>
        </div>
      </article>
      <section className="flex w-full flex-col items-center justify-around sm:flex-row lg:justify-between lg:gap-5">
        <article className="flex flex-col items-center gap-2 capitalize">
          <h4 className="font-semibold">{t("company.title")}</h4>
          <nav className="flex flex-col items-center gap-2">
            {companyLinks.map((link, index) => (
              <Link
                key={index * Date.now()}
                href={link.href}
                className="transition-all duration-300 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </article>
        <article className="flex flex-col items-center justify-center gap-2 capitalize lg:justify-start">
          <h4 className="font-semibold">{t("services.title")}</h4>
          <nav className="flex flex-col items-center gap-2">
            {servicesLinks.map((link, index) => (
              <Link
                key={index * Date.now()}
                href={link.href}
                className="transition-all duration-300 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </article>
      </section>
      <article className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:items-end lg:flex-col lg:justify-start">
        <div className="flex flex-col gap-2">
          <p className="capitalize">{t("newsletter.title")}</p>
          <p>{t("newsletter.subtitle")}</p>
        </div>
        <a href="#" className="group flex items-center gap-2">
          <MdEmail className="text-black transition-all duration-300 group-hover:text-white" />
          <span className="transition-all duration-300 group-hover:text-black">
            {t("newsletter.emailPlaceholder")}
          </span>
          <GrSend className="text-black transition-all duration-300 group-hover:text-white" />
        </a>
      </article>
    </section>
  );
}
