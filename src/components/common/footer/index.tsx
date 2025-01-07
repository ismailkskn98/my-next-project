import React from "react";
import Copyright from "./Copyright";
import FooterMain from "./FooterMain";

export default function Footer() {
  return (
    <footer className="fluid gridContainer bg-footerBg relative pt-20">
      <div className="fluid absolute inset-x-0 -top-[10px] h-5 bg-white/50"></div>
      <FooterMain />
      <Copyright />
    </footer>
  );
}
