import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import Counter from "./Counter";

export default function Card() {
  return (
    <article className="flex w-full flex-col items-center gap-6 px-4 py-6 text-white sm:gap-10 sm:px-8 sm:py-10">
      <Header />
      <Counter />
      <div className="text-center text-xs text-muted-foreground sm:text-sm">
        The clock has stopped!
      </div>
      <ProgressBar />
      <Button className="bebas-neue-regular group flex w-full items-center justify-center gap-5 border-none bg-transparent text-3xl font-bold tracking-wider shadow-none outline-none hover:bg-transparent sm:gap-10 sm:text-5xl">
        <span className="bg-gradient-to-r from-[#FEC057] to-[#ECB165] bg-clip-text text-transparent drop-shadow-lg transition-all duration-300 group-hover:text-black">
          BUY TOKENS
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEC057] shadow-xl transition-all duration-300 group-hover:bg-white sm:h-12 sm:w-12">
          <FaPlay className="min-h-5 min-w-5 text-white transition-all duration-300 group-hover:text-black sm:min-h-6 sm:min-w-6" />
        </span>
      </Button>
    </article>
  );
}
