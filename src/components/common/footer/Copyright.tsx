import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavPaths } from "@/i18n/routing";

export default function Copyright() {
  return (
    <section className="fluid gridContainer flex items-center justify-center bg-black/40 py-2">
      <article className="row-start-1 row-end-4 flex min-h-10 flex-col items-center justify-center gap-3 text-white sm:flex-row">
        <div className="flex items-center justify-center gap-1 text-white/50">
          © All rights reserved. Made with
          <span>
            <FaRegHeart />
          </span>
        </div>
        <Link
          href={NavPaths.HOME}
          className="decoration-logoGold text-white/50 underline underline-offset-4 transition-all duration-200 hover:text-white"
        >
          by C1Coin
        </Link>
      </article>
    </section>
  );
}
