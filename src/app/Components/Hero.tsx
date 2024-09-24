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
      className="h-[40rem] mt-[4rem] md:mt-[5rem] w-[98%] rounded-xl border-2"
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
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
