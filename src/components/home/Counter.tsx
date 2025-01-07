"use client";
import { useState } from "react";

interface timeItems {
  title: string;
  value: string;
}

export default function Counter() {
  const [timeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const timeItems: timeItems[] = [
    { title: "Days", value: timeLeft.days },
    { title: "Hours", value: timeLeft.hours },
    { title: "Minutes", value: timeLeft.minutes },
    { title: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-7">
      {timeItems.map((item, index) => (
        <div key={index} className="text-center">
          <div className="relative text-[38px] font-bold sm:text-6xl">
            {item.value}
            {index + 1 !== timeItems.length && (
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 font-bold text-gray-800 sm:-right-6">
                :
              </span>
            )}
          </div>
          <div className="mt-2 text-xs uppercase sm:text-sm">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
