"use client";

import Lottie from "lottie-react";
import githubAnime from "../../../public/animation/github2.json";

export const GitAnime = () => {
  const date = new Date();
  const formatted = date.toLocaleDateString("en-US", { month: "short", year: "2-digit" });

  return (
    <div className="relative">
      <Lottie
        animationData={githubAnime}
        loop={false}
        autoplay={true}
        width={"100px"}
        height={"100px"}
      />
      <div className="absolute inset-x-0 flex items-center justify-between bg-white h-8 bottom-0 rounded-b-3xl px-4">
        <p>Feb 23</p>
        <p>{formatted}</p>
      </div>
    </div>
  );
};
