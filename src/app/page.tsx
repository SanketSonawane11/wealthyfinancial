import React from "react";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import Services from "./Components/Services";

function page() {
  return (
    <div className="w-full flex items-center justify-center flex-col h-fit ">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default page;
