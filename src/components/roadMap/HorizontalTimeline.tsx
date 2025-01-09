"use client";

import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { MilestoneItem } from ".";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalTimeline({
  milestones,
}: {
  milestones: MilestoneItem[];
}) {
  const horizontalTimelineContainerRef = useRef<HTMLDivElement>(null);
  console.log(horizontalTimelineContainerRef.current);
  useGSAP(
    () => {
      gsap.from(".horizontal-timeline-item", {
        x: 300,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
        scrollTrigger: {
          trigger: horizontalTimelineContainerRef.current,
          start: "top 70%",
          end: "bottom center",
          // scrub: 1,
        },
      });
    },
    { scope: horizontalTimelineContainerRef },
  );

  return (
    <div
      ref={horizontalTimelineContainerRef}
      className="mx-auto hidden w-full py-16 lg:block"
    >
      <div className="relative w-full">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-black/50" />

        <div className="relative grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-6">
          {milestones.slice(0, 6).map((item, index) => (
            <div
              key={index * Math.random()}
              className={cn(
                "horizontal-timeline-item group relative lg:w-44 xl:w-56",
                index % 2 === 0 ? "md:pb-60" : "md:pt-60",
              )}
            >
              <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full bg-primary md:top-[calc(50%-0.5rem)]">
                <div className="2xl: absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white" />
              </div>

              <div
                className={cn(
                  "absolute left-1/2 w-0.5 bg-black/50",
                  index % 2 === 0 ? "bottom-[50%] h-5 md:h-5" : "top-[50%] h-5",
                )}
              />

              <Card className="relative min-h-[192px] transform border-none bg-black/50 text-white/90 transition-transform duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <time className="mb-2 block text-sm">{item.date}</time>
                  <h3 className="mb-2 font-raleway font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
