import React from "react";
import Copyright from "./Copyright";
import FooterMain from "./FooterMain";

export default function Footer() {
  return (
    <footer className="fluid gridContainer relative z-10 mt-3 bg-black/80 bg-footerBgDeneme bg-cover bg-center bg-no-repeat pt-20 text-white md:mt-0 md:bg-black/30">
      <FooterMain />
      <Copyright />
    </footer>
  );
}
