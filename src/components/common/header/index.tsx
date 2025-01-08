import React from "react";
import Navbar from "./Navbar";
import Language from "./Language";
import AuthLink from "./AuthLink";
import MobilNav from "./MobilNav";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fluid gridContainer relative z-10 bg-black/25 py-3">
      <main className="flex items-center justify-between overflow-hidden py-3">
        <Logo />
        <Navbar />
        <section className="flex items-center justify-between gap-8 overflow-hidden lg:gap-0">
          <Language />
          <AuthLink />
          <MobilNav />
        </section>
      </main>
    </header>
  );
}
