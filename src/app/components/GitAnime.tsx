"use client";

import React from "react";
import Lottie from "lottie-react";
import githubAnime from "../../../public/animation/github2.json"

export const GitAnime = () => {

  return <Lottie animationData={githubAnime} loop={false} autoplay={true} />;};
