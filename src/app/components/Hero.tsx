"use client";

import { GitAnime } from "./GitAnime";
import { Button } from "./ui/Button";

export const Hero: React.FC = () => {

  return (
    <main className="flex justify-start items-start flex-col gap-[54px] w-full h-[560px]">
      <div className="container flex flex-col gap-14">
        <h1 className="responsive-heading text-[104px] font-bold text-left leading-[114px] uppercase text-[black]">
          Full stack Developer serhii kushnir
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between items-start gap-[46px] max-w-[540px] w-full">
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
          <div className="max-w-[540px] w-full">
            <GitAnime />
          </div>
          {/* Animation end */}
        </div>
      </div>
    </main>
  );
};
