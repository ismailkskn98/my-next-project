"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import classNames from "classnames";
import { Link, NavPaths, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export type NavItemType = {
  title: string;
  path: NavPaths;
};

export default function Navbar() {
  const t = useTranslations("Header");
  const navContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems: NavItemType[] = [
    { path: NavPaths.HOME, title: t("nav.home") },
    { path: NavPaths.ABOUT, title: t("nav.about") },
    { path: NavPaths.ROADMAP, title: t("nav.roadmap") },
    { path: NavPaths.TOKEN, title: t("nav.token") },
    { path: NavPaths.TEAM, title: t("nav.team") },
    { path: NavPaths.FAQ, title: t("nav.faq") },
    { path: NavPaths.CONTACT, title: t("nav.contact") },
  ];

  useGSAP(
    () => {
      gsap.from(".nav-item", {
        x: -50,
        y: 100,
        opacity: 0,
        stagger: {
          each: 0.1,
        },
      });
    },
    { scope: navContainerRef },
  );

  return (
    <nav
      ref={navContainerRef}
      className="hidden min-h-11 flex-1 items-center gap-2 font-raleway font-semibold lg:mx-2 lg:flex xl:mx-10"
    >
      {navItems.map((item, index) => {
        return (
          <div key={index} className="nav-item relative px-2 py-2 xl:px-3">
            <Link
              href={item.path}
              className={classNames("", {
                "rounded-sm bg-logoGold px-3 py-2 text-sm font-medium text-black backdrop-blur-sm hover:text-black xl:text-base":
                  pathname === item.path,
                "navbar-item": pathname !== item.path,
              })}
            >
              {item.title}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
