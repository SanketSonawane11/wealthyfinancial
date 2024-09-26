"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/Direction-aware";

export function ServiceImage({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const imageUrl = image;
  return (
    <div className="h-[20rem] relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">{title}</p>
      </DirectionAwareHover>
    </div>
  );
}
