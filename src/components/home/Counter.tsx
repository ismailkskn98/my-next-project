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
    <>
      <div className="grid grid-cols-4 gap-7 text-center text-6xl">
        {timeItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="relative font-bold">
              {item.value}
              {index + 1 === timeItems.length ? (
                ""
              ) : (
                <span className="absolute -right-6 -top-1 font-bold text-gray-800">
                  :
                </span>
              )}
            </div>
            <div className="text-lg uppercase">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="text-center text-sm">The clock has stopped!</div>
    </>
  );
}
