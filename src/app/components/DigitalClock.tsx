"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());
const formattedDate = format(time, "EEE dd MMM").toUpperCase();
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
        <p className="font-bold">My Local Time </p>
        <p className="text-textGrey uppercase">{formattedDate}</p>
      </div>
      <div className="flex justify-end w-full tracking-[0.1em] text-textDark text-8xl">
        <span className="flex justify-center text-inherit w-full min-w-[105px] ">
          {hours}
        </span>
        <span className="text-center w-full text-inherit">:</span>
        <span className="flex justify-center text-inherit w-full min-w-[105px] ">
          {minutes}
        </span>
        <span className="text-center w-full text-inherit">:</span>
        <span className="flex justify-center text-inherit w-full min-w-[105px] ">
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