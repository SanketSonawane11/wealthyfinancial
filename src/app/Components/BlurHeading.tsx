import { cn } from "@/lib/utils";
import BlurIn from "./ui/Text-Blur";

export const Heading = ({ heading, className }: { heading: string ; className?: string }) => {
  return (
    <BlurIn
      word={heading}
      className={cn(
        "text-[2.5rem] md:text-[3.5rem] font-bold text-black dark:text-white",
        className
      )}
    />
  );
};
