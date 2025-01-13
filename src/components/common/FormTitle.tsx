import React from "react";

export default function FormTitle({ title }: { title: string }) {
  return (
    <div className="w-full rounded-3xl">
      <h2 className="text-nowrap text-center font-raleway text-3xl font-extrabold capitalize text-black/80 mobileL:text-4xl sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
