import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavItemType } from "./Navbar";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function MobilNav() {
  const t = useTranslations("Header");

  const navItems: NavItemType[] = [
    { path: "/", title: t("nav.home") },
    { path: "about", title: t("nav.about") },
    { path: "road-map", title: t("nav.roadmap") },
    { path: "token", title: t("nav.token") },
    { path: "team", title: t("nav.team") },
    { path: "faq", title: t("nav.faq") },
    { path: "blog", title: t("nav.blog") },
    { path: "contact", title: t("nav.contact") },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="flex items-center justify-center border-none bg-transparent outline-none lg:hidden">
          <HiMenuAlt3 className="min-h-7 min-w-7 text-white" />
        </span>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center justify-between space-y-12">
        <SheetHeader>
          <SheetTitle className="text-3xl">StreamVibe</SheetTitle>
        </SheetHeader>
        <main className="w-full basis-3/4">
          <SheetDescription className="flex max-h-min w-full flex-col items-center justify-between gap-10 text-xl">
            {navItems.map((item, index) => (
              <SheetTrigger key={index} asChild>
                <Link
                  href={item.path}
                  className="rounded px-3 py-2 backdrop-blur transition-all hover:bg-black/20"
                >
                  {item.title}
                </Link>
              </SheetTrigger>
            ))}
          </SheetDescription>
        </main>
        <SheetFooter>
          <SheetClose>
            <div className="text-grey-60 flex items-center gap-2 md:gap-[10px] 2xl:gap-[14px]"></div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
