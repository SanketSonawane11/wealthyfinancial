import React from "react";
import { Heading } from "./BlurHeading";

function About() {
  return (
    <div className="w-full text-center my-[3rem] md:my-[2rem]">
      <Heading heading="About Us" />
      <div className="text-[1.5rem]">Content</div>
    </div>
  );
}

export default About;
