import React from "react";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";

function page() {
  return (
    <div className="w-full flex items-center justify-center flex-col h-fit ">
      <Navbar />
      <Hero />
    </div>
  );
}

export default page;
