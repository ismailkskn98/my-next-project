import React from "react";
import Navbar from "./Navbar";
import Language from "./Language";
import AuthLink from "./AuthLink";
import MobilNav from "./MobilNav";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fluid gridContainer relative z-10 space-y-3 bg-gradient-to-b from-black/100 pb-2 sm:from-black/80">
      <section className="fluid gridContainer span-row-3 w-full bg-black/60 px-1 pb-2 pt-3 backdrop-blur-sm lg:hidden">
        <article className="flex w-full items-center justify-end gap-2">
          <Language isAuth={false} />
          <AuthLink />
        </article>
      </section>
      <main className="flex items-center justify-between overflow-hidden py-4">
        <Logo />
        <Navbar />
        <section className="flex items-center justify-between gap-8 overflow-hidden lg:gap-0">
          <div className="hidden items-center lg:flex">
            <Language isAuth={false} />
            <AuthLink />
          </div>
          <MobilNav />
        </section>
      </main>
    </header>
  );
}
