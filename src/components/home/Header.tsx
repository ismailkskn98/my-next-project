import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-3">
      <div
        className={`${styles.titleShadow} px-8 pb-3 pt-4 text-2xl uppercase drop-shadow-xl`}
      >
        ICO pre <span className="text-3xl font-bold">-</span> sale is live
      </div>
      <p>ends in:</p>
    </header>
  );
}
