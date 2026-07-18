import React from "react";
import { Heading } from "./BlurHeading";
import AboutHero from "./About-Hero";
import OurTeam from "./Team";

function MoreAbout() {
  return (
    <div className="w-full my-[5rem] flex items-center justify-center flex-col">
      <Heading heading="Let's Talk Numbers" />
      <AboutHero />
    </div>
  );
}

export default MoreAbout;
