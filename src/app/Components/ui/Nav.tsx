"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full h-[4rem] md:h-[5rem] fixed top-0 inset-x-0 border-2 border-transparent dark:border-white/[0.2] dark:bg-white bg-white shadow-none md:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 md:px-10 py-2 mx-0 items-center justify-center space-x-4",
          className
        )}
      >
        <div className="flex w-full text-black items-center justify-between">
          <img src="/Logo.jpg" />
          <div className="flex relative left-[3rem] text-black text-[1rem] items-center font-bold justify-center gap-8">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 transition-all ease-out duration-150 items-center flex space-x-1 dark:hover:text-blue-300 hover:scale-105 hover:text-blue-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:flex items-center justify-center gap-3">
                  {navItem.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex text-[1.1rem] items-center justify-center gap-5">
            <button className="rounded-lg py-2 px-3 font-semibold text-white bg-[#ceb361] transition-all ease-out duration-150 hover:rounded-sm">
              Start Your Jourey
            </button>
          </div>
          <div className="text-[2rem] md:hidden">
            <IoMenu />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
