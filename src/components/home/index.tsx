import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import Counter from "./Counter";

export default function Home() {
  return (
    <main className="flex items-center justify-between gap-3">
      <article>
        <Image
          alt="c1coin logo"
          src="/images/logo.png"
          width={700}
          height={700}
          quality={100}
          priority
          className="max-h-[650px] animate-bounce"
        />
      </article>
      <article className="flex flex-col items-center gap-10 px-8 py-10">
        <Header />
        <Counter />
        <div className="text-center text-sm text-muted-foreground">
          The clock has stopped!
        </div>
        <ProgressBar />
        <Button className="bebas-neue-regular group flex w-full items-center justify-center gap-10 border-none bg-transparent text-5xl font-bold tracking-wider shadow-none outline-none hover:bg-transparent">
          <span className="bg-gradient-to-r from-[#FEC057] to-[#ECB165] bg-clip-text text-transparent drop-shadow-lg transition-all duration-300 group-hover:text-black">
            BUY TOKENS
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEC057] shadow-xl transition-all duration-300 group-hover:bg-white">
            <FaPlay
              className={`min-h-6 min-w-6 transition-all duration-300 group-hover:text-black`}
            />
          </span>
        </Button>
      </article>
    </main>
  );
}
