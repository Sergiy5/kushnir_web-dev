"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { nanoid } from "nanoid";

export default function DigitalClock() {
  const [time, setTime] = useState< Date | null >( null  );
  const formattedDate = format(time || new Date(), "EEE dd MMM").toUpperCase();
  useEffect(() => {

      setTime(new Date())
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time?.getHours().toString().padStart(2, "0");
  const minutes = time?.getMinutes().toString().padStart(2, "0");
  const seconds = time?.getSeconds().toString().padStart(2, "0");
  
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-white rounded-[20px] w-[525px] h-[258px] p-6 ">
      <div className="flex items-center justify-between w-full">
        <p className="font-bold">My Local Time </p>
        <p className="text-textGrey uppercase">{formattedDate}</p>
      </div>
      <div className="flex justify-center w-full font-advanced-pixel-lcd text-textDark text-5xl h-full">
        <span
          key={nanoid()}
          className="relative flex items-center justify-center text-gray-100"
        >
          88
          <span className="absolute text-textDark top-[25px] left-0.6">
            {hours}
          </span>
        </span>
        <span key={nanoid()} className="flex items-center w-full">
          :
        </span>
        <span
          key={nanoid()}
          className="relative flex items-center justify-center text-gray-100 w-full min-w-[115px] "
        >
          88
          <span className="absolute text-textDark top-[25px] left-0.5">
            {minutes}
          </span>
        </span>
        <span key={nanoid()} className="flex items-center w-full text-inherit">
          :
        </span>
        <span
          key={nanoid()}
          className="relative flex items-center justify-center text-gray-100 w-full min-w-[115px] "
        >
          88
          <span className="absolute text-textDark top-[25px] left-0.5">
            {seconds}
          </span>
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