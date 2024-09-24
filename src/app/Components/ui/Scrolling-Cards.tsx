import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

// Define the props interface
interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode; // This should not be optional as children are usually required
  vertical?: boolean;
  repeat?: number;
}

// Fixed Marquee component
export default function Marquee({
  className,
  reverse = false, // Default value set to false for reverse
  pauseOnHover = false, // Default value remains false
  children,
  vertical = false, // Default value remains false
  repeat = 4, // Default value remains 4
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props} // Spread any additional HTML attributes on the container div
      className={cn(
        "group flex items-center justify-center overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
