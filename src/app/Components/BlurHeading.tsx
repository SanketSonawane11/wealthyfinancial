import BlurIn from "./ui/Text-Blur";

export const Heading = ({ heading }: { heading: string }) => {
  return (
    <BlurIn
      word={heading}
      className="text-[2.5rem] md:text-[3.5rem] font-bold text-black dark:text-white"
    />
  );
};
