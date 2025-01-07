"use client";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export default function ProgressBar() {
  const [progress] = useState<number>(30);

  return (
    <div className="w-full space-y-3 sm:space-y-4">
      <div className="flex justify-between text-xs sm:text-sm">
        <span className="relative after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:text-white after:content-['|'] sm:after:-bottom-4">
          Pre-Sale
        </span>
        <span className="relative after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:text-white after:content-['|'] sm:after:-bottom-4">
          Soft Cap
        </span>
        <span className="relative after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:text-white after:content-['|'] sm:after:-bottom-4">
          Bonus
        </span>
      </div>
      <Progress value={progress} className="h-1 sm:h-2" />
      <div className="flex justify-between text-xs sm:text-sm">
        <span>0% target raised</span>
        <span>1+</span>
      </div>
    </div>
  );
}
