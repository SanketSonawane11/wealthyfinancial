"use client";
import NextImage from "next/image";
import { cn } from "@/lib/utils";

export function Card({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) {
  return (
    <div className="w-full h-full">
      <div
        className={cn(
          "cursor-pointer rounded-xl overflow-hidden relative card shadow-xl bg-white flex flex-col h-full w-full min-h-[20rem]"
        )}
      >
        {/* Image at the top */}
        <div className="relative w-full overflow-hidden rounded-t-lg flex-none h-48 sm:h-56 md:h-64">
          <NextImage
            src={image}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover transition-transform duration-300 ease-in-out transform group-hover/card:scale-110"
          />
        </div>

        {/* Content area */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <h1 className="font-bold md:min-h-[2rem] text-xl md:text-2xl text-gray-900 mb-2">
            {title}
          </h1>
          <hr />
          <p className="font-medium mt-4 text-sm text-gray-600 flex-1">
            {content}
          </p>
        </div>

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 w-full h-full top-0 left-0 transition-opacity duration-300 group-hover/card:bg-black group-hover/card:opacity-60"></div>
      </div>
    </div>
  );
}
