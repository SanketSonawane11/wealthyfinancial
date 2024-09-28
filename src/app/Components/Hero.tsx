"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/Images-slider";
// import Link from "next/link";

export function Hero() {
  const images = [
    "/images/jakub-zerdzicki-QZw8l2xO5xw-unsplash.jpg",
    "/images/one.webp",
    "/images/two.webp",
    "/images/three.webp",
    "/images/four.webp",
    // "/images/austin-distel-nGc5RT2HmF0-unsplash.jpg",  I liked this one
  ];
  return (
    <ImagesSlider
      className="h-[42rem] md:h-[40rem] mt-[4rem] md:mt-[5.2rem] w-[98%] rounded-xl"
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold flex items-center justify-center flex-col text-[2rem] md:text-6xl text-center py-4">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-400">
            Welcome to Wealthy Financial Services.
          </h1>
          <h3 className="text-blue-200 my-[1rem] w-[60%] text-[1rem] md:text-[1.5rem]">
            We offer Professional Account Management, Fund Handling, Forex Trading and Mutual Fund Expertise.
          </h3>
        </motion.p>
        <div className="flex items-center justify-center gap-[1rem] md:gap-[3rem] flex-col md:flex-row">
          <button className="px-4 py-2 backdrop-blur-lg border bg-yellow-300/10 border-yellow-500/20 text-white mx-auto text-center rounded-full relative">
            <span>Get Started Today →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-yellow-500 to-transparent" />
          </button>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
