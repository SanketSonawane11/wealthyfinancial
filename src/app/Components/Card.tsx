"use client";
import { cn } from "@/lib/utils";
// import Link from "next/link";

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
    // <div className="max-w-xs my-[2rem] w-full group/card">
    //   <div
    //     className={cn(
    //       "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4"
    //     )}
    //   >
    //     <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
    //     <div className="text content">
    //       <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
    //         {title}
    //       </h1>
    //       <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
    //         {content}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-xs my-[2rem] w-full">
      <div
        className={cn(
          "cursor-pointer rounded-xl h-fit px-[0rem] py-[0rem] md:h-[28rem] overflow-hidden relative card shadow-xl max-w-sm mx-auto bg-white flex flex-col"
        )}
      >
        {/* Image at the top */}
        <div className="min-h-[50%] rounded-lg w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover/card:scale-110"
          />
        </div>

        {/* Content area */}
        <div className="p-4">
          <h1 className="font-bold md:min-h-[3.9rem] text-xl md:text-2xl text-gray-900 mb-2">
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

{
  /* <div className="w-[90%] md:w-[17rem] rounded-xl mx-auto bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-out">
  <img
    className="w-full h-48 object-cover"
    src="/image/one.jpg"
    alt="Service"
  />
  <div className="p-6">

    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

    <p className="text-gray-600 text-base leading-relaxed">{content}</p>
  </div>
</div>; */
}
