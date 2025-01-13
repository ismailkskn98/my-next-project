"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavItemType } from "./Navbar";
import { useTranslations } from "next-intl";
import { Link, NavPaths, usePathname } from "@/i18n/routing";
import classNames from "classnames";
import Language from "./Language";
import Image from "next/image";

export default function MobilNav() {
  const t = useTranslations("Header");
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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="flex items-center justify-center border-none bg-transparent outline-none lg:hidden">
          <HiMenuAlt3 className="min-h-8 min-w-8 text-white" />
        </span>
      </SheetTrigger>
      <SheetContent className="grid grid-cols-1 grid-rows-6 place-content-center place-items-center gap-0 border-logoGold bg-black/60 pb-5 pt-12 text-white backdrop-blur-sm">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center gap-2">
            <Image
              src={"/images/logo.png"}
              width={60}
              height={50}
              alt="c1coin logo"
              className="h-full max-h-[41] w-full max-w-[51px]"
            />
            <span className="text-nowrap font-raleway text-[28px] text-logoGold">
              C1 COIN
            </span>
          </SheetTitle>
        </SheetHeader>
        <main className="row-span-4">
          <SheetDescription className="flex max-h-min w-full flex-col items-center justify-between gap-6 text-lg">
            {navItems.map((item, index) => {
              return (
                <SheetTrigger key={index} asChild>
                  <Link
                    href={item.path}
                    className={classNames("", {
                      "rounded-sm bg-logoGold px-3 py-1 text-black backdrop-blur-sm hover:text-black":
                        pathname === item.path,
                      "text-white hover:text-logoGold": pathname !== item.path,
                    })}
                  >
                    {item.title}
                  </Link>
                </SheetTrigger>
              );
            })}
          </SheetDescription>
        </main>
        <SheetFooter>
          <div className="text-grey-60 flex items-center justify-center gap-2 md:gap-[10px] 2xl:gap-[14px]">
            <Language isAuth={false} />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
