"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/Images-slider";

export function Hero() {
  const images = [
    "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1718778449026-fc05939d7650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZpbmFuY2lpYWwlMjBhZHZpc29yfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661537628051-216fea94e4c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW52ZXN0bWVudCUyMGZpcm18ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/5834218/pexels-photo-5834218.jpeg?auto=compress&cs=tinysrgb&w=600",
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
            Unlock Your Financial Potential <br /> with Expert Wealth
            Management.
          </h1>
          <h3 className="text-blue-200 my-[1rem] w-[60%] text-[1rem] md:text-[1.5rem]">
            Offering Professional Portfolio Management, Forex Strategies, Fund
            Handling, and Mutual Fund Expertise.
          </h3>
        </motion.p>
        <div className="flex items-center justify-center gap-[1rem] md:gap-[3rem] flex-col md:flex-row">
          <button className="px-4 py-2 backdrop-blur-lg border bg-yellow-300/10 border-yellow-500/20 text-white mx-auto text-center rounded-full relative">
            <span>Get Started Today →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-yellow-500 to-transparent" />
          </button>
          <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            View Services
          </button>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
