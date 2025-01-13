"use client";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export default function LoginAnimate() {
  const animationContainer = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/login-animate.json",
      });
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <article
      ref={animationContainer}
      className="hidden h-full w-full flex-1 bg-[#EEF2F5] bg-cover bg-center bg-no-repeat px-6 py-8 lg:block"
    ></article>
  );
}
