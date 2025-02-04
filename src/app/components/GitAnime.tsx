"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import githubAnime from "../../../public/animation/github2.json"

export const GitAnime = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent SSR issues

  return <Lottie animationData={githubAnime} loop={false} autoplay={true} width={"100px"} height={"100px"} />;
};
