import React from "react";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import Services from "./Components/Services";
import { WhyUs } from "./Components/WhyUs";
import Footer from "./Components/Footer";
import { Reviews } from "./Components/Reviews";

function page() {
  return (
    <div className="w-full flex items-center justify-center flex-col h-fit ">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Reviews />
      <Footer />
    </div>
  );
}

export default page;
