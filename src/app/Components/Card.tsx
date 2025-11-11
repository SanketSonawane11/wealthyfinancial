"use client";
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
    <div className="w-full my-8">
      <div
        className={cn(
          "cursor-pointer rounded-xl overflow-hidden relative card shadow-xl bg-white flex flex-col h-full w-full"
        )}
      >
        {/* Image at the top */}
        <div className="w-full overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover/card:scale-110"
          />
        </div>

        {/* Content area */}
        <div className="p-4">
          <h1 className="font-bold md:min-h-[2rem] text-xl md:text-2xl text-gray-900 mb-2">
            {title}
          </h1>
          <hr />
          <p className="font-medium mt-[1rem] text-sm text-gray-600">
            {content}
          </p>
        </div>

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 w-full h-full top-0 left-0 transition-opacity duration-300 group-hover/card:bg-black group-hover/card:opacity-60"></div>
      </div>
    </div>
  );
}
