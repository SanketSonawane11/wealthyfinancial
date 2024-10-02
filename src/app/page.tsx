import React from "react";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import Services from "./Components/Services";
import { WhyUs } from "./Components/WhyUs";
import Footer from "./Components/Footer";
import About from "./Components/About";
import MoreAbout from "./Components/MoreAbout";
import ContactForm from "./Components/Contact";
import ToolsAndIdeasSection from "./Components/AboutCta";

function page() {
  return (
    <div className="w-full flex items-center bg-[#ecf7fc] border-2 justify-center flex-col h-fit ">
      <Navbar />
      <Hero />
      <div className="md:p-[5rem] flex items-center justify-center flex-col">
        <About />
        <Services />
        <MoreAbout />
        <WhyUs />
        <ToolsAndIdeasSection />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default page;
