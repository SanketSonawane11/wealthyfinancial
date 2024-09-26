import React from "react";
import { Navbar } from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Heading } from "../Components/BlurHeading";
import { ServiceCat } from "../Components/Service-Catalogue";

function page() {
  return (
    <div className="w-full flex items-center justify-center flex-col h-fit">
      <Navbar />
      <div className="px-[2rem] md:px-[5rem] flex items-center justify-center flex-col">
        <div className="w-[80%] mt-[5rem] h-fit py-11">
          <Heading heading="Comprehensive Financial Services Tailored to Your Needs" />
        </div>
        <ServiceCat />
      </div>
      <Footer />
    </div>
  );
}

export default page;
