"use client";

import { motion } from "motion/react"
import { MainLogo } from "./MainLogo";
import { LinkBtn } from "./ui/LinkBtn";

export const Footer: React.FC = () => {
  return (
    <div className="block bg-bgFooter text-textFooter w-full">
      <div className=" flex flex-col justify-between gap-6 md:gap-10 mx-auto py-5 max-w-[1440px] w-full px-4 md:px-10 lg:px-20 ">
        <div className="flex flex-col md:flex-row justify-between gap-10 items-center w-full">
          <MainLogo className="text-textLight" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
            <p className="text-inherit">Projects</p>
            <p className="text-inherit">Services</p>
            <p className="text-inherit">GitHub</p>

            <LinkBtn
              href="/cv/Serhii_Kushnir_Frontend_Developer.pdf"
              ariaLabel="Download CV"
              clasName="downloadLinkBtn text-textDark"
            >
              Open CV
            </LinkBtn>
          </div>
        </div>

        <motion.h2
          // initial={{ x: 0 }}
          // animate={{ x: "100%" }}
          // transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          className="font-bold responsive-heading-footer text-center lg:text-start uppercase text-white"
        >
          Full stack Developer{" "}
        </motion.h2>

        <div className="flex flex-col items-center justify-center w-full">
          {/* Line */}
          <div className="w-full h-[0.5px] bg-grey_500 mb-6"></div>

          <div className="flex flex-col md:flex-row items-center justify-between text-grey_400 w-64 md:px-0 sm:w-full">
            <p className="text-inherit text-center ">
              ©Copyright Serhii Kushnir 2025. All Rights Reserved
            </p>
            <p className="text-inherit">Legal Info: Terms of Use</p>
          </div>
        </div>
      </div>
    </div>
  );
};
