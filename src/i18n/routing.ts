import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

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

export const routing = defineRouting({
  // Desteklenen diller
  locales: ["en", "tr"] as const,

  // Varsayılan dil
  defaultLocale: "en",

  // Yollar ve her dildeki karşılıkları
  pathnames: {
    [NavPaths.HOME]: {
      en: "/", // İngilizce için
      tr: "/", // Türkçe için
    }, // Anasayfa, her iki dilde de aynı yol
    "/about": {
      en: "/about", // İngilizce için
      tr: "/about", // Türkçe için
    },
    [NavPaths.BLOG]: {
      en: "/blog",
      tr: "/blog", // Eğer Türkçede de aynı yol kullanılacaksa
    },
    [NavPaths.CONTACT]: {
      en: "/contact",
      tr: "/contact", // Eğer Türkçede de aynı yol kullanılacaksa
    },
    [NavPaths.FAQ]: {
      en: "/faq",
      tr: "/faq", // Eğer Türkçede de aynı yol kullanılacaksa
    },
    [NavPaths.ROADMAP]: {
      en: "/road-map",
      tr: "/road-map", // Eğer Türkçede de aynı yol kullanılacaksa
    },
    [NavPaths.TEAM]: {
      en: "/team",
      tr: "/team", // Eğer Türkçede de aynı yol kullanılacaksa
    },
    [NavPaths.TOKEN]: {
      en: "/token",
      tr: "/token", // Eğer Türkçede de aynı yol kullanılacaksa
    },
  },
});

export type Locale = (typeof routing.locales)[number];
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
