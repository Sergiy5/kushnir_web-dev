"use client";

import { Button } from "./ui/Button";
import dynamic from "next/dynamic";

const GitAnimeDynamic = dynamic(
  () => import("./GitAnime").then((module) => ({ default: module.GitAnime })),
  {
    ssr: false,
  }
);
export const Hero: React.FC = () => {

  return (
    <main className="flex justify-start items-start flex-col gap-[54px] w-full lg:h-[560px]">
      <div className="container flex flex-col gap-14">
        <h1 className="responsive-heading text-[104px] font-bold text-left leading-[114px] uppercase text-[black]">
          Full stack Developer serhii kushnir
        </h1>
        <div className="flex flex-col items-end lg:flex-row justify-between gap-8">
          <div className="flex flex-col justify-between items-start gap-[46px] lg:max-w-[540px] w-full">
            <p className=" text-lg font-bold leading-5 text-[black]">
              &lt;React TS Next.js Node.js Tailwind CSS-in-JS&gt;
            </p>
            <p className="text-textDark">
              A full-stack developer focused on creating scalable, efficient
              solutions. With an engineering background and a structured
              problem-solving approach, I contribute effectively to both team
              and individual projects.
            </p>
            <Button>Download CV</Button>
          </div>
          {/* Animation start */}
          <div className="flex items-end w-full lg:max-w-[540px] ">
            <GitAnimeDynamic />
          </div>
          {/* Animation end */}
        </div>
      </div>
    </main>
  );
};
