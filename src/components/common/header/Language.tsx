"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useRef, useTransition } from "react";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import classNames from "classnames";

export default function Language({ isAuth = false }: { isAuth: boolean }) {
  const languageSelectRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations("Header");

  useGSAP(() => {
    if (!isAuth) {
      gsap.from(languageSelectRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.5,
      });
    }
  });

  return (
    <article
      ref={languageSelectRef}
      className="flex max-w-28 items-center justify-end gap-3 font-raleway font-semibold"
    >
      <Select
        defaultValue={locale}
        onValueChange={(value) => {
          const nextLocale = value as Locale;
          startTransition(() => {
            router.replace(
              // @ts-expect-error -- TypeScript will validate that only known `params`
              // are used in combination with a given `pathname`. Since the two will
              // always match for the current route, we can skip runtime checks.
              { pathname, params },
              { locale: nextLocale },
            );
          });
        }}
      >
        <SelectTrigger
          className={classNames(
            "justify-between gap-2 border-none text-xs shadow-none outline-none lg:text-base xl:gap-4",
            {
              "text-white": !isAuth,
              "text-black": isAuth,
            },
          )}
        >
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent className="max-h-[200px] !overflow-visible overflow-y-auto border-logoGold bg-black/50 backdrop-blur-sm">
          <SelectGroup>
            <SelectLabel className="pointer-events-none mb-2 text-center text-sm text-gray-400">
              {t("language")}
            </SelectLabel>
            <SelectItem value="en" className="text-white">
              <div className="flex items-center gap-1 text-sm lg:text-base xl:gap-2">
                <Image
                  src={"/images/ingilizce.jpg"}
                  alt="english"
                  width={30}
                  height={30}
                  className="h-5 w-5 rounded-full border border-solid border-logoGold-100 object-cover object-center lg:h-6 lg:w-6"
                />
                <span>EN</span>
              </div>
            </SelectItem>
            <SelectItem
              value="tr"
              className="text-white transition-all duration-200 hover:bg-logoGold"
            >
              <div className="flex items-center gap-1 text-sm lg:text-base xl:gap-2">
                <Image
                  src={"/images/turkce.jpg"}
                  alt="türkçe"
                  width={20}
                  height={20}
                  quality={100}
                  className="h-5 w-5 rounded-full border border-solid border-neutral-500 object-cover object-center lg:h-6 lg:w-6"
                />
                <span>TR</span>
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </article>
  );
}
