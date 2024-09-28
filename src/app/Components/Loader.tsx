"use client";

import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-32 h-32">
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-yellow-400 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-yellow-400 to-blue-400 opacity-70 shadow-[0_0_25px_rgba(255,255,0,0.7)]"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.1, 0.8] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
