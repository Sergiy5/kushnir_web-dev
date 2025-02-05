"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { LinkBtn } from "./ui/LinkBtn";

const GitAnimeDynamic = dynamic(
  () => import("./GitAnime").then((module) => ({ default: module.GitAnime })),
  {
    ssr: false,
  }
);
export const Hero: React.FC = () => {
  return (
    <main className="flex justify-start items-start flex-col gap-[54px] w-full ">
      <div className="container flex flex-col gap-14">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            visualDuration: 0.5,
            bounce: 0.25,
          }}
          className="responsive-heading text-[104px] font-bold text-left leading-[114px] uppercase text-[black]"
        >
          Full stack Developer serhii kushnir
        </motion.h1>
        {/* Content */}
        <div className="flex flex-col items-start lg:flex-row justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            className="flex flex-col justify-between items-start gap-6 lg:max-w-[540px] w-full"
          >
            <p className=" text-lg font-bold leading-5 text-textDark">
              &lt;React TS Next.js Node.js Tailwind CSS-in-JS&gt;
            </p>
            <p className="text-textDark">
              A full-stack developer focused on creating scalable, efficient
              solutions. With an engineering background and a structured
              problem-solving approach, I contribute effectively to both team
              and individual projects.
            </p>
            <LinkBtn
              href="/cv/Serhii_Kushnir_Frontend_Developer.pdf"
              ariaLabel="Download CV"
              clasName="downloadLinkBtn"
            >
              Open CV
            </LinkBtn>
          </motion.div>
          {/* Animation start */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
          >
            <Link
              href={"https://github.com/Sergiy5"}
              rel="noopener noreferrer"
              target="_blank"
              aria-labelledby="Link to GitHub"
              className="flex items-end w-full lg:max-w-[540px] "
            >
              <GitAnimeDynamic />
            </Link>
          </motion.div>
          {/* Animation end */}
        </div>
      </div>
    </main>
  );
};
