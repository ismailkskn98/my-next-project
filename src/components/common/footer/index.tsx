import React from "react";
import Copyright from "./Copyright";
import FooterMain from "./FooterMain";

export default function Footer() {
  return (
    <footer className="fluid gridContainer relative z-10 mt-3 bg-black/80 bg-footerBgDeneme bg-cover bg-center bg-no-repeat pt-10 text-white sm:pt-16 md:mt-0 md:bg-black/30 md:pt-20">
      <FooterMain />
      <Copyright />
    </footer>
  );
}
