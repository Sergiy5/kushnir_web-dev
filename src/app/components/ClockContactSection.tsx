"use client";

import Link from "next/link";
import { Icon } from "./ui/Icon";
import { contacts } from "../content";
import { lazy } from "react";

const DigitalClockDynamic = lazy(() => import("../components/DigitalClock"));  

export const ClockContactsSection: React.FC = () => {
  
  return (
    <section id="contacts" className="container flex flex-col gap-10">
      <h2>Let’s connect</h2>

      <div className=" flex flex-col-reverse lg:flex-row justify-between items-start gap-10">
        <div className="flex justify-start items-center w-full xl:w-1/2">
          <DigitalClockDynamic />
        </div>
        <div className=" flex flex-col justify-between items-center gap-10 w-full xl:w-1/2 ">
          <p>
            Thank you for stopping by! I’m always excited to explore new
            opportunities and collaborations. Let’s connect through email,
            phone, LinkedIn, or GitHub—I’d love to hear from you!
          </p>
          <ul className="flex flex-col md:flex-row flex-wrap justify-start lg:justify-between items-start gap-4 lg:gap-2 w-full">
            {contacts.map((contact, index) => {
              return (
                <li key={index} className="flex flex-col items-start gap-1">
                  <Link
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-labelledby="Link to contact"
                    className="group flex flex-col items-start font-bold gap-2 cursor-pointer transition-all duration- text-neutral-700 hover:text-black"
                  >
                    {contact.text}
                    <Icon
                      id="icon-arrow-up-right"
                      width={12}
                      height={12}
                      className="text-neutral-700 group-hover:text-black"
                    />
                  </Link>
                  <p className="">{contact.service}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
