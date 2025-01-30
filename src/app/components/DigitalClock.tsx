"use client";

import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-white rounded-[20px] w-full aspect-[522/239] p-6 ">
      <div className="flex items-center justify-between w-full">
        <p>My Local Time </p>
        <p>MON 12 JAN</p>
      </div>
      <div className="flex justify-between w-full tracking-widest text-textDark text-8xl">
        <span className=" text-start text-inherit w-full h-full ">
          {hours}
        </span>
        <span>:</span>
        <span className=" text-start text-inherit w-full h-full ">
          {minutes}
        </span>
        <span>:</span>
        <span className=" text-start text-inherit w-full h-full ">
          {seconds}
        </span>
      </div>
      <div className="flex items-center justify-between w-full text-green_500 ">
        <p className="text-4xl font-bold">CET</p>
        <p className="text-4xl font-bold">WARSAW</p>
      </div>
    </div>
  );
}
// font-weight: 800;
// font-size: 40px;
// color: var(--color-green-500-accent);