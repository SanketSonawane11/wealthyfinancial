import React from "react";
import { Navbar } from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutHero from "../Components/About-Hero";
import Timeline from "../Components/Timeline";
import OurTeam from "../Components/Team";
import ToolsAndIdeasSection from "../Components/AboutCta";
import BusinessSection from "../Components/Mission";

const cardsData = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO",
    content: (
      <div>
        <p>
          John is the visionary leader of the company, driving growth and
          innovation.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "CTO",
    content: (
      <div>
        <p>
          Jane oversees the technological advancements and product development.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Alice Johnson",
    designation: "CFO",
    content: (
      <div>
        <p>
          Alice manages the financial strategy and oversees the budgeting
          process.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    name: "Bob Brown",
    designation: "CMO",
    content: (
      <div>
        <p>
          Bob leads marketing efforts and drives brand awareness strategies.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    name: "Emily Davis",
    designation: "Product Manager",
    content: (
      <div>
        <p>
          Emily coordinates product launches and ensures alignment with market
          needs.
        </p>
      </div>
    ),
  },
];
const timelineData = [
  {
    title: "Project Kickoff",
    content: (
      <p>
        We held our initial project meeting to discuss the scope and
        deliverables.
      </p>
    ),
  },
  {
    title: "Phase 1 Completion",
    content: (
      <p>
        Phase 1, focused on research and planning, was successfully completed.
      </p>
    ),
  },
  {
    title: "Prototype Development",
    content: (
      <p>
        We developed a functional prototype of the system to test the core
        features.
      </p>
    ),
  },
  {
    title: "User Testing",
    content: (
      <p>
        Completed user testing with positive feedback. Adjustments were made
        based on user suggestions.
      </p>
    ),
  },
  {
    title: "Final Launch",
    content: (
      <p>The product was officially launched and is now live for all users.</p>
    ),
  },
];

export default function Page() {
  return (
    <div className="">
      <Navbar />
      <div className="my-20 ">
        <div className="mb-10 w-full">
          <AboutHero />
        </div>
        <BusinessSection />
        <Timeline data={timelineData} />
        <OurTeam />
        <ToolsAndIdeasSection />
      </div>

      <Footer />
    </div>
  );
}
