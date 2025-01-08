"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";

export type NavItemType = {
  title: string;
  path: string;
};

export enum NavPaths {
  HOME = "/",
  ABOUT = "/about",
  ROADMAP = "/road-map",
  TOKEN = "/token",
  TEAM = "/team",
  FAQ = "/faq",
  BLOG = "/blog",
  CONTACT = "/contact",
}

export default function Navbar() {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems = [
    { path: NavPaths.HOME, title: "Home" },
    { path: NavPaths.ABOUT, title: "About" },
    { path: NavPaths.ROADMAP, title: "Roadmap" },
    { path: NavPaths.TOKEN, title: "Token" },
    { path: NavPaths.TEAM, title: "Team" },
    { path: NavPaths.FAQ, title: "FAQ" },
    { path: NavPaths.BLOG, title: "Blog" },
    { path: NavPaths.CONTACT, title: "Contact" },
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
      className="hidden min-h-11 flex-1 items-center gap-5 font-raleway font-semibold lg:mx-3 lg:flex xl:mx-10"
    >
      {navItems.map((item, index) => {
        return (
          <div key={index} className="nav-item relative px-3 py-2">
            <Link
              href={item.path}
              className={classNames("navbar-item", {
                "bg-black/20 backdrop-blur": pathname === "tr/" + item.path,
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
