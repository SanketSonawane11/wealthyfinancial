import React from "react";
import { Heading } from "./BlurHeading";
import AboutHero from "./About-Hero";
import OurTeam from "./Team";

function MoreAbout() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Heading heading="Let's Talk Numbers" />
      <AboutHero />
      <OurTeam />
    </div>
  );
}

export default MoreAbout;
