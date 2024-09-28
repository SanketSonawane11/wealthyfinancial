import React from "react";
import { Navbar } from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutHero from "../Components/About-Hero";
// import Timeline from "../Components/Timeline";
import OurTeam from "../Components/Team";
import ToolsAndIdeasSection from "../Components/AboutCta";
// import BusinessSection from "../Components/Mission";

// const timelineData = [
//   {
//     title: "Project Kickoff",
//     content: (
//       <p>
//         We held our initial project meeting to discuss the scope and
//         deliverables.
//       </p>
//     ),
//   },
//   {
//     title: "Phase 1 Completion",
//     content: (
//       <p>
//         Phase 1, focused on research and planning, was successfully completed.
//       </p>
//     ),
//   },
//   {
//     title: "Prototype Development",
//     content: (
//       <p>
//         We developed a functional prototype of the system to test the core
//         features.
//       </p>
//     ),
//   },
//   {
//     title: "User Testing",
//     content: (
//       <p>
//         Completed user testing with positive feedback. Adjustments were made
//         based on user suggestions.
//       </p>
//     ),
//   },
//   {
//     title: "Final Launch",
//     content: (
//       <p>The product was officially launched and is now live for all users.</p>
//     ),
//   },
// ];

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="my-20 ">
        {/* <BusinessSection /> */}
        <div className="mb-10 w-full">
          <AboutHero />
        </div>
        {/* <Timeline data={timelineData} /> */}
        <OurTeam />
        <ToolsAndIdeasSection />
      </div>
      <Footer />
    </div>
  );
}
