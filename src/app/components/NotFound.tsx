"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import notFound from "../../../public/animation/notFound.json";


export const NotFound: React.FC = () => {

  return (
    <div className="conainer flex flex-col justify-center items-start w-full gap-[100px] px-20 pt-10 pb-96">
      <div className="flex flex-col justify-start items-start  flex-shrink-0 relative gap-6">
        <h2 className=" text-[40px] font-bold text-left text-black">
          The page wasn’t found, let’s go to a better place.
        </h2>
        <div className="flex justify-center items-center gap-2.5 py-1 border-t-0 border-r-0 border-b border-black">
          <Link
            href="/"
            aria-labelledby="Take me home"
            className="text-lg font-bold text-left text-black"
          >
            Take me home
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-full lg:max-w-[625px]  gap-6">
        <Lottie
          animationData={notFound}
          loop={false}
          autoplay={true}
          width={"100px"}
          height={"100px"}
        />
      </div>
    </div>
  );
};
