import React from "react";
import Copyright from "./Copyright";
import FooterMain from "./FooterMain";

export default function Footer() {
  return (
    <footer className="fluid gridContainer relative z-10 bg-black/25 bg-footerBg pt-20 text-white">
      <FooterMain />
      <Copyright />
    </footer>
  );
}
