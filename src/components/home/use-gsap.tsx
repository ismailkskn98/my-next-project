"use client";

import { useRef } from "react";
import gsap from "gsap";

interface UseGsapOptions {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  duration?: number;
  ease?: string;
}

export const useGsap = (options: UseGsapOptions = {}) => {
  const elementRef = useRef<HTMLImageElement>(null);

  const animate = (mouseX: number, mouseY: number) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (mouseX - centerX) / 50;
    const distanceY = (mouseY - centerY) / 50;

    gsap.to(elementRef.current, {
      x: distanceX * (options.x ?? 1),
      y: distanceY * (options.y ?? 1),
      rotation: distanceX * (options.rotation ?? 0.5),
      scale:
        1 +
        Math.min(Math.abs(distanceX), Math.abs(distanceY)) *
          (options.scale ?? 0.01),
      duration: options.duration ?? 0.3,
      ease: options.ease ?? "power1.out",
    });
  };

  const reset = () => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: options.duration ?? 0.3,
      ease: options.ease ?? "power1.out",
    });
  };

  return { elementRef, animate, reset };
};
