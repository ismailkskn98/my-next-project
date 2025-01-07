import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2 sm:gap-3">
      <div
        className={`${styles.titleShadow} font-raleway px-3 pb-2 pt-3 text-xl font-extrabold uppercase drop-shadow-xl sm:px-5 sm:pb-3 sm:pt-4 sm:text-2xl xl:px-8 xl:text-3xl`}
      >
        ICO pre
        <span className="">{" - "}</span>
        sale is live
      </div>
      <p className="text-xs sm:text-sm">ends in:</p>
    </header>
  );
}
