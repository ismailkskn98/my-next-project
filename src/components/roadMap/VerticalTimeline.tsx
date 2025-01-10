"use client";

import { DollarSign } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MilestoneItem } from ".";

export default function VerticalTimelines({
  milestones,
}: {
  milestones: MilestoneItem[];
}) {
  return (
    <section className="mt-10 block lg:hidden">
      <div className="container mx-auto px-4">
        <VerticalTimeline>
          {milestones.map((milestone, index) => (
            <VerticalTimelineElement
              key={index * Math.random()}
              className="vertical-timeline-element ml-4 bg-transparent"
              contentStyle={{
                boxShadow: "0 3px 0 rgb(var(--primary-rgb))",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(var(--card-rgb))",
              }}
              date={milestone.date}
              iconStyle={{
                background: "rgb(var(--primary-rgb))",
                color: "#fff",
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="vertical-timeline-element-title md: text-lg font-bold text-white">
                  {milestone.title}
                </h3>
                <div className="flex items-center font-semibold text-white/80">
                  <DollarSign className="h-4 w-4" />
                  <span>{milestone.value.replace("$", "")}</span>
                </div>
              </div>
              <p className="mt-2 text-white/70">{milestone.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
